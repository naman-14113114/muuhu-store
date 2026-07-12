"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface SliderItem {
  num: number;
  title: string;
  desc: string;
  before: string;
  after: string;
}

function BeforeAfterSlider({ item }: { item: SliderItem }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-center">
      <h3 className="text-center mb-1">
        <span className="buudy-mono text-[var(--gold)] text-xs uppercase tracking-widest">
          {item.num}. {item.title}
        </span>
      </h3>
      <p className="text-center text-xs text-white/60 mb-3 max-w-[240px] mx-auto">
        {item.desc}
      </p>

      <div
        ref={containerRef}
        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After image (full, underneath) */}
        <Image
          src={item.after}
          alt={`After using ${item.title}`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
          draggable={false}
        />

        {/* Before image (clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <Image
            src={item.before}
            alt={`Before using ${item.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
            draggable={false}
          />
        </div>

        {/* Before / After labels */}
        <span className="absolute top-3 left-3 z-20 buudy-mono text-[10px] uppercase tracking-widest bg-[var(--gold)] text-white px-2.5 py-1 rounded-full shadow-md">
          Before
        </span>
        <span className="absolute top-3 right-3 z-20 buudy-mono text-[10px] uppercase tracking-widest bg-[var(--gold)] text-white px-2.5 py-1 rounded-full shadow-md">
          After
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center gap-0.5 pointer-events-auto">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="opacity-60">
              <path d="M6 1L1 7L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="opacity-60">
              <path d="M2 1L7 7L2 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const attachments: SliderItem[] = [
    { num: 1, title: "L-Shape Base", desc: "Fast pre-drying from wet to styled-ready.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_l_shape_base.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_l_shape_base.jpg" },
    { num: 2, title: "Smoothing Brush", desc: "Smooths, straightens and tames frizz.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_smoothing_brush.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_smoothing_brush.jpg" },
    { num: 3, title: "Round Volumising Brush", desc: "Adds volume, lift and bounce.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_round_volumising_brush.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_round_volumising_brush.jpg" },
    { num: 4, title: "Left Curling Barrel (30mm)", desc: "Creates curls that wrap to the left.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_left_curling_barrel_30mm.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_left_curling_barrel_30mm.jpg" },
    { num: 5, title: "Right Curling Barrel (30mm)", desc: "Creates curls that wrap to the right.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_right_curling_barrel_30mm.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_right_curling_barrel_30mm.jpg" },
    { num: 6, title: "Diffuser", desc: "Enhances natural curls and reduces frizz.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_diffuser.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_diffuser.jpg" },
    { num: 7, title: "Concentrator Nozzle", desc: "Smooth, precise drying for a sleek finish.", before: "/images/products/muuhu-hair-dryer/before-after/ba_before_concentrator_nozzle.jpg", after: "/images/products/muuhu-hair-dryer/before-after/ba_after_concentrator_nozzle.jpg" },
  ];

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--plum)] py-16 md:py-24 border-y border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="buudy-mono text-[var(--gold)] mb-2 uppercase tracking-widest text-sm">
            One tool, endless looks
          </p>
          <h2 className="buudy-display text-3xl md:text-4xl text-white">
            Before &amp; After
          </h2>
          <p className="text-white/60 text-sm mt-2 max-w-md mx-auto">
            Drag the slider to see the transformation each attachment creates.
          </p>
        </div>

        {/* Scrollable container */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg"
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg"
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {attachments.map((att) => (
              <BeforeAfterSlider key={att.num} item={att} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
