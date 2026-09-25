import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ADMIN_WHATSAPP_NUMBER = "923119653438";

export default function Footer() {
  return (
    <footer className="grain relative bg-bark text-cream/70">
      {/* a soft hill matching the one under the hero, closing the page the
          same way it opened */}
      {/* <svg
        className="w-full h-12 sm:h-16 text-primary"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0c180 46 340 60 520 52s330-52 512-46c130 4 278 32 408 40V0Z" fill="currentColor" />
      </svg> */}

      <div className="relative max-w-7xl mx-auto px-5 pt-14 pb-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" aria-hidden="true" className="h-9 w-auto" />
            <span className="font-display text-xl font-semibold text-cream">
              Level<span className="text-accent">Up</span> Consulting
            </span>
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed">
            Guiding students to universities worldwide since 2004 — and picking
            up the phone long after they've landed.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/levelupconsultingpk?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-accent transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a
              href="https://www.facebook.com/share/1EbNUChDgK/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-accent transition-colors"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href={`https://wa.me/${ADMIN_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-accent transition-colors"
            >
              <FaWhatsapp className="text-sm" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-cream font-semibold text-lg">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/destinations" className="hover:text-accent transition-colors">Destinations</Link></li>
            <li><Link to="/opportunities" className="hover:text-accent transition-colors">Opportunities</Link></li>
            <li><a href="#process" className="hover:text-accent transition-colors">How it works</a></li>
            <li><a href="#SuccessStories" className="hover:text-accent transition-colors">Student stories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-cream font-semibold text-lg">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li>
              <a href="tel:+923119653438" className="hover:text-accent transition-colors">
                +92 311 9653438
              </a>
            </li>
            <li>
              <a href="mailto:levelupconsultingpk@gmail.com" className="hover:text-accent transition-colors">
                levelupconsultingpk@gmail.com
              </a>
            </li>
            <li className="pt-1">Near Gerry's FedEx Office, Islamabad</li>
            <li className="text-cream/50">Mon–Sat, 10am – 7pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="max-w-7xl mx-auto px-5 py-6 text-center text-sm text-cream/45">
          © {new Date().getFullYear()} LevelUp Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}