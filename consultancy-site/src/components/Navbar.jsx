import { useState } from "react";
import { navLinks } from "../data/siteData";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#home" className="flex items-center gap-2 whitespace-nowrap">
          <img src={logo} alt="LevelUp Consulting logo" className="h-8 sm:h-10 w-auto" />
          <span className="text-xl sm:text-2xl font-extrabold text-primary">
            Level<span className="text-accent">Up</span> Consulting
          </span>
        </a>

        <nav className="hidden lg:flex gap-6 xl:gap-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
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
        </div>
      )}
    </header>
  );
}