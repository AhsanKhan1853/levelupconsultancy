export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl">Level Up Consulting</h3>
          <p className="mt-3 text-sm">Guiding students to top universities worldwide since 2004.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services">Services</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#process">Process</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">+92 300 0000000</p>
          <p className="text-sm">info@globalreach.com</p>
        </div>
      </div>
      <p className="text-center text-xs mt-10 text-gray-500">
        © {new Date().getFullYear()} GlobalReach Consultants. All rights reserved.
      </p>
    </footer>
  );
}