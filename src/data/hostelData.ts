export interface Room {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  priceNote: string;
  features: string[];
  capacity: string;
  bathType: string;
  furnishing: string;
}

export interface Amenity {
  id: string;
  name: string;
  desc: string;
  icon: string;
  category: 'convenience' | 'security' | 'lifestyle';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  isRealProperty?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarText: string;
  avatarImage: string;
}

export const HOSTEL_INFO = {
  name: "ISHANVI HOSTEL & ACCOMMODATION",
  shortName: "Ishanvi Hostel",
  tagline: "SAFE STAY | BETTER LIVING | BRIGHTER TOMORROW",
  phone: "+91 77670 58988",
  phoneRaw: "+917767058988",
  whatsapp: "+917767058988",
  address: "Near ISMS Sankalp Business School, Ambegaon Bk, Pune - 411066",
  area: "Ambegaon Bk, Pune",
  landmark: "Near ISMS Sankalp Business School",
  pincode: "411066",
  city: "Pune",
  state: "Maharashtra",
  email: "contact@ishanvihostel.in",
  openingHours: "Open 24 Hours for Residents (Enquiry & Visits: 8:00 AM – 9:00 PM)",
  logo: "/assets/logo.jpg",
  heroStudent: "/src/assets/images/hero_student_clean.jpg",
  aboutBedroom: "/src/assets/images/about_bedroom_study_1793895033201.jpg",
  ctaRoom: "/src/assets/images/cta_bedroom_cozy_1793895034314.jpg",
  lifestyleMorning: "/src/assets/images/ishanvi_lifestyle_morning_1793898429429.jpg",
  eveningLounge: "/src/assets/images/ishanvi_evening_lounge_1793898429648.jpg",
  exteriorEntrance: "/src/assets/images/ishanvi_exterior_entrance_1793898451126.jpg"
};

export const ROOMS_DATA: Room[] = [
  {
    id: "single-room",
    name: "Single Room",
    tagline: "Privacy & Peace",
    shortDesc: "A private room for focused study or work, with a desk, storage and a cosy bed.",
    fullDesc: "Designed specifically for residents who desire an uninterrupted, tranquil environment for academic excellence or remote work. Includes an ergonomic study station, ample personal storage, and high-speed Wi-Fi access.",
    image: "/src/assets/images/room_single_luxury_1793895033322.jpg",
    priceNote: "Enquire for pricing · Contact us for availability",
    capacity: "1 Resident (Private)",
    bathType: "Attached / Dedicated Sanitized Bath",
    furnishing: "Fully Furnished with Premium Bed, Desk & Wardrobe",
    features: [
      "Comfortable Bed with Premium Mattress & Fresh Linen",
      "Dedicated Wooden Study Desk & Ergonomic Chair",
      "Spacious Wardrobe with Built-in Mirror & Locks",
      "High-Speed Wi-Fi for Seamless Connectivity",
      "Ventilated Window with Blockout Curtains",
      "Regular Sanitization & Housekeeping"
    ]
  },
  {
    id: "sharing-room",
    name: "Sharing Room",
    tagline: "Comfort with Companionship",
    shortDesc: "A friendly shared room with individual beds and space for everyone.",
    fullDesc: "Spacious dual-occupancy accommodation with two individual comfortable single beds, separate storage wardrobes, and dedicated study zones to balance social life with focused academic hours.",
    image: "/src/assets/images/room_sharing_luxury_1793895033303.jpg",
    priceNote: "Enquire for pricing · Contact us for availability",
    capacity: "2 Residents (Twin Sharing)",
    bathType: "Hygienic Shared / Attached Bathroom",
    furnishing: "Fully Furnished with Individual Beds & Twin Wardrobes",
    features: [
      "Two Separate Single Beds with Comfortable Mattresses",
      "Individual Wardrobes with Secure Locks",
      "Shared Study Table with Individual Lighting Points",
      "High-Speed Wi-Fi & Multiple Charging Sockets",
      "Natural Daylight & Ceiling Fan Airflow",
      "Daily Cleaning of Room and Washroom"
    ]
  },
  {
    id: "premium-room",
    name: "Premium Room",
    tagline: "Extra Comfort & Space",
    shortDesc: "Our most spacious option with upgraded furnishings and extra comfort.",
    fullDesc: "Our premium option tailored for those who want an upgraded hostel living experience. Features generous room dimensions, enhanced wooden furnishings, expansive wardrobe storage, and serene views.",
    image: "/src/assets/images/room_premium_clean.jpg",
    priceNote: "Enquire for pricing · Contact us for availability",
    capacity: "1–2 Residents (Premium Layout)",
    bathType: "Modern Sanitized Attached Bathroom",
    furnishing: "Premium Grade Furnishings & Deluxe Bedding",
    features: [
      "Generous Room Dimensions with Ample Movement Space",
      "Upgraded Wooden Wardrobe with Dressing Mirror",
      "Executive Study Table with Bookshelf Unit",
      "High-Speed Wi-Fi with Dedicated Router Proximity",
      "Large Window with Scenic Ambegaon Surroundings",
      "Priority Maintenance & Housekeeping Support"
    ]
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "wifi",
    name: "High-Speed Wi-Fi",
    desc: "Uncapped, high-bandwidth internet coverage throughout all rooms and common spaces for seamless online lectures and research.",
    icon: "Wifi",
    category: "convenience"
  },
  {
    id: "meals",
    name: "Hygienic Meals",
    desc: "Wholesome, home-style balanced breakfast, lunch, and dinner prepared in a clean, sanitized kitchen facility.",
    icon: "Utensils",
    category: "lifestyle"
  },
  {
    id: "security",
    name: "24/7 Security",
    desc: "24x7 CCTV surveillance, biometric/secure entry logging, and dedicated resident hostel warden for complete peace of mind.",
    icon: "ShieldCheck",
    category: "security"
  },
  {
    id: "laundry",
    name: "Laundry Service",
    desc: "Convenient on-premise washing and drying facilities to keep your wardrobe fresh without taking time away from studies.",
    icon: "Shirt",
    category: "convenience"
  },
  {
    id: "lounge",
    name: "Common Lounge",
    desc: "A warm, comfortable communal relaxation lounge to connect with peers, read books, or unwind after a demanding day.",
    icon: "Armchair",
    category: "lifestyle"
  },
  {
    id: "study",
    name: "Study Area",
    desc: "Quiet, well-illuminated collaborative and individual reading zones engineered for distraction-free exam preparation.",
    icon: "BookOpen",
    category: "lifestyle"
  },
  {
    id: "fitness",
    name: "Fitness Facility",
    desc: "Essential fitness gear and movement area enabling residents to maintain active, energetic physical health.",
    icon: "Dumbbell",
    category: "lifestyle"
  },
  {
    id: "location",
    name: "Prime Location",
    desc: "Prime accessibility near ISMS Sankalp Business School, Sinhgad campus corridor, and Ambegaon Bk commercial hubs.",
    icon: "MapPin",
    category: "convenience"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Reception Desk",
    category: "Common Spaces",
    image: "/src/assets/images/hero_student_reception_1793893527271.jpg",
    caption: "Welcoming reception lobby designed for seamless check-ins and resident assistance.",
    isRealProperty: true
  },
  {
    id: "g2",
    title: "Resident Lounge",
    category: "Common Spaces",
    image: "/src/assets/images/gallery_common_lounge_1793893527671.jpg",
    caption: "Resident lounge with comfortable sofas for relaxing and peer discussions.",
    isRealProperty: true
  },
  {
    id: "g3",
    title: "Dining Hall",
    category: "Dining",
    image: "/src/assets/images/gallery_dining_area_1793893528088.jpg",
    caption: "Clean, hygienic dining hall serving fresh home-style meals daily.",
    isRealProperty: true
  },
  {
    id: "g4",
    title: "Hostel Bedroom",
    category: "Rooms",
    image: "/src/assets/images/room_single_luxury_1793895033322.jpg",
    caption: "Well-ventilated, bright student bedroom with individual study and wardrobe setup.",
    isRealProperty: true
  },
  {
    id: "g5",
    title: "Quiet Study Library",
    category: "Study",
    image: "/src/assets/images/gallery_study_zone_1793893527649.jpg",
    caption: "Focused quiet study zone with natural sunlight and individual reading lamps.",
    isRealProperty: true
  },
  {
    id: "g6",
    title: "Single Room Setup",
    category: "Rooms",
    image: "/src/assets/images/room_single_luxury_1793895033322.jpg",
    caption: "Clean, private single accommodation with dedicated study desk and storage.",
    isRealProperty: true
  },
  {
    id: "g7",
    title: "Sharing Room Setup",
    category: "Rooms",
    image: "/src/assets/images/room_sharing_luxury_1793895033303.jpg",
    caption: "Twin sharing room with individual wardrobes and comfortable beds.",
    isRealProperty: true
  },
  {
    id: "g8",
    title: "Premium Accommodation",
    category: "Rooms",
    image: "/src/assets/images/room_premium_clean.jpg",
    caption: "Spacious premium room with enhanced storage and scenic natural lighting.",
    isRealProperty: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Priya S.",
    role: "Student",
    quote: "A very safe and comfortable place with great facilities. Feels like home!",
    rating: 5,
    avatarText: "PS",
    avatarImage: "/src/assets/images/avatar_priya_student_1793895052003.jpg"
  },
  {
    id: "t2",
    name: "Aarav K.",
    role: "Working Professional",
    quote: "Clean rooms, good food and a friendly environment. Highly recommended!",
    rating: 5,
    avatarText: "AK",
    avatarImage: "/src/assets/images/avatar_aarav_pro_1793895052440.jpg"
  },
  {
    id: "t3",
    name: "Neha R.",
    role: "Student",
    quote: "The best hostel experience I've had so far. Great community!",
    rating: 5,
    avatarText: "NR",
    avatarImage: "/src/assets/images/avatar_neha_student_1793895052510.jpg"
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Comfortable Accommodation",
    desc: "Thoughtfully designed rooms with quality mattresses, study tables, personal wardrobes, and optimal natural airflow.",
    icon: "Bed"
  },
  {
    title: "Safe & Secure Environment",
    desc: "Round-the-clock CCTV surveillance, verified security protocols, and on-site staff ensure your peace of mind at all hours.",
    icon: "ShieldCheck"
  },
  {
    title: "Clean and Hygienic Living",
    desc: "Daily professional housekeeping, sanitized washrooms, and clean common spaces maintained to strict hygiene benchmarks.",
    icon: "Sparkles"
  },
  {
    title: "Student-Friendly Atmosphere",
    desc: "A warm, respectful peer community of students and young professionals sharing educational goals and mutual support.",
    icon: "Users"
  },
  {
    title: "Convenient Location",
    desc: "Situated right next to ISMS Sankalp Business School with quick connectivity to college hubs, cafes, and city transit.",
    icon: "MapPin"
  },
  {
    title: "Supportive Community",
    desc: "Responsive hostel management always on call to assist with maintenance, guidance, and resident comfort.",
    icon: "HeartHandshake"
  }
];

export const DAY_AT_ISHANVI_TIMELINE = [
  {
    time: "07:00 AM",
    stage: "A Fresh Start",
    subtitle: "Wake up in a comfortable space",
    desc: "Gentle morning daylight through large windows, comfortable bedding, and dedicated personal space to greet the day with calm clarity.",
    image: "/src/assets/images/ishanvi_lifestyle_morning_1793898429429.jpg",
    icon: "Sun"
  },
  {
    time: "08:30 AM",
    stage: "A Productive Morning",
    subtitle: "Prepare for college or work",
    desc: "A hassle-free morning routine with ready hot water, clean washrooms, and convenient proximity to neighboring educational campuses in Ambegaon.",
    image: "/src/assets/images/hero_student_clean.jpg",
    icon: "BookOpen"
  },
  {
    time: "01:30 PM",
    stage: "A Better Day",
    subtitle: "Enjoy a supportive living environment",
    desc: "High-speed Wi-Fi, comfortable common areas, and a quiet, peaceful sanctuary to return to between lectures or professional commitments.",
    image: "/src/assets/images/gallery_dining_area_1793893528088.jpg",
    icon: "Coffee"
  },
  {
    time: "06:30 PM",
    stage: "A Relaxing Evening",
    subtitle: "Return to your personal space",
    desc: "Unwind in the common lounge with peers, review coursework at your private study desk, or relax in a safe, secure atmosphere.",
    image: "/src/assets/images/ishanvi_evening_lounge_1793898429648.jpg",
    icon: "Armchair"
  },
  {
    time: "10:30 PM",
    stage: "A Peaceful Night",
    subtitle: "Enjoy a comfortable place to rest",
    desc: "Rest easy with round-the-clock security, attentive wardens, and serene quiet hours for deep, uninterrupted sleep.",
    image: "/src/assets/images/cta_bedroom_cozy_1793895034314.jpg",
    icon: "Moon"
  }
];

export const ISHANVI_EXPERIENCE_CARDS = [
  {
    title: "A Comfortable Space",
    kicker: "Thoughtful Living",
    desc: "Spacious rooms equipped with ergonomic study furniture, well-ventilated windows, personal storage, and deluxe single beds for peaceful academic focus.",
    image: "/src/assets/images/ishanvi_lifestyle_morning_1793898429429.jpg",
    icon: "Bed"
  },
  {
    title: "A Safe Environment",
    kicker: "Protected Living",
    desc: "Round-the-clock CCTV surveillance, attentive residence supervision, secure access points, and emergency preparedness so residents and parents have complete peace of mind.",
    image: "/src/assets/images/hero_student_clean.jpg",
    icon: "ShieldCheck"
  },
  {
    title: "A Better Everyday Lifestyle",
    kicker: "Community Living",
    desc: "Balanced living with high-speed internet, dedicated lounge facilities, wholesome environment, and a respectful peer culture designed to foster long-term growth.",
    image: "/src/assets/images/ishanvi_evening_lounge_1793898429648.jpg",
    icon: "Sparkles"
  }
];

export const FAQ_DATA = [
  {
    category: "Rooms",
    q: "What types of rooms are available at Ishanvi Hostel?",
    a: "We offer three room categories: Single Rooms for individuals needing personal space and quiet study, Double / Sharing Rooms with two separate beds for companionship, and Premium Rooms featuring extra space and upgraded furnishings. All rooms come furnished with comfortable beds, wardrobes, and study desks."
  },
  {
    category: "Pricing",
    q: "How much does a room cost, and how is pricing determined?",
    a: "Room tariffs depend on the chosen occupancy (Single, Twin Sharing, or Premium) and current term plans. To ensure you receive the most accurate and up-to-date pricing with any current seasonal offers, please click 'Enquire Now' or call us at +91 77670 58988."
  },
  {
    category: "Availability",
    q: "How can I check real-time room availability for the upcoming semester?",
    a: "Room availability updates continuously as students reserve for their academic terms. You can check current bed availability immediately by submitting the enquiry form or sending a quick WhatsApp message to +91 77670 58988."
  },
  {
    category: "Location",
    q: "Where is Ishanvi Hostel located in Pune?",
    a: "Our verified address is Near ISMS Sankalp Business School, Ambegaon Budruk (Ambegaon Bk), Pune - 411066, Maharashtra. This location offers direct walking proximity to ISMS and convenient access to Sinhgad Institutes, Bharati Vidyapeeth, and the Mumbai–Bangalore Katraj bypass."
  },
  {
    category: "Enquiry Process",
    q: "What is the enquiry and admission process?",
    a: "The process is simple and transparent: 1) Submit your enquiry online or call our desk at +91 77670 58988. 2) Our hostel manager will discuss room options and answer questions. 3) Schedule an optional in-person visit. 4) Complete resident verification and confirm your reservation."
  },
  {
    category: "Visiting the Property",
    q: "Can parents and students visit the property before booking?",
    a: "Yes, we actively encourage parents and students to visit and inspect our rooms, bathrooms, security, and common areas. Property visits are hosted daily between 8:00 AM and 9:00 PM. Please give us a quick heads-up via phone or WhatsApp so a manager can guide you."
  },
  {
    category: "Facilities & Amenities",
    q: "What facilities and amenities are included in the accommodation?",
    a: "Residents enjoy high-speed Wi-Fi throughout the building, 24×7 security with CCTV monitoring and resident warden, clean sanitized washrooms, regular housekeeping, common lounge areas, dedicated quiet study desks, and hygienic meal arrangements."
  },
  {
    category: "Contact",
    q: "How can I get in touch with Ishanvi Hostel management directly?",
    a: "You can reach us directly by phone at +91 77670 58988, via WhatsApp at +91 77670 58988, by email at contact@ishanvihostel.in, or by visiting our reception desk in Ambegaon Bk, Pune."
  }
];

export const ISHANVI_DIFFERENCE_PILLARS = [
  {
    title: "Comfortable Living",
    desc: "Quality beds, organized workstations, and ample natural lighting ensure your room is truly a personal sanctuary."
  },
  {
    title: "Safety & Peace of Mind",
    desc: "Verified 24×7 security protocols, resident supervisor presence, and controlled access give both residents and parents total confidence."
  },
  {
    title: "Student-Friendly Accommodation",
    desc: "Quiet study spaces, high-speed Wi-Fi throughout, and strict noise management designed specifically for focused academic achievement."
  },
  {
    title: "Supportive Environment",
    desc: "Caring management and an uplifting peer community that helps newcomers adapt smoothly to life in Pune."
  },
  {
    title: "Better Everyday Living",
    desc: "From clean sanitized washrooms to high reliability of essential utilities, daily routines are seamless and stress-free."
  }
];

