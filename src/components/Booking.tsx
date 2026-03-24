import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export default function Booking() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="booking" ref={sectionRef} className="py-32 bg-[#1C1208] relative">
      <div className="grain-overlay" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-[#F5EDD6] tracking-wide mb-4">
            Ready for an unforgettable stay?
          </h2>
          <p className="font-body text-[#F5EDD6]/60 text-lg">
            Reserve your room and experience Silk Road luxury
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`booking-form ${isVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="booking-input-group">
              <label className="booking-label">Check-in</label>
              <input
                type="date"
                required
                className="booking-input"
              />
            </div>

            <div className="booking-input-group">
              <label className="booking-label">Check-out</label>
              <input
                type="date"
                required
                className="booking-input"
              />
            </div>

            <div className="booking-input-group">
              <label className="booking-label">Guests</label>
              <select required className="booking-input">
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>

            <div className="booking-input-group">
              <label className="booking-label">Room Type</label>
              <select required className="booking-input">
                <option value="">Select room type</option>
                <option value="standard">Standard Room - $89</option>
                <option value="deluxe">Deluxe Suite - $149</option>
                <option value="presidential">Presidential Suite - $299</option>
              </select>
            </div>

            <div className="booking-input-group">
              <label className="booking-label">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="booking-input"
              />
            </div>

            <div className="booking-input-group">
              <label className="booking-label">Phone</label>
              <input
                type="tel"
                required
                placeholder="+998 XX XXX XXXX"
                className="booking-input"
              />
            </div>
          </div>

          <div className="booking-input-group mt-6">
            <label className="booking-label">Email</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="booking-input"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`booking-submit ${isSubmitting ? 'submitting' : ''} ${isSuccess ? 'success' : ''}`}
          >
            {isSuccess ? (
              <span className="flex items-center justify-center gap-2">
                <Check size={20} />
                Reservation Sent!
              </span>
            ) : isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="spinner" />
                Processing...
              </span>
            ) : (
              'Reserve Your Room'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
