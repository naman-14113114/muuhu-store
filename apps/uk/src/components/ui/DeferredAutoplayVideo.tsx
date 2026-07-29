"use client";

import { useEffect, useRef, useState } from "react";

export function DeferredAutoplayVideo({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const timeoutId = globalThis.setTimeout(() => setShouldLoad(true), 0);
      return () => globalThis.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;

    const video = videoRef.current;
    video.load();
    video.play().catch(() => undefined);
  }, [shouldLoad]);

  return (
    <div className="h-full w-full" ref={containerRef}>
      <video
        aria-label="Muuhu AirPro styling demonstration"
        autoPlay={shouldLoad}
        className={className}
        loop
        muted
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        ref={videoRef}
      >
        {shouldLoad ? <source src={src} type="video/webm" /> : null}
      </video>
    </div>
  );
}
