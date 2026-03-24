import { useEffect, useRef, useState } from 'react';
import { Wifi, Tv, Wind } from 'lucide-react';

interface Room {
  name: string;
  price: number;
  features: string[];
  image: string;
}

const rooms: Room[] = [
  {
    name: 'Standard Room',
    price: 89,
    features: ['Free WiFi', 'Smart TV', 'Climate Control'],
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Deluxe Suite',
    price: 149,
    features: ['King Bed', 'City View', 'Mini Bar'],
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Presidential Suite',
    price: 299,
    features: ['Private Terrace', 'Jacuzzi', 'Butler Service'],
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Rooms() {
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
    <section id="rooms" ref={sectionRef} className="py-32 bg-[#1C1208] relative">
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <svg width="60" height="60" viewBox="0 0 60 60" className="ornament-section">
              <path
                d="M30,10 L32,28 L50,30 L32,32 L30,50 L28,32 L10,30 L28,28 Z"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.5"
              />
              <circle cx="30" cy="30" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
            </svg>
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-[#F5EDD6] tracking-wide">
            Rooms & Suites
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} delay={index * 150} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room, delay, isVisible }: { room: Room; delay: number; isVisible: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`room-card ${isVisible ? 'visible' : ''}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        animationDelay: `${delay}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="room-card-image-wrapper">
        <div
          className="room-card-image"
          style={{ backgroundImage: `url(${room.image})` }}
        />
        <div className="room-card-overlay">
          <div className="room-card-overlay-content">
            <h3 className="font-display text-3xl text-[#F5EDD6] mb-2">{room.name}</h3>
            <p className="font-body text-[#C9A84C] text-lg">From ${room.price} / night</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-around mb-6">
          {room.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="text-center">
              <div className="text-[#C9A84C] mb-2 flex justify-center">
                {i === 0 && <Wifi size={20} />}
                {i === 1 && <Tv size={20} />}
                {i === 2 && <Wind size={20} />}
              </div>
              <span className="text-xs text-[#F5EDD6]/60 font-body">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-3 border border-[#C9A84C] text-[#C9A84C] rounded hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300 font-body tracking-wide">
          View Room
        </button>
      </div>
    </div>
  );
}
