import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  country: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    rating: 5,
    text: 'Absolutely stunning hotel. The blend of traditional Uzbek design with modern amenities is breathtaking. The staff made us feel like royalty.',
  },
  {
    name: 'James Chen',
    country: 'Singapore',
    rating: 5,
    text: 'ERA Hotel exceeded all expectations. The attention to detail, the comfort, and the location made our visit to Urgench unforgettable.',
  },
  {
    name: 'Maria González',
    country: 'Spain',
    rating: 5,
    text: 'A hidden gem along the Silk Road. The hospitality is exceptional, and the rooms are beautifully designed. I will definitely return.',
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#1C1208] relative">
      <div className="grain-overlay" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-[#F5EDD6] tracking-wide">
            Guest Stories
          </h2>
        </div>

        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-[#C9A84C] fill-[#C9A84C]" size={20} />
                ))}
              </div>

              <p className="font-display text-2xl md:text-3xl text-[#F5EDD6] italic text-center mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="text-center">
                <p className="font-body text-[#C9A84C] text-lg">{testimonial.name}</p>
                <p className="font-body text-[#F5EDD6]/60 text-sm mt-1">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
