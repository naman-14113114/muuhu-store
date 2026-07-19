# MUUHU HAIR DRYER PROJECT - COMPLETE AI HANDOFF & BRAND CONTEXT
**Created/Updated:** July 2026

## 1. THE BIG PICTURE & BRAND KNOWLEDGE
This document serves as the absolute source of truth for all future AI agents working on the Muuhu 7-in-1 Hair Dryer project within the `muuhu-store` repository. 

**The Goal:** We are actively repurposing a high-converting e-commerce template (which previously showcased an LED Mask / IPL Hair Removal device) into a premium storefront for the **Muuhu 7-in-1 Hair Dryer**.

**Brand & Product Context (Muuhu 7-in-1 Hair Dryer):**
- **Positioning:** A premium, ultra-fast drying, and versatile styling tool that relies on aerodynamic airflow rather than extreme, damaging heat. It is designed to look, feel, and sound like a high-end salon tool.
- **Motor:** 110,000 RPM high-speed, powerful but quiet motor.
- **The 7 Attachments / Units:**
  1. **L-Shape Base (Fast Drying):** Cuts drying time drastically using high airflow.
  2. **Smoothing Brush:** Tames frizz and straightens coarse hair.
  3. **Round Volumising Brush:** Lifts roots and provides 90s-style bounce/volume.
  4. **Left Curling Barrel (30mm):** Uses Coanda technology to automatically wrap hair for left-side face-framing curls.
  5. **Right Curling Barrel (30mm):** Symmetrical automatic wrapping for the right side.
  6. **Diffuser:** Disperses air gently to enhance natural curl patterns without frizz.
  7. **Concentrator Nozzle:** Provides a highly focused air stream for precision, sleek blowouts.

---

## 2. EXACT CHRONOLOGICAL RECORD OF WHAT WE HAVE DONE

### Phase 1: Video Reviews Carousel Revamp (`VideoReviews.tsx`)
**User Request:** Replace existing videos with new short and long-form videos. The shorts must autoplay without sound in the main carousel. When a user clicks a video card, a modal should pop up playing the full, long-form video with audio from the very beginning.

**Actions Taken:**
1. **Asset Management:** We received 11 short videos and 11 full-length videos. We copied all 22 `.mp4` files into the `public/videos/hair-dryer/` directory.
2. **Data Structure (`productSections.ts`):** We updated the `ReviewVideo` type to include a new optional `fullSrc?: string` property to store the long-form video path. We mapped the 11 videos accordingly.
3. **Modal Implementation:** In `src/components/product/VideoReviews.tsx`, we introduced React state (`selectedVideo`) to track clicks. We built a dark overlay modal (`bg-black/90`) that renders an HTML5 `<video controls autoPlay>` element only when a card is clicked. 
4. **Data Cleanup:** The user requested to remove the 10th video ("Hair Dryer video 10") completely. We deleted it from the `reviewVideos` array, leaving 10 total videos.
5. **Animation Tuning:** Because the `VideoReviews` component uses a continuous CSS scrolling animation (`vr-css-auto-scroll`), removing a video sped up the visual scrolling speed. We had to manually tweak the inline `animationDuration` style property (from ~95s originally, down to 33s, then settled around 30s) to ensure the carousel moved at a smooth, readable pace.

### Phase 2: Before & After Transformation Grid (`BeforeAfterGrid.tsx`)
**User Request:** Repurpose the "8 stories, one device" LED mask section into a "7 styles, one device" hair dryer section, highlighting the 7 different attachments. Clicking a card must open a detailed split-layout modal (Image on left, text on right) detailing their styling routine and experience.

**Actions Taken:**
1. **Data Modeling (`productSections.ts`):** 
   - Extended the `Transformation` type heavily. Added: `fullName`, `age`, `routine`, `experience`, `hairType`.
   - Wrote 7 premium, authentic-feeling stories tailored specifically to the 7 attachments of the Muuhu Hair Dryer.
2. **Component UI & Modal Building (`BeforeAfterGrid.tsx`):**
   - Changed the main title to "Seven styles, one device."
   - Added `onClick` handlers to the cards to trigger the `selectedStory` state.
   - Built a custom, responsive modal. Left side (`w-1/2`) holds a high-res `<Image>`, right side holds the dynamic text data (routine, hair type, experience).
3. **Iterative Refinements & Bug Fixes (Crucial Context):**
   - *Issue:* The user noticed internal scrolling on the text side of the modal. 
   - *Fix:* Removed `overflow-y-auto`, reduced internal padding from `p-10` to `p-8`, and aggressively trimmed down the copy in `productSections.ts` so the text fits perfectly inside the box without requiring any scrolling.
   - *Issue:* The user noticed we used a 5-star rating (★ ★ ★ ★ ★) inside the modal, but they specifically asked to replace stars with the user's Full Name and Age.
   - *Fix:* Completely deleted the star span element from the modal. Modified the rendering logic to show `Full Name, Age` (e.g., "Chloe Bennett, 24") when the modal is open, but kept the shortened name (e.g., "Chloe B.") on the closed card state.
4. **Interactive Modal Navigation:**
   - *User Request:* The user wanted to navigate between the 7 stories *while inside the modal* without closing it.
   - *Implementation:* 
     - Added desktop-only "Next" (`ChevronRight`) and "Previous" (`ChevronLeft`) arrow buttons floating outside the main modal container.
     - Added mobile-only touch swiping functionality (`onTouchStart`, `onTouchMove`, `onTouchEnd`) calculating a 50px threshold to trigger a swipe.
     - Implemented **Infinite Looping** logic: `(currentIndex + 1) % length` and `(currentIndex - 1 + length) % length` so users can scroll through the 7 stories continuously in a circle.

---

## 3. LOGIC, MISTAKES, AND STRICT RULES FOR FUTURE AGENTS

To ensure seamless handoff, study these mistakes and internal rules carefully:

### A. The "No Scrolling" Rule in Pop-ups
**The Mistake:** I initially built the `BeforeAfterGrid` modal with `overflow-y-auto` and wrote lengthy, descriptive paragraphs for the user experiences.
**The Lesson:** The business owner *strictly* dislikes inner scrolling inside modals or cards. If you build a modal, the content must be concise enough to fit visually on the screen without a scrollbar. Adjust padding (`p-6` or `p-8`), reduce font sizes slightly if needed, but primarily, edit the raw text data to be punchy and short.

### B. Read "Instead of" Instructions Literally
**The Mistake:** The user said, "instead of those start [stars], write age and show full name". I added the full name and age, but I *kept* the 5 stars in the UI next to them because it's a common e-commerce pattern. 
**The Lesson:** When the user says "instead of X, do Y", you must aggressively seek out and delete X. Do not assume standard e-commerce UI patterns overrule the user's explicit instructions.

### C. Carousel Speed Physics
**The Logic:** The `VideoReviews.tsx` and similar marquee sliders use CSS animations where the duration is bound to the total width of the content.
**The Rule:** If you ever add or remove items from a continuously scrolling carousel in this codebase, you *must* adjust the inline `animationDuration` style. More items = it moves faster if duration stays the same. Fewer items = it moves slower. You must test and tweak this duration to keep the speed consistent.

### D. Desktop vs Mobile Interactive Elements
**The Logic:** We do not want visual clutter on mobile screens. 
**The Rule:** When adding navigation (like arrows in a modal), hide them on mobile using Tailwind (`hidden md:flex`) and implement native touch swiping (`onTouchStart`, `onTouchEnd`) for mobile users instead. 

### E. Data Ownership & Types
**The Logic:** All product page data lives in `src/data/productSections.ts`.
**The Rule:** If you need a new field in a UI component, update the exact Typescript `type` definition in `productSections.ts` first. Do not hardcode content into the `.tsx` component files. The components must remain purely structural and consume data from the `data/` directory.

### F. Do Not Touch Existing Layout Structure Unless Ordered
**The Rule:** The user is extremely protective of the base UI structure (headings, typography, standard layout grids). Do not run "unrelated refactors" or try to redesign a section. Only inject the specific functionality requested (like a modal pop-up or a data swap) while maintaining the exact visual DOM hierarchy of the underlying card.

---

## 4. PLUSBASE / SHOPBASE ADMIN API ACCESS AND RULES

**Updated:** 2026-07-19

Sahil supplied the Muuhu private app credentials in chat and screenshot. Do not paste, commit, or repeat the raw API key, password, shared secret, or account password in any public file or final response. The local ignored vault `E:\1st YEAR DTU\New folder\trustpilot-led-mask-replica\agent-secrets.local.md` contains secret-bearing ShopBase/PlusBase entries and is covered by the `*.local.md` ignore rule.

**Access verified:** A read-only API probe against `https://muuhu.onshopbase.com/admin` succeeded on 2026-07-19:
- `GET /admin/shop.json` returned HTTP 200 for shop `muuhu`.
- `GET /admin/products.json?limit=5&fields=id,title,handle,variants` returned HTTP 200.
- `GET /admin/orders.json?limit=1&fields=id,created_at,financial_status,total_price,currency,line_items` returned HTTP 200.
- No customer PII or secret values were printed.

**Observed / provided permissions:** The private app screenshot shows read/write access for store content/pages/redirects, customers, orders/transactions/fulfillments, products/variants/collections, third-party fulfillment orders, and assigned fulfillment orders. Treat this as broad but still private-app-limited access. Test the exact endpoint before claiming a capability.

**Official docs absorbed on 2026-07-19:**
- Private apps use Basic HTTP auth with API key as username and API password as password.
- The shared secret is for webhook integrity validation, not the API password.
- API scopes determine what we can read/write.
- REST Admin API is rate-limited with a leaky bucket model. Scripts should average about 2 requests per second and handle 429 responses.
- Storefront SDK can read product/cart/user/order context, listen to SPA/page/cart/order events, add/update/remove cart items, apply discounts, and navigate checkout. Because ShopBase storefront is SPA-based, custom scripts must rehydrate on page changes.
- Products, variants, product images, content/pages/redirects, customers, orders, transactions, fulfillments, checkouts, price rules, script tags, and analytics have scope-specific API surfaces. Use minimal writes and verify live state after any production change.

**Practical rule:** Start with read-only calls, inspect current live/admin state, then make the smallest write needed. Never modify orders, product prices, pages, discounts, fulfillments, or customer data without a clear task and verification path.
