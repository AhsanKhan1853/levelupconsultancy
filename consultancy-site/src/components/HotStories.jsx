import { useEffect, useState } from "react";
import { getHotStories } from "../api/stories";
import StoryCard from "./StoryCard";

export default function HotStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHotStories()
      .then((data) => setStories(data.results ?? data))
      .catch(() => setStories([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && stories.length === 0) return null;

  return (
    <section
      id="SuccessStories"
      className="grain relative bg-primary text-cream py-20 sm:py-24 scroll-mt-24"
    >
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            They were nervous too
          </h2>
          <p className="mt-4 text-lg text-cream/75">
            Notes from students who've already landed, settled in, and started
            their first semester.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-7 mt-14" aria-busy="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-52 bg-cream/10 rounded-pebble animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-7 mt-14">
            {stories.map((s, i) => (
              <StoryCard key={s.id} story={s} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}