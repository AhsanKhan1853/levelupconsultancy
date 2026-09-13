import { useState } from "react";
import { navLinks } from "../data/siteData";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow-sm z-50">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#home" className="flex items-center gap-2 whitespace-nowrap">
          <img src={logo} alt="LevelUp Consulting logo" className="h-8 sm:h-10 w-auto" />
          <span className="text-xl sm:text-2xl font-extrabold text-primary">
            Level<span className="text-accent">Up</span> Consulting
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-6 xl:gap-8">
              <a href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </a>
              {i < navLinks.length - 1 && (
                <span className="inline-block text-accent text-lg select-none" style={{ transform: "rotate(15deg)" }}>
                  //
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* <a>
          Free Consultation
        </a> */}

        <button
          className="lg:hidden text-2xl shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <div className="hidden lg:flex absolute right-6 lg:right-8 top-full mt-0 gap-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-b-lg shadow-sm">
          
          <a  href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaInstagram className="text-xs" />
          </a>
          
           <a href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <FaFacebookF className="text-xs" />
          </a>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}

          {/* <a>
            Free Consultation
          </a> */}

          <div className="flex gap-3 pt-2 border-t">
            
             <a href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>
            
             <a href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaFacebookF className="text-sm" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}