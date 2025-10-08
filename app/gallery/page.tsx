'use client';

import type { Metadata } from 'next';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

export default function GalleryPage() {
  const { content, isLoading, error } = useWebsiteContent();
  const phone = content?.company?.phone || '1300123456';
  if (isLoading) return <div className="py-32 text-center text-xl">Loading...</div>;
  if (error || !content) return <div className="py-32 text-center text-red-600">Failed to load content.</div>;

  const gallery = content.gallery || [];
  const serviceImages = content.serviceImages || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Before & After <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See the amazing transformation our professional cleaning services can achieve. 
              These real results showcase the quality and attention to detail we bring to every job.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Jobs
            </h2>
            <p className="text-xl text-gray-600">
              These dramatic transformations show the difference professional cleaning makes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {gallery.map((item: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                        BEFORE
                      </div>
                      <img
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                        AFTER
                      </div>
                      <img
                        src={item.after}
                        alt={`${item.title} - After`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600">
              Professional equipment and techniques that deliver superior results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceImages.map((item: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Process
            </h2>
            <p className="text-xl text-gray-600">
              Every job follows our proven methodology for consistent, exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">We thoroughly assess the area and identify specific cleaning challenges and requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Cleaning</h3>
              <p className="text-gray-600">Using professional-grade equipment and proven techniques to achieve outstanding results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Check</h3>
              <p className="text-gray-600">Final inspection ensures every detail meets our high standards before we consider the job complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us create amazing before and after results at your property. 
              Contact us today for your free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href={`tel:${phone}`}
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call {phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}