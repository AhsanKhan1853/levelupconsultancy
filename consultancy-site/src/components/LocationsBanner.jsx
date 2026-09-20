export default function LocationsBanner() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />

      <div className="max-w-5xl mx-auto px-5 text-center relative">
        <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm">
          Visit Us In Person
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
          Visa Application Support, Wherever You Are
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Drop off documents or get in-person visa file support at our partner locations —
          available at Gerry's and FedEx Express branches near you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <h3 className="font-bold text-lg">Gerry's</h3>
            <p className="text-sm text-blue-100 mt-2">
              Visit any Gerry's branch for document drop-off and visa file assistance.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <h3 className="font-bold text-lg">FedEx Express</h3>
            <p className="text-sm text-blue-100 mt-2">
              Available at FedEx Express locations for courier and document handling support.
            </p>
          </div>
        </div>

        
          href="#contact"
          className="inline-block mt-10 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        <a>
          Find a Location Near You
        </a>
      </div>
    </section>
  );
}