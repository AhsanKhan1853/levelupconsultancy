import { useState } from "react";
import { navLinks } from "../data/siteData";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="text-2xl font-extrabold text-primary">
          Global<span className="text-accent">Reach</span>
        </a>

        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        
          href="#contact"
          className="hidden md:inline-block bg-accent text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        <a>
          Free Consultation
        </a>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-accent text-white text-center py-2 rounded-full font-semibold">
            Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}