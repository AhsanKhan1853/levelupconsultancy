import whatsappIcon from "../assets/whatsapp-logo.webp";

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
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full overflow-hidden 
                 shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
    </a>
  );
}