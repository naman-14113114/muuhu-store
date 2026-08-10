export function TrustBadges({ className }: { className?: string }) {
  const badges = [
    {
      title: "Free Shipping all over US",
      icon: "/images/trust-badges/i3_clean.png",
    },
    {
      title: "Salon-Grade Performance",
      icon: "/images/trust-badges/i1.png",
    },
    {
      title: "Buy Now, Pay Later Options Available",
      icon: "/images/trust-badges/i2.png",
    },
    {
      title: "90-Day Money Back Guarantee",
      icon: "/images/trust-badges/i4.png",
    },
  ];

  return (
    <section className={`hidden md:block bg-[#f6ede2] ${className ?? 'py-14 md:py-24'}`}>
      <div className="buudy-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left justify-center mx-auto w-full">
              <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 flex-none opacity-90">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={badge.icon}
                  alt={badge.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-medium text-[var(--plum)] leading-snug text-sm md:text-base max-w-[180px]">
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
