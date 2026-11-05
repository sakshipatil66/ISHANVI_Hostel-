import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CheckCircle2, ArrowRight, ShieldCheck, Bed, Maximize2, Users, Sparkles } from 'lucide-react';
import { ROOMS_DATA, HOSTEL_INFO } from '../data/hostelData';

interface RoomsProps {
  onOpenEnquiry: (roomName?: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenEnquiry, onOpenLightbox }) => {
  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header Banner */}
      <PageHeader
        kicker="Accommodations"
        title="Rooms Designed For Your Comfort"
        subtitle="Explore our thoughtfully designed resident rooms tailored for peaceful study, restful sleep, and reliable security in Ambegaon Bk, Pune."
        breadcrumb="Rooms"
      />

      {/* Main Rooms Showcase (Alternating Layout matching reference screenshots) */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {ROOMS_DATA.map((room, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={room.id}
                id={room.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Room Image Card */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D8BD82]/50 group bg-stone-100">
                    <img
                      src={room.image}
                      alt={`${room.name} at Ishanvi Hostel`}
                      className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-103"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Real Property Tag */}
                    <div className="absolute top-4 left-4 bg-[#063D2D]/95 backdrop-blur-sm text-[#D8BD82] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#B89550]/40 flex items-center gap-1.5 shadow">
                      <ShieldCheck className="w-4 h-4 text-[#B89550]" />
                      <span>Actual Room Photograph</span>
                    </div>

                    {/* Click to expand button */}
                    <button
                      onClick={() => onOpenLightbox(index)}
                      className="absolute bottom-4 right-4 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                      title="View full-size photo"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Room Content */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                    <span className="w-8 h-[2px] bg-[#B89550]" />
                    <span>{room.tagline}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#063D2D]">
                    {room.name}
                  </h2>

                  <p className="text-base text-[#171714]/80 leading-relaxed">
                    {room.shortDesc}
                  </p>

                  <p className="text-sm text-[#171714]/70 leading-relaxed">
                    {room.fullDesc}
                  </p>

                  {/* Pricing / Availability Notice */}
                  <div className="py-2 text-xs font-medium text-stone-600 border-y border-[#E8DEC9]">
                    <span>{room.priceNote}</span>
                  </div>

                  {/* Room Specifications Strip */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-[#E8DEC9]">
                      <span className="text-stone-500 block text-[11px]">Occupancy</span>
                      <strong className="text-[#063D2D]">{room.capacity}</strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E8DEC9]">
                      <span className="text-stone-500 block text-[11px]">Bathroom</span>
                      <strong className="text-[#063D2D]">{room.bathType}</strong>
                    </div>
                  </div>

                  {/* Room Features Bullet Checklist */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#063D2D]">
                      Included Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171714]/80">
                      {room.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B89550] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenEnquiry(room.name)}
                      className="flex items-center gap-2 px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] font-semibold text-sm rounded-full shadow transition-all cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-4 h-4 text-[#D8BD82]" />
                    </button>

                    <a
                      href={`https://wa.me/${HOSTEL_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hello! I want to check availability for ${room.name} at Ishanvi Hostel.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-white hover:bg-[#F4EFE6] text-[#063D2D] font-medium text-xs rounded-full border border-[#E8DEC9] transition-colors"
                    >
                      Check via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Summary Comparison & Notice */}
      <section className="py-16 bg-[#F4EFE6] border-t border-[#E8DEC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-[#063D2D]">
            Need Help Choosing The Right Room?
          </h3>
          <p className="text-sm text-[#171714]/75 max-w-xl mx-auto">
            Our hostel warden and management team can help select the room that best matches your study habits, budget, and privacy preferences.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-colors cursor-pointer"
            >
              Consult with Hostel Manager
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
