import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0A0805] overflow-x-hidden">
      <CustomCursor />
      <Navbar scrolled={scrolled} />
      <Hero />
      <Stats />
      <About />
      <Rooms />
      <Amenities />
      <Experience />
      <Gallery />
      <Testimonials />
      <Location />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
