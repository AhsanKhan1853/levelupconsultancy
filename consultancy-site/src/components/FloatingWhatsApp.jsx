import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923119653438";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to know more about your services."
)}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-emerald-500 
                 flex items-center justify-center shadow-lg hover:bg-emerald-400 
                 hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </a>
  );
}