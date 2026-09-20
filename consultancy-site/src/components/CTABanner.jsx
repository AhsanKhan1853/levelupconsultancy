import { useState } from "react";

const ADMIN_WHATSAPP_NUMBER = "923119653438"; // no + sign, no spaces, no leading 00

const INTEREST_OPTIONS = [
  "Study Abroad Consultation",
  "Visa Assistance",
  "Scholarship Guidance",
  "Test Preparation (IELTS/PTE)",
  "Accommodation Support",
  "Work Visa",
  "Visit Visa",
  "Other",
];

export default function CTABanner() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildWhatsAppMessage = () => {
    return (
      `New Consultation Request\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Interested In: ${form.interest}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(buildWhatsAppMessage());
    const waUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, "_blank");

    setForm({ name: "", email: "", phone: "", interest: "" });
  };

  return (
    <section
      id="contact"
      className="grain relative bg-primary py-20 sm:py-24 scroll-mt-24"
    >
      <div className="relative max-w-5xl mx-auto px-5 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        {/* the invitation */}
        <div className="text-cream">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Not sure where to begin?
          </h2>
          <p className="mt-5 text-lg text-cream/75 leading-relaxed">
            Most people arrive here with half a plan and a lot of questions.
            That's the normal place to start. Leave your details and a counselor
            picks it up on WhatsApp — usually the same day.
          </p>

          <ul className="mt-8 space-y-3 text-cream/85">
            {[
              "The first consultation costs nothing",
              "One counselor stays with your file start to finish",
              "Bring your parents — most students do",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                />
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* the form, on its own warm sheet */}
        <form
          onSubmit={handleSubmit}
          className="bg-cream rounded-pebble shadow-cozy-lg p-7 sm:p-9 grid gap-4"
        >
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-ink/70">Full name</span>
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

          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-ink/70">Phone</span>
            <input
              name="phone"
              required
              placeholder="0300 0000000"
              value={form.phone}
              onChange={handleChange}
              className="field"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-ink/70">What's on your mind?</span>
            <select
              name="interest"
              required
              value={form.interest}
              onChange={handleChange}
              className="field"
            >
              <option value="" disabled>
                Choose one
              </option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-2 bg-accent text-white py-3.5 rounded-full font-semibold shadow-lamp hover:bg-primary transition-colors duration-300"
          >
            Start the conversation
          </button>

          <p className="text-center text-sm text-ink/50">
            Opens WhatsApp with your details filled in.
          </p>
        </form>
      </div>
    </section>
  );
}