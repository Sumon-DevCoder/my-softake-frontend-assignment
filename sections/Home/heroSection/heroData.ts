export interface HeroSlide {
  id: number;
  headline: string;
  description: string;
  backgroundImage: string;
  carouselImages: string[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    headline: "Make Every Run on the Mountain Count",
    description:
      "Every day on the mountain tells a story—capture yours with detailed run tracking, performance stats, and global resort insights that keep you prepared for whatever the slopes bring.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    carouselImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    ],
  },
  {
    id: 2,
    headline: "Turn Ordinary Ski Days Into Epic Adventures",
    description:
      "Turn every ski or snowboard session into a memorable adventure with rich analytics, real-time conditions, and worldwide trail maps designed to help you explore confidently and ride your best.",
    backgroundImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070",
    carouselImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    ],
  },
  {
    id: 3,
    headline: "Elevate Your Mountain Experience",
    description:
      "Discover new peaks, track your progress, and connect with a community of adventurers. Your next great mountain adventure starts here.",
    backgroundImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070",
    carouselImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
    ],
  },
  {
    id: 4,
    headline: "Master the Slopes with Precision Tracking",
    description:
      "From beginner runs to expert trails, track every turn, measure your speed, and analyze your technique. Get the insights you need to improve your skills and conquer new challenges on the mountain.",
    backgroundImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070",
    carouselImages: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    ],
  },
  {
    id: 5,
    headline: "Connect with Mountains Worldwide",
    description:
      "Explore resorts across the globe, check real-time weather conditions, and plan your perfect ski trip. Whether you're hitting local slopes or planning an international adventure, we've got you covered.",
    backgroundImage:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070",
    carouselImages: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
    ],
  },
  {
    id: 6,
    headline: "Your Journey, Your Stats, Your Story",
    description:
      "Build your mountain legacy with comprehensive tracking that captures every moment. Share your achievements, compare with friends, and watch your progress unfold as you become the skier or snowboarder you've always wanted to be.",
    backgroundImage:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070",
    carouselImages: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=800",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800",
    ],
  },
];
