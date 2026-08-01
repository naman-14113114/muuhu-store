"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { transformations } from "@/data/productSections";
import { SectionHeading } from "@/components/ui/SectionHeading";

const NUM_SETS = 3;
const loopedStories = Array(NUM_SETS).fill(transformations).flat();
const storyImagePromises = new Map<string, Promise<void>>();

function preloadStoryImage(src: string) {
  if (typeof window === "undefined") return Promise.resolve();

  const cached = storyImagePromises.get(src);
  if (cached) return cached;

  const promise = new Promise<void>((resolve) => {
    const image = new window.Image();
    let settled = false;

    const settle = () => {
      if (settled) return;
      settled = true;

      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).finally(resolve);
      } else {
        resolve();
      }
    };

    image.decoding = "async";
    image.onload = settle;
    image.onerror = () => resolve();
    image.src = src;

    if (image.complete) settle();
  });

  storyImagePromises.set(src, promise);
  return promise;
}

export function BeforeAfterGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const programmaticScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollingRef = useRef(false);
  const stepRef = useRef(320);
  const setWidthRef = useRef(0);
  const [selectedStory, setSelectedStory] = useState<typeof transformations[0] | null>(null);
  const navigationRequestRef = useRef(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const openStory = useCallback((story: (typeof transformations)[0]) => {
    const requestId = navigationRequestRef.current + 1;
    navigationRequestRef.current = requestId;

    void preloadStoryImage(story.image).then(() => {
      if (navigationRequestRef.current === requestId) {
        setSelectedStory(story);
      }
    });
  }, []);

  const handleNextStory = useCallback(() => {
    if (!selectedStory) return;
    const currentIndex = transformations.findIndex(t => t.id === selectedStory.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % transformations.length;
    openStory(transformations[nextIndex]);
  }, [openStory, selectedStory]);

  const handlePrevStory = useCallback(() => {
    if (!selectedStory) return;
    const currentIndex = transformations.findIndex(t => t.id === selectedStory.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + transformations.length) % transformations.length;
    openStory(transformations[prevIndex]);
  }, [openStory, selectedStory]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextStory();
    } else if (isRightSwipe) {
      handlePrevStory();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getStep = useCallback(() => {
    return stepRef.current;
  }, []);

  const getSetWidth = useCallback(() => {
    return setWidthRef.current;
  }, []);

  const stopAutoScroll = useCallback(() => {
    setUserInteracted(true);
    isAutoScrollingRef.current = false;
    if (programmaticScrollTimeoutRef.current) {
      clearTimeout(programmaticScrollTimeoutRef.current);
      programmaticScrollTimeoutRef.current = null;
    }
  }, []);

  const customSmoothScroll = useCallback((track: HTMLDivElement, distance: number) => {
    isAutoScrollingRef.current = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollBy({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      left: distance,
    });

    if (programmaticScrollTimeoutRef.current) {
      clearTimeout(programmaticScrollTimeoutRef.current);
    }
    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isAutoScrollingRef.current = false;
      programmaticScrollTimeoutRef.current = null;
    }, prefersReducedMotion ? 50 : 850);
  }, []);

  const handleScroll = useCallback(() => {
    if (!isAutoScrollingRef.current) {
      stopAutoScroll();
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Debounce teleport to ensure it only happens when scroll momentum settles
    scrollTimeoutRef.current = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;

      const setWidth = getSetWidth();
      if (setWidth <= 0) return;

      if (track.scrollLeft >= setWidth * 2 - 10) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft -= setWidth;
      } else if (track.scrollLeft <= 10) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft += setWidth;
      }
      isAutoScrollingRef.current = false;
    }, 150);
  }, [getSetWidth, stopAutoScroll]);

  const scrollForward = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setUserInteracted(true);
    customSmoothScroll(track, getStep());
  }, [getStep, customSmoothScroll]);

  const scrollBackward = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setUserInteracted(true);
    customSmoothScroll(track, -getStep());
  }, [getStep, customSmoothScroll]);

  useEffect(() => {
    transformations.forEach((story) => {
      void preloadStoryImage(story.image);
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setIsAnimationVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimationVisible(entry.isIntersecting);
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const card = track.querySelector<HTMLElement>("[data-story-card]");
      const cards = track.querySelectorAll("[data-story-card]");
      if (!card || cards.length === 0) return;

      const styles = window.getComputedStyle(track);
      const rawGap =
        styles.columnGap === "normal" ? styles.gap : styles.columnGap;
      const gap = Number.parseFloat(rawGap) || 0;
      stepRef.current = card.getBoundingClientRect().width + gap;
      setWidthRef.current = stepRef.current * (cards.length / NUM_SETS);
    };

    const observer = new ResizeObserver(measure);
    const firstCard = track.querySelector<HTMLElement>("[data-story-card]");
    observer.observe(track);
    if (firstCard) observer.observe(firstCard);

    const frameId = requestAnimationFrame(() => {
      measure();
      if (
        setWidthRef.current > 0 &&
        track.scrollLeft <= 10
      ) {
        isAutoScrollingRef.current = true;
        track.style.scrollBehavior = "auto";
        track.scrollLeft = setWidthRef.current;
        requestAnimationFrame(() => {
          isAutoScrollingRef.current = false;
        });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (programmaticScrollTimeoutRef.current) {
        clearTimeout(programmaticScrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAnimationVisible || userInteracted || isPaused) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      customSmoothScroll(track, getStep());
    }, 3200);

    return () => window.clearInterval(interval);
  }, [
    isAnimationVisible,
    userInteracted,
    isPaused,
    getStep,
    customSmoothScroll,
  ]);

  return (
    <section
      className={`buudy-section bg-[var(--cream)] md: md: py-14 md:py-24 ${
        selectedStory ? "muuhu-deferred-modal-open" : ""
      }`}
      ref={sectionRef}
    >
      <div className="buudy-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <SectionHeading
            eyebrow="Real users / Real results"
            title={
              <>
                Seven styles, <em className="buudy-italic">one device</em>.
              </>
            }
          />
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            Verified customer transformations, photographed in their own homes
            after consistent use of the Muuhu Airpro.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          aria-label="Customer transformation stories"
          className="no-scrollbar flex snap-x gap-5 overflow-x-auto px-4 pb-4 md:px-10"
          onScroll={handleScroll}
          onPointerDown={stopAutoScroll}
          onTouchStart={stopAutoScroll}
          onWheel={stopAutoScroll}
          ref={trackRef}
        >
          {loopedStories.map((story, index) => (
            <article
              className="w-[min(82vw,21rem)] flex-none snap-start overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--card)] transition duration-300 hover:-translate-y-1 cursor-pointer"
              data-story-card
              key={`${story.id}-${index}`}
              onClick={() => openStory(story)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--blush)]">
                <Image
                  alt={story.concern}
                  className="object-cover"
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 336px, 82vw"
                  src={story.image}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="buudy-mono text-[var(--gold-text)]">{story.concern}</p>
                  <span className="buudy-mono text-[var(--plum-soft)]">5.0</span>
                </div>
                <h3 className="buudy-display mt-3 text-xl text-[var(--plum)]">
                  {story.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {story.quote}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3">
                  <span className="buudy-display text-sm text-[var(--plum)]">
                    {story.name}
                  </span>
                  <span className="buudy-mono text-[var(--plum-soft)]">Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="buudy-wrap mt-6 flex items-center justify-center gap-5">
          <button
            aria-label="Previous transformation story"
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(58,31,61,.3)] text-[var(--plum)] transition hover:bg-[var(--plum)] hover:text-[var(--cream)]"
            onClick={scrollBackward}
            type="button"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="buudy-mono text-[var(--plum)]">customer stories</span>
          <button
            aria-label="Next transformation story"
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(58,31,61,.3)] text-[var(--plum)] transition hover:bg-[var(--plum)] hover:text-[var(--cream)]"
            onClick={scrollForward}
            type="button"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {selectedStory && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedStory(null)}
        >
          {/* Previous Arrow (Desktop Only) */}
          <button 
            className="hidden md:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center rounded-full bg-[var(--cream)]/10 border border-[var(--cream)]/30 text-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--plum)] transition-all duration-300"
            onClick={(e) => { e.stopPropagation(); handlePrevStory(); }}
            aria-label="Previous story"
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            className="relative w-full max-w-4xl bg-[var(--cream)] rounded-[18px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition text-[var(--plum)]"
              onClick={() => setSelectedStory(null)}
              aria-label="Close details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Image Side */}
            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden bg-[var(--blush)]">
              <Image
                alt={selectedStory.concern}
                className="object-cover"
                fill
                loading="eager"
                sizes="(min-width: 768px) 50vw, 100vw"
                src={selectedStory.image}
              />
            </div>

            {/* Right Data Side */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-[var(--card)]">
              <p className="buudy-mono text-[var(--gold-text)] text-sm tracking-widest uppercase mb-2">
                {selectedStory.concern}
              </p>
              <h3 className="buudy-display text-2xl md:text-3xl text-[var(--plum)] mb-4 leading-tight">
                {selectedStory.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-6 pb-6 border-b border-[var(--border)]">
                <span className="buudy-display text-lg text-[var(--plum)]">
                  {selectedStory.fullName ? `${selectedStory.fullName}, ${selectedStory.age}` : selectedStory.name}
                </span>
                <span className="buudy-mono text-[var(--plum-soft)] ml-auto text-xs bg-[var(--cream)] px-2 py-1 rounded">
                  Verified
                </span>
              </div>

              {selectedStory.hairType && (
                <div className="mb-5">
                  <h4 className="buudy-mono text-[var(--plum)] text-xs font-bold mb-1.5 uppercase tracking-wider">Hair Type</h4>
                  <p className="text-sm text-[var(--muted)]">{selectedStory.hairType}</p>
                </div>
              )}

              {selectedStory.routine && (
                <div className="mb-5">
                  <h4 className="buudy-mono text-[var(--plum)] text-xs font-bold mb-1.5 uppercase tracking-wider">Styling Routine</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{selectedStory.routine}</p>
                </div>
              )}

              {selectedStory.experience && (
                <div>
                  <h4 className="buudy-mono text-[var(--plum)] text-xs font-bold mb-1.5 uppercase tracking-wider">Experience</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{selectedStory.experience}</p>
                </div>
              )}
            </div>
          </div>

          {/* Next Arrow (Desktop Only) */}
          <button 
            className="hidden md:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 items-center justify-center rounded-full bg-[var(--cream)]/10 border border-[var(--cream)]/30 text-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--plum)] transition-all duration-300"
            onClick={(e) => { e.stopPropagation(); handleNextStory(); }}
            aria-label="Next story"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
