import { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-48 bg-[#1C1208] relative overflow-hidden">
      <div className="grain-overlay" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`experience-line-left ${isVisible ? 'animate' : ''}`} />
        <div className={`experience-line-right ${isVisible ? 'animate' : ''}`} />

        <p className="font-display text-4xl md:text-5xl text-[#F5EDD6] italic leading-relaxed">
          "Every stay at ERA is a journey through time and comfort."
        </p>
      </div>
    </section>
  );
}
