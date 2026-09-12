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
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Experiences That Speak for Us</h2>

        {loading ? (
          <p className="text-center mt-12 text-blue-200">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {stories.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}