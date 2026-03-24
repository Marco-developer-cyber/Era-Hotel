import { useEffect, useState } from 'react';

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    const particlesTimer = setTimeout(() => setParticlesReady(true), 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(particlesTimer);
    };
  }, []);

  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 6,
  }));

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="grain-overlay" />

      <div className="rotating-ornament">
        <svg width="300" height="300" viewBox="0 0 100 100" className="opacity-10">
          <path
            d="M50,10 L54,46 L90,50 L54,54 L50,90 L46,54 L10,50 L46,46 Z M50,30 L52,48 L70,50 L52,52 L50,70 L48,52 L30,50 L48,48 Z"
            fill="#C9A84C"
          />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
        </svg>
      </div>

      {particlesReady && particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6">
        <div className="mb-6 flex justify-center">
          <svg width="60" height="60" viewBox="0 0 60 60" className="ornament-top">
            <path
              d="M30,5 L32,28 L55,30 L32,32 L30,55 L28,32 L5,30 L28,28 Z"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className={`hero-title-wrapper ${revealed ? 'revealed' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-letter" style={{ animationDelay: '0.1s' }}>E</span>
            <span className="hero-letter" style={{ animationDelay: '0.2s' }}>R</span>
            <span className="hero-letter" style={{ animationDelay: '0.3s' }}>A</span>
          </h1>
        </div>

        <p className="hero-subtitle">Urgench · Uzbekistan</p>

        <p className="hero-tagline">
          Where the Silk Road meets modern luxury
        </p>

        <a
          href="#booking"
          className="hero-cta"
        >
          Explore & Book
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#C9A84C] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#C9A84C] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
