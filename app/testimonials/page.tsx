'use client';

import type { Metadata } from 'next';
import { Star, Quote } from 'lucide-react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

export default function TestimonialsPage() {
  const { content, isLoading, error } = useWebsiteContent();
  if (isLoading) return <div className="py-32 text-center text-xl">Loading...</div>;
  if (error || !content) return <div className="py-32 text-center text-red-600">Failed to load content.</div>;

  const testimonials = Array.isArray(content.testimonials) ? content.testimonials : [];
  const stats = Array.isArray(content.hero?.stats) ? content.hero.stats : [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Customer <span className="text-blue-600">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about our professional cleaning services.
            </p>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 ml-2">5.0</span>
              <span className="text-gray-600 ml-1">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Sources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Where Our Reviews Come From
            </h2>
            <p className="text-xl text-gray-600">
              We're proud of our reputation across multiple platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="font-semibold text-gray-900">Google Reviews</div>
              <div className="text-sm text-gray-600">150+ reviews</div>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="font-semibold text-gray-900">Facebook</div>
              <div className="text-sm text-gray-600">80+ reviews</div>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="font-semibold text-gray-900">Word of Mouth</div>
              <div className="text-sm text-gray-600">60% of our business</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the same quality service that our customers rave about. 
              Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:1300123456"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call 1300 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}