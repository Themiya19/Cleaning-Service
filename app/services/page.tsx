'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Star, Phone } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';
import ParallaxContainer from '@/components/animations/ParallaxContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import { getWebsiteContent } from '@/lib/websiteContent';

// Removed export const revalidate and export async function generateMetadata

export default function ServicesPage() {
  const { content, isLoading, error } = useWebsiteContent();
  if (isLoading) return <div className="py-32 text-center text-xl">Loading...</div>;
  if (error || !content) return <div className="py-32 text-center text-red-600">Failed to load content.</div>;

  const services = content.services || [];
  const addOns = content.addOns || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 relative overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute top-10 right-10 w-40 h-40">
          <div className="w-full h-full bg-blue-100 rounded-full opacity-30 animate-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-10 left-10 w-32 h-32">
          <div className="w-full h-full bg-purple-100 rounded-full opacity-20 animate-parallax-float" />
        </ParallaxContainer>
        <div className="absolute inset-0 animate-morph-bg opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-text-glow">
              Professional <span className="text-blue-600 animate-shimmer bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Cleaning Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for every need. From carpet cleaning to office maintenance, 
              we deliver exceptional results with every service.
            </p>
            <StaggerContainer className="flex flex-col sm:flex-row gap-4 justify-center" staggerDelay={0.2}>
              <AnimatedCard hoverScale={1.05} className="inline-block">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover-glow"
                >
                  Get Free Quote
                </Link>
              </AnimatedCard>
              <AnimatedCard hoverScale={1.05} className="inline-block" delay={0.1}>
                  <a
                    href={`tel:${content.company.phone}`}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 hover-magnetic group"
                  >
                    <Phone className="w-5 h-5 transition-transform-smooth group-hover:scale-110 group-hover:rotate-12" />
                    {content.company.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
                  </a>
              </AnimatedCard>
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxContainer speed={0.4} className="absolute top-1/4 left-0 w-32 h-32 -translate-x-16">
          <div className="w-full h-full bg-blue-50 rounded-full opacity-50 animate-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.6} direction="down" className="absolute bottom-1/4 right-0 w-24 h-24 translate-x-12">
          <div className="w-full h-full bg-purple-50 rounded-full opacity-30 animate-parallax-float" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12" staggerDelay={0.2}>
            {services.map((service: any, index: number) => (
              <AnimatedCard key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group" delay={index * 0.1} hoverScale={1.02}>
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
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
                      {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 transition-transform-smooth hover:scale-125" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block hover-glow transform hover:scale-105"
                  >
                    Book This Service
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </StaggerContainer>
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
            {addOns.map((addon: any, index: number) => (
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
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute top-10 left-1/4 w-40 h-40">
          <div className="w-full h-full bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full animate-morph-bg" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-10 right-1/4 w-32 h-32">
          <div className="w-full h-full bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full animate-morph-bg" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward process to get your space sparkling clean
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.2}>
            {[
              { step: "1", title: "Get Quote", desc: "Contact us for a free, no-obligation quote tailored to your needs" },
              { step: "2", title: "Schedule", desc: "Choose a convenient time that works with your schedule" },
              { step: "3", title: "We Clean", desc: "Our professional team arrives on time and delivers exceptional results" },
              { step: "4", title: "Enjoy", desc: "Relax and enjoy your spotlessly clean space" }
            ].map((item, index) => (
              <AnimatedCard key={index} className="text-center" delay={index * 0.1} hoverScale={1.05}>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all-smooth hover:scale-110 hover:shadow-lg hover-glow animate-bounce-in">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </AnimatedCard>
            ))}
          </StaggerContainer>
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
                href={`tel:${content.company.phone}`}
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