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
            {status === "sending" ? "Sending..." : "Submit & Continue on WhatsApp"}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}