import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0805] border-t border-[#C9A84C]/10 relative">
      <div className="grain-overlay" />

      <div className="footer-watermark">ERA</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl text-[#C9A84C] mb-4 tracking-[0.15em]">ERA</h3>
            <p className="font-body text-[#F5EDD6]/60 mb-6 max-w-md">
              Where the Silk Road meets modern luxury. Experience unforgettable hospitality in the heart of Urgench, Uzbekistan.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="social-icon"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="social-icon"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="social-icon"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="social-icon"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl text-[#F5EDD6] mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-[#F5EDD6]/60">
              <li><a href="#about" className="hover:text-[#C9A84C] transition-colors">About</a></li>
              <li><a href="#rooms" className="hover:text-[#C9A84C] transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-[#C9A84C] transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-[#C9A84C] transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-[#C9A84C] transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-[#F5EDD6] mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-[#F5EDD6]/60 text-sm">
              <li>Al-Khorezmi Street</li>
              <li>Urgench, Uzbekistan</li>
              <li className="pt-2">+998 62 226 0000</li>
              <li>reservations@erahotel.uz</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#C9A84C]/10 text-center">
          <p className="font-body text-[#F5EDD6]/40 text-sm">
            ERA Hotel © 2025 · Urgench, Uzbekistan · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
