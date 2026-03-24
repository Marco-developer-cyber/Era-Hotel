interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#0A0805]/80 backdrop-blur-md border-b border-[#C9A84C]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-display tracking-[0.15em] text-[#C9A84C]">
          ERA
        </div>

        <div className="hidden md:flex items-center space-x-10 font-body text-sm tracking-wide">
          <a href="#about" className="text-[#F5EDD6] hover:text-[#C9A84C] transition-colors duration-300">About</a>
          <a href="#rooms" className="text-[#F5EDD6] hover:text-[#C9A84C] transition-colors duration-300">Rooms</a>
          <a href="#amenities" className="text-[#F5EDD6] hover:text-[#C9A84C] transition-colors duration-300">Amenities</a>
          <a href="#gallery" className="text-[#F5EDD6] hover:text-[#C9A84C] transition-colors duration-300">Gallery</a>
          <a href="#location" className="text-[#F5EDD6] hover:text-[#C9A84C] transition-colors duration-300">Location</a>
        </div>

        <a
          href="#booking"
          className="px-6 py-2 border border-[#C9A84C] text-[#C9A84C] rounded-full hover:bg-[#C9A84C] hover:text-[#0A0805] transition-all duration-300 font-body text-sm tracking-wide"
        >
          Book Now
        </a>
      </div>

      {scrolled && (
        <div className="nav-border-animation absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      )}
    </nav>
  );
}
