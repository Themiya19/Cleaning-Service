import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas Melbourne - Professional Cleaning Services | Sparkle Clean',
  description: 'Professional cleaning services across Melbourne suburbs. We service Carlton, Richmond, South Yarra, Brighton, St Kilda, and more. Check if we service your area.',
};

export default function AreasPage() {
  const serviceAreas = [
    {
      region: 'Inner Melbourne',
      suburbs: [
        'Carlton', 'Carlton North', 'Fitzroy', 'Fitzroy North', 'Collingwood',
        'Richmond', 'South Yarra', 'Prahran', 'Windsor', 'St Kilda',
        'Albert Park', 'Port Melbourne', 'South Melbourne', 'Melbourne CBD'
      ],
      travelTime: '15-30 mins',
      popular: true,
    },
    {
      region: 'Eastern Suburbs',
      suburbs: [
        'Toorak', 'Armadale', 'Malvern', 'Caulfield', 'Glen Iris',
        'Camberwell', 'Hawthorn', 'Kew', 'Richmond', 'Burnley'
      ],
      ravelTime: '20-35 mins',
      popular: true,
    },
    {
      region: 'Southern Suburbs',
      suburbs: [
        'Brighton', 'Hampton', 'Sandringham', 'Bentleigh', 'McKinnon',
        'Ormond', 'Elsternwick', 'Caulfield South', 'Carnegie', 'Murrumbeena'
      ],
      travelTime: '25-40 mins',
      popular: false,
    },
    {
      region: 'Western Suburbs',
      suburbs: [
        'Yarraville', 'Seddon', 'Footscray', 'Maribyrnong', 'Kensington',
        'Flemington', 'North Melbourne', 'West Melbourne', 'Docklands'
      ],
      travelTime: '20-35 mins',
      popular: false,
    },
    {
      region: 'Northern Suburbs',
      suburbs: [
        'Brunswick', 'Brunswick East', 'Thornbury', 'Northcote', 'Preston',
        'Coburg', 'Pascoe Vale', 'Essendon', 'Moonee Ponds', 'Ascot Vale'
      ],
      travelTime: '25-40 mins',
      popular: false,
    },
    {
      region: 'Bayside',
      suburbs: [
        'Elwood', 'Balaclava', 'Ripponlea', 'Gardenvale', 'Middle Park',
        'Beaumaris', 'Black Rock', 'Cheltenham', 'Highett', 'Mentone'
      ],
      travelTime: '30-45 mins',
      popular: false,
    },
  ];

  const services = [
    'Carpet Cleaning',
    'End of Lease Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Window Cleaning',
    'Regular House Cleaning',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Melbourne <span className="text-blue-600">Service Areas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional cleaning services across Melbourne and surrounding suburbs. 
              We're your local cleaning experts, providing reliable service throughout the metropolitan area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Check Your Area
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

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas We Service
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cleaning services across Melbourne's diverse suburbs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 border-2 ${area.popular ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{area.region}</h3>
                  {area.popular && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{area.travelTime} from city</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {area.suburbs.map((suburb, subIndex) => (
                    <div key={subIndex} className="text-sm text-gray-700 py-1">
                      {suburb}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Get Quote for This Area
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                All Services Available in Every Area
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                No matter which Melbourne suburb you're in, you can access our complete range 
                of professional cleaning services.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Melbourne cleaning services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Local Melbourne Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a locally owned and operated business, we understand Melbourne's unique needs 
              and are committed to serving our community with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Knowledge</h3>
              <p className="text-gray-600">
                We know Melbourne's neighborhoods, properties, and specific cleaning challenges that come with our diverse city.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Being locally based means faster response times and more flexible scheduling to meet your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                We're invested in our community's success and build lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Same High Standards, Every Location
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you're in the CBD or the outer suburbs, you'll receive the same professional 
              service and quality results that Sparkle Clean is known for.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Suburbs Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Local Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5.0</div>
                <div className="text-blue-100">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Area
              </Link>
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

      {/* Not Listed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Suburb Listed?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always expanding our service areas. Contact us to see if we can service your location.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              We regularly take on jobs in new areas, especially for larger projects or regular services. 
              Even if your suburb isn't listed above, we'd love to discuss your cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us About Your Area
              </Link>
              <a
                href="tel:1300123456"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Call to Inquire
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}