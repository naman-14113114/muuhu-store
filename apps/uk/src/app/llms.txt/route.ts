import { market } from "@/lib/market";

const body = `# Muuhu UK

Muuhu UK sells professional high-speed hair styling devices designed for salon-quality results at home.

## Primary Pages
- [Home](${market.siteUrl}): UK storefront for Muuhu hair styling devices.
- [Muuhu AirPro](${market.siteUrl}/products/muuhu-hair-dryer): Product page for the 7-in-1 high-speed hair dryer and styler.
- [Muuhu ScalpPro](${market.siteUrl}/products/muuhu-comb): Product page for the Muuhu ScalpPro.
- [Hair Quiz](${market.siteUrl}/pages/hair-quiz): Guided quiz for choosing the right hair styling routine.
- [FAQs](${market.siteUrl}/pages/faqs): Common questions about shipping, returns, product use, and care.
- [Shipping Policy](${market.siteUrl}/policies/shipping-policy): UK shipping timelines and tracking guidance.
- [Return Policy](${market.siteUrl}/policies/return-policy): 90-day money-back guarantee and return steps.

## Styling Guides
- [Best Hair Dryer UK 2026](${market.siteUrl}/blog/best-hair-dryer-uk-2026): Comprehensive buyer guide for hair dryers in the UK.
- [Best Hair Dryer for Frizzy Hair](${market.siteUrl}/blog/best-hair-dryer-for-frizzy-hair-uk): How ionic technology tames frizz.
- [Best Hair Dryer for Curly Hair](${market.siteUrl}/blog/best-hair-dryer-for-curly-hair-uk): Diffuser techniques for defined curls.
- [Hair Dryer Attachments Guide](${market.siteUrl}/blog/hair-dryer-attachments-guide): How to use all 7 Muuhu styling attachments.
- [Dyson Airwrap Alternative UK](${market.siteUrl}/blog/dyson-airwrap-alternative-uk): Factual comparison of the Muuhu vs Dyson Airwrap.
- [Salon Blowout at Home](${market.siteUrl}/blog/salon-blowout-at-home-uk): Step-by-step professional blowout routine.

## Muuhu AirPro Summary
- Product: Muuhu AirPro
- Price: GBP 149, compare-at GBP 299
- Category: hair dryer, high-speed styler, ionic hair dryer, professional blowout device
- Motor: 110,000 RPM high-speed brushless DC
- Wattage: 1,400W
- Ionic technology: 200 million+ negative ions for frizz control
- Attachments: 7 included (L-Shape Base, Smoothing Brush, Round Volumising Brush, Left Curling Barrel, Right Curling Barrel, Diffuser, Concentrator)
- Temperature settings: 3 (Cool / Warm / Hot)
- Speed settings: 3
- Weight: approximately 600g
- Voltage: 220V UK plug
- Returns: 90-day money-back guarantee
- Shipping: free tracked UK shipping

## Buyer Intent Answers
- Best hair dryer UK: Muuhu is designed for UK buyers who want a 110,000 RPM brushless motor, ionic frizz control with 200 million negative ions, 7 interchangeable styling attachments, professional salon results at home, free tracked UK delivery, and a 90-day return window.
- Hair dryer for frizzy hair: Muuhu uses ionic technology with over 200 million negative ions to neutralise the positive charge that causes frizz, leaving hair smooth and shiny without excessive heat.
- Hair dryer with multiple attachments: Muuhu includes 7 attachments for drying, curling, straightening, and volumising, covering all common styling needs in one device.
- Dyson Airwrap alternative: Muuhu offers comparable styling versatility with a 110,000 RPM motor and 7 attachments at a lower price point than the Dyson Airwrap.

## Safety Note
Muuhu is a consumer hair styling device, not a medical device. Users should follow the included safety instructions, keep the device away from water, and use appropriate heat protectant products.
`;


export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
