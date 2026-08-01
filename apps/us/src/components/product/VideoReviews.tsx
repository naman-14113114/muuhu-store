"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { reviewVideos, type ReviewVideo } from "@/data/productSections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { preloadFullVideosAfterFrontend } from "@/lib/mediaPreload";

const NUM_SETS = 2;
const loopedVideos = Array(NUM_SETS).fill(reviewVideos).flat();
const previewVideoPromises = new Map<string, Promise<void>>();

function preparePreviewVideo(video: ReviewVideo) {
  if (typeof window === "undefined") return Promise.resolve();

  const src = video.fallbackSrc ?? video.src;
  const cached = previewVideoPromises.get(src);
  if (cached) return cached;

  const promise = new Promise<void>((resolve) => {
    const preview = document.createElement("video");
    const settle = () => resolve();

    preview.muted = true;
    preview.playsInline = true;
    preview.preload = "auto";
    preview.addEventListener("loadeddata", settle, { once: true });
    preview.addEventListener("error", settle, { once: true });
    preview.src = src;
    preview.load();

    if (preview.readyState >= 2) settle();
  });

  previewVideoPromises.set(src, promise);
  return promise;
}

function ReviewVideoCard({
  index,
  video,
  onClick,
}: {
  index: number;
  video: ReviewVideo;
  onClick: (video: ReviewVideo) => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldPlayRef = useRef(false);
  const primarySrc = video.fallbackSrc ?? video.src;
  const [src, setSrc] = useState(primarySrc);
  const [isHovered, setIsHovered] = useState(false);

  const playWhenReady = useCallback(() => {
    if (!shouldPlayRef.current) return;

    videoRef.current?.play().catch(() => undefined);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
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

        if (entry.isIntersecting) {
          videoEl.play().catch(() => undefined);
        } else {
          videoEl.pause();
        }
      },
      { rootMargin: "1200px 0px", threshold: 0.01 },
    );

    observer.observe(card);

    return () => {
      shouldPlayRef.current = false;
      observer.disconnect();
    };
  }, []);

  return (
    <article
      className="relative aspect-[9/16] w-40 flex-none overflow-hidden rounded-[18px] bg-[var(--ink)] transition hover:-translate-y-1 md:w-52 cursor-pointer group"
      ref={cardRef}
      onClick={() => onClick(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        aria-label={`Muuhu customer video review ${index + 1}`}
        data-muuhu-preview-video
        className="h-full w-full object-cover"
        disablePictureInPicture
        loop
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
        preload="auto"
        ref={videoRef}
        src={src}
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
  const navigationRequestRef = useRef(0);

  const selectedIndex = selectedVideo
    ? reviewVideos.findIndex((video) => video.id === selectedVideo.id)
    : -1;

  const openVideo = useCallback((video: ReviewVideo) => {
    const requestId = navigationRequestRef.current + 1;
    navigationRequestRef.current = requestId;

    void preparePreviewVideo(video).then(() => {
      if (navigationRequestRef.current !== requestId) return;
      setModalSrc(video.fallbackSrc ?? video.src);
      setSelectedVideo(video);
    });
  }, []);
  
  const handlePrev = useCallback(() => {
    if (selectedIndex === -1) return;
    if (selectedIndex > 0) openVideo(reviewVideos[selectedIndex - 1]);
    else openVideo(reviewVideos[reviewVideos.length - 1]);
  }, [openVideo, selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === -1) return;
    if (selectedIndex < reviewVideos.length - 1) openVideo(reviewVideos[selectedIndex + 1]);
    else openVideo(reviewVideos[0]);
  }, [openVideo, selectedIndex]);

  useEffect(() => {
    return preloadFullVideosAfterFrontend(
      reviewVideos.flatMap((video) => (video.fullSrc ? [video.fullSrc] : [])),
    );
  }, []);

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
    <section className="buudy-section bg-[#f6ede2] py-14 md:py-24 overflow-hidden">
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
              Muuhu <span className="buudy-italic text-[var(--gold)]">reviews</span> <span className="font-playfair italic text-[var(--plum)]">&</span> real results
            </>
          }
        />

        <div className="relative mt-7 md:mt-10 mx-auto w-full max-w-[1400px] overflow-hidden pb-4 md:pb-8">
          <div className="flex gap-4 w-max vr-scroll-track">
            {loopedVideos.map((video, index) => (
              <ReviewVideoCard
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
            {selectedVideo.fullSrc && modalSrc !== selectedVideo.fullSrc ? (
              <video
                aria-hidden="true"
                className="pointer-events-none absolute h-px w-px opacity-0"
                muted
                onCanPlay={() =>
                  setModalSrc(selectedVideo.fullSrc ?? selectedVideo.src)
                }
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
