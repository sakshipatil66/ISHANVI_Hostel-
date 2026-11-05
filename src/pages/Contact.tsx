import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
  Building,
  Calendar,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOSTEL_INFO, ROOMS_DATA } from '../data/hostelData';

export const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [roomType, setRoomType] = useState('Single Room');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    const digits = phone.replace(/\D/g, '');
    if (!digits || digits.length < 10) {
      errs.phone = 'Valid 10-digit mobile number required';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Valid email address required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          roomType,
          preferredDate,
          message,
          source: 'Contact Page Form',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to register enquiry on the server. Please retry.');
      }

      setTicketNumber(data.enquiryId);
      setSubmitted(true);

      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unable to connect to server. Please call or WhatsApp us.';
      setServerError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppChat = () => {
    const text = `*Hostel Contact Enquiry*
• Name: ${fullName || 'Guest'}
• Mobile: ${phone || 'Not provided'}
• Email: ${email || 'Not provided'}
• Room: ${roomType}
${preferredDate ? `• Preferred Visit Date: ${preferredDate}\n` : ''}• Message: ${message || 'I would like to inquire about room availability and visit.'}`;
    window.open(
      `https://wa.me/${HOSTEL_INFO.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="bg-[#FAF6EF]">
      {/* Page Header */}
      <PageHeader
        kicker="Get In Touch"
        title="We're Here To Help You Settle In"
        subtitle="Have questions about room availability, fees, facilities, or wish to schedule an in-person property visit? Reach out directly."
        breadcrumb="Contact Us"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#B89550] font-semibold">
                  Official Communication
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#063D2D]">
                  Visit or Connect With Us
                </h2>
                <p className="text-sm text-[#171714]/75 leading-relaxed">
                  Our management is readily available to answer your queries and guide you through our accommodation choices.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC9] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] text-[#B89550] flex items-center justify-center shrink-0 border border-[#B89550]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${HOSTEL_INFO.phoneRaw}`}
                      className="block text-base font-bold text-[#063D2D] hover:text-[#B89550] transition-colors"
                    >
                      {HOSTEL_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#171714]/60">
                      Call for immediate room booking inquiries
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC9] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href={`https://wa.me/${HOSTEL_INFO.whatsapp}?text=${encodeURIComponent(
                        'Hello Ishanvi Hostel! I would like to enquire about room availability.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-bold text-emerald-700 hover:underline"
                    >
                      Chat with Warden / Manager
                    </a>
                    <p className="text-[11px] text-[#171714]/60">
                      Fastest response for photos and availability
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC9] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] text-[#B89550] flex items-center justify-center shrink-0 border border-[#B89550]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                      Hostel Address
                    </span>
                    <p className="text-sm font-semibold text-[#063D2D] leading-snug">
                      {HOSTEL_INFO.address}
                    </p>
                    <p className="text-[11px] text-[#171714]/60">
                      Landmark: Walking distance from ISMS Sankalp Business School
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC9] shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] text-[#B89550] flex items-center justify-center shrink-0 border border-[#B89550]/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                      Office & Visiting Hours
                    </span>
                    <p className="text-sm font-semibold text-[#063D2D]">
                      8:00 AM – 9:00 PM (Daily)
                    </p>
                    <p className="text-[11px] text-[#171714]/60">
                      24×7 on-premise security and resident assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DEC9] shadow-md">
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B89550]">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#063D2D]">
                    Send An Enquiry
                  </h3>
                  <p className="text-xs text-[#171714]/70">
                    Fill in your details below and our team will get back to you with room availability and visit timings.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-[#063D2D]">
                      Thank You, {fullName}!
                    </h4>
                    <p className="text-sm text-[#171714]/80 max-w-md mx-auto">
                      Your inquiry has been successfully registered on our hostel system under reference{' '}
                      <strong className="text-[#B89550] font-mono">{ticketNumber}</strong>. Our management will contact you at <strong>{phone}</strong> promptly.
                    </p>

                    <div className="p-4 bg-[#FAF6EF] rounded-2xl border border-[#E8DEC9] text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Room Requested:</span>
                        <strong className="text-[#063D2D]">{roomType}</strong>
                      </div>
                      {preferredDate && (
                        <div className="flex justify-between">
                          <span className="text-stone-500">Scheduled Visit Date:</span>
                          <strong className="text-[#063D2D]">{preferredDate}</strong>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-stone-500">Contact Number:</span>
                        <strong>{phone}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Hostel Location:</span>
                        <span className="text-right">Near ISMS Sankalp Business School, Ambegaon Bk, Pune</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`tel:${HOSTEL_INFO.phoneRaw}`}
                        className="px-6 py-3 bg-[#B89550] hover:bg-[#D8BD82] text-[#022D22] font-semibold text-xs rounded-xl shadow inline-flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now: {HOSTEL_INFO.phone}</span>
                      </a>

                      <button
                        onClick={handleWhatsAppChat}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Continue to WhatsApp</span>
                      </button>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFullName('');
                          setPhone('');
                          setEmail('');
                          setPreferredDate('');
                          setMessage('');
                          setServerError('');
                        }}
                        className="px-6 py-3 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] font-semibold text-xs rounded-xl"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {serverError && (
                      <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <strong>Submission Error:</strong> {serverError}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF6EF] border ${
                          errors.fullName ? 'border-red-500' : 'border-[#E8DEC9]'
                        } focus:outline-none focus:ring-2 focus:ring-[#B89550]`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                          Phone / Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF6EF] border ${
                            errors.phone ? 'border-red-500' : 'border-[#E8DEC9]'
                          } focus:outline-none focus:ring-2 focus:ring-[#B89550]`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="your.email@example.com"
                          className={`w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF6EF] border ${
                            errors.email ? 'border-red-500' : 'border-[#E8DEC9]'
                          } focus:outline-none focus:ring-2 focus:ring-[#B89550]`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                          Interested Accommodation Type
                        </label>
                        <select
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF6EF] border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                        >
                          {ROOMS_DATA.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name} ({r.tagline})
                            </option>
                          ))}
                          <option value="General Hostel Inquiry">General Hostel Inquiry / Visit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                          Preferred Visit Date (Optional)
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={preferredDate}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF6EF] border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                        Message / Move-in Timeline
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your planned admission/college or joining date..."
                        className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF6EF] border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#063D2D] hover:bg-[#022D22] disabled:opacity-60 text-[#FAF6EF] font-semibold text-xs tracking-wider uppercase rounded-xl shadow transition-colors cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#D8BD82]" />
                            <span>Submitting to Server...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#D8BD82]" />
                            <span>Send Official Inquiry</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`tel:${HOSTEL_INFO.phoneRaw}`}
                        className="flex items-center justify-center gap-2 py-3.5 px-5 bg-[#B89550] hover:bg-[#D8BD82] text-[#022D22] font-semibold text-xs tracking-wider uppercase rounded-xl shadow transition-colors cursor-pointer"
                        title="Call hostel warden directly"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleWhatsAppChat}
                        className="flex items-center justify-center gap-2 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase rounded-xl shadow transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed & Location Directions */}
      <section className="py-16 bg-[#F4EFE6] border-t border-[#E8DEC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B89550] font-semibold">
              Location & Transit
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#063D2D]">
              How to Reach Ishanvi Hostel
            </h3>
            <p className="text-xs sm:text-sm text-[#171714]/75">
              Conveniently located in Ambegaon Bk, Pune near educational institutes and easy highway transit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Map Frame */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-[#D8BD82]/50 shadow-md h-[380px] bg-stone-200">
              <iframe
                title="Ishanvi Hostel Location Map Ambegaon Pune"
                src="https://maps.google.com/maps?q=ISMS+Sankalp+Business+School+Ambegaon+Bk+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Proximity Highlights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 bg-white rounded-xl border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#063D2D]">
                  <Building className="w-4 h-4 text-[#B89550]" />
                  <span>ISMS Sankalp Business School</span>
                </div>
                <p className="text-xs text-[#171714]/70">
                  Walking distance (~2-3 minutes) from hostel entrance.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#063D2D]">
                  <Navigation className="w-4 h-4 text-[#B89550]" />
                  <span>Sinhgad Technical Education Corridor</span>
                </div>
                <p className="text-xs text-[#171714]/70">
                  Short auto or bus transit (~5-10 minutes).
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E8DEC9] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#063D2D]">
                  <MapPin className="w-4 h-4 text-[#B89550]" />
                  <span>Katraj / Ambegaon Main Road</span>
                </div>
                <p className="text-xs text-[#171714]/70">
                  Easy access to grocery stores, medical pharmacies, banks, and stationery shops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
