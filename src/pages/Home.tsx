import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bed,
  Wifi,
  ShieldCheck,
  Heart,
  MapPin,
  ArrowRight,
  Utensils,
  Shirt,
  Armchair,
  BookOpen,
  Dumbbell,
  Crown,
  Users,
  Sprout,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Maximize2,
  Phone,
  CheckCircle,
  Clock,
  Sparkles,
  Sun,
  Coffee,
  Moon,
  ChevronDown,
  Navigation,
  ExternalLink,
  HeartHandshake
} from 'lucide-react';
import {
  HOSTEL_INFO,
  ROOMS_DATA,
  GALLERY_ITEMS,
  TESTIMONIALS_DATA,
  WHY_CHOOSE_ITEMS,
  DAY_AT_ISHANVI_TIMELINE,
  ISHANVI_EXPERIENCE_CARDS,
  FAQ_DATA,
  ISHANVI_DIFFERENCE_PILLARS
} from '../data/hostelData';

interface HomeProps {
  onOpenEnquiry: (roomName?: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry, onOpenLightbox }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#FAF6EF] overflow-hidden text-[#171714]">
      {/* ============================================================ */}
      {/* SECTION 2: CINEMATIC HERO EXPERIENCE                          */}
      {/* Combining verified brand assets & luxury hospitality aesthetic */}
      {/* ============================================================ */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#E8DEC9]/60">
        {/* Top-Left Botanical Leaf Accent */}
        <div className="absolute top-0 left-0 pointer-events-none z-10 w-28 sm:w-44 select-none">
          <img
            src="/assets/leaf-top-left.png"
            alt="Botanical Leaf Accent"
            className="w-full h-auto object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        {/* Ambient subtle warm gold & green glow in background */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B89550]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#063D2D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subhead & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-5"
            >
              {/* Tagline Lockup */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#B89550]" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                    Safe Stay | Better Living | Brighter Tomorrow
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[#171714] leading-[1.14] tracking-tight">
                A Comfortable Stay<br />
                <span className="text-[#063D2D]">For A Brighter</span> Tomorrow
              </h1>

              {/* Supporting Subhead */}
              <p className="text-sm sm:text-base text-[#171714]/80 leading-relaxed max-w-xl font-medium">
                Safe, Secure and Well-Managed Accommodation for Students & Working Professionals.
              </p>

              {/* Four Feature Badges with Gold Outlined Circles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex flex-col items-start gap-1 p-2.5 rounded-xl bg-white/70 border border-[#E8DEC9] shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#B89550] flex items-center justify-center text-[#B89550]">
                    <Bed className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#063D2D] mt-1">Furnished Rooms</span>
                  <span className="text-[10px] text-[#171714]/60">Spacious & clean</span>
                </div>

                <div className="flex flex-col items-start gap-1 p-2.5 rounded-xl bg-white/70 border border-[#E8DEC9] shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#B89550] flex items-center justify-center text-[#B89550]">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#063D2D] mt-1">High Speed Wi-Fi</span>
                  <span className="text-[10px] text-[#171714]/60">24/7 Coverage</span>
                </div>

                <div className="flex flex-col items-start gap-1 p-2.5 rounded-xl bg-white/70 border border-[#E8DEC9] shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#B89550] flex items-center justify-center text-[#B89550]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#063D2D] mt-1">24×7 Security</span>
                  <span className="text-[10px] text-[#171714]/60">Warden & CCTV</span>
                </div>

                <div className="flex flex-col items-start gap-1 p-2.5 rounded-xl bg-white/70 border border-[#E8DEC9] shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#B89550] flex items-center justify-center text-[#B89550]">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#063D2D] mt-1 leading-tight">Ideal for All</span>
                  <span className="text-[10px] text-[#171714]/60">Students & Pros</span>
                </div>
              </div>

              {/* Forest Green Contact Bar with Phone & Pune Address */}
              <div className="bg-[#063D2D] text-[#FAF6EF] rounded-2xl p-4 sm:p-5 border border-[#B89550]/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <a
                  href={`tel:${HOSTEL_INFO.phoneRaw}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B89550] text-[#022D22] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D8BD82] font-semibold">
                      Call Now for Enquiry
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {HOSTEL_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="hidden sm:block w-px h-10 bg-[#B89550]/30" />

                <div className="flex items-center gap-3 text-xs text-[#FAF6EF]/90">
                  <div className="w-10 h-10 rounded-full bg-[#022D22] border border-[#B89550]/40 text-[#D8BD82] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="leading-snug">
                    Near ISMS Sankalp Business School,<br />
                    Ambegaon Bk, Pune - 411066
                  </span>
                </div>
              </div>

              {/* Action Buttons: Enquire Now & Explore Rooms */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D8BD82]" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FAF6EF]" />
                </button>

                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#FAF6EF] text-[#063D2D] text-xs font-semibold rounded-full border border-[#E8DEC9] shadow-2xs transition-colors"
                >
                  <span>Explore Rooms</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#B89550]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Overlapping Gold-Bordered Room Photographs with Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#B89550] via-[#D8BD82] to-[#B89550] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <img
                    src="/assets/hero-right-gold-rooms.jpg"
                    alt="Actual Ishanvi Hostel Rooms in Ambegaon Bk Pune with Twin Beds and Wooden Wardrobe"
                    className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                  />

                  {/* Gradient bottom scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Green Label 1: Spacious Rooms */}
                  <div className="absolute top-5 right-5 bg-[#063D2D]/95 backdrop-blur-md text-[#FAF6EF] border border-[#B89550]/60 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B89550]" />
                    <span>Spacious Rooms</span>
                  </div>

                  {/* Floating Green Label 2: Clean & Comfortable Stay */}
                  <div className="absolute bottom-16 right-5 bg-[#063D2D]/95 backdrop-blur-md text-[#FAF6EF] border border-[#B89550]/60 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B89550]" />
                    <span>Clean & Comfortable Stay</span>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <p className="font-serif italic text-[#D8BD82] text-sm">
                      "A Comfortable Stay For A Brighter Tomorrow"
                    </p>
                    <p className="text-white/80 text-[11px]">
                      Actual photographs of our Ambegaon Bk property.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: FLOATING FEATURE HIGHLIGHTS                        */}
      {/* ============================================================ */}
      <section className="py-8 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl py-6 px-4 sm:px-8 shadow-sm border border-[#E8DEC9] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30">
                <Bed className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#063D2D]">Furnished Rooms</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#063D2D]">High-Speed Wi-Fi</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#063D2D]">24×7 Security</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#063D2D]">Comfortable Living</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#063D2D]">Supportive Community</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#063D2D]">Convenient Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: OUR STORY: MORE THAN JUST A STAY                   */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Bedroom Visual */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#D8BD82]/30">
                <img
                  src={HOSTEL_INFO.aboutBedroom}
                  alt="Ishanvi Hostel Comfortable Bedroom and Study Space"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>
            </div>

            {/* Right: Storytelling & 3 Gold Pillars */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#B89550]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171714] leading-[1.18]">
                More Than Just A Stay –<br />
                A Place To Feel At Home
              </h2>

              <p className="text-xs sm:text-sm text-[#171714]/80 leading-relaxed">
                At Ishanvi Hostel & Accommodation, we provide a safe, comfortable and homely environment for students and working professionals. Our focus is on creating a community where you can live, learn and grow with confidence.
              </p>

              <p className="text-xs sm:text-sm text-[#171714]/75 leading-relaxed">
                Whether you are attending university lectures or embarking on early career milestones in Pune, our thoughtfully appointed spaces give you the uninterrupted focus, daily hygiene, and personal security you need.
              </p>

              {/* 3 Gold Icon Feature Points */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#B89550]/40 text-[#B89550] flex items-center justify-center mx-auto shadow-xs">
                    <Bed className="w-5 h-5" />
                  </div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#063D2D]">
                    Comfortable<br />Living
                  </h4>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#B89550]/40 text-[#B89550] flex items-center justify-center mx-auto shadow-xs">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#063D2D]">
                    Safe & Supportive<br />Environment
                  </h4>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#B89550]/40 text-[#B89550] flex items-center justify-center mx-auto shadow-xs">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#063D2D]">
                    Community<br />for Growth
                  </h4>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-colors"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8BD82]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: THE ISHANVI EXPERIENCE                             */}
      {/* 3 Visual Story Cards                                          */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
              <span>The Ishanvi Experience</span>
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#063D2D]">
              Every Detail Designed Around Better Living
            </h2>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Explore how our residential architecture balances individual privacy with communal belonging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ISHANVI_EXPERIENCE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#063D2D]/90 backdrop-blur-xs text-[#D8BD82] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#B89550]/30">
                    {card.kicker}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-bold text-[#063D2D]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#171714]/75 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenEnquiry(card.title)}
                      className="text-xs font-semibold text-[#B89550] hover:text-[#063D2D] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: WHY CHOOSE ISHANVI?                                */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
              <span>Why Choose Us</span>
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
              Standards That Set Ishanvi Apart
            </h2>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Carefully refined to ensure safety, uninterrupted study, and peace of mind for both residents and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E8DEC9] shadow-2xs hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] text-[#B89550] flex items-center justify-center border border-[#B89550]/30 shadow-2xs">
                  {item.icon === 'Bed' && <Bed className="w-6 h-6" />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                  {item.icon === 'Sparkles' && <Sparkles className="w-6 h-6" />}
                  {item.icon === 'Users' && <Users className="w-6 h-6" />}
                  {item.icon === 'MapPin' && <MapPin className="w-6 h-6" />}
                  {item.icon === 'HeartHandshake' && <HeartHandshake className="w-6 h-6" />}
                </div>
                <h3 className="text-base font-serif font-bold text-[#063D2D]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#171714]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: ROOMS DESIGNED FOR YOUR COMFORT                    */}
      {/* 3 Room Cards with actual photographs & enquiry triggers       */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#B89550]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                  Our Rooms
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
                Rooms Designed<br />
                For Your Comfort
              </h2>
            </div>

            <Link
              to="/rooms"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171714] hover:text-[#B89550] transition-colors"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DEC9] shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-100">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#063D2D]/90 text-[#D8BD82] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#B89550]/30">
                      {room.capacity}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-b border-[#E8DEC9]/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF6EF] text-[#B89550] flex items-center justify-center shrink-0 border border-[#B89550]/30">
                        {room.id === 'single-room' && <Bed className="w-5 h-5" />}
                        {room.id === 'sharing-room' && <Users className="w-5 h-5" />}
                        {room.id === 'premium-room' && <Crown className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#063D2D]">{room.name}</h3>
                        <p className="text-[11px] text-stone-500">{room.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenEnquiry(room.name)}
                      className="w-9 h-9 rounded-full bg-[#B89550] hover:bg-[#D8BD82] text-white flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 cursor-pointer"
                      title={`Enquire for ${room.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF6EF]/50 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-500 italic">Enquire for pricing</span>
                  <Link
                    to={`/rooms#${room.id}`}
                    className="text-[#063D2D] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B89550]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: A CLOSER LOOK AT OUR ROOMS                         */}
      {/* Asymmetrical editorial image grid with actual property photos */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#B89550]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                  Architectural Details
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#063D2D]">
                A Closer Look At Our Rooms
              </h2>
              <p className="text-xs sm:text-sm text-[#171714]/75">
                Inspect authentic interior finishes: fitted wooden wardrobes, twin and single beds, full blockout curtains, and bright natural lighting.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-colors cursor-pointer"
              >
                Schedule In-Person Inspection
              </button>
            </div>
          </div>

          {/* Asymmetrical 4-Card Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large Feature: Real Hostel Room Photo */}
            <div className="md:col-span-7 rounded-3xl overflow-hidden border border-[#D8BD82]/50 shadow-md relative group h-80 sm:h-96">
              <img
                src="/assets/rooms/single-room-hires.jpg"
                alt="Actual Ishanvi Room Layout with Twin Beds and Curtains"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#D8BD82] font-semibold">
                  Actual Property Photography
                </span>
                <h4 className="text-base font-serif font-bold text-white">
                  Twin Sharing & Single Setups with Wooden Storage
                </h4>
              </div>
            </div>

            {/* Right Top Card */}
            <div className="md:col-span-5 rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-md relative group h-80 sm:h-96">
              <img
                src="/assets/rooms/double-sharing-hires.jpg"
                alt="Wardrobe and Dressing Mirror in Room"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#D8BD82] font-semibold">
                  Integrated Storage
                </span>
                <h4 className="text-base font-serif font-bold text-white">
                  Full Height Wardrobe & Dressing Mirror
                </h4>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="md:col-span-5 rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-md relative group h-64 sm:h-72">
              <img
                src="/assets/rooms/premium-room-hires.jpg"
                alt="Room Natural Sunlight and Airflow"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#D8BD82] font-semibold">
                  Ventilated Windows
                </span>
                <h4 className="text-base font-serif font-bold text-white">
                  High Ceiling Fan & Natural Air Circulation
                </h4>
              </div>
            </div>

            {/* Bottom Right Card: Luxury Lifestyle Bed & Desk */}
            <div className="md:col-span-7 rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-md relative group h-64 sm:h-72">
              <img
                src="/src/assets/images/ishanvi_lifestyle_morning_1793898429429.jpg"
                alt="Dedicated Ergonomic Study Area"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#D8BD82] font-semibold">
                  Dedicated Workspaces
                </span>
                <h4 className="text-base font-serif font-bold text-white">
                  Focused Study Desks & Power Charging Access
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9: A DAY AT ISHANVI: STORYTELLING JOURNEY            */}
      {/* Interactive 5-Stage Resident Lifestyle Timeline               */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
              <span>Resident Journey</span>
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
              Your Everyday, A Little More Comfortable
            </h2>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Experience the rhythmic, well-supported daily life at Ishanvi Hostel from dawn to night.
            </p>
          </div>

          {/* Timeline Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {DAY_AT_ISHANVI_TIMELINE.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTimelineIndex === idx
                    ? 'bg-[#063D2D] text-[#FAF6EF] shadow-sm'
                    : 'bg-white text-[#171714]/70 hover:bg-[#FAF6EF] border border-[#E8DEC9]'
                }`}
              >
                <span className="text-[#B89550] text-[10px]">{item.time}</span>
                <span>{item.stage}</span>
              </button>
            ))}
          </div>

          {/* Active Timeline Showcase Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-72 sm:h-96 relative">
              <img
                src={DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].image}
                alt={DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].stage}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#063D2D]/90 text-[#D8BD82] text-xs font-semibold px-3 py-1 rounded-full border border-[#B89550]/40">
                {DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].time}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                Stage 0{activeTimelineIndex + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#063D2D]">
                {DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].stage}
              </h3>
              <p className="text-sm font-semibold text-[#171714]/90">
                {DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#171714]/75 leading-relaxed">
                {DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].desc}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(DAY_AT_ISHANVI_TIMELINE[activeTimelineIndex].stage)}
                  className="px-5 py-2.5 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-colors cursor-pointer"
                >
                  Experience Ishanvi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10: AMENITIES                                         */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10 sm:mb-12 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#B89550]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                Amenities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
              Everything You Need<br />
              For A Hassle-Free Stay
            </h2>
          </div>

          {/* 8 Clean Amenity Cards in a single row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 text-center">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <Wifi className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">High-Speed Wi-Fi</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <Utensils className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">Hygienic Meals</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <ShieldCheck className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">24/7 Security</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <Shirt className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">Laundry Service</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <Armchair className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">Common Lounge</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <BookOpen className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">Study Area</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <Dumbbell className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">Fitness Facility</span>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DEC9] flex flex-col items-center justify-center space-y-2.5 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-[#B89550]">
                <MapPin className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#063D2D]">Prime Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11: COMFORT IN EVERY CORNER                           */}
      {/* Multi-image editorial layout showing spaces                   */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
              <span>Spaces & Ambiance</span>
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#063D2D]">
              Comfort In Every Corner
            </h2>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Carefully zoned spaces for communal camaraderie, dining, quiet study, and restful retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-xs hover:shadow-lg transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/src/assets/images/gallery_dining_area_1793893528088.jpg"
                  alt="Ishanvi Dining Spaces"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#063D2D]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  Dining Hall
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-serif font-bold text-base text-[#063D2D]">Clean & Wholesome Dining</h4>
                <p className="text-xs text-[#171714]/70 leading-relaxed">
                  Hygienic, bright dining spaces where residents enjoy wholesome home-style meals and connect daily.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-xs hover:shadow-lg transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/src/assets/images/gallery_study_zone_1793893527649.jpg"
                  alt="Ishanvi Quiet Study Zone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#063D2D]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  Study Zone
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-serif font-bold text-base text-[#063D2D]">Uninterrupted Study Desks</h4>
                <p className="text-xs text-[#171714]/70 leading-relaxed">
                  Quiet study environments with high-bandwidth Wi-Fi, ergonomic chairs, and focused lighting.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8DEC9] shadow-xs hover:shadow-lg transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="/src/assets/images/gallery_common_lounge_1793893527671.jpg"
                  alt="Ishanvi Resident Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#063D2D]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  Resident Lounge
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-serif font-bold text-base text-[#063D2D]">Comfortable Common Areas</h4>
                <p className="text-xs text-[#171714]/70 leading-relaxed">
                  Plush seating for socializing, weekend downtime, and relaxing with hostel peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 12: OUR LOCATION & CONNECTIVITY                       */}
      {/* Near ISMS Sankalp Business School, Ambegaon Bk, Pune           */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Location Information & Nearby Highlights */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#B89550]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                  Location & Connectivity
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
                Stay Connected To<br />
                <span className="text-[#063D2D]">What Matters</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#171714]/80 leading-relaxed">
                Strategically positioned in Pune’s major South student corridor, Ishanvi Hostel offers direct walking proximity to educational institutions and fast transit links across Pune.
              </p>

              {/* Exact Address Block */}
              <div className="p-4 bg-white rounded-2xl border border-[#E8DEC9] shadow-2xs space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#063D2D] text-[#D8BD82] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-[#063D2D] block">Verified Property Address</strong>
                    <span className="text-xs text-[#171714]/80 leading-snug">
                      Near ISMS Sankalp Business School, Ambegaon Bk, Pune - 411066
                    </span>
                  </div>
                </div>
              </div>

              {/* Nearby Academic Landmarks */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#063D2D]">
                  Nearby Educational & Transit Landmarks
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171714]/75">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B89550] shrink-0" />
                    <span>ISMS Sankalp Business School</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B89550] shrink-0" />
                    <span>Sinhgad Institutes Campus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B89550] shrink-0" />
                    <span>Bharati Vidyapeeth University</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B89550] shrink-0" />
                    <span>Mumbai–Bangalore Katraj Bypass</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry('Location & Visit')}
                  className="px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-colors cursor-pointer"
                >
                  Schedule A Visit
                </button>
                <a
                  href={`tel:${HOSTEL_INFO.phoneRaw}`}
                  className="px-5 py-3 bg-white hover:bg-[#FAF6EF] text-[#063D2D] text-xs font-semibold rounded-full border border-[#E8DEC9] transition-colors"
                >
                  Call +91 77670 58988
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#D8BD82]/40 bg-white">
                <div className="p-3 bg-[#063D2D] text-white flex items-center justify-between text-xs px-4">
                  <span className="font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D8BD82]" />
                    <span>Ambegaon Bk, Pune - 411066</span>
                  </span>
                  <span className="text-[10px] text-[#D8BD82]">Google Maps</span>
                </div>
                <iframe
                  title="Ishanvi Hostel Location Map Ambegaon Bk Pune"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15137.90226485078!2d73.83401569999999!3d18.4621415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959828469e09%3A0xe2130ffbca43fb07!2sAmbegaon%20Budruk%2C%20Pune%2C%20Maharashtra%20411046!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-80 sm:h-96 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 13: A GLIMPSE OF OUR SPACES (GALLERY)                 */}
      {/* Deep Forest Green #063D2D                                     */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#063D2D] text-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#D8BD82]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#D8BD82]">
                  Gallery
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                A Glimpse Of<br />
                Our Spaces
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8BD82] hover:text-white transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Images in a row matching reference */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {GALLERY_ITEMS.slice(0, 5).map((img, idx) => (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(idx)}
                className="group relative h-48 sm:h-56 rounded-xl overflow-hidden cursor-pointer border border-[#B89550]/30 shadow-md bg-stone-900"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-medium truncate drop-shadow">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 14: THE ISHANVI DIFFERENCE                            */}
      {/* Values & Hospitality Standards                                */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
              <span>Core Values</span>
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
              The Ishanvi Difference
            </h2>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Built on empathy, respect, and a genuine commitment to helping residents thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ISHANVI_DIFFERENCE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E8DEC9] shadow-2xs hover:shadow-md transition-shadow space-y-2 text-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center mx-auto border border-[#B89550]/30 text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className="font-serif font-bold text-sm text-[#063D2D]">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-[#171714]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 15: RESIDENT TESTIMONIALS                            */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-b border-[#E8DEC9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#B89550]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B89550]">
                  Testimonials
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714]">
                What Our Residents Say
              </h2>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTestimonial}
                className="w-8 h-8 rounded-full border border-[#E8DEC9] bg-white hover:bg-[#FAF6EF] text-[#063D2D] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-8 h-8 rounded-full border border-[#E8DEC9] bg-white hover:bg-[#FAF6EF] text-[#063D2D] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DEC9] shadow-2xs flex flex-col justify-between space-y-4"
              >
                <p className="text-xs sm:text-sm text-[#171714]/85 italic leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#E8DEC9]/60">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatarImage}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#B89550]/40"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#063D2D]">{t.name}</h4>
                      <p className="text-[10px] text-stone-500">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#B89550]">
                    {[...Array(t.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-[#B89550]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 16: POPULAR QUESTIONS PREVIEW (3 Questions)           */}
      {/* Short preview directing visitors to the dedicated FAQ page    */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#E8DEC9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89550]">
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
              <span>Questions & Answers</span>
              <span className="w-6 h-[1.5px] bg-[#B89550]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#063D2D]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Quick answers to our most common resident queries.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.slice(0, 3).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E8DEC9] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EF]/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-[#063D2D] leading-snug">
                      {faq.q}
                    </span>
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
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-[#171714]/75 leading-relaxed border-t border-[#E8DEC9]/50 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* View All FAQs Link */}
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow transition-all hover:gap-3 cursor-pointer"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D8BD82]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 17: YOUR BETTER TOMORROW STARTS HERE (CTA)            */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#E8DEC9] shadow-xs">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#B89550]" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B89550]">
                  Your Journey Awaits
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171714] leading-tight">
                Find Your Space.<br />
                Build Your Future.<br />
                Feel At Home.
              </h2>
              <p className="text-xs sm:text-sm text-[#171714]/80 leading-relaxed max-w-lg">
                Discover comfortable accommodation and a welcoming environment at Ishanvi. Reserve your spot for the upcoming academic or professional semester.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] text-xs font-semibold rounded-full shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D8BD82]" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FAF6EF]" />
                </button>

                <a
                  href={`tel:${HOSTEL_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FAF6EF] hover:bg-[#F4EFE6] text-[#063D2D] text-xs font-semibold rounded-full border border-[#E8DEC9] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89550]" />
                  <span>Call {HOSTEL_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${HOSTEL_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Ishanvi Hostel! I would like to enquire about room availability.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-full shadow-xs transition-colors"
                >
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right side bedroom visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E8DEC9] h-56 sm:h-64">
                <img
                  src={HOSTEL_INFO.ctaRoom}
                  alt="Cozy Ishanvi Residence Accommodation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
