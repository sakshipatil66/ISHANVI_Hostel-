import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface NavbarProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6EF]/95 backdrop-blur-md shadow-xs border-b border-[#E8DEC9]'
          : 'bg-[#FAF6EF] border-b border-[#E8DEC9]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo - Exact match */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={HOSTEL_INFO.logo}
            alt="ISHANVI Hostel & Accommodation"
            className="h-12 sm:h-14 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Center Nav Links - Clean typography as in reference */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  active
                    ? 'text-[#063D2D] font-bold'
                    : 'text-[#171714]/85 hover:text-[#063D2D] font-medium'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B89550] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Enquire Now button in exact forest green capsule shape */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D8BD82]" />
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FAF6EF]" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#FAF6EF] bg-[#063D2D] rounded-full"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#063D2D] hover:bg-[#E8DEC9]/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EF] border-b border-[#E8DEC9] px-4 pt-2 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#063D2D] text-[#FAF6EF] font-semibold'
                    : 'text-[#171714] hover:bg-[#E8DEC9]/40'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-[#E8DEC9] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-[#FAF6EF] bg-[#063D2D] rounded-full shadow"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D8BD82]" />
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${HOSTEL_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#063D2D] bg-[#E8DEC9]/60 rounded-full"
              >
                <span>Call: {HOSTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
