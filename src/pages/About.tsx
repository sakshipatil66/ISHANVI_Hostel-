import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ShieldCheck, Heart, Target, Compass, Sparkles, MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { HOSTEL_INFO, WHY_CHOOSE_ITEMS } from '../data/hostelData';

interface AboutProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header Banner */}
      <PageHeader
        kicker="About Ishanvi"
        title="More Than Just A Stay – A Better Tomorrow"
        subtitle="A premier student and professional residence crafted to nurture academic focus, personal safety, and comfortable daily living in Pune."
        breadcrumb="About Us"
      />

      {/* Story & Philosophy Section */}
      <section className="py-20 border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D8BD82]/30">
                <img
                  src={HOSTEL_INFO.heroStudent}
                  alt="Student life at Ishanvi Hostel reception"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#D8BD82] font-semibold">
                    Safe Stay · Better Living · Brighter Tomorrow
                  </span>
                  <h4 className="text-xl font-serif font-bold text-white mt-1">
                    Dedicated to Student Success
                  </h4>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                <span className="w-8 h-[2px] bg-[#B89550]" />
                <span>Our Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#063D2D]">
                Creating A Sanctuary of Comfort and Focus
              </h2>

              <p className="text-base text-[#171714]/80 leading-relaxed">
                Relocating for higher education or early professional careers is a transformative milestone. At <strong>Ishanvi Hostel & Accommodation</strong>, we recognized that residents need far more than four walls and a bed — they need an uplifting, secure environment that feels like home while fostering discipline and ambition.
              </p>

              <p className="text-sm text-[#171714]/75 leading-relaxed">
                Strategically positioned in Ambegaon Bk adjacent to ISMS Sankalp Business School, our accommodation brings together modern infrastructure, round-the-clock security protocols, high-speed connectivity, and clean, wholesome living standards.
              </p>

              {/* Core Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#E8DEC9] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#063D2D] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#B89550]" />
                    <span>Uncompromised Safety</span>
                  </div>
                  <p className="text-xs text-[#171714]/70">
                    Continuous monitoring, restricted visitor entry, and on-site staff.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8DEC9] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#063D2D] font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-[#B89550]" />
                    <span>Hygienic Living</span>
                  </div>
                  <p className="text-xs text-[#171714]/70">
                    Daily room and washroom sanitation by dedicated housekeeping staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-[#F4EFE6] border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl font-serif font-bold text-[#063D2D]">
              Our Guiding Principles
            </h2>
            <p className="text-sm text-[#171714]/70">
              Built on transparency, hospitality, and continuous care for every resident.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8DEC9] shadow-xs space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#063D2D] text-[#D8BD82] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#063D2D]">
                Our Vision
              </h3>
              <p className="text-sm text-[#171714]/80 leading-relaxed">
                To be the most trusted and preferred student residence in Pune, celebrated for setting unmatched benchmarks in student safety, hygiene, community culture, and holistic accommodation quality.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#171714]/75">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Safe stay that gives parents complete peace of mind</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Better living that promotes physical and mental well-being</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Brighter tomorrow backed by undisturbed academic focus</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8DEC9] shadow-xs space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#063D2D] text-[#D8BD82] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#063D2D]">
                Our Mission
              </h3>
              <p className="text-sm text-[#171714]/80 leading-relaxed">
                To eliminate daily accommodation hassles for residents by providing reliable amenities, delicious meals, prompt maintenance support, and a peaceful environment where dreams can thrive.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#171714]/75">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Maintain pristine cleanliness across all living quarters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Provide high-speed internet and uninterrupted study conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Build an inclusive, respectful and encouraging community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Property Showcase Strip */}
      <section className="py-20 border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                Authentic Spaces
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#063D2D]">
                What You See Is Exactly What You Get
              </h2>
              <p className="text-sm text-[#171714]/80 leading-relaxed">
                We believe in complete transparency. Our photographs show actual, unmanipulated rooms with individual beds, study setups, wardrobes, and bright natural lighting at our Ambegaon campus.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-colors cursor-pointer"
                >
                  Schedule an In-Person Visit
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#D8BD82]/40 shadow">
                <img
                  src="/assets/rooms/single-room-real.jpg"
                  alt="Real room at Ishanvi Hostel"
                  className="w-full h-56 object-cover"
                />
                <div className="p-3 bg-white text-xs font-semibold text-[#063D2D]">
                  Single / Sharing Room Setup
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#D8BD82]/40 shadow">
                <img
                  src="/assets/rooms/double-sharing-real.jpg"
                  alt="Real room with wardrobe and beds"
                  className="w-full h-56 object-cover"
                />
                <div className="p-3 bg-white text-xs font-semibold text-[#063D2D]">
                  Ample Storage & Twin Beds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#022D22] text-[#FAF6EF]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl font-serif font-bold text-[#FAF6EF]">
            Experience Ishanvi In Person
          </h2>
          <p className="text-sm text-[#FAF6EF]/80 max-w-xl mx-auto">
            We welcome students and parents to tour our rooms, inspect our facilities, and meet our management in Ambegaon Bk, Pune.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 bg-[#B89550] hover:bg-[#D8BD82] text-[#022D22] text-xs font-bold uppercase tracking-wider rounded-full shadow transition-colors cursor-pointer"
            >
              Book Property Tour
            </button>
            <a
              href={`tel:${HOSTEL_INFO.phoneRaw}`}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-full transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8BD82]" />
              <span>Call: {HOSTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
