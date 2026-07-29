"use client";

import { useEffect } from "react";

const loadingAttribute = "data-muuhu-image-loading";

function hasImageSource(image: HTMLImageElement) {
  return Boolean(
    image.currentSrc ||
      image.getAttribute("src") ||
      image.getAttribute("srcset"),
  );
}

function syncImageLoadingState(image: HTMLImageElement) {
  if (!hasImageSource(image) || image.complete) {
    image.removeAttribute(loadingAttribute);
    return;
  }

  image.setAttribute(loadingAttribute, "true");
}

function syncImagesWithin(node: Node) {
  if (node instanceof HTMLImageElement) {
    syncImageLoadingState(node);
    return;
  }

  if (node instanceof Element) {
    node
      .querySelectorAll<HTMLImageElement>("img")
      .forEach(syncImageLoadingState);
  }
}

export function GlobalImageLoader() {
  useEffect(() => {
    const pendingNodes = new Set<Node>();
    let batchScheduled = false;

    const flushPendingNodes = () => {
      batchScheduled = false;
      pendingNodes.forEach(syncImagesWithin);
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
  }, []);

  return null;
}
