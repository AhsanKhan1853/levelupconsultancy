import appointmentImg from "../assets/features/appointment-booking.png";
import fileImg from "../assets/features/file-preparation.png";
import consultImg from "../assets/features/online-consultation.jpg";
import infoImg from "../assets/features/support.png";

const features = [
  {
    title: "Appointment Booking",
    desc: "Schedule your visa consultation at a time that works for you.",
    image: appointmentImg,
  },
  {
    title: "Visa File Preparation",
    desc: "Complete document review and preparation handled by our experts.",
    image: fileImg,
  },
  {
    title: "24/7 Online Consultation",
    desc: "Get answers anytime — our advisors are just a message away.",
    image: consultImg,
  },
  {
    title: "Visa Info & Consultation",
    desc: "Clear, personalized guidance on requirements for your destination.",
    image: infoImg,
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center text-primary">How We Help You</h2>
        <p className="text-center text-gray-500 mt-2">Support at every stage of your visa journey.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl overflow-hidden h-64 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 8px 16px 10px rgba(0, 0, 0, 0.06)" }}
            >
              <img
                src={f.image}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-bold text-base sm:text-lg">{f.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-200 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}