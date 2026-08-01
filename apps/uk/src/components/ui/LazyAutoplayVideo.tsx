"use client";

import { useEffect, useRef } from "react";

type LazyAutoplayVideoProps = {
  ariaLabel?: string;
  className?: string;
  poster?: string;
  rootMargin?: string;
  src: string;
  type?: string;
};

export function LazyAutoplayVideo({
  ariaLabel,
  className,
  poster,
  rootMargin = "1400px 0px",
  src,
  type = "video/mp4",
}: LazyAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    void rootMargin;

    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.preload = "auto";
    video.load();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      video.play().catch(() => undefined);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [rootMargin, src, type]);

  return (
    <video
      aria-label={ariaLabel}
      autoPlay
      className={["block", className].filter(Boolean).join(" ")}
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
      ref={videoRef}
    >
      <source src={src} type={type} />
    </video>
  );
}
