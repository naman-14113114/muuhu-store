"use client";

import { useEffect, useRef } from "react";

export function DeferredAutoplayVideo({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = "auto";
    video.load();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      video.play().catch(() => undefined);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [src]);

  return (
    <div className="h-full w-full">
      <video
        aria-label="Muuhu AirPro styling demonstration"
        autoPlay
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
