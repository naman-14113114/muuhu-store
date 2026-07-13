"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { reviewVideos, type ReviewVideo } from "@/data/productSections";
import { SectionHeading } from "@/components/ui/SectionHeading";

const NUM_SETS = 2;
const loopedVideos = Array(NUM_SETS).fill(reviewVideos).flat();

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
  const [shouldLoad, setShouldLoad] = useState(index < 4);

  const playWhenReady = useCallback(() => {
    if (!shouldPlayRef.current) return;

    videoRef.current?.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const videoEl = videoRef.current;
    if (!card || !videoEl) return;

    videoEl.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        shouldPlayRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setShouldLoad(true);
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
      className="relative aspect-[9/16] w-40 flex-none overflow-hidden rounded-[18px] bg-[var(--ink)] transition hover:-translate-y-1 md:w-52 cursor-pointer"
      ref={cardRef}
      onClick={() => onClick(video)}
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
    </article>
  );
}

export function VideoReviews() {
  const [selectedVideo, setSelectedVideo] = useState<ReviewVideo | null>(null);

  return (
    <section className="buudy-section bg-[#f6ede2] py-14 md:py-24 overflow-hidden">
      <style>{`
        @keyframes vr-css-auto-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
          <div 
            className="flex gap-4 w-max hover:[animation-play-state:paused]"
            style={{ 
              animation: 'vr-css-auto-scroll 33s linear infinite',
              willChange: 'transform' 
            }}
          >
            {loopedVideos.map((video, index) => (
              <ReviewVideoCard
                index={index}
                key={`${video.id}-${index}`}
                video={video}
                onClick={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
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
              className="max-w-full max-h-[90vh] rounded-[18px] shadow-2xl"
              src={selectedVideo.fullSrc || selectedVideo.src}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
