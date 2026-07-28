import Image from "next/image";

export function HairDryerAttachmentBadges() {
  const attachments = [
    { title: "L-Shape Base", src: "/images/products/muuhu-hair-dryer/attachments/cg_base_right.png" },
    { title: "Right Auto-Wrap Curler", src: "/images/products/muuhu-hair-dryer/attachments/cg_right.png" },
    { title: "Left Auto-Wrap Curler", src: "/images/products/muuhu-hair-dryer/attachments/cg_left.png" },
    { title: "Smoothing Brush", src: "/images/products/muuhu-hair-dryer/attachments/cg_smoothing.png" },
    { title: "Round Volumising Brush", src: "/images/products/muuhu-hair-dryer/attachments/cg_round.png" },
    { title: "Concentrator Nozzle", src: "/images/products/muuhu-hair-dryer/attachments/muuhu-airpro-concentrator-nozzle.png" },
    { title: "Diffuser", src: "/images/products/muuhu-hair-dryer/attachments/cg_diffuser.png" },
  ];

  return (
    <section className="bg-[#f6ede2] py-14 md:py-24">
      <div className="buudy-wrap">
        <div className="text-center mb-10">
          <p className="buudy-mono text-[var(--gold)] mb-2 uppercase tracking-widest text-sm">Included in the box</p>
          <h2 className="buudy-display text-3xl md:text-4xl text-[var(--plum)]">7-in-1 Complete Set</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-4 items-start max-w-6xl mx-auto">
          {attachments.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 text-center mx-auto w-full group">
              <div className="shrink-0 flex-none relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100" style={{ filter: 'invert(56%) sepia(50%) saturate(442%) hue-rotate(352deg) brightness(93%) contrast(93%)' }}>
                <Image
                  src={badge.src}
                  alt={badge.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-[var(--plum)] uppercase tracking-wide leading-snug text-xs max-w-[120px] transition-colors group-hover:text-[var(--gold)]">
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

