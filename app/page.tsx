import Link from 'next/link';
import { Star, CheckCircle, Phone, Mail, Users, Clock, Shield, Award } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'Carpet Cleaning',
      description: 'Deep steam cleaning for carpets and rugs',
      price: 'From $80',
      image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Complete bond cleaning guarantee',
      price: 'From $200',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Office Cleaning',
      description: 'Regular commercial cleaning services',
      price: 'From $50/visit',
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive one-time deep clean',
      price: 'From $150',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Exceptional service! They cleaned our carpets and they look brand new. Highly recommend.',
      location: 'Carlton, VIC',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Professional team, arrived on time, and did an amazing job with our end of lease clean.',
      location: 'Richmond, VIC',
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      text: 'Regular office cleaning service is fantastic. Our workspace has never been cleaner.',
      location: 'South Yarra, VIC',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for your peace of mind',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Trained Professionals',
      description: 'Experienced and background-checked cleaning staff',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: '24/7 Availability',
      description: 'Flexible scheduling to fit your busy lifestyle',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all our services',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 translate-x-48 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 translate-y-32 -translate-x-32 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional <span className="text-blue-600">Cleaning Services</span> in Melbourne
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the difference with Melbourne's most trusted cleaning professionals. 
                Quality guaranteed, every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all-smooth text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:1300123456"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all-smooth text-center flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 transition-transform-smooth group-hover:scale-110" />
                  Call Now
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 animate-fade-in-up animate-delay-300">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Happy Customers</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-blue-600">5.0</div>
                  <div className="flex text-yellow-400 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current transition-transform-smooth hover:scale-125" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Google Rating</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning service"
                className="rounded-lg shadow-2xl w-full hover-lift transition-all-smooth"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg glass animate-scale-in animate-delay-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600 animate-pulse" />
                  <div>
                    <div className="font-semibold">100% Guarantee</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-blue-50 rounded-full opacity-50 -translate-x-16"></div>
        <div className="absolute top-1/4 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-30 translate-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From carpet cleaning to office maintenance, we provide comprehensive cleaning solutions 
              for homes and businesses across Melbourne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all-smooth animate-fade-in-up animate-delay-${(index + 1) * 100} group`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform-smooth group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-all-smooth hover:translate-x-1"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-700 transition-all-smooth inline-block transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sparkle Clean?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional cleaning services with professionalism, 
              reliability, and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className={`text-center animate-fade-in-up animate-delay-${(index + 1) * 100} group`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mb-6 transition-all-smooth group-hover:scale-110 group-hover:shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-yellow-100 rounded-full opacity-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-green-100 rounded-full opacity-20 translate-y-16"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg hover-lift transition-all-smooth animate-fade-in-up animate-delay-${(index + 1) * 100} border border-gray-100 group`}>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current transition-transform-smooth hover:scale-125" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-900 transition-colors">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-all-smooth hover:translate-x-1"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Ready for a Spotless Clean?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get your free quote today and experience the difference our professional cleaning services can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all-smooth inline-block transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300123456"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all-smooth inline-flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 transition-transform-smooth group-hover:scale-110" />
                1300 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}