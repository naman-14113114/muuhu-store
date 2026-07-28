export function GuaranteeSection({ productHandle }: { productHandle?: string }) {
  const isComb = productHandle === "muuhu-comb";
  return (
    <section className={`buudy-section relative overflow-hidden py-14 pb-24 text-center md:py-24 md:pb-36 ${productHandle === "muuhu-hair-dryer" ? "bg-black" : "bg-[var(--plum)]"}`}>
      {productHandle === "muuhu-hair-dryer" && (
        <>
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/products/muuhu-hair-dryer/banner_hero.webp"
              alt="Muuhu AirPro Guarantee Background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </>
      )}
      <div className="buudy-wrap relative z-20 max-w-5xl">
        <p className="buudy-eyebrow">Promise</p>
        <h2 className="buudy-display mx-auto mt-3 max-w-4xl text-[2rem] leading-[1.05] text-[var(--cream)] sm:text-[2.35rem] md:mt-4 md:text-6xl">
          Our <em className="buudy-italic text-[var(--gold)]">Muuhu</em>
          <br />
          money back guarantee.
        </h2>
        <p className="mx-auto mt-6 hidden max-w-xl text-sm font-medium leading-7 text-white md:block md:text-base">
          {isComb 
            ? "Bring premium hair and scalp care into your daily routine with Muuhu. Designed for targeted therapy, deep relaxation, and effortless at-home use, Muuhu gives you a premium experience you can trust every time."
            : "Bring salon-inspired hair styling into your daily routine with Muuhu. Designed for ultra-fast drying, frizz-free shine, and effortless at-home use, Muuhu gives you a premium styling experience you can trust every time."}
        </p>
      </div>
    </section>
  );
}
