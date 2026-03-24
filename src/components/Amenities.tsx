import { useEffect, useRef, useState } from 'react';
import { UtensilsCrossed, Waves, Wifi, Plane, Users, Building2, Sun, Clock } from 'lucide-react';

const amenities = [
  { icon: UtensilsCrossed, label: 'Restaurant' },
  { icon: Waves, label: 'Spa' },
  { icon: Waves, label: 'Pool' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Plane, label: 'Airport Transfer' },
  { icon: Users, label: 'Conference Hall' },
  { icon: Sun, label: 'Rooftop Terrace' },
  { icon: Clock, label: '24h Reception' },
];

export default function Amenities() {
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
    <section id="amenities" ref={sectionRef} className="py-32 bg-[#0A0805] relative">
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-[#F5EDD6] tracking-wide">
            Amenities
          </h2>
          <p className="font-body text-[#F5EDD6]/60 mt-4 text-lg">
            Everything you need for a perfect stay
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`amenity-item ${isVisible ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="amenity-icon-wrapper">
                <amenity.icon className="amenity-icon" size={32} />
              </div>
              <p className="font-body text-[#F5EDD6] mt-4 tracking-wide">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
