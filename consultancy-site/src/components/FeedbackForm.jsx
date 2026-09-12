import { useState } from "react";
import { submitFeedback } from "../api/feedback";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", rating: 5, message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitFeedback(form);
      setStatus("success");
      setForm({ name: "", email: "", rating: 5, message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Share Your Feedback</h2>
        <p className="text-center text-gray-500 mt-2">Tell us about your experience with us.</p>

        <form onSubmit={handleSubmit} className="grid gap-4 mt-10">
          <input
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <div>
            <label className="text-sm text-gray-600">Rating</label>
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setForm({ ...form, rating: r })}
                  className={`text-2xl ${r <= form.rating ? "text-accent" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your feedback..."
            value={form.message}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "sending" ? "Submitting..." : "Submit Feedback"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm text-center">Thanks! Your feedback was submitted.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}