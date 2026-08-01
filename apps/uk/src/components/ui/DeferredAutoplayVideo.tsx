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
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const timeoutId = globalThis.setTimeout(() => setShouldPlay(true), 0);
      return () => globalThis.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldPlay(entry.isIntersecting);
      },
      { rootMargin: "800px 0px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <div className="h-full w-full" ref={containerRef}>
      <video
        aria-label="Muuhu AirPro styling demonstration"
        autoPlay={shouldPlay}
        className={className}
        loop
        muted
        playsInline
        preload="auto"
        ref={videoRef}
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
