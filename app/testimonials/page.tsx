import type { Metadata } from 'next';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials - Sparkle Clean',
  description: 'Read what our satisfied customers say about Sparkle Clean\'s professional cleaning services in Melbourne. Real reviews from real customers.',
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Carlton, VIC',
      service: 'Carpet Cleaning',
      rating: 5,
      text: 'Absolutely exceptional service! The team at Sparkle Clean transformed our carpets. They looked brand new after their steam cleaning service. The technicians were professional, punctual, and extremely thorough. I couldn\'t be happier with the results.',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Chen',
      location: 'Richmond, VIC',
      service: 'End of Lease Cleaning',
      rating: 5,
      text: 'I was stressed about getting my bond back, but Sparkle Clean made it so easy. They followed the real estate checklist perfectly and cleaned every corner of the property. Got my full bond back thanks to their meticulous work!',
      date: '1 month ago',
    },
    {
      name: 'Emma Wilson',
      location: 'South Yarra, VIC',
      service: 'Office Cleaning',
      rating: 5,
      text: 'We\'ve been using Sparkle Clean for our office cleaning for over a year now. They\'re consistently reliable, professional, and do an outstanding job. Our workspace has never been cleaner. Highly recommend for any business.',
      date: '3 weeks ago',
    },
    {
      name: 'David Thompson',
      location: 'Brighton, VIC',
      service: 'Deep Cleaning',
      rating: 5,
      text: 'After renovations, our house was a complete mess. Sparkle Clean\'s deep cleaning service was incredible - they cleaned places I didn\'t even know needed cleaning! The attention to detail was amazing.',
      date: '1 week ago',
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Fitzroy, VIC',
      service: 'Regular House Cleaning',
      rating: 5,
      text: 'Having Sparkle Clean come bi-weekly has been life-changing. The same cleaner comes each time, knows our preferences, and always does a fantastic job. It\'s so nice to come home to a spotless house!',
      date: '4 days ago',
    },
    {
      name: 'James Mitchell',
      location: 'St Kilda, VIC',
      service: 'Window Cleaning',
      rating: 5,
      text: 'Professional window cleaning service that delivered exactly what they promised - crystal clear, streak-free windows. They cleaned the frames and sills too. Great value for money.',
      date: '2 weeks ago',
    },
    {
      name: 'Amanda Foster',
      location: 'Prahran, VIC',
      service: 'Carpet Cleaning',
      rating: 5,
      text: 'My carpets had some tough stains that I thought were permanent. Sparkle Clean not only removed them completely but also eliminated the pet odors. The carpets smell fresh and look amazing!',
      date: '1 month ago',
    },
    {
      name: 'Robert Kim',
      location: 'Toorak, VIC',
      service: 'End of Lease Cleaning',
      rating: 5,
      text: 'Quick, efficient, and thorough. The team arrived on time and completed the end of lease clean faster than expected without compromising on quality. The real estate agent was impressed!',
      date: '3 weeks ago',
    },
    {
      name: 'Rachel Green',
      location: 'Caulfield, VIC',
      service: 'Office Cleaning',
      rating: 5,
      text: 'Sparkle Clean has been cleaning our medical practice for months. They understand the importance of hygiene in our environment and always use appropriate products. Very reliable and professional.',
      date: '1 week ago',
    },
    {
      name: 'Mark Davis',
      location: 'Windsor, VIC',
      service: 'Deep Cleaning',
      rating: 5,
      text: 'Booked a deep clean before hosting family for the holidays. The team was incredible - they cleaned inside appliances, light fixtures, baseboards, everything! My house has never looked better.',
      date: '5 days ago',
    },
    {
      name: 'Sophie Turner',
      location: 'Albert Park, VIC',
      service: 'Regular House Cleaning',
      rating: 5,
      text: 'The consistency is what I love most about Sparkle Clean. Every visit is the same high standard. They\'re trustworthy, thorough, and always leave my home sparkling clean.',
      date: '1 week ago',
    },
    {
      name: 'Paul Anderson',
      location: 'Hawthorn, VIC',
      service: 'Window Cleaning',
      rating: 5,
      text: 'Had both interior and exterior windows cleaned. The difference is remarkable! Natural light flows so much better now. The team was careful with my garden and left no mess behind.',
      date: '2 weeks ago',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '2000+', label: 'Jobs Completed' },
    { number: '5.0', label: 'Average Rating' },
    { number: '98%', label: 'Customer Retention' },
  ];

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
            {stats.map((stat, index) => (
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
            {testimonials.map((testimonial, index) => (
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