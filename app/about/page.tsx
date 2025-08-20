import type { Metadata } from 'next';
import { CheckCircle, Users, Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Sparkle Clean Professional Cleaning Services',
  description: 'Learn about Sparkle Clean, Melbourne\'s trusted cleaning professionals. Our story, values, and commitment to quality cleaning services.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every job is completed to the highest standard with attention to detail.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Professional Team',
      description: 'Our trained and experienced professionals are background-checked and fully insured for your peace of mind.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Reliability',
      description: 'Count on us to arrive on time, every time. We respect your schedule and deliver consistent results.',
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure you\'re completely happy with our service.',
    },
  ];

  const whyChooseUs = [
    'Over 10 years of experience in professional cleaning',
    'Fully licensed, bonded, and insured',
    'Eco-friendly cleaning products available',
    'Flexible scheduling including weekends',
    '100% satisfaction guarantee',
    'Competitive pricing with no hidden fees',
    'Trained and background-checked staff',
    'State-of-the-art cleaning equipment',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Sparkle Clean</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over a decade, we've been Melbourne's trusted cleaning professionals, 
                delivering exceptional service to homes and businesses across the city.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable, professional cleaning services that exceed expectations 
                  while maintaining the highest standards of quality and customer care.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Built on a foundation of trust, quality, and community service
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Sparkle Clean was founded in 2014 with a simple vision: to provide Melbourne residents 
                and businesses with reliable, high-quality cleaning services they can trust. What started 
                as a small family business has grown into one of Melbourne's most respected cleaning companies, 
                serving hundreds of satisfied customers across the metropolitan area.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our founder, Sarah Mitchell, started the company after years of working in the hospitality 
                industry, where she learned the importance of maintaining pristine environments. She noticed 
                a gap in the market for cleaning services that truly cared about quality and customer satisfaction, 
                not just getting the job done quickly.
              </p>

              <p className="text-gray-700 mb-6">
                Today, our team of experienced professionals continues to uphold the same values that Sarah 
                established from day one: integrity, attention to detail, and genuine care for our customers' 
                homes and businesses. We've expanded our services and invested in the latest cleaning technology, 
                but our commitment to excellence remains unchanged.
              </p>

              <p className="text-gray-700">
                We're proud to be a local Melbourne business, contributing to our community while helping 
                create cleaner, healthier spaces for families and businesses throughout the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver exceptional service every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Sparkle Clean?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're more than just a cleaning service - we're your trusted partners in maintaining 
                a clean, healthy environment for your family or business.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning equipment"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-blue-100">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}