/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { LightboxModal } from './components/LightboxModal';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Rooms } from './pages/Rooms';
import { Amenities } from './pages/Amenities';
import { Gallery } from './pages/Gallery';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';

import { GALLERY_ITEMS } from './data/hostelData';

// Dynamic SEO Title & Meta updater
function RouteMetadataUpdater() {
  const location = useLocation();

  useEffect(() => {
    let title = 'Ishanvi Hostel & Accommodation | Pune';
    let desc =
      'Safe, secure, and premium student & professional accommodation near ISMS Sankalp Business School, Ambegaon Bk, Pune.';

    switch (location.pathname) {
      case '/':
        title = 'Ishanvi Hostel & Accommodation | Ambegaon Bk, Pune';
        desc =
          'Safe, Secure and Well-Managed Accommodation for Students & Working Professionals in Ambegaon Bk, Pune.';
        break;
      case '/about':
        title = 'About Us | Ishanvi Hostel & Accommodation Pune';
        desc =
          'Learn about Ishanvi Hostel - our mission, vision, and dedication to safe, supportive student living in Pune.';
        break;
      case '/rooms':
        title = 'Rooms & Living Options | Ishanvi Hostel Pune';
        desc =
          'Explore Single Rooms, Double Sharing Rooms, and Premium Rooms with real unmanipulated room photographs.';
        break;
      case '/amenities':
        title = 'Facilities & Amenities | Ishanvi Hostel Pune';
        desc =
          'High-speed Wi-Fi, hygienic meals, 24x7 security, common lounge, laundry, and study areas in Ambegaon Pune.';
        break;
      case '/gallery':
        title = 'Photo Gallery | Ishanvi Hostel & Accommodation';
        desc =
          'View authentic photographs of our hostel rooms, dining spaces, student lifestyle, and ambient lounge.';
        break;
      case '/testimonials':
        title = 'Resident Reviews | Ishanvi Hostel Pune';
        desc =
          'Read genuine feedback from students and working professionals living at Ishanvi Hostel in Ambegaon Pune.';
        break;
      case '/faq':
        title = 'Frequently Asked Questions | Ishanvi Hostel Pune';
        desc =
          'Verified answers about room pricing, availability, amenities, location, visiting, and hostel admission at Ishanvi.';
        break;
      case '/contact':
        title = 'Contact & Location | Ishanvi Hostel Pune';
        desc =
          'Contact Ishanvi Hostel near ISMS Sankalp Business School, Ambegaon Bk, Pune. Phone: +91 77670 58988.';
        break;
      default:
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenEnquiry = (roomName?: string) => {
    setSelectedRoom(roomName);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    setSelectedRoom(undefined);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <Router>
      <RouteMetadataUpdater />
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#171714]">
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route
              path="/about"
              element={<About onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/rooms"
              element={
                <Rooms
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route
              path="/amenities"
              element={<Amenities onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/gallery"
              element={<Gallery onOpenLightbox={handleOpenLightbox} />}
            />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <Home
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
          </Routes>
        </main>

        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={handleCloseEnquiry}
          initialRoom={selectedRoom}
        />

        {/* Global Lightbox Modal */}
        <LightboxModal
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
        />
      </div>
    </Router>
  );
}
