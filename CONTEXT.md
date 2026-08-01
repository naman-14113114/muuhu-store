# Muuhu Store Context History

This file is an append-only repository history governed by
`E:\1st YEAR DTU\New folder\AGENTS.md`. Read it in full before every task in
this repository. Never replace detailed entries with summaries and never delete
earlier mistakes or corrections.

## 2026-08-01 16:19:49 +05:30 - Repository freshness reconciliation and latest-change audit

### Repository, branch, and upstream state
- Repository inspected: `E:\1st YEAR DTU\New folder\muuhu-store`.
- Relevant live storefront identified from the current business context: `https://uk.muuhu.com`. The repository also contains the related UK and US storefront applications.
- Current branch: `main`.
- Local HEAD: `8531e1477db0dcf449f0c0c56efb9f45e98a3aca`.
- Configured upstream: `origin/main`.
- Origin fetch and push URL: `https://github.com/naman-14113114/muuhu-store.git`.
- The worktree was clean before this mandatory context record was created: `## main...origin/main` with no staged, unstaged, or untracked application files.
- `git fetch --all --prune` completed successfully without modifying local source files.
- After fetching, `HEAD...@{upstream}` reported `0 0`, so local `main` and GitHub `origin/main` were already identical. No pull, merge, rebase, reset, stash, checkout, or overwrite was needed or performed.

### User request and practical interpretation
- The user asked Codex to update its memory for `muuhu-store`, get the latest repository state, and explain what happened most recently.
- This was interpreted as a read-only freshness and history audit, not permission to modify storefront code, copy, assets, routes, data, links, tracking, checkout behaviour, configuration, or deployment state.
- The audit reconciled local Git state against GitHub before relying on conversation memory. This follows the user's hard rule that Antigravity, Naman, generated output, or GitHub changes may have occurred since the previous Codex task.

### Governing context and files inspected
- Read `E:\1st YEAR DTU\New folder\AGENTS.md` in full.
- Read `E:\1st YEAR DTU\New folder\CONTEXT.md` in full, using explicit line chunks so the long append-only history was not truncated.
- Read `E:\1st YEAR DTU\New folder\muuhu-store\AGENTS.md` in full.
- Confirmed that the repository did not previously contain its own `CONTEXT.md`, `DESIGN.md`, or `PRODUCT.md` at the repository root. This file was therefore created to establish the mandatory repository-specific append-only history.
- No task-specific source file needed editing. The review data files changed by the latest commit were inspected to understand the latest repository change accurately.

### Latest commit and exact files changed
- Latest commit: `8531e1477db0dcf449f0c0c56efb9f45e98a3aca`.
- Author and committer: Sahil Jain.
- Commit timestamp: `2026-07-31T15:09:22+05:30`.
- Commit subject: `feat: add initial product review datasets for UK and US markets`.
- The commit modified exactly these four review datasets:
  - `apps/uk/src/data/reviews/muuhu-comb-reviews.json`
  - `apps/uk/src/data/reviews/muuhu-hair-dryer-reviews.json`
  - `apps/us/src/data/reviews/muuhu-comb-reviews.json`
  - `apps/us/src/data/reviews/muuhu-hair-dryer-reviews.json`
- Git reported a large dataset replacement: `107,472` insertions and `124,556` deletions across those four JSON files.
- Each comb dataset had `2,344` additions and `2,344` deletions. Each hair-dryer dataset had `51,392` additions and `59,934` deletions.
- The latest commit is a review-data refresh. It is not a layout, styling, image, route, checkout, or deployment change.

### Current review dataset facts verified
- UK Muuhu comb dataset: JSON array with `1,172` reviews; rating distribution is `195` four-star and `977` five-star entries.
- US Muuhu comb dataset: JSON array with `1,172` reviews; rating distribution is `174` four-star and `998` five-star entries.
- UK Muuhu hair-dryer dataset: JSON array with `4,281` reviews; rating distribution is `4` one-star, `3` two-star, `444` four-star, and `3,830` five-star entries.
- US Muuhu hair-dryer dataset: JSON array with `4,281` reviews; rating distribution is `4` one-star, `3` two-star, `444` four-star, and `3,830` five-star entries.
- Review records currently use the fields `id`, `sourceIndex`, `productHandle`, `rating`, `date`, `customerName`, `title`, `body`, `images`, and `displayDate`.
- The data continues to use the legacy internal handles `muuhu-comb` and `muuhu-ionic-hair dryer`. These were observed only; they were not changed because the current task did not authorise content or handle edits, and the user has previously required URLs and established redirect handles to remain unchanged.
- Some current review bodies contain strong efficacy wording and references such as minoxidil. This was observed during the audit but not changed because the user asked only for repository freshness and the latest change. Any future review-content work must start from this exact current dataset rather than older remembered content.

### Recent history immediately before the latest commit
- `9d0e401b` added a `CartLineItem` component for the UK and US storefronts.
- `8f129c0f` implemented hair-dryer product-page components and related UK/US data structures.
- `efe3a9cc` is labelled `performance increased`.
- These older commits were inspected only to place the latest review-data commit in context; none was modified or reverted.

### Verification, protected areas, and actions not taken
- Commands used included `git status --short --branch`, remote inspection, `git fetch --all --prune`, `git rev-list --left-right --count HEAD...@{upstream}`, `git log`, `git show --stat`, and read-only JSON inspection.
- No lint, typecheck, production build, route smoke test, browser screenshot, or deployment check was run because this was a read-only Git freshness and history task with no application changes.
- No application source file, public asset, image, video, review dataset, page, route, API, metadata field, tracking integration, cart flow, or deployment configuration was changed.
- No branch was created. No commit, push, pull request, direct Vercel deployment, promotion, rollback, or production-setting change occurred.
- After this task, the only local repository change is this newly created mandatory `CONTEXT.md` history file. It must be preserved as user-required local state and must not be discarded during future pulls or reconciliations.

### Remaining uncertainty and future starting point
- GitHub and local source code are synchronized at `8531e147`. No newer remote commit existed at the time of this audit.
- Future work must first fetch and compare again because the user and collaborators may push additional changes after this timestamp.
- Before any future edit, ask whether `8531e147` and the review-dataset refresh are still the latest expected changes if local and remote history or uncommitted files differ.

## 2026-08-01 18:22:10 +05:30 - UK and US conversion-first storefront loading rebuild

### Repository, branch, upstream, and authorized publishing state
- Repository: `E:\1st YEAR DTU\New folder\muuhu-store`.
- Public storefronts in scope: the UK storefront at `https://uk.muuhu.com` and the US storefront built from `apps/us` in this same repository.
- Branch: `main`.
- Starting HEAD: `8531e1477db0dcf449f0c0c56efb9f45e98a3aca` (`feat: add initial product review datasets for UK and US markets`).
- Upstream: `origin/main` at `https://github.com/naman-14113114/muuhu-store.git`.
- `git fetch --all --prune` was run before implementation. `HEAD...origin/main` was `0 0`, so local and remote were identical before any edits. No merge, rebase, reset, stash, checkout, or overwrite was used.
- The pre-existing untracked repository `CONTEXT.md` was preserved and expanded. It was required by the user's workspace rules and was not discarded even though it was not yet tracked by Git.
- The user explicitly authorized a direct commit and push to `origin/main` after successful verification. The publishing action for this task is a single scoped commit with subject `perf: make storefront media conversion-ready`, pushed to the existing `main` branch. Deployment must be initiated only by the connected GitHub/Vercel integration; no Vercel CLI or dashboard deployment is permitted.

### User request and practical meaning
- The user reported that an earlier performance optimization made the storefront feel slower for shoppers: sections and media began loading only after the visitor reached them, before/after copy changed before the corresponding image, and video navigation could display text or state before the matching media was ready.
- Conversion readiness is the primary requirement. A shopper must be able to scroll quickly through the current page without revealing blank section placeholders or initiating the section's first render only after arriving there.
- Every public page's current frontend media should begin loading from initial page load. Hero media keeps the highest priority; other images, posters, gallery thumbnails, short previews, and visible section assets use normal eager browser priority. Hidden full-resolution review videos may wait until frontend media settles, then download in a bounded background queue.
- Existing content, design, images, videos, icons, links, tracking event names, cart behavior, checkout behavior, prices, offers, product names, routes, and responsive layouts are protected and must remain visually and behaviorally unchanged.
- Account and administration internals are excluded from the global eager-loading controller.

### Source material and architecture inspected
- Read the workspace and repository `AGENTS.md` files, the complete workspace `CONTEXT.md`, and the complete repository `CONTEXT.md` before task-specific work.
- Read the installed Next.js 16.2.6 image, lazy-loading, and Image component documentation under `apps/uk/node_modules/next/dist/docs` before modifying rendering priorities.
- Inspected UK and US product page composition, deferred section wrappers, review grids, hero/product galleries, global image loader, autoplay video wrappers, expert sections, review video carousels, before/after carousels, cart images, shared header/footer images, and root layouts.
- Inspected representative public routes for the home page, AirPro, ScalpPro, cart, blog, quiz, gift pages, and policy pages. Private route prefixes were enumerated so eager media behavior would not be applied to account/admin pages.
- Inspected the connected local Vercel metadata for the `muuhu-uk` and `muuhu-us` projects only to identify the Git-connected projects. No project settings were changed.

### Production regression evidence collected before implementation
- A cold production observation on `https://uk.muuhu.com/products/muuhu-hair-dryer` showed that, approximately 2.5 seconds after `DOMContentLoaded` without scrolling, the page had 71 image elements but only 26 complete images, 45 pending images, 67 images marked lazy, ten video elements with no usable source, thirteen sections using `content-visibility: auto`, a blank review placeholder, and only three before/after images in the DOM.
- After scrolling to approximately `y=5400`, the page grew to 85 images and 19 videos, and seven video sources appeared. This proved that viewport arrival was creating or sourcing content rather than merely pausing playback.
- The earlier optimization's mistake was prioritizing a smaller initial transfer over the user's conversion flow. The correction is not simply to raise a few image priorities; it removes viewport-triggered section creation and makes media/data transitions atomic.

### Files changed and implementation details
- `apps/uk/src/components/product/DeferredClientSections.tsx` and `apps/us/src/components/product/DeferredClientSections.tsx`: removed `next/dynamic` client-only wrappers with `ssr: false`; the existing exported wrapper names remain, but their product sections now use direct component imports and are present in the initial page markup.
- `apps/uk/src/components/product/LazyProductReviewsGrid.tsx` and `apps/us/src/components/product/LazyProductReviewsGrid.tsx`: removed IntersectionObserver placeholders and immediately render the existing `ProductReviewsGrid` with unchanged review data and presentation.
- `apps/uk/src/app/globals.css`: removed the AirPro deferred-section `content-visibility: auto` and intrinsic-size containment rules that hid or skipped below-the-fold sections.
- `apps/uk/src/components/ui/DeferredAutoplayVideo.tsx`, UK/US `LazyAutoplayVideo.tsx`, and UK/US `ExpertSection.tsx`: keep video sources attached and use `preload="auto"`; viewport observation now controls only playback rather than whether the media begins loading.
- `apps/uk/src/components/ui/GlobalImageLoader.tsx`: expanded the existing global image state controller to make public-page images eager, keep hero/high-priority fetches untouched, set ordinary media to normal browser priority, attach video preload immediately, and process dynamically inserted or source-changed images/videos without expensive full-document rescans.
- `apps/us/src/components/ui/GlobalImageLoader.tsx` and `apps/us/src/app/layout.tsx`: added the same public-storefront media controller to the US app and installed it in the US root layout.
- The global controller excludes `/account-settings`, `/admin`, `/auth`, `/my-profile`, `/order-confirmation`, `/order-history`, `/order-tracking`, `/sign-in`, and `/sign-up` prefixes. It removes loading state on image success or error and does not alter image dimensions, crop, radius, links, or parent layout.
- UK/US footer, cart line items, product galleries, comparison tables, AirPro product sections, feature sections, review grids, and relevant UK header/trust/guarantee/inside components were changed only from lazy media loading to eager/normal-priority loading. Their source paths, dimensions, classes, text, URLs, and visual hierarchy remain unchanged.
- Added `apps/uk/src/lib/mediaPreload.ts` and `apps/us/src/lib/mediaPreload.ts`. These wait until current frontend images and preview videos settle, with a finite safety timeout, then fetch unique full-review videos with `force-cache`. Background full-video concurrency is one on phone and two on desktop. Automatic full-video downloads are skipped when Save-Data is enabled or the effective connection is 2G/slow-2G. User-initiated media remains immediately available rather than being blocked by that optimization.
- UK/US `VideoReviews.tsx`: short previews and posters are sourced during initial page load; all carousel cards exist initially; the full-video background queue starts after frontend media settles. Modal/card navigation keeps the matching preview visible until the full source is ready. Request guards prevent a slower previous selection from overwriting a newer click, so media and associated review state do not become mismatched.
- UK/US `BeforeAfterGrid.tsx`: preloads and decodes every story image on mount, keeps the full circular carousel content present, caches layout dimensions rather than reading them on every animation frame, and changes image/copy/metadata together only after the destination image is decoded. Request guards prevent stale asynchronous navigation from overwriting the newest selection. IntersectionObserver is retained only to pause off-screen animation, not to create content or begin downloads.
- No route file, review dataset, product data file, copy block, asset file, image source, video source, URL, tracking integration, price, gift, cart calculation, checkout handoff, or responsive design token was changed.

### Mistakes, misunderstandings, and corrections
- The pre-task loading architecture delayed rendering and downloads until viewport proximity. That was technically oriented toward Lighthouse transfer reduction but contradicted the user's conversion-first requirement. The rebuild explicitly reverses that behavior across the public storefronts.
- The user specifically observed before/after text changing before its image. The correction decodes the requested image first and commits image, copy, and metadata as one state change; a request identifier prevents out-of-order promises from producing mismatched state.
- Review videos previously had no source until a section approached the viewport. They now load their short frontend previews immediately, while full-resolution media is staged after frontend assets settle. This avoids both a blank first interaction and uncontrolled competition with the hero.
- During lint, the US video component still contained an unused `isHoveredRef` left after simplifying viewport/hover loading. It was removed before final verification. No visual behavior depended on it.
- A finite media-settle timeout initially needed explicit cleanup. Both background preload helpers were hardened to clear their timers once media settles and to avoid duplicate completion.

### Verification performed
- UK ESLint passed with zero warnings and zero errors.
- US ESLint passed with zero errors and five unrelated pre-existing warnings: an unused `Props` type in a US blog slug page, native image warnings in existing blog components, an unused `MuuhuProductFocus`, and an unused `Image` import in the US feature sections. This task did not broaden scope to rewrite those unrelated files.
- UK and US `tsc --noEmit` checks passed.
- UK Next.js 16.2.6 production build passed and generated 39 routes/pages.
- US Next.js 16.2.6 production build passed and generated 31 routes/pages.
- `git diff --check` passed. Source searches found no remaining public `next/dynamic`/`ssr: false` deferred product sections, `content-visibility: auto`, `loading="lazy"`, `preload="none"`, or `preload="metadata"` patterns in the changed public loading path.
- Local UK and US dev storefronts were tested on ports 3100 and 3101, then the exact Muuhu-owned Node processes were stopped after verification. The unrelated TrustpilotReview process on port 3000 was not touched.
- On the UK AirPro desktop page before scrolling, the browser observed 95 images with 94 already complete and all 95 eager, 19 videos with 19 sources attached, zero `content-visibility: auto` sections, and no horizontal overflow. Scrolling to the bottom did not add images, videos, video sources, or before/after stories: the DOM counts remained 95 images, 19 videos, 19 sources, and 21 stories.
- On the US AirPro desktop page before scrolling, the browser observed 92 images with 91 complete and all 92 eager, 19 videos with 19 sources attached, zero deferred-content sections, 21 stories, and no horizontal overflow. The counts remained identical after scrolling to the bottom.
- UK and US phone checks at 390 by 844 showed the complete page media DOM, 19 sourced videos, 21 before/after stories, and no horizontal page overflow.
- A UK before/after modal test confirmed that navigation changed both the active image and its matching text together, from the first story asset to the second, without an intermediate mismatched state.
- Representative route smoke tests returned HTTP 200 for UK `/`, `/products/muuhu-comb`, `/cart`, `/blog`, `/pages/hair-quiz`, `/pages/premium-packaging`, and `/policies/privacy-policy`; and for US `/`, `/products/muuhu-comb`, `/cart`, `/blog`, `/pages/premium-packaging`, and `/policies/privacy-policy`.
- Desktop screenshots were captured at `C:\Users\sahil\AppData\Local\Temp\muuhu-uk-desktop-loading.png` and `C:\Users\sahil\AppData\Local\Temp\muuhu-us-desktop-loading.png` and visually inspected for preserved layout and absence of blank sections.
- The local US page produced two Tawk embed CORS errors because `embed.tawk.to` rejects localhost. These are third-party localhost-only errors, not build errors or new storefront application failures.

### Git and deployment actions for task completion
- No branch was created. The user explicitly requested the existing `main` branch.
- The final scoped application changes and this required repository context record are to be committed together as `perf: make storefront media conversion-ready` after one last `git fetch --all --prune` confirms that `origin/main` has not moved.
- The verified commit is to be pushed directly to `origin/main`, as explicitly requested. No pull request is required for this task.
- No direct Vercel CLI deployment, dashboard deployment, promotion, rollback, or project-setting change is permitted. After the GitHub push, only the GitHub-triggered `muuhu-uk` and `muuhu-us` deployment starts are to be inspected.

### Remaining uncertainty and future guidance
- Conversion-first eager loading intentionally increases total current-page transfer compared with the earlier viewport-deferred model. Full-resolution review videos remain bounded and network-aware so they do not compete with the hero on constrained connections.
- Exact full-video modal upgrade timing depends on the visitor's network and browser cache. The short matching preview remains available during that upgrade, and code/build validation covers the source handoff; a complete cold-network playback sweep of every review video was not practical because the assets are large.
- Future performance work must not restore viewport-triggered section mounting, blank review placeholders, or delayed first-source attachment unless the user explicitly changes the conversion-first priority.

## 2026-08-01 20:00:13 +05:30 - AirPro media regression repair after conversion-first loading push

### Repository, branch, HEAD, and upstream state
- Target repository: `E:\1st YEAR DTU\New folder\muuhu-store`.
- Relevant public storefronts: UK AirPro product page at `https://uk.muuhu.com/products/muuhu-hair-dryer`, with matching US shared media components kept in sync where the same regression existed.
- Current branch: `main`.
- Starting local HEAD and upstream before this repair: `3581e55d4cc21d487f708f04d2dee5afaca2be74` with subject `perf: make storefront media conversion-ready`.
- `origin` fetch/push URL: `https://github.com/naman-14113114/muuhu-store.git`.
- `git fetch --all --prune` was run before the task and again before publication. `git rev-list --left-right --count HEAD...origin/main` returned `0 0`, so no Naman, Antigravity, user, generated, or GitHub change appeared between the prior conversion-first commit and this repair.
- The worktree at inspection contained only the scoped media repair files and new poster assets listed below. No unrelated dirty file was present inside the repository.

### User request and practical meaning
- The user supplied the local screen recording `C:\Users\sahil\Videos\Screen Recordings\Screen Recording 2026-08-01 184918.mp4` and asked to inspect it carefully, understand what was happening, fix all visible regressions, test the page, and push clean code to GitHub.
- The user was specifically angry that the previous conversion-first loading work still produced bad shopper-facing behavior: the Klaviyo popup image was missing or loading after the popup appeared, review-video cards showed as black even after the website otherwise looked loaded, the before/after modal changed text faster than the image, autoplay videos stopped or paused when offscreen/backgrounded, and some review-video clicks did not immediately open the full video view.
- The practical intent was not to redesign the page, rework copy, change offers, change product media, improve Lighthouse at the cost of conversion, or touch checkout. The practical intent was to preserve the approved AirPro frontend while making popup media, review previews, review modals, before/after modals, and autoplay media feel already ready when the shopper reaches or clicks them.

### Exact scope and protected areas
- In scope:
  - UK Klaviyo popup script timing and popup image warming.
  - UK AirPro review-video carousel preview readiness and modal-open reliability.
  - US review-video carousel parity because the same component/data pattern exists there.
  - UK and US before/after modal image synchronization.
  - UK and US reusable autoplay-video behavior where viewport pausing contradicted the user's instruction.
  - Local poster JPEG files for the hair-dryer review videos, so preview cards never show black while short videos prepare.
- Protected:
  - No product names, prices, gift names, offer values, discount text, review copy, product copy, image choices, video choices, links, checkout handoff, cart behavior, tracking event names, route slugs, header, footer, layout structure, responsive breakpoints, or visual design were intentionally changed.
  - No direct Vercel deployment, promotion, rollback, dashboard setting, domain setting, or environment variable change was authorized or performed.

### Files and routes inspected
- Read and followed:
  - `E:\1st YEAR DTU\New folder\AGENTS.md`
  - `E:\1st YEAR DTU\New folder\CONTEXT.md`
  - `E:\1st YEAR DTU\New folder\muuhu-store\AGENTS.md`
  - `E:\1st YEAR DTU\New folder\muuhu-store\CONTEXT.md`
- Inspected the supplied recording with `ffprobe` and extracted frames/contact sheet under `C:\Users\sahil\AppData\Local\Temp\muuhu-recording-184918-frames\` and `C:\Users\sahil\AppData\Local\Temp\muuhu-recording-184918-contact.jpg`.
- Inspected and tested the local route `http://localhost:3100/products/muuhu-hair-dryer`.
- Inspected component and data files in:
  - `apps/uk/src/components/integrations/KlaviyoAnalytics.tsx`
  - `apps/uk/src/components/product/VideoReviews.tsx`
  - `apps/us/src/components/product/VideoReviews.tsx`
  - `apps/uk/src/components/product/BeforeAfterGrid.tsx`
  - `apps/us/src/components/product/BeforeAfterGrid.tsx`
  - `apps/uk/src/components/ui/DeferredAutoplayVideo.tsx`
  - `apps/uk/src/components/ui/LazyAutoplayVideo.tsx`
  - `apps/us/src/components/ui/LazyAutoplayVideo.tsx`
  - `apps/uk/src/data/productSections.ts`
  - `apps/us/src/data/productSections.ts`

### Files and assets changed
- Changed:
  - `apps/uk/src/components/integrations/KlaviyoAnalytics.tsx`
  - `apps/uk/src/components/product/BeforeAfterGrid.tsx`
  - `apps/uk/src/components/product/VideoReviews.tsx`
  - `apps/uk/src/components/ui/DeferredAutoplayVideo.tsx`
  - `apps/uk/src/components/ui/LazyAutoplayVideo.tsx`
  - `apps/uk/src/data/productSections.ts`
  - `apps/us/src/components/product/BeforeAfterGrid.tsx`
  - `apps/us/src/components/product/VideoReviews.tsx`
  - `apps/us/src/components/ui/LazyAutoplayVideo.tsx`
  - `apps/us/src/data/productSections.ts`
- Added review-video poster assets in:
  - `apps/uk/public/videos/hair-dryer/posters/`
  - `apps/us/public/videos/hair-dryer/posters/`
- Added the following poster filenames in both UK and US public folders:
  - `muuhu-airpro-review-video-01-poster.jpg`
  - `muuhu-airpro-review-video-02-poster.jpg`
  - `muuhu-airpro-review-video-03-poster.jpg`
  - `muuhu-airpro-review-video-04-poster.jpg`
  - `muuhu-airpro-review-video-05-poster.jpg`
  - `muuhu-airpro-review-video-06-poster.jpg`
  - `muuhu-airpro-review-video-08-poster.jpg`
  - `muuhu-airpro-review-video-09-poster.jpg`
  - `muuhu-airpro-review-video-11-poster.jpg`

### Implementation details
- `VideoReviews.tsx` now treats every review preview as immediately source-backed:
  - Review-video data accepts `poster?: string`.
  - Each preview video receives its `poster`, `preload="auto"`, and source immediately instead of waiting for a later interaction or viewport event.
  - A poster overlay remains visible only until that individual video has a playable frame via `onCanPlay` or `onLoadedData`, preventing the black cards the user saw in the screen recording.
  - The modal opens immediately on click using the matching short/fallback preview first, then warms or upgrades the full video. This fixes the click feeling where some videos appeared not to open because full media preparation won the race against UI feedback.
- UK and US product-section review data now includes poster paths for all nine hair-dryer review videos.
- `BeforeAfterGrid.tsx` now uses a keyed, direct public image in the modal for the active story. The modal image uses the same public `/images/products/muuhu-hair-dryer/before-after-cards/...` asset already shown and preloaded outside the modal rather than Next's optimized proxy. This prevents the text from switching while a separate optimized modal image request lags behind.
- `DeferredAutoplayVideo.tsx` and `LazyAutoplayVideo.tsx` no longer pause or stop autoplay merely because the section is outside the viewport. They keep the source attached, use `preload="auto"`, and attempt playback after mount, while still respecting reduced-motion where the existing component already did.
- `KlaviyoAnalytics.tsx` was changed so the Klaviyo onsite script loads after a short idle/engagement delay instead of a long 120-second delay. The popup is still not forced open by local code; Klaviyo keeps controlling campaign rules. The change makes the popup system available early enough that its image can be ready with the popup.
- `KlaviyoAnalytics.tsx` now warms popup media injected by Klaviyo:
  - It scans current and newly added DOM nodes for `img` sources, `srcset` candidates, and CSS image URLs in inline styles or computed styles.
  - It sets Klaviyo popup images to eager, async decoding, and high fetch priority when possible.
  - It preloads the discovered image URLs through the browser cache so the popup artwork is not blank when Klaviyo displays the popup.
  - It observes relevant DOM mutations and attribute changes but avoids broad business logic changes or fabricated popup image URLs.

### Mistakes, misunderstandings, regressions, and corrections
- Previous conversion-first work removed viewport-delayed section rendering but did not fully solve black review-video cards because the carousel had no poster fallback while the video element prepared its first playable frame. The correction adds real poster files and a per-card poster overlay that disappears only when that card is ready.
- Previous before/after work made source assets eager but the modal still used a separate optimized image path, so clicking a different story could update title/body before the modal image request caught up. The correction uses the same direct public source path and keys the image by story id, so modal media and modal text switch together.
- Previous popup loading still allowed Klaviyo to arrive too late and did not warm media that Klaviyo injected dynamically. The correction reduces the Klaviyo load delay and watches/warm-loads Klaviyo image and background URLs without changing campaign rules or popup copy.
- A first browser automation attempt clicked generic elements and accidentally selected wrong overlays/cart controls instead of the actual review card and before/after story buttons. The verification was corrected by inspecting the rendered markup and targeting the actual `[role="button"]` review card and `[data-story-card]` before/after cards.
- A first local dev-server command passed `-- --port 3100`, which Next interpreted incorrectly and produced a launch problem. It was corrected to `pnpm --filter @muuhu/uk dev --port 3100`.

### Verification performed
- `git diff --check` passed, with only Windows CRLF warnings from Git and no whitespace errors.
- `pnpm --filter @muuhu/uk lint` passed with zero errors.
- `pnpm --filter @muuhu/us lint` passed with zero errors. The same five unrelated pre-existing US warnings remained: unused `Props` in the US blog slug page, native-image warnings in existing blog card/article files, unused `MuuhuProductFocus`, and unused `Image` in the US feature sections.
- `pnpm --filter @muuhu/uk exec tsc --noEmit` passed.
- `pnpm --filter @muuhu/us exec tsc --noEmit` passed.
- `pnpm --filter @muuhu/uk build` passed with Next.js 16.2.6/Turbopack and 39 routes.
- `pnpm --filter @muuhu/us build` passed with Next.js 16.2.6/Turbopack and 31 routes.
- Local UK route `http://localhost:3100/products/muuhu-hair-dryer` returned 200 and compiled.
- Browser checks on the local UK AirPro page confirmed:
  - Initial desktop after a short wait had `previewCount: 18`, `sourcedCount: 18`, `posterCount: 18`, `pausedCount: 0`, and all review previews using `preload="auto"`.
  - After scrolling to the video review area, the same page still had `previewCount: 18`, `sourcedCount: 18`, `posterCount: 18`, `pausedCount: 0`, and the first eight observed preview videos had ready state `4`.
  - Clicking the actual review-card button opened the video modal within 300ms with `modalSrc` set to the matching short video and `modalPoster` set to the matching poster.
  - Clicking before/after story cards changed from `image_1.webp` to `image_2.webp`, did not use the optimized `/_next/image` proxy, and changed the text from the first story to the second story at the same interaction point.
  - Mobile check at `390x844` showed no horizontal overflow, `previewCount: 18`, `sourcedCount: 18`, `posterCount: 18`, `pausedCount: 0`, and the Klaviyo script present.
- The local dev server process started for verification was stopped after testing. No unrelated process was intentionally killed.

### Checks not performed and reason
- A forced real Klaviyo popup display was not performed because the popup campaign display rules, account targeting, and timing are controlled by Klaviyo. Instead, the verification confirmed the Klaviyo script loads locally and the code now observes/warm-loads Klaviyo-injected image sources whenever they appear.
- A full cold-cache sweep of every remote production asset was not performed before committing because the requested fixes were local source-level media readiness repairs and all local build/type/browser checks passed. The GitHub push is expected to trigger normal Vercel production builds.

### Git, commit, push, and deployment actions
- Before committing, a final `git fetch --all --prune` reported no incoming remote change and `git rev-list --left-right --count HEAD...origin/main` returned `0 0`.
- This task is to be staged and committed on the existing `main` branch with the scoped media repair files, poster assets, and this context record. The intended commit subject is `fix: stabilize AirPro media loading`.
- The user explicitly requested a GitHub push after verification. No branch or pull request will be created for this task.
- No direct Vercel CLI deployment, manual dashboard deployment, production promotion, rollback, domain update, or settings change is part of this task. Vercel, if it runs, must run only from GitHub after the push.

### Remaining uncertainty and future guidance
- The review-video cards now have poster fallbacks and immediately attached sources, so black cards should not be visible while videos prepare. If a user connection is extremely slow, the poster is the intended temporary visual until playback is ready.
- Do not reintroduce viewport-based pausing for these autoplay sections unless the user explicitly asks for a performance-first tradeoff. The user's latest instruction is that autoplay video must continue in the background and loop.
- Do not delay Klaviyo to 120 seconds again for the AirPro page. The user specifically wants popup imagery to load with the popup rather than after it.
