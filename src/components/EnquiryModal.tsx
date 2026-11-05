import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle, Shield, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOSTEL_INFO, ROOMS_DATA } from '../data/hostelData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, initialRoom }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [roomType, setRoomType] = useState('Single Room');
  const [occupation, setOccupation] = useState<'Student' | 'Working Professional'>('Student');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (initialRoom) {
      setRoomType(initialRoom);
    }
  }, [initialRoom, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          message: `[${occupation}] ${message}`.trim(),
          source: 'Enquiry Modal',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Server error recording enquiry');
      }

      setTicketId(data.enquiryId);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to submit enquiry. Please call directly.';
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = `*New Hostel Enquiry - Ishanvi Accommodation*
• Name: ${fullName || 'Guest'}
• Phone: ${phone || 'Not provided'}
• Email: ${email || 'Not provided'}
• Interested Room: ${roomType}
• Category: ${occupation}
• Note: ${message || 'Please share available rooms and pricing.'}`;

    const url = `https://wa.me/${HOSTEL_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setServerError('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF6EF] rounded-2xl shadow-2xl border border-[#D8BD82]/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-[#063D2D] text-[#FAF6EF] px-6 py-5 flex items-center justify-between border-b border-[#B89550]/30">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#D8BD82] uppercase">
              Official Hostel Enquiry
            </span>
            <h3 className="text-xl font-serif font-bold text-[#FAF6EF]">
              Book A Visit or Check Availability
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#FAF6EF]/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#063D2D]">
                Enquiry Received!
              </h4>
              <p className="text-sm text-[#171714]/80 max-w-sm mx-auto">
                Thank you, <strong className="text-[#063D2D]">{fullName}</strong>. Your inquiry reference is <strong className="text-[#B89550]">{ticketId}</strong>. Our warden/manager will contact you at <strong>{phone}</strong> shortly.
              </p>

              <div className="p-4 bg-[#F4EFE6] rounded-xl text-left border border-[#E8DEC9] space-y-1.5 text-xs text-[#171714]/80">
                <div className="flex justify-between">
                  <span className="text-stone-500">Room Requested:</span>
                  <span className="font-semibold text-[#063D2D]">{roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Contact Number:</span>
                  <span className="font-semibold">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Hostel Location:</span>
                  <span className="font-semibold text-right">Ambegaon Bk, Pune</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>
                <button
                  onClick={resetForm}
                  className="py-3 px-5 bg-[#063D2D] hover:bg-[#022D22] text-[#FAF6EF] font-semibold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {serverError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#E8DEC9] flex items-center justify-between text-xs text-[#063D2D]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Shield className="w-4 h-4 text-[#B89550]" />
                  Direct response from hostel management
                </span>
                <a
                  href={`tel:${HOSTEL_INFO.phoneRaw}`}
                  className="font-bold underline hover:text-[#B89550]"
                >
                  {HOSTEL_INFO.phone}
                </a>
              </div>

              {/* Resident Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1.5">
                  I am a
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Student', 'Working Professional'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOccupation(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        occupation === type
                          ? 'bg-[#063D2D] text-[#FAF6EF] border-[#063D2D]'
                          : 'bg-white text-[#171714] border-[#E8DEC9] hover:bg-[#FAF6EF]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
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
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
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

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
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
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                      errors.email ? 'border-red-500' : 'border-[#E8DEC9]'
                    } focus:outline-none focus:ring-2 focus:ring-[#B89550]`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Interested Room */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                  Interested Room Type
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name} ({r.tagline})
                    </option>
                  ))}
                  <option value="Any Available Room">Any Available Room</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#171714]/70 mb-1">
                  Specific Query or Move-in Date (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Looking to shift by 1st of next month, need single room."
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#E8DEC9] focus:outline-none focus:ring-2 focus:ring-[#B89550]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#063D2D] hover:bg-[#022D22] disabled:opacity-60 text-[#FAF6EF] font-semibold text-sm rounded-xl shadow transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D8BD82]" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D8BD82]" />
                      <span>Submit Hostel Enquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow transition-colors cursor-pointer"
                  title="Direct WhatsApp enquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-[#171714]/60">
                  Prefer a direct phone conversation? Call{' '}
                  <a href={`tel:${HOSTEL_INFO.phoneRaw}`} className="text-[#063D2D] font-bold underline">
                    {HOSTEL_INFO.phone}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
