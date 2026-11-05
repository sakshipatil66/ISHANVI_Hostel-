import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Star, Quote, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/hostelData';

export const Testimonials: React.FC = () => {
  const [residentFeedback, setResidentFeedback] = useState('');
  const [residentName, setResidentName] = useState('');
  const [roomStayed, setRoomStayed] = useState('Single Room');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!residentFeedback.trim() || !residentName.trim()) return;
    setFeedbackSent(true);
  };

  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header */}
      <PageHeader
        kicker="Community Voices"
        title="What Our Residents Say"
        subtitle="Genuine experiences and reviews shared by students and working professionals residing at Ishanvi Hostel & Accommodation, Pune."
        breadcrumb="Testimonials"
      />

      {/* Main Testimonials Grid */}
      <section className="py-20 border-b border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B89550] font-semibold">
              Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#063D2D]">
              Real Stories from Our Hostel Community
            </h2>
            <p className="text-sm text-[#171714]/75">
              Read how Ishanvi provides a serene haven for rigorous study sessions and peaceful daily living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl border border-[#E8DEC9] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#B89550]">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#B89550]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-[#171714]/85 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#E8DEC9] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#063D2D] text-[#D8BD82] flex items-center justify-center font-serif font-bold text-sm">
                    {testimonial.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#063D2D]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-stone-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resident Feedback Submission Section */}
      <section className="py-20 bg-[#F4EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DEC9] shadow-md space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF6EF] text-[#B89550] flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#063D2D]">
                Are You A Current or Past Resident?
              </h3>
              <p className="text-xs sm:text-sm text-[#171714]/70 max-w-lg mx-auto">
                We value your insights and continuous feedback to make Ishanvi an even better place to live and learn.
              </p>
            </div>

            {feedbackSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">
                  Thank You for Your Feedback!
                </h4>
                <p className="text-xs text-emerald-800">
                  Your review has been submitted to hostel management for review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={residentName}
                      onChange={(e) => setResidentName(e.target.value)}
                      placeholder="e.g. Rohan P."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF6EF] border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                      Room Type Occupied
                    </label>
                    <select
                      value={roomStayed}
                      onChange={(e) => setRoomStayed(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF6EF] border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                    >
                      <option value="Single Room">Single Room</option>
                      <option value="Double / Sharing Room">Double / Sharing Room</option>
                      <option value="Premium Room">Premium Room</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                    Your Review / Experience
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={residentFeedback}
                    onChange={(e) => setResidentFeedback(e.target.value)}
                    placeholder="Tell us about the room quality, cleanliness, security, Wi-Fi speed, and hostel community..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF6EF] border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] font-semibold text-xs rounded-full shadow transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D8BD82]" />
                    <span>Submit Resident Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
