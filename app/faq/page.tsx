'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What areas do you service?',
          answer: 'We provide professional cleaning services throughout Melbourne and surrounding suburbs including Carlton, Richmond, South Yarra, Brighton, St Kilda, Prahran, Fitzroy, Toorak, Caulfield, Windsor, Albert Park, and Hawthorn. Contact us to confirm we service your specific area.',
        },
        {
          question: 'Are you fully insured?',
          answer: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive public liability insurance to protect both our clients and our team. All our staff are background-checked and trained professionals.',
        },
        {
          question: 'Do you provide your own cleaning supplies and equipment?',
          answer: 'Absolutely! We bring all professional-grade cleaning supplies, equipment, and tools needed for the job. We use eco-friendly products by default, but can accommodate specific product preferences upon request.',
        },
        {
          question: 'How do I get a quote?',
          answer: 'Getting a quote is easy! You can call us at 1300 123 456, fill out our contact form, or email us directly. We provide free, no-obligation quotes and can often provide estimates over the phone for standard services.',
        },
      ],
    },
    {
      category: 'Booking & Scheduling',
      questions: [
        {
          question: 'How far in advance do I need to book?',
          answer: 'We recommend booking at least 24-48 hours in advance for regular services. For specialized services like end of lease cleaning, we suggest booking 3-5 days ahead. However, we do our best to accommodate same-day or next-day requests when possible.',
        },
        {
          question: 'What are your operating hours?',
          answer: 'Our regular business hours are Monday to Friday 7:00 AM - 6:00 PM, Saturday 8:00 AM - 4:00 PM. We offer limited Sunday and after-hours services for emergencies. Contact us to discuss special scheduling needs.',
        },
        {
          question: 'Can I reschedule or cancel my appointment?',
          answer: 'Yes, you can reschedule or cancel your appointment. We ask for at least 24 hours notice for changes to avoid any cancellation fees. Emergency cancellations are handled on a case-by-case basis.',
        },
        {
          question: 'Do I need to be home during the cleaning?',
          answer: 'It\'s not necessary for you to be home during the cleaning. Many of our clients provide access keys or codes and are at work during service. We\'re happy to work around your schedule and preferences.',
        },
      ],
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'What does your end of lease cleaning include?',
          answer: 'Our comprehensive end of lease cleaning covers all rooms, including deep cleaning of kitchen (oven, rangehood, cupboards), bathrooms (tiles, shower, toilet), bedrooms, living areas, window cleaning, and more. We follow real estate inspection checklists and offer a bond-back guarantee.',
        },
        {
          question: 'How long does carpet cleaning take?',
          answer: 'Carpet cleaning typically takes 1-3 hours depending on the size of the area and level of soiling. Most carpets are dry within 4-6 hours using our professional hot water extraction method. We can provide fans to speed up drying if needed.',
        },
        {
          question: 'Do you offer regular cleaning services?',
          answer: 'Yes! We offer regular house cleaning services on a weekly, bi-weekly, or monthly basis. Regular clients receive priority scheduling and may qualify for discounted rates. We can customize a cleaning plan to fit your needs and budget.',
        },
        {
          question: 'What factors affect the cost of cleaning?',
          answer: 'Pricing depends on several factors including property size, type of service, level of cleaning required, frequency of service, and specific requirements. We provide transparent, upfront pricing with no hidden fees.',
        },
      ],
    },
    {
      category: 'Quality & Guarantee',
      questions: [
        {
          question: 'Do you guarantee your work?',
          answer: 'Absolutely! We offer a 100% satisfaction guarantee on all our services. If you\'re not completely happy with our work, we\'ll return within 24 hours to address any concerns at no extra charge.',
        },
        {
          question: 'What if something gets damaged during cleaning?',
          answer: 'While our trained professionals take great care, accidents can happen. We carry comprehensive insurance to cover any accidental damage. We assess each situation individually and work quickly to resolve any issues.',
        },
        {
          question: 'Are your cleaning products safe for pets and children?',
          answer: 'Yes, we use eco-friendly, non-toxic cleaning products that are safe for pets and children. All our products are biodegradable and free from harsh chemicals. We can also accommodate specific sensitivities or allergies.',
        },
        {
          question: 'What happens if I\'m not satisfied with the cleaning?',
          answer: 'Customer satisfaction is our top priority. If you\'re not completely satisfied, contact us within 24 hours and we\'ll return to address any issues at no charge. We stand behind our work 100%.',
        },
      ],
    },
    {
      category: 'Payment & Policies',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, bank transfer, and all major credit cards. Payment is typically due upon completion of service. For regular cleaning clients, we can arrange weekly or monthly billing schedules.',
        },
        {
          question: 'Do you require a deposit?',
          answer: 'For most standard services, no deposit is required. However, for large commercial jobs or extensive end of lease cleaning, we may request a small deposit to secure your booking.',
        },
        {
          question: 'Is there a minimum charge?',
          answer: 'Yes, we have a minimum service charge to cover travel time and equipment setup. This varies by location and service type. We\'ll inform you of any minimum charges when providing your quote.',
        },
        {
          question: 'Do you offer any discounts?',
          answer: 'We offer several discount opportunities including regular client discounts, referral bonuses, and seasonal promotions. Seniors and students may also qualify for special rates. Ask about current offers when booking.',
        },
      ],
    },
  ];

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
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
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
                <a href="tel:1300123456" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                  1300 123 456
                </a>
                <p className="text-sm text-gray-600 mt-1">7 days a week</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:info@sparkleclean.com.au" className="text-blue-600 hover:text-blue-700 font-medium">
                  info@sparkleclean.com.au
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
                href="tel:1300123456"
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