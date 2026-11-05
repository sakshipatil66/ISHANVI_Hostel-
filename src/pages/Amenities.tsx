import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Wifi,
  Utensils,
  ShieldCheck,
  Shirt,
  Armchair,
  BookOpen,
  Dumbbell,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { AMENITIES_DATA, HOSTEL_INFO } from '../data/hostelData';

interface AmenitiesProps {
  onOpenEnquiry: () => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'convenience' | 'security' | 'lifestyle'>('all');

  const filteredAmenities =
    activeCategory === 'all'
      ? AMENITIES_DATA
      : AMENITIES_DATA.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header */}
      <PageHeader
        kicker="Facilities & Services"
        title="Everything You Need For A Hassle-Free Stay"
        subtitle="Carefully engineered amenities that take care of your daily living essentials so you can devote yourself completely to your studies and career."
        breadcrumb="Amenities"
      />

      {/* Category Tabs */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 p-1.5 bg-[#F4EFE6] rounded-xl max-w-md mx-auto border border-[#E8DEC9]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#063D2D] text-[#FAF6EF] shadow-xs'
                  : 'text-[#171714]/70 hover:text-[#063D2D]'
              }`}
            >
              All Facilities
            </button>
            <button
              onClick={() => setActiveCategory('convenience')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'convenience'
                  ? 'bg-[#063D2D] text-[#FAF6EF] shadow-xs'
                  : 'text-[#171714]/70 hover:text-[#063D2D]'
              }`}
            >
              Convenience
            </button>
            <button
              onClick={() => setActiveCategory('security')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'security'
                  ? 'bg-[#063D2D] text-[#FAF6EF] shadow-xs'
                  : 'text-[#171714]/70 hover:text-[#063D2D]'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveCategory('lifestyle')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'lifestyle'
                  ? 'bg-[#063D2D] text-[#FAF6EF] shadow-xs'
                  : 'text-[#171714]/70 hover:text-[#063D2D]'
              }`}
            >
              Lifestyle
            </button>
          </div>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="py-12 border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-white p-7 rounded-2xl border border-[#E8DEC9] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF6EF] border border-[#B89550]/40 text-[#B89550] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                    {amenity.icon === 'Wifi' && <Wifi className="w-7 h-7" />}
                    {amenity.icon === 'Utensils' && <Utensils className="w-7 h-7" />}
                    {amenity.icon === 'ShieldCheck' && <ShieldCheck className="w-7 h-7" />}
                    {amenity.icon === 'Shirt' && <Shirt className="w-7 h-7" />}
                    {amenity.icon === 'Armchair' && <Armchair className="w-7 h-7" />}
                    {amenity.icon === 'BookOpen' && <BookOpen className="w-7 h-7" />}
                    {amenity.icon === 'Dumbbell' && <Dumbbell className="w-7 h-7" />}
                    {amenity.icon === 'MapPin' && <MapPin className="w-7 h-7" />}
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-[#B89550] font-semibold block mb-1">
                    {amenity.category}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-[#063D2D] mb-3">
                    {amenity.name}
                  </h3>

                  <p className="text-sm text-[#171714]/75 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E8DEC9] flex items-center gap-1.5 text-xs text-[#063D2D] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#B89550]" />
                  <span>Standard Hostel Inclusion</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Spaces Visual Showcase */}
      <section className="py-20 bg-[#F4EFE6] border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B89550] font-semibold">
              Lifestyle Spaces
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#063D2D]">
              Designed For Balance & Community
            </h2>
            <p className="text-sm text-[#171714]/70">
              Beyond comfortable private rooms, enjoy expansive shared spaces designed for learning, social bonding, and nourishing dining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dining */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DEC9] shadow-xs group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/src/assets/images/gallery_dining_area_1793893528088.jpg"
                  alt="Hygienic Dining Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-lg font-serif font-bold text-[#063D2D]">
                  Hygienic Dining Hall
                </h4>
                <p className="text-xs text-[#171714]/75 leading-relaxed">
                  Wholesome home-style meals with rotational weekly menus crafted with fresh, quality ingredients in our inspected kitchen.
                </p>
              </div>
            </div>

            {/* Study Zone */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DEC9] shadow-xs group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/src/assets/images/gallery_study_zone_1793893527649.jpg"
                  alt="Quiet Study Zone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-lg font-serif font-bold text-[#063D2D]">
                  Quiet Study & Reading Area
                </h4>
                <p className="text-xs text-[#171714]/75 leading-relaxed">
                  Individual study partitions with personal task lighting and silent hours to ensure complete academic concentration.
                </p>
              </div>
            </div>

            {/* Common Lounge */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DEC9] shadow-xs group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/src/assets/images/gallery_common_lounge_1793893527671.jpg"
                  alt="Resident Common Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-lg font-serif font-bold text-[#063D2D]">
                  Resident Common Lounge
                </h4>
                <p className="text-xs text-[#171714]/75 leading-relaxed">
                  Comfortable couches, community books, and leisure spaces where residents unwind, share ideas, and build lasting friendships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquire CTA */}
      <section className="py-16 bg-[#063D2D] text-[#FAF6EF]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold text-[#FAF6EF]">
            Experience A Worry-Free Student Stay
          </h2>
          <p className="text-sm text-[#FAF6EF]/80 max-w-xl mx-auto">
            Book an appointment to tour Ishanvi Hostel and inspect all our amenities in Ambegaon Bk, Pune.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 bg-[#B89550] hover:bg-[#D8BD82] text-[#022D22] text-xs font-bold uppercase tracking-wider rounded-full shadow transition-colors cursor-pointer"
            >
              Enquire About Facilities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
