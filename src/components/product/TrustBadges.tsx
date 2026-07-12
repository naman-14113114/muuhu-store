import { Truck, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      title: "Free Shipping all over UK",
      icon: <Truck size={36} strokeWidth={1.5} className="text-[var(--gold)]" />,
    },
    {
      title: "Salon-Grade Performance",
      icon: <Sparkles size={36} strokeWidth={1.5} className="text-[var(--gold)]" />,
    },
    {
      title: "Buy Now, Pay Later Options Available",
      icon: <CreditCard size={36} strokeWidth={1.5} className="text-[var(--gold)]" />,
    },
    {
      title: "90-Day Money Back Guarantee",
      icon: <ShieldCheck size={36} strokeWidth={1.5} className="text-[var(--gold)]" />,
    },
  ];

  return (
    <section className="hidden md:block bg-[#f6ede2] pt-2 md:pt-4 pb-14 md:pb-24">
      <div className="buudy-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left justify-center mx-auto w-full">
              <div className="shrink-0 flex-none opacity-90">
                {badge.icon}
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
