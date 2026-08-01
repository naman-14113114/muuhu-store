import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { ExpertSection } from "./ExpertSection";
import { VideoReviews } from "./VideoReviews";
import { WavelengthSelector } from "./WavelengthSelector";

export function DeferredVideoReviews() {
  return <VideoReviews />;
}

export function DeferredBeforeAfterGrid() {
  return <BeforeAfterGrid />;
}

export function DeferredWavelengthSelector() {
  return <WavelengthSelector />;
}

export function DeferredExpertSection() {
  return <ExpertSection />;
}
