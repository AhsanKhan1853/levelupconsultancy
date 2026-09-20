import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../Data/siteData";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923119653438";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (href) => {
    setOpen(false);

    // Plain page routes (e.g. "/services") just navigate normally
    if (!href.startsWith("#")) {
      navigate(href);
      return;
    }

    // Hash links scroll to a section on the home page
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        navigate(href, { replace: true });
      } else {
        navigate(href);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-night border-b border-rule z-50">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goToSection("#home");
          }}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <img src={logo} alt="LevelUp Consulting logo" className="h-8 sm:h-10 w-auto" />
          <span className="font-display text-xl sm:text-2xl font-bold text-smoke">
            Level<span className="text-accent">Up</span> Consulting
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-ash">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-1 xl:gap-8">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(link.href);
                }}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </a>
              {i < navLinks.length - 1 && (
                <span
                  className="inline-block text-accent text-lg select-none"
                  style={{ transform: "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </span>
          ))}
        </nav>
          <a     
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-emerald-500 text-night font-bold px-5 py-2.5 rounded-full hover:bg-emerald-400 transition-colors"
        >
          <FaWhatsapp className="text-lg" />
          WhatsApp Us
        </a>

      <div className="flex items-center gap-2 lg:hidden">
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp Us"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-500 text-night hover:bg-emerald-400 transition-colors"
  >
    <FaWhatsapp className="text-base" />
  </a>

  <button
    className="text-2xl shrink-0 text-smoke"
    onClick={() => setOpen(!open)}
    aria-label="Toggle menu"
    aria-expanded={open}
  >
    {open ? <HiX /> : <HiMenu />}
  </button>
</div>

        {/* socials sit in a small panel hanging below the bar, right-aligned */}
        <div className="hidden lg:flex absolute right-6 lg:right-8 top-full mt-0 gap-3 bg-night border border-t-0 border-rule px-3 py-1.5 rounded-b-lg">
          <a
            href="https://www.instagram.com/levelupconsultingpk?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-slate text-smoke hover:bg-accent hover:text-night transition-colors"
          >
            <FaInstagram className="text-xs" />
          </a>

          <a
            href="https://www.facebook.com/share/1EbNUChDgK/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-slate text-smoke hover:bg-accent hover:text-night transition-colors"
          >
            <FaFacebookF className="text-xs" />
          </a>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-night border-t border-rule px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (

            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                goToSection(link.href);
              }}
              className="text-ash hover:text-accent transition-colors"
            >
              {link.label}
            </a>

            
          ))}
           <a        
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-500 text-night font-bold px-5 py-2.5 rounded-full hover:bg-emerald-400 transition-colors"
        >
          <FaWhatsapp className="text-lg" />
          WhatsApp Us
        </a>
          <div className="flex gap-3 pt-3 border-t border-rule">
            <a
              href="https://www.instagram.com/levelupconsultingpk?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate text-smoke hover:bg-accent hover:text-night transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="https://www.facebook.com/share/1EbNUChDgK/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate text-smoke hover:bg-accent hover:text-night transition-colors"
            >
              <FaFacebookF className="text-sm" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}