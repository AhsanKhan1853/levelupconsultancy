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
    <section id="contact" className="py-16 bg-accent text-white text-center">
      <h2 className="text-3xl font-extrabold">Not Sure Where to Begin?</h2>
      <p className="mt-2">Let our experts guide you to the right choice.</p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 grid gap-4 px-5">
        <input
          name="name"
          required
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-lg text-gray-800"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-lg text-gray-800"
        />
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-3 rounded-lg text-gray-800"
        />
        <select
          name="interest"
          required
          value={form.interest}
          onChange={handleChange}
          className="p-3 rounded-lg text-gray-800"
        >
          <option value="" disabled>
            Area of Interest
          </option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-primary py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}