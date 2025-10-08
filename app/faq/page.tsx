'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

export default function FAQPage() {
  const { content, isLoading, error } = useWebsiteContent();
  const phone = content?.company?.phone || '1300123456';
  const email = content?.company?.email || 'info@sparkleclean.com.au';
  const [openItems, setOpenItems] = useState<number[]>([]);
  if (isLoading) return <div className="py-32 text-center text-xl">Loading...</div>;
  if (error || !content) return <div className="py-32 text-center text-red-600">Failed to load content.</div>;

  const faqs = content.faqs || [];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about our professional cleaning services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category: any, categoryIndex: number) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq: any, faqIndex: number) => {
                  const itemIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div
                      key={faqIndex}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our friendly team is here to help! Contact us directly for personalized answers 
              to your specific cleaning needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                  {phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
                </a>
                <p className="text-sm text-gray-600 mt-1">7 days a week</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                  {email}
                </a>
                <p className="text-sm text-gray-600 mt-1">24 hour response</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Form</h3>
                <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Send Message
                </a>
                <p className="text-sm text-gray-600 mt-1">Quick & easy</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href={`tel:${phone}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}