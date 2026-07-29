"use client";

import {
  useEffect,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { runAfterEngagement } from "@/lib/loadOnEngagement";

type LottieComponent = ComponentType<{
  animationData: unknown;
  className?: string;
  loop?: boolean;
}>;

export function DeferredLottie({
  className,
  fallback,
  src,
}: {
  className?: string;
  fallback: ReactNode;
  src: string;
}) {
  const [animation, setAnimation] = useState<{
    Component: LottieComponent;
    data: unknown;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const cleanup = runAfterEngagement(() => {
      void Promise.all([
        import("lottie-react"),
        fetch(src).then((response) => {
          if (!response.ok) {
            throw new Error(`Unable to load animation: ${response.status}`);
          }

          return response.json() as Promise<unknown>;
        }),
      ])
        .then(([module, data]) => {
          if (!cancelled) {
            setAnimation({
              Component: module.default as LottieComponent,
              data,
            });
          }
        })
        .catch(() => {
          // The static icon remains visible if the optional animation fails.
        });
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [src]);

  if (!animation) {
    return <span className={className}>{fallback}</span>;
  }

  const { Component, data } = animation;

  return (
    <span className={className}>
      <Component animationData={data} loop />
    </span>
  );
}
