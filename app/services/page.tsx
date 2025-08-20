import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Star, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services Melbourne - Sparkle Clean',
  description: 'Complete range of professional cleaning services in Melbourne. Carpet cleaning, end of lease cleaning, office cleaning, and more. Get your free quote today.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Carpet Cleaning',
      description: 'Professional steam cleaning for carpets, rugs, and upholstery. We remove deep stains, odors, and allergens to restore your carpets to like-new condition.',
      price: 'From $80',
      duration: '1-3 hours',
      features: [
        'Deep steam cleaning',
        'Stain removal',
        'Odor elimination',
        'Fast drying',
        'Eco-friendly products',
      ],
      image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Comprehensive bond cleaning service to help you get your full deposit back. We follow real estate inspection checklists to ensure nothing is missed.',
      price: 'From $200',
      duration: '3-6 hours',
      features: [
        'Bond back guarantee',
        'Complete property clean',
        'Kitchen deep clean',
        'Bathroom sanitization',
        'Window cleaning',
      ],
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Office Cleaning',
      description: 'Regular commercial cleaning services for offices, retail spaces, and medical facilities. Maintain a professional, healthy work environment.',
      price: 'From $50/visit',
      duration: 'Varies',
      features: [
        'Daily, weekly, or monthly service',
        'Desk and surface cleaning',
        'Restroom sanitization',
        'Trash removal',
        'Floor care',
      ],
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Deep Cleaning',
      description: 'Intensive one-time cleaning service that covers every corner of your home. Perfect for spring cleaning or before special events.',
      price: 'From $150',
      duration: '4-8 hours',
      features: [
        'Complete home cleaning',
        'Inside appliances',
        'Light fixtures',
        'Baseboards & trim',
        'Window sills',
      ],
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Window Cleaning',
      description: 'Crystal clear windows inside and out. We clean frames, sills, and screens for streak-free results that let the light shine through.',
      price: 'From $60',
      duration: '1-2 hours',
      features: [
        'Inside & outside cleaning',
        'Frame & sill cleaning',
        'Screen cleaning',
        'Streak-free finish',
        'High-rise available',
      ],
      image: 'https://images.pexels.com/photos/5591831/pexels-photo-5591831.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Regular House Cleaning',
      description: 'Ongoing residential cleaning service to keep your home consistently clean. Choose weekly, bi-weekly, or monthly service.',
      price: 'From $100/visit',
      duration: '2-4 hours',
      features: [
        'Flexible scheduling',
        'Same cleaner each visit',
        'Custom cleaning plan',
        'Eco-friendly options',
        'Satisfaction guarantee',
      ],
      image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const addOns = [
    { name: 'Inside Oven Cleaning', price: '$25' },
    { name: 'Inside Fridge Cleaning', price: '$20' },
    { name: 'Garage Cleaning', price: '$40' },
    { name: 'Balcony/Patio Cleaning', price: '$30' },
    { name: 'Pressure Washing', price: '$80' },
    { name: 'Garden Maintenance', price: '$60/hour' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional <span className="text-blue-600">Cleaning Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for every need. From carpet cleaning to office maintenance, 
              we deliver exceptional results with every service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300123456"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                1300 123 456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your cleaning service with these popular add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                  <span className="text-blue-600 font-bold">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward process to get your space sparkling clean
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Quote</h3>
              <p className="text-gray-600">Contact us for a free, no-obligation quote tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule</h3>
              <p className="text-gray-600">Choose a convenient time that works with your schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Clean</h3>
              <p className="text-gray-600">Our professional team arrives on time and delivers exceptional results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy</h3>
              <p className="text-gray-600">Relax and enjoy your spotlessly clean space</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free quote and experience the Sparkle Clean difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300123456"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}