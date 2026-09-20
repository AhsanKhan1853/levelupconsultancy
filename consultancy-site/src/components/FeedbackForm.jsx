import { useState } from "react";
import { submitFeedback } from "../api/feedback";

const ADMIN_WHATSAPP_NUMBER = "923119653438"; // <-- replace with real number, country code, no + or 00

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", rating: 5, message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildWhatsAppMessage = () => {
    return (
      `New Feedback Received\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Rating: ${"★".repeat(form.rating)}${"☆".repeat(5 - form.rating)} (${form.rating}/5)\n` +
      `Message: ${form.message}`
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Still saved in Django admin under Feedback for records
      await submitFeedback(form);
    } catch {
      setStatus("error");
      return;
    }

    // Open WhatsApp pre-filled with the feedback, addressed to admin
    const message = encodeURIComponent(buildWhatsAppMessage());
    const waUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, "_blank");

    setStatus(null);
    setForm({ name: "", email: "", rating: 5, message: "" });
  };

  return (
    <section id="feedback" className="bg-cream py-20 sm:py-24 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-5">
        <div className="bg-slate rounded-pebble shadow-cozy p-8 sm:p-11">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            How did we do?
          </h2>
          <p className="mt-3 text-ink/65">
            If we got something right, tell us. If we didn't, tell us that too —
            it goes straight to the people who can fix it.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-5 mt-9">
            <label className="grid gap-1.5">
              <span className="text-sm font-medium text-ink/70">Your name</span>
              <input
                name="name"
                required
                placeholder="Ayesha Khan"
                value={form.name}
                onChange={handleChange}
                className="field"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-sm font-medium text-ink/70">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="field"
              />
            </label>

            <fieldset className="border-0 p-0 m-0">
              <legend className="text-sm font-medium text-ink/70 mb-1.5">Rating</legend>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setForm({ ...form, rating: r })}
                    aria-label={`${r} out of 5`}
                    aria-pressed={r === form.rating}
                    className={`text-3xl leading-none transition-transform hover:scale-110 ${
                      r <= form.rating ? "text-accent" : "text-rule"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-1.5">
              <span className="text-sm font-medium text-ink/70">What happened?</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your experience with us…"
                value={form.message}
                onChange={handleChange}
                className="field resize-y"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-cream py-3.5 rounded-full font-semibold shadow-cozy hover:bg-accent hover:shadow-lamp transition-all duration-300 disabled:opacity-50 disabled:hover:bg-primary"
            >
              {status === "sending" ? "Sending…" : "Send feedback on WhatsApp"}
            </button>

            <p className="text-center text-sm text-ink/50 -mt-1">
              We save a copy and open WhatsApp so you can keep talking to us there.
            </p>

            {status === "error" && (
              <p className="text-center text-sm font-medium text-[#A13A1E]">
                That didn't send. Check your connection and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}