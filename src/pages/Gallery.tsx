import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Maximize2, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hostelData';

interface GalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Rooms' | 'Common Spaces' | 'Dining' | 'Study'>('All');

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header */}
      <PageHeader
        kicker="Visual Tour"
        title="A Glimpse Of Our Spaces"
        subtitle="Explore our real room photographs, comfortable resident lounges, study desks, and dining spaces in Pune."
        breadcrumb="Gallery"
      />

      {/* Filter Tabs */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F4EFE6] rounded-xl max-w-xl mx-auto border border-[#E8DEC9]">
            {(['All', 'Rooms', 'Common Spaces', 'Dining', 'Study'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`py-2 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#063D2D] text-[#FAF6EF] shadow-xs'
                    : 'text-[#171714]/70 hover:text-[#063D2D]'
                }`}
              >
                {filter === 'Rooms' ? 'Rooms (Actual Photos)' : filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const originalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(originalIndex)}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8DEC9] shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  {/* Image Frame */}
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Tag Badge */}
                    {item.isRealProperty ? (
                      <div className="absolute top-3 left-3 bg-[#063D2D]/95 backdrop-blur-xs text-[#D8BD82] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#B89550]/40 flex items-center gap-1.5 shadow">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B89550]" />
                        <span>Actual Hostel Photo</span>
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20">
                        {item.category}
                      </div>
                    )}

                    {/* Expand icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-black/60 rounded-full text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom overlay title */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-base font-serif font-bold text-white drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Caption underneath */}
                  <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                    <p className="text-xs text-[#171714]/75 leading-relaxed">
                      {item.caption}
                    </p>
                    <div className="pt-3 mt-2 border-t border-[#E8DEC9]/70 flex items-center justify-between text-[11px] text-[#063D2D] font-medium">
                      <span>Click to view in high resolution</span>
                      <span className="text-[#B89550]">›</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
