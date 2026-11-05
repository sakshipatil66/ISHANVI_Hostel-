import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import {
  ChevronDown,
  Search,
  Phone,
  MessageSquare,
  HelpCircle,
  MapPin,
  Bed,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { FAQ_DATA, HOSTEL_INFO } from '../data/hostelData';

interface FAQProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Rooms', 'Pricing', 'Location', 'Visiting the Property', 'Facilities & Amenities'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || (faq.category && faq.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    const matchesSearch =
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header */}
      <PageHeader
        kicker="Help & Answers"
        title="Frequently Asked Questions"
        subtitle="Transparent, verified answers about room accommodations, amenities, pricing guidelines, and visiting our Ambegaon Bk property."
        breadcrumb="FAQs"
      />

      {/* Search & Category Filter Section */}
      <section className="py-12 border-b border-[#E8DEC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic, e.g. room types, visit, pricing, security..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8DEC9] rounded-2xl text-xs sm:text-sm text-[#171714] placeholder-stone-400 shadow-2xs focus:outline-none focus:border-[#B89550] transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#063D2D] text-[#FAF6EF] shadow-xs'
                    : 'bg-white text-[#171714]/70 hover:bg-[#FAF6EF] border border-[#E8DEC9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white p-10 rounded-3xl text-center space-y-3 border border-[#E8DEC9]">
              <HelpCircle className="w-10 h-10 text-[#B89550] mx-auto" />
              <h3 className="text-base font-serif font-bold text-[#063D2D]">
                No matching answers found
              </h3>
              <p className="text-xs text-[#171714]/70 max-w-sm mx-auto">
                Couldn't find what you were searching for? Our desk team can answer any specific question directly.
              </p>
              <button
                onClick={() => onOpenEnquiry()}
                className="mt-2 px-5 py-2.5 bg-[#063D2D] text-white text-xs font-semibold rounded-full"
              >
                Ask A Question Directly
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E8DEC9] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EF]/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center text-[10px] font-bold shrink-0 border border-[#B89550]/30">
                          Q{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#063D2D] leading-snug">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B89550] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#171714]/80 leading-relaxed border-t border-[#E8DEC9]/50 pl-13">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions Callout */}
          <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#063D2D] to-[#022D22] text-[#FAF6EF] rounded-3xl border border-[#B89550]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-wider text-[#D8BD82] font-semibold">
                Have an unlisted question?
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Speak With Our Hostel Management Desk
              </h3>
              <p className="text-xs text-[#FAF6EF]/80">
                Call us directly at <strong>{HOSTEL_INFO.phone}</strong> or send an instant enquiry.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry()}
                className="px-5 py-2.5 bg-[#B89550] hover:bg-[#D8BD82] text-[#022D22] text-xs font-semibold rounded-full shadow transition-all cursor-pointer"
              >
                Send Quick Enquiry
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-full border border-white/20 transition-colors"
              >
                Contact Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
