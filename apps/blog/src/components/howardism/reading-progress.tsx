"use client";

import { useEffect, useState } from "react";

import type { ArticleHeading } from "@/app/(blog)/articles/service";
import {
  HEADING_ACTIVE_OFFSET_PX,
  measureArticleScroll,
  subscribeToArticleScroll,
} from "@/hooks/use-article-scroll";

interface ReadingProgressProps {
  headings: ArticleHeading[];
}

interface TickPosition {
  id: string;
  isPast: boolean;
  offset: number;
}

/**
 * Reading progress through the article body, rendered as the site bar's bottom
 * edge. Tracks scroll position relative to the page's `<article>` element so it
 * reflects body progress rather than whole-document scroll. H2 headings are
 * marked as ticks at their real offsets, filled in once scrolled past.
 */
export function ReadingProgress({ headings }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [ticks, setTicks] = useState<TickPosition[]>([]);

  useEffect(() => {
    const h2Headings = headings.filter((h) => h.depth === 2);

    const compute = () => {
      const scroll = measureArticleScroll();
      if (!scroll) {
        setProgress(0);
        setTicks([]);
        return;
      }
      setProgress(scroll.progress);

      const nextTicks: TickPosition[] = [];
      for (const heading of h2Headings) {
        const el = document.getElementById(heading.id);
        if (!el) {
          continue;
        }
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        nextTicks.push({
          id: heading.id,
          isPast: window.scrollY >= elTop - HEADING_ACTIVE_OFFSET_PX,
          offset:
            scroll.scrollable > 0
              ? Math.min(
                  1,
                  Math.max(0, (elTop - scroll.articleTop) / scroll.scrollable)
                )
              : 0,
        });
      }
      setTicks(nextTicks);
    };

    return subscribeToArticleScroll(compute);
  }, [headings]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px]"
    >
      <div
        className="h-full origin-left bg-[var(--article-accent,var(--brand))] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />

      {ticks.length > 0 && (
        <div className="absolute inset-0">
          {ticks.map((tick) => (
            <div
              className={
                tick.isPast
                  ? "absolute top-0 h-full w-px bg-[var(--article-accent,var(--brand))]/30"
                  : "absolute top-0 h-full w-px bg-background/50"
              }
              key={tick.id}
              style={{ left: `${tick.offset * 100}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
