export default function CTABanner() {
  return (
    <section id="contact" className="py-16 bg-accent text-white text-center">
      <h2 className="text-3xl font-extrabold">Not Sure Where to Begin?</h2>
      <p className="mt-2">Let our experts guide you to the right choice.</p>
      <form className="max-w-xl mx-auto mt-8 grid gap-4 px-5">
        <input className="p-3 rounded-lg text-gray-800" placeholder="Full Name" />
        <input className="p-3 rounded-lg text-gray-800" placeholder="Email Address" />
        <input className="p-3 rounded-lg text-gray-800" placeholder="Phone Number" />
        <button className="bg-primary py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Submit
        </button>
      </form>
    </section>
  );
}