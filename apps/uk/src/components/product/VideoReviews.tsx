"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { reviewVideos, type ReviewVideo } from "@/data/productSections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NUM_SETS = 2;
const loopedVideos = Array(NUM_SETS).fill(reviewVideos).flat();
const warmedFullVideos = new Set<string>();
const queuedFullVideos = new Set<string>();
const activeWarmers = new Map<string, HTMLVideoElement>();
const fullVideoQueue: string[] = [];

type NavigatorWithConnection = Navigator & {
  connection?: {
    effectiveType?: string;
    saveData?: boolean;
  };
};

function canWarmFullVideo() {
  if (typeof navigator === "undefined") return false;
  const connection = (navigator as NavigatorWithConnection).connection;
  const effectiveType = connection?.effectiveType?.toLowerCase();

  return (
    !connection?.saveData &&
    effectiveType !== "slow-2g" &&
    effectiveType !== "2g"
  );
}

function drainFullVideoQueue() {
  if (typeof window === "undefined" || !canWarmFullVideo()) return;

  const concurrency = window.matchMedia("(max-width: 767px)").matches ? 1 : 2;
  while (activeWarmers.size < concurrency && fullVideoQueue.length > 0) {
    const src = fullVideoQueue.shift();
    if (!src) break;

    queuedFullVideos.delete(src);
    if (warmedFullVideos.has(src) || activeWarmers.has(src)) continue;

    const warmer = document.createElement("video");
    warmer.muted = true;
    warmer.playsInline = true;
    warmer.preload = "auto";
    warmer.src = src;
    activeWarmers.set(src, warmer);

    const finish = () => {
      warmedFullVideos.add(src);
      activeWarmers.delete(src);
      drainFullVideoQueue();
    };

    warmer.addEventListener("canplay", finish, { once: true });
    warmer.addEventListener("error", finish, { once: true });
    warmer.load();
  }
}

function warmFullVideo(src?: string, immediate = false) {
  if (
    !src ||
    !canWarmFullVideo() ||
    warmedFullVideos.has(src) ||
    activeWarmers.has(src) ||
    queuedFullVideos.has(src)
  ) {
    return;
  }

  queuedFullVideos.add(src);
  if (immediate) fullVideoQueue.unshift(src);
  else fullVideoQueue.push(src);
  drainFullVideoQueue();
}

function ReviewVideoCard({
  allowPreviewLoad,
  index,
  video,
  onClick,
}: {
  allowPreviewLoad: boolean;
  index: number;
  video: ReviewVideo;
  onClick: (video: ReviewVideo) => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldPlayRef = useRef(false);
  const primarySrc = video.fallbackSrc ?? video.src;
  const [src, setSrc] = useState(primarySrc);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const playWhenReady = useCallback(() => {
    if (!shouldPlayRef.current) return;

    videoRef.current?.play().catch(() => undefined);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShouldLoad(true);
    warmFullVideo(video.fullSrc, true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const card = cardRef.current;
    const videoEl = videoRef.current;
    if (!card || !videoEl) return;

    videoEl.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        shouldPlayRef.current = entry.isIntersecting;

        if (entry.isIntersecting && allowPreviewLoad) {
          setShouldLoad(true);
          videoEl.play().catch(() => undefined);
        } else {
          videoEl.pause();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    observer.observe(card);

    return () => {
      shouldPlayRef.current = false;
      observer.disconnect();
    };
  }, [allowPreviewLoad]);

  return (
    <article
      className="relative aspect-[9/16] w-40 flex-none overflow-hidden rounded-[18px] bg-[var(--ink)] transition hover:-translate-y-1 md:w-52 cursor-pointer group"
      ref={cardRef}
      onClick={() => onClick(video)}
      onFocus={() => {
        setShouldLoad(true);
        warmFullVideo(video.fullSrc, true);
      }}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        onClick(video);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => {
        setShouldLoad(true);
        warmFullVideo(video.fullSrc, true);
      }}
      role="button"
      tabIndex={0}
    >
      <video
        aria-label={`Muuhu customer video review ${index + 1}`}
        className="h-full w-full object-cover"
        disablePictureInPicture
        loop
        autoPlay={shouldLoad}
        muted
        onCanPlay={playWhenReady}
        onError={() => {
          if (src !== video.src) {
            setSrc(video.src);
          }
        }}
        onLoadedData={playWhenReady}
        playsInline
        poster={video.poster}
        preload={shouldLoad ? "metadata" : "none"}
        ref={videoRef}
        src={shouldLoad ? src : undefined}
      >
        Your browser does not support the video tag.
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(18,9,20,.48)] to-transparent"
      />
      {/* Play Button Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[rgba(247,241,232,0.85)] text-[var(--plum)] shadow-[0_4px_12px_rgba(58,31,61,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6 ml-1">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </article>
  );
}

export function VideoReviews() {
  const [selectedVideo, setSelectedVideo] = useState<ReviewVideo | null>(null);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [canBackgroundWarm, setCanBackgroundWarm] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const selectedIndex = selectedVideo
    ? reviewVideos.findIndex((video) => video.id === selectedVideo.id)
    : -1;

  const openVideo = useCallback((video: ReviewVideo) => {
    warmFullVideo(video.fullSrc, true);
    setModalSrc(video.fallbackSrc ?? video.src);
    setSelectedVideo(video);
  }, []);
  
  const handlePrev = useCallback(() => {
    if (selectedIndex === -1) return;
    const nextVideo =
      selectedIndex > 0
        ? reviewVideos[selectedIndex - 1]
        : reviewVideos[reviewVideos.length - 1];
    openVideo(nextVideo);
  }, [openVideo, selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === -1) return;
    const nextVideo =
      selectedIndex < reviewVideos.length - 1
        ? reviewVideos[selectedIndex + 1]
        : reviewVideos[0];
    openVideo(nextVideo);
  }, [openVideo, selectedIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px", threshold: 0.01 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const enableBackgroundWarm = () => setCanBackgroundWarm(true);
    const options: AddEventListenerOptions = { once: true, passive: true };

    window.addEventListener("pointerdown", enableBackgroundWarm, options);
    window.addEventListener("keydown", enableBackgroundWarm, { once: true });
    window.addEventListener("scroll", enableBackgroundWarm, options);
    window.addEventListener("touchstart", enableBackgroundWarm, options);

    return () => {
      window.removeEventListener("pointerdown", enableBackgroundWarm);
      window.removeEventListener("keydown", enableBackgroundWarm);
      window.removeEventListener("scroll", enableBackgroundWarm);
      window.removeEventListener("touchstart", enableBackgroundWarm);
    };
  }, []);

  useEffect(() => {
    if (!canBackgroundWarm || !isNearViewport || !canWarmFullVideo()) return;

    const warmAdjacentVideos = () => {
      warmFullVideo(reviewVideos[0]?.fullSrc);
      warmFullVideo(reviewVideos[1]?.fullSrc);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(warmAdjacentVideos, {
        timeout: 2500,
      });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(warmAdjacentVideos, 500);
    return () => globalThis.clearTimeout(timeoutId);
  }, [canBackgroundWarm, isNearViewport]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className={`buudy-section bg-[#f6ede2] py-14 md:py-24 overflow-hidden ${
        selectedVideo ? "muuhu-deferred-modal-open" : ""
      }`}
      ref={sectionRef}
    >
      <style>{`
        @keyframes vr-css-auto-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .vr-scroll-track {
          animation: vr-css-auto-scroll 30s linear infinite;
          will-change: transform;
        }
        .vr-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="buudy-wrap">
        <SectionHeading
          align="center"
          eyebrow="Real Customers"
          title={
            <>
              Muuhu <span className="buudy-italic text-[var(--gold-text)]">reviews</span> <span className="font-playfair italic text-[var(--plum)]">&</span> real results
            </>
          }
        />

        <div className="relative mt-7 md:mt-10 mx-auto w-full max-w-[1400px] overflow-hidden pb-4 md:pb-8">
          <div
            className={`flex w-max gap-4 ${
              isNearViewport ? "vr-scroll-track" : ""
            }`}
          >
            {(isNearViewport ? loopedVideos : reviewVideos).map((video, index) => (
              <ReviewVideoCard
                allowPreviewLoad={isNearViewport}
                index={index}
                key={`${video.id}-${index}`}
                video={video}
                onClick={openVideo}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="relative flex items-center justify-center bg-transparent max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="hidden md:flex absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center rounded-full bg-[var(--cream)]/10 border border-[var(--cream)]/30 text-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--plum)] transition-all duration-300"
              aria-label="Previous video"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              className="absolute -top-12 right-0 md:-right-12 md:top-0 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors cursor-pointer"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              key={`${selectedVideo.id}-${modalSrc}`}
              className="max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-8rem)] max-h-[90vh] rounded-[18px] shadow-2xl"
              src={modalSrc ?? selectedVideo.fallbackSrc ?? selectedVideo.src}
              controls
              autoPlay
              playsInline
              poster={selectedVideo.poster}
            />
            {selectedVideo.fullSrc &&
            modalSrc !== selectedVideo.fullSrc ? (
              <video
                aria-hidden="true"
                className="pointer-events-none absolute h-px w-px opacity-0"
                muted
                onCanPlay={() => setModalSrc(selectedVideo.fullSrc ?? selectedVideo.src)}
                playsInline
                preload="auto"
                src={selectedVideo.fullSrc}
                tabIndex={-1}
              />
            ) : null}

            {/* Right Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="hidden md:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center rounded-full bg-[var(--cream)]/10 border border-[var(--cream)]/30 text-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--plum)] transition-all duration-300"
              aria-label="Next video"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
