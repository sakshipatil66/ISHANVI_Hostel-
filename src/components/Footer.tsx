import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, MessageCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { HOSTEL_INFO, ROOMS_DATA } from '../data/hostelData';

interface FooterProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#022D22] text-[#FAF6EF] border-t border-[#B89550]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="bg-[#FAF6EF] p-3 rounded-xl inline-block max-w-[280px]">
              <img
                src={HOSTEL_INFO.logo}
                alt="ISHANVI Hostel & Accommodation Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-semibold tracking-wide text-[#D8BD82]">
              {HOSTEL_INFO.tagline}
            </p>
            <p className="text-sm text-[#FAF6EF]/75 leading-relaxed">
              Safe, secure, and thoughtfully managed hostel accommodation designed for students and working professionals near ISMS Sankalp Business School, Ambegaon Bk, Pune.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FAF6EF]/60 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#B89550]" />
              <span>Verified Safe Stay · 24x7 Security</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-serif text-[#D8BD82] mb-4 pb-1 border-b border-[#B89550]/30 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF6EF]/80">
              <li>
                <Link to="/" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> About Ishanvi
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> Explore Rooms
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> Resident Reviews
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D8BD82] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B89550]">›</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Accommodation Options */}
          <div>
            <h4 className="text-base font-serif text-[#D8BD82] mb-4 pb-1 border-b border-[#B89550]/30 inline-block">
              Accommodation Options
            </h4>
            <ul className="space-y-3 text-sm text-[#FAF6EF]/80">
              {ROOMS_DATA.map((room) => (
                <li key={room.id} className="group">
                  <Link
                    to={`/rooms#${room.id}`}
                    className="block hover:text-[#D8BD82] transition-colors"
                  >
                    <div className="font-medium text-[#FAF6EF] group-hover:text-[#D8BD82] flex items-center gap-1">
                      <span>{room.name}</span>
                      <ArrowRight className="w-3 h-3 text-[#B89550] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-xs text-[#FAF6EF]/60">{room.tagline}</div>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="w-full text-left text-xs font-semibold text-[#D8BD82] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Check Availability / Book Visit</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-base font-serif text-[#D8BD82] mb-4 pb-1 border-b border-[#B89550]/30 inline-block">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-[#FAF6EF]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B89550] shrink-0 mt-0.5" />
                <span className="leading-snug">{HOSTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B89550] shrink-0" />
                <a
                  href={`tel:${HOSTEL_INFO.phoneRaw}`}
                  className="hover:text-[#D8BD82] transition-colors font-medium"
                >
                  {HOSTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOSTEL_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Ishanvi Hostel! I would like to enquire about room availability.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Enquiry Available
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B89550] shrink-0" />
                <a
                  href={`mailto:${HOSTEL_INFO.email}`}
                  className="hover:text-[#D8BD82] transition-colors"
                >
                  {HOSTEL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full py-2.5 px-4 bg-[#B89550] hover:bg-[#D8BD82] text-[#022D22] font-semibold text-xs tracking-wider uppercase rounded-lg shadow transition-colors cursor-pointer text-center"
              >
                Send Room Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* SEO Keywords Tagline Strip */}
        <div className="pt-6 pb-6 border-t border-[#FAF6EF]/10 text-xs text-[#FAF6EF]/50 leading-relaxed text-center sm:text-left">
          <p>
            Popular Searches: Hostel in Ambegaon Pune · Student accommodation in Pune · Hostel near ISMS Sankalp Business School · Comfortable hostel accommodation in Pune · Accommodation for students and working professionals in Pune.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#FAF6EF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EF]/60">
          <p>© {new Date().getFullYear()} Ishanvi Hostel & Accommodation. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-[#FAF6EF]/70">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B89550] fill-[#B89550]" />
            <span>for peaceful student living in Pune</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
