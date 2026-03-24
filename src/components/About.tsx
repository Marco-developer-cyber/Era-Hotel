import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-32 bg-[#0A0805] relative">
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`about-image ${isVisible ? 'visible' : ''}`}>
            <div className="aspect-[4/5] bg-gradient-to-br from-[#8B6914] to-[#1C1208] rounded-sm overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 border border-[#C9A84C]/20 m-4" />
            </div>
          </div>

          <div className={`about-content ${isVisible ? 'visible' : ''}`}>
            <h2 className="font-display text-5xl md:text-6xl text-[#F5EDD6] mb-8 tracking-wide leading-tight">
              Born from the spirit of Khorezm
            </h2>

            <div className="space-y-6 font-body text-[#F5EDD6]/80 text-lg leading-relaxed">
              <p>
                In the heart of Urgench, where ancient caravans once rested along the Silk Road, ERA Hotel stands as a modern sanctuary that honors centuries of Central Asian hospitality.
              </p>

              <div className="flex justify-center my-8">
                <svg width="100" height="20" viewBox="0 0 100 20">
                  <path
                    d="M10,10 L30,10 M35,5 L35,15 M40,10 L50,10 M55,5 L60,10 L55,15 M65,10 L90,10"
                    stroke="#C9A84C"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </svg>
              </div>

              <p>
                Each of our 48 rooms tells a story of craftsmanship, blending traditional Uzbek aesthetics with contemporary comfort. From the golden hues that echo Khiva's ancient architecture to the modern amenities that define luxury, every detail has been thoughtfully curated.
              </p>

              <p>
                We invite you to experience the warmth of Khorezm hospitality, where every guest is treated like family, and every stay becomes a cherished memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
