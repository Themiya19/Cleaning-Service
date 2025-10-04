'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Default fallback content
const defaultContent = {
  company: {
    name: 'Sparkle Clean',
    tagline: 'Professional Services',
    phone: '1300123456'
  }
};

// Client-side content state
let cachedContent: any = null;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [content, setContent] = useState<any>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Use cached content if available
        if (cachedContent) {
          setContent(cachedContent);
          setIsLoading(false);
          return;
        }

        // Add cache busting parameter to force fresh data
        const response = await fetch(`/api/website-content?t=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          cachedContent = data;
          setContent(data);
        } else {
          // If API fails, use default content
          console.warn('API failed, using default content');
          setContent(defaultContent);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        // Fallback to default content
        setContent(defaultContent);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
    
    // Set up periodic refresh to catch content updates (only if not using default)
    const interval = setInterval(() => {
      if (content !== defaultContent) {
        fetchContent();
      }
    }, 30000); // Refresh every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Always render the header, even while loading
  const currentContent = content || defaultContent;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/areas', label: 'Areas' },
    { href: '/testimonials', label: 'Reviews' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 z-50 transition-all-smooth ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all-smooth ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg"
            >
              <motion.span 
                className="text-white font-bold text-xl"
                whileHover={{ scale: 1.1 }}
              >
                SC
              </motion.span>
            </motion.div>
            <div>
              <motion.h1 
                className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
                whileHover={{ scale: 1.02 }}
              >
                {currentContent.company.name}
              </motion.h1>
              <motion.p 
                className="text-sm text-gray-600 transition-colors group-hover:text-blue-500"
                whileHover={{ x: 2 }}
              >
                {currentContent.company.tagline}
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all-smooth relative group py-2 block"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href={`tel:${currentContent.company.phone}`}
              className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span>{currentContent.company.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}</span>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg hover:shadow-xl block"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all-smooth"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-6 h-6">
              <AnimatePresence mode="wait">
                {!isMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div 
                className="py-4 border-t border-gray-200"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-all-smooth hover:pl-2 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="pt-4 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <motion.a
                      href={`tel:${currentContent.company.phone}`}
                      className="flex items-center space-x-2 text-blue-600 font-semibold py-2 hover:pl-2 transition-all-smooth"
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>{currentContent.company.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}</span>
                    </motion.a>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors mt-2 shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Quote
                      </Link>
                    </motion.div>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}