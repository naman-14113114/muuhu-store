export function runAfterEngagement(callback: () => void, delay = 120000) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  let hasRun = false;
  const events = ["click", "keydown"] as const;
  const listenerOptions = { once: true, passive: true } as AddEventListenerOptions;

  function cleanupListeners() {
    events.forEach((eventName) => {
      window.removeEventListener(eventName, run, listenerOptions);
    });
  }

  function run(event?: Event) {
    if (event && !event.isTrusted) {
      return;
    }

    if (hasRun) {
      return;
    }

    hasRun = true;
    window.clearTimeout(timer);
    cleanupListeners();
    callback();
  }

  const timer = window.setTimeout(run, delay);

  events.forEach((eventName) => {
    window.addEventListener(eventName, run, listenerOptions);
  });

  return () => {
    window.clearTimeout(timer);
    cleanupListeners();
  };
}
