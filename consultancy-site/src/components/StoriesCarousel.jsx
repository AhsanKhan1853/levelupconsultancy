import { useState } from "react";
import { stories } from "../Data/reviewsData";
import { useAutoScroll } from "../hooks/useAutoScroll";
import StoryCard from "./StoryCard";

export default function StoriesCarousel() {
  const { ref, containerProps } = useAutoScroll({ speed: 0.5 });
  const [expandedKey, setExpandedKey] = useState(null);
  const loop = [...stories, ...stories, ...stories, ...stories];

  return (
    <section id="stories" className="relative bg-night py-20 sm:py-24 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-smoke leading-tight">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-ash">
            Real students, real placements — see where they landed.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        {...containerProps}
        className="flex gap-6 mt-12 px-5 xl:px-[max(1.25rem,calc((100vw-80rem)/2))] overflow-x-auto pb-6 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((story, i) => {
          const key = story.name + "-" + i;
          return (
            <StoryCard
              key={key}
              story={story}
              expanded={expandedKey === key}
              onExpand={() => setExpandedKey(key)}
            />
          );
        })}
      </div>
    </section>
  );
}