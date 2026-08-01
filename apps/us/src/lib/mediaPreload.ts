type NavigatorWithConnection = Navigator & {
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
  };
};

const fullyWarmedVideos = new Set<string>();

function canPreloadFullVideos() {
  if (typeof navigator === "undefined") return false;

  const connection = (navigator as NavigatorWithConnection).connection;
  const effectiveType = connection?.effectiveType?.toLowerCase();

  return (
    !connection?.saveData &&
    effectiveType !== "slow-2g" &&
    effectiveType !== "2g"
  );
}

function waitForMediaElement(
  element: HTMLImageElement | HTMLVideoElement,
  signal: AbortSignal,
) {
  if (
    (element instanceof HTMLImageElement && element.complete) ||
    (element instanceof HTMLVideoElement && element.readyState >= 2)
  ) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const settle = () => {
      element.removeEventListener("load", settle);
      element.removeEventListener("loadeddata", settle);
      element.removeEventListener("error", settle);
      signal.removeEventListener("abort", settle);
      resolve();
    };

    element.addEventListener("load", settle, { once: true });
    element.addEventListener("loadeddata", settle, { once: true });
    element.addEventListener("error", settle, { once: true });
    signal.addEventListener("abort", settle, { once: true });
  });
}

async function waitForFrontendMedia(signal: AbortSignal) {
  const media = [
    ...Array.from(document.images),
    ...Array.from(
      document.querySelectorAll<HTMLVideoElement>(
        "video[data-muuhu-preview-video]",
      ),
    ),
  ];

  let timeoutId: number | undefined;

  try {
    await Promise.race([
      Promise.allSettled(
        media.map((item) => waitForMediaElement(item, signal)),
      ),
      new Promise<void>((resolve) => {
        timeoutId = window.setTimeout(resolve, 12_000);
      }),
    ]);
  } finally {
    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }
  }
}

async function consumeVideo(src: string, signal: AbortSignal) {
  if (fullyWarmedVideos.has(src)) return;

  const response = await fetch(src, {
    cache: "force-cache",
    signal,
  });

  if (!response.ok) return;

  if (!response.body) {
    await response.blob();
  } else {
    const reader = response.body.getReader();
    while (!signal.aborted) {
      const { done } = await reader.read();
      if (done) break;
    }
  }

  if (!signal.aborted) {
    fullyWarmedVideos.add(src);
  }
}

export function preloadFullVideosAfterFrontend(sources: string[]) {
  const controller = new AbortController();
  const uniqueSources = Array.from(new Set(sources.filter(Boolean)));

  void (async () => {
    await waitForFrontendMedia(controller.signal);
    if (controller.signal.aborted || !canPreloadFullVideos()) return;

    const queue = uniqueSources.filter((src) => !fullyWarmedVideos.has(src));
    const concurrency = window.matchMedia("(max-width: 767px)").matches ? 1 : 2;

    const worker = async () => {
      while (!controller.signal.aborted) {
        const src = queue.shift();
        if (!src) return;

        try {
          await consumeVideo(src, controller.signal);
        } catch {
          if (controller.signal.aborted) return;
        }
      }
    };

    await Promise.all(Array.from({ length: concurrency }, worker));
  })();

  return () => controller.abort();
}
