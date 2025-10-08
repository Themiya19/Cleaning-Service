'use client';

import type { Metadata } from 'next';
import { CheckCircle, Users, Award, Heart } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';
import ParallaxContainer from '@/components/animations/ParallaxContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

export default function AboutPage() {
  const { content, isLoading, error } = useWebsiteContent();
  if (isLoading) return <div className="py-32 text-center text-xl">Loading...</div>;
  if (error || !content) return <div className="py-32 text-center text-red-600">Failed to load content.</div>;

  const values = content.about?.values?.map((value: any, index: number) => {
    const icons = [
      <CheckCircle key={0} className="w-8 h-8 text-blue-600" />,
      <Users key={1} className="w-8 h-8 text-blue-600" />,
      <Award key={2} className="w-8 h-8 text-blue-600" />,
      <Heart key={3} className="w-8 h-8 text-blue-600" />
    ];
    return {
      icon: icons[index] || <CheckCircle key={index} className="w-8 h-8 text-blue-600" />,
      title: value.title,
      description: value.description,
    };
  }) || [];
  const whyChooseUs = content.about?.whyChooseUs || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 relative overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute top-10 right-10 w-32 h-32">
          <div className="w-full h-full bg-blue-100 rounded-full opacity-30 animate-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-10 left-10 w-24 h-24">
          <div className="w-full h-full bg-purple-100 rounded-full opacity-20 animate-parallax-float" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-text-glow">
                {content.about?.title?.split(' ').slice(0, 1).join(' ')} <span className="text-blue-600">{content.about?.title?.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {content.about?.subtitle}
              </p>
              <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" hoverScale={1.02}>
                <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  {content.about?.mission}
                </p>
              </AnimatedCard>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight">
              <ParallaxContainer speed={0.2} direction="up">
                <img
                  src={content.about?.image || "https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=800"}
                  alt="Professional cleaning team"
                  className="rounded-lg shadow-lg w-full hover-lift hover-tilt transition-all-smooth"
                />
              </ParallaxContainer>
            </AnimatedSection>
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
                {content.about?.story?.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <ParallaxContainer speed={0.4} className="absolute top-1/4 left-0 w-40 h-40">
          <div className="w-full h-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-morph-bg" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.6} direction="down" className="absolute bottom-1/4 right-0 w-32 h-32">
          <div className="w-full h-full bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full animate-morph-bg" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver exceptional service every time
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.2}>
            {values.map((value: any, index: number) => (
              <AnimatedCard key={index} className="text-center" delay={index * 0.1} hoverScale={1.05}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 transition-all-smooth hover:scale-110 hover:shadow-lg hover-glow">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose {content.company?.name}?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're more than just a cleaning service - we're your trusted partners in maintaining 
                a clean, healthy environment for your family or business.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((item: string, index: number) => (
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
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <ParallaxContainer speed={0.3} className="absolute top-0 right-0 w-96 h-96 -translate-y-48 translate-x-48">
          <div className="w-full h-full bg-white opacity-5 rounded-full animate-parallax-float" />
        </ParallaxContainer>
        <ParallaxContainer speed={0.5} direction="down" className="absolute bottom-0 left-0 w-64 h-64 translate-y-32 -translate-x-32">
          <div className="w-full h-full bg-white opacity-5 rounded-full animate-float" />
        </ParallaxContainer>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.2}>
            <AnimatedCard className="text-center" hoverScale={1.1}>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-bounce-in">{content.hero?.stats?.experience}</div>
              <div className="text-blue-100">Years Experience</div>
            </AnimatedCard>
            <AnimatedCard className="text-center" delay={0.1} hoverScale={1.1}>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-bounce-in">{content.hero?.stats?.customers}</div>
              <div className="text-blue-100">Happy Customers</div>
            </AnimatedCard>
            <AnimatedCard className="text-center" delay={0.2} hoverScale={1.1}>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-bounce-in">{content.hero?.stats?.jobsCompleted}</div>
              <div className="text-blue-100">Jobs Completed</div>
            </AnimatedCard>
            <AnimatedCard className="text-center" delay={0.3} hoverScale={1.1}>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-bounce-in">{content.hero?.stats?.satisfactionRate}</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </AnimatedCard>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}