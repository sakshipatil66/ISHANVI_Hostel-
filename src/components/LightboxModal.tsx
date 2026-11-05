import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GalleryItem } from '../data/hostelData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden border border-[#D8BD82]/30 shadow-2xl">
          <img
            src={current.image}
            alt={current.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
          {current.isRealProperty && (
            <div className="absolute top-3 left-3 bg-[#063D2D]/90 backdrop-blur-sm text-[#D8BD82] text-xs font-semibold px-3 py-1 rounded-full border border-[#B89550]/40 flex items-center gap-1.5 shadow">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B89550]" />
              <span>Real Property Photograph</span>
            </div>
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 text-xs text-[#D8BD82] uppercase tracking-wider mb-1">
            <span>{current.category}</span>
            <span>·</span>
            <span>Image {currentIndex + 1} of {items.length}</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-1">
            {current.title}
          </h3>
          <p className="text-sm text-stone-300">
            {current.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
