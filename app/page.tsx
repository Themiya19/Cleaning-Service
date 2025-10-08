'use client';

import Link from 'next/link';
import { Star, CheckCircle, Phone, Mail, Users, Clock, Shield, Award } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';
import ParallaxContainer from '@/components/animations/ParallaxContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

// Use incremental static regeneration with short revalidation
export const revalidate = 1; // Revalidate every second

export default function HomePage() {
  const { content, isLoading, error } = useWebsiteContent();
  if (isLoading) return <div className="py-32 text-center text-xl">Loading...</div>;
  if (error || !content) return <div className="py-32 text-center text-red-600">Failed to load content.</div>;

  const services = content.services?.slice(0, 4).map((service: any) => ({
    title: service.title,
    description: service.shortDescription,
    price: service.price,
    image: service.image.replace('w=600', 'w=400'),
  })) || [];
  const testimonials = content.testimonials || [];
  const features = (content.features || []).map((feature: any, index: number) => {
    const icons = [
      <Shield className="w-8 h-8 text-blue-600" />,
      <Users className="w-8 h-8 text-blue-600" />,
      <Clock className="w-8 h-8 text-blue-600" />,
      <Award className="w-8 h-8 text-blue-600" />
    ];
    return {
      icon: icons[index] || <Shield className="w-8 h-8 text-blue-600" />,
      title: feature.title,
      description: feature.description,
    };
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <ParallaxContainer speed={0.3} direction="up" className="absolute top-0 right-0 w-96 h-96 -translate-y-48 translate-x-48">
          <div className="w-full h-full bg-blue-100 rounded-full opacity-20 animate-parallax-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-0 left-0 w-64 h-64 translate-y-32 -translate-x-32">
          <div className="w-full h-full bg-blue-200 rounded-full opacity-20 animate-parallax-float" />
        </ParallaxContainer>
        <div className="absolute inset-0 animate-morph-bg opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft" className="space-y-8">
              <AnimatedSection animation="fadeUp" delay={0.2}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {content.hero.title.split(' ').slice(0, -2).join(' ')} <span className="text-blue-600 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-shimmer">
                    {content.hero.title.split(' ').slice(-2).join(' ')}
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fadeUp" delay={0.4}>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {content.hero.subtitle}
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all-smooth text-center transform hover:scale-105 shadow-lg hover:shadow-xl hover-glow"
                  >
                    {content.hero.primaryCTA}
                  </Link>
                  <a
                    href={`tel:${content.company.phone}`}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all-smooth text-center flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl hover-magnetic group"
                  >
                    <Phone className="w-5 h-5 transition-transform-smooth group-hover:scale-110 group-hover:rotate-12" />
                    {content.hero.secondaryCTA}
                  </a>
                </div>
              </AnimatedSection>
              <StaggerContainer className="mt-8 flex items-center gap-6" staggerDelay={0.2}>
                <AnimatedCard className="text-center group cursor-pointer" hoverScale={1.1}>
                  <div className="text-2xl font-bold text-blue-600 animate-bounce-in">{content.hero.stats.customers}</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Happy Customers</div>
                </AnimatedCard>
                <AnimatedCard className="text-center group cursor-pointer" hoverScale={1.1} delay={0.1}>
                  <div className="text-2xl font-bold text-blue-600 animate-bounce-in">{content.hero.stats.rating}</div>
                  <div className="flex text-yellow-400 justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current transition-transform-smooth hover:scale-125 animate-rotate-in" style={{animationDelay: `${i * 0.1 + 0.5}s`}} />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Google Rating</div>
                </AnimatedCard>
              </StaggerContainer>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" className="relative">
              <ParallaxContainer speed={0.2} direction="up">
                <img
                  src={content.hero?.image || "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=800"}
                  alt="Professional cleaning service"
                  className="rounded-lg shadow-2xl w-full hover-lift hover-tilt transition-all-smooth"
                />
              </ParallaxContainer>
              <AnimatedCard 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg glass" 
                delay={0.8}
                hoverScale={1.05}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600 animate-pulse" />
                  <div>
                    <div className="font-semibold">100% Guarantee</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </AnimatedCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxContainer speed={0.4} className="absolute top-1/2 left-0 w-32 h-32 -translate-x-16">
          <div className="w-full h-full bg-blue-50 rounded-full opacity-50 animate-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.6} direction="down" className="absolute top-1/4 right-0 w-24 h-24 translate-x-12">
          <div className="w-full h-full bg-blue-100 rounded-full opacity-30 animate-parallax-float" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From carpet cleaning to office maintenance, we provide comprehensive cleaning solutions 
              for homes and businesses across Tasmania.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {services.map((service: any, index: number) => (
              <AnimatedCard 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
                delay={index * 0.1}
                hoverScale={1.05}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-lg">{service.price}</span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-all-smooth hover:translate-x-1 hover-magnetic"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerContainer>

          <AnimatedSection animation="fadeUp" delay={0.5} className="text-center mt-12">
            <Link
              href="/services"
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-700 transition-all-smooth inline-block transform hover:scale-105 shadow-lg hover:shadow-xl hover-glow"
            >
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        <ParallaxContainer speed={0.3} className="absolute top-10 left-10 w-40 h-40">
          <div className="w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-morph-bg" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-10 right-10 w-32 h-32">
          <div className="w-full h-full bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full animate-morph-bg" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {content.company.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional cleaning services with professionalism, 
              reliability, and attention to detail.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" staggerDelay={0.2}>
            {features.map((feature: any, index: number) => (
              <AnimatedCard key={index} className="text-center group" delay={index * 0.1} hoverScale={1.05}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mb-6 transition-all-smooth group-hover:scale-110 group-hover:shadow-lg hover-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </AnimatedCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxContainer speed={0.4} className="absolute top-0 left-1/4 w-40 h-40 -translate-y-20">
          <div className="w-full h-full bg-yellow-100 rounded-full opacity-20 animate-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.6} direction="down" className="absolute bottom-0 right-1/4 w-32 h-32 translate-y-16">
          <div className="w-full h-full bg-green-100 rounded-full opacity-20 animate-parallax-float" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {testimonials.map((testimonial: any, index: number) => (
              <AnimatedCard 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-100 group" 
                delay={index * 0.15}
                hoverScale={1.02}
              >
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current transition-transform-smooth hover:scale-125 animate-rotate-in" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-900 transition-colors">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerContainer>

          <AnimatedSection animation="fadeUp" delay={0.5} className="text-center mt-12">
            <Link
              href="/testimonials"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-all-smooth hover:translate-x-1 hover-magnetic"
            >
              Read More Reviews →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute top-0 right-0 w-96 h-96 -translate-y-48 translate-x-48">
          <div className="w-full h-full bg-white opacity-5 rounded-full animate-parallax-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-0 left-0 w-64 h-64 translate-y-32 -translate-x-32">
          <div className="w-full h-full bg-white opacity-5 rounded-full animate-float" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight animate-text-glow">
              Ready for a Spotless Clean?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get your free quote today and experience the difference our professional cleaning services can make.
            </p>
            <StaggerContainer className="flex flex-col sm:flex-row gap-4 justify-center" staggerDelay={0.2}>
              <AnimatedCard hoverScale={1.05} className="inline-block">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all-smooth inline-block shadow-lg hover:shadow-xl hover-glow"
                >
                  Get Free Quote
                </Link>
              </AnimatedCard>
              <AnimatedCard hoverScale={1.05} className="inline-block" delay={0.1}>
                  <a
                    href={`tel:${content.company.phone}`}
                    className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all-smooth inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover-magnetic group"
                  >
                    <Phone className="w-5 h-5 transition-transform-smooth group-hover:scale-110 group-hover:rotate-12" />
                    {content.company.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
                  </a>
              </AnimatedCard>
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}