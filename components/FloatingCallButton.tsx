'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 md:hidden transition-all-smooth ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <a
        href="tel:1300123456"
        className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-lg hover:from-green-700 hover:to-green-800 transition-all-smooth transform hover:scale-110 animate-float group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 transition-transform-smooth group-hover:scale-110" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></span>
      </a>
    </div>
  );
}