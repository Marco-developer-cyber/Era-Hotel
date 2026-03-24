import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 48, label: 'Rooms', suffix: '' },
  { value: 5, label: 'Years of Excellence', suffix: '' },
  { value: 12, label: 'Amenities', suffix: '' },
  { value: 4.9, label: 'Rating', suffix: '★' },
];

export default function Stats() {
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
    <section ref={sectionRef} className="py-20 bg-[#1C1208] border-t border-b border-[#C9A84C]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div className="text-center relative">
      <div className="font-display text-5xl md:text-6xl text-[#C9A84C] mb-2">
        {stat.value % 1 === 0 ? Math.round(count) : count.toFixed(1)}
        {stat.suffix}
      </div>
      <div className={`stat-underline ${isVisible ? 'animate-grow' : ''}`} style={{ animationDelay: `${delay}ms` }} />
      <div className="font-body text-sm tracking-wide text-[#F5EDD6]/70 mt-4">
        {stat.label}
      </div>
    </div>
  );
}
