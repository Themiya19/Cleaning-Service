import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'website-content.json');

export interface WebsiteContent {
  company: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    stats: {
      customers: string;
      rating: string;
      experience: string;
      jobsCompleted: string;
      satisfactionRate: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    story: {
      founded: string;
      founder: string;
      description: string;
    };
    values: Array<{
      title: string;
      description: string;
    }>;
    whyChooseUs: string[];
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    price: string;
    duration: string;
    features: string[];
    image: string;
  }>;
  addOns: Array<{
    name: string;
    price: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    location: string;
  }>;
  seo: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    servicesTitle: string;
    servicesDescription: string;
  };
}

// Default content fallback
const defaultContent: WebsiteContent = {
  company: {
    name: "Sparkle Clean",
    tagline: "Professional Services",
    phone: "1300123456",
    email: "info@sparkleclean.com.au",
    address: "Hobart, TAS, Australia"
  },
  hero: {
    title: "Professional Cleaning Services in Tasmania",
    subtitle: "Experience the difference with Tasmania's most trusted cleaning professionals. Quality guaranteed, every time.",
    primaryCTA: "Get Free Quote",
    secondaryCTA: "Call Now",
    stats: {
      customers: "500+",
      rating: "5.0",
      experience: "10+",
      jobsCompleted: "2000+",
      satisfactionRate: "100%"
    }
  },
  about: {
    title: "About Sparkle Clean",
    subtitle: "For over a decade, we've been Tasmania's trusted cleaning professionals, delivering exceptional service to homes and businesses across the state.",
    mission: "To provide reliable, professional cleaning services that exceed expectations while maintaining the highest standards of quality and customer care.",
    story: {
      founded: "2014",
      founder: "Sarah Mitchell",
      description: "Sparkle Clean was founded in 2014 with a simple vision: to provide Tasmania residents and businesses with reliable, high-quality cleaning services they can trust."
    },
    values: [
      {
        title: "Quality First",
        description: "We never compromise on quality. Every job is completed to the highest standard with attention to detail."
      },
      {
        title: "Professional Team",
        description: "Our trained and experienced professionals are background-checked and fully insured for your peace of mind."
      }
    ],
    whyChooseUs: [
      "Over 10 years of experience in professional cleaning",
      "Fully licensed, bonded, and insured",
      "100% satisfaction guarantee"
    ]
  },
  services: [
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning",
      description: "Professional steam cleaning for carpets and rugs",
      shortDescription: "Deep steam cleaning for carpets and rugs",
      price: "From $80",
      duration: "1-3 hours",
      features: ["Deep steam cleaning", "Stain removal"],
      image: "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],
  addOns: [],
  features: [
    {
      title: "Fully Insured",
      description: "Comprehensive insurance coverage for your peace of mind"
    }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional service! Highly recommend.",
      location: "Hobart, TAS"
    }
  ],
  seo: {
    homeTitle: "Professional Cleaning Services Tasmania - Sparkle Clean",
    homeDescription: "Tasmania's trusted cleaning professionals. Quality guaranteed. Get your free quote today!",
    aboutTitle: "About Us - Sparkle Clean Professional Cleaning Services",
    aboutDescription: "Learn about Sparkle Clean, Tasmania's trusted cleaning professionals.",
    servicesTitle: "Professional Cleaning Services Tasmania - Sparkle Clean",
    servicesDescription: "Complete range of professional cleaning services in Tasmania."
  }
};

export async function getWebsiteContent(): Promise<WebsiteContent> {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
    return defaultContent;
  } catch (error) {
    console.error('Error reading website content:', error);
    return defaultContent;
  }
}

export async function saveWebsiteContent(content: WebsiteContent): Promise<boolean> {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(content, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving website content:', error);
    return false;
  }
}
