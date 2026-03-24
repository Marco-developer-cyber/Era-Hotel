import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-32 bg-[#0A0805] relative">
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-[#F5EDD6] tracking-wide">
            Find Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`location-info ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#C9A84C]" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[#F5EDD6] mb-2">Address</h3>
                  <p className="font-body text-[#F5EDD6]/70">
                    Al-Khorezmi Street<br />
                    Urgench, Khorezm Region<br />
                    Uzbekistan, 220100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#C9A84C]" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[#F5EDD6] mb-2">Phone</h3>
                  <p className="font-body text-[#F5EDD6]/70">+998 62 226 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#C9A84C]" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[#F5EDD6] mb-2">Email</h3>
                  <p className="font-body text-[#F5EDD6]/70">reservations@erahotel.uz</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`location-map ${isVisible ? 'visible' : ''}`}>
            <div className="aspect-square bg-[#1C1208] rounded-sm overflow-hidden relative border border-[#C9A84C]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-30">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                  <path d="M100,20 L100,180 M20,100 L180,100" stroke="#C9A84C" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="8" fill="#C9A84C" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-[#C9A84C] mx-auto mb-2" size={48} />
                  <p className="font-display text-xl text-[#F5EDD6]">Urgench</p>
                  <p className="font-body text-sm text-[#F5EDD6]/60">Khorezm Region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
