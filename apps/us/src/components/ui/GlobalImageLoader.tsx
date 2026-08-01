"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const loadingAttribute = "data-muuhu-image-loading";
const privatePathPrefixes = [
  "/account-settings",
  "/admin",
  "/auth",
  "/my-profile",
  "/order-confirmation",
  "/order-history",
  "/order-tracking",
  "/sign-in",
  "/sign-up",
];

function isPublicStorefrontPath(pathname: string) {
  return !privatePathPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function hasImageSource(image: HTMLImageElement) {
  return Boolean(
    image.currentSrc ||
      image.getAttribute("src") ||
      image.getAttribute("srcset"),
  );
}

function syncImageLoadingState(image: HTMLImageElement) {
  image.loading = "eager";
  if (image.fetchPriority !== "high") {
    image.fetchPriority = "auto";
  }

  if (!hasImageSource(image) || image.complete) {
    image.removeAttribute(loadingAttribute);
    return;
  }

  image.setAttribute(loadingAttribute, "true");
}

function syncVideoLoadingState(video: HTMLVideoElement) {
  video.preload = "auto";

  if (
    video.readyState === HTMLMediaElement.HAVE_NOTHING &&
    (video.currentSrc || video.src || video.querySelector("source[src]"))
  ) {
    video.load();
  }
}

function syncMediaWithin(node: Node) {
  if (node instanceof HTMLImageElement) {
    syncImageLoadingState(node);
    return;
  }

  if (node instanceof HTMLVideoElement) {
    syncVideoLoadingState(node);
    return;
  }

  if (node instanceof HTMLSourceElement) {
    if (node.parentElement instanceof HTMLVideoElement) {
      syncVideoLoadingState(node.parentElement);
    }
    return;
  }

  if (node instanceof Element) {
    node
      .querySelectorAll<HTMLImageElement>("img")
      .forEach(syncImageLoadingState);
    node
      .querySelectorAll<HTMLVideoElement>("video")
      .forEach(syncVideoLoadingState);
  }
}

export function GlobalImageLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isPublicStorefrontPath(pathname)) {
      return;
    }

    const pendingNodes = new Set<Node>();
    let batchScheduled = false;

    const flushPendingNodes = () => {
      batchScheduled = false;
      pendingNodes.forEach(syncMediaWithin);
      pendingNodes.clear();
    };

    const scheduleNodeSync = (node: Node) => {
      pendingNodes.add(node);
      if (batchScheduled) return;

      batchScheduled = true;
      queueMicrotask(flushPendingNodes);
    };

    const clearLoadingState = (event: Event) => {
      if (event.target instanceof HTMLImageElement) {
        event.target.removeAttribute(loadingAttribute);
      }
    };

    document.addEventListener("load", clearLoadingState, true);
    document.addEventListener("error", clearLoadingState, true);
    Array.from(document.images).forEach(syncImageLoadingState);
    document
      .querySelectorAll<HTMLVideoElement>("video")
      .forEach(syncVideoLoadingState);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes") {
          scheduleNodeSync(record.target);
          continue;
        }

        record.addedNodes.forEach(scheduleNodeSync);
      }
    });

    observer.observe(document.documentElement, {
      attributeFilter: ["src", "srcset"],
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      pendingNodes.clear();
      document.removeEventListener("load", clearLoadingState, true);
      document.removeEventListener("error", clearLoadingState, true);
    };
  }, [pathname]);

  return null;
}
