import { ServiceCategory, Project, TeamMember, Testimonial, CompanyStat, CoreValue, TargetClient } from './types';

export const COMP_INFO = {
  name: "Siltawi Digital Marketing",
  industry: "Digital Marketing & Creative Agency",
  founded: 2023,
  location: "Addis Ababa, Ethiopia",
  fullAddress: "4th Floor, Wegagen Bank Building, Bole Road, Addis Ababa, Ethiopia",
  email: "info@siltawi.com",
  phone: "+251 900 000 000",
  website: "www.siltawi.com",
  mission: "To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections.",
  vision: "To become one of Africa's leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions.",
  logoUrl: "https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
};

export const CORE_VALUES: CoreValue[] = [
  {
    name: "Innovation",
    description: "Developing forward-thinking strategies and embracing cutting-edge digital advertising technology.",
    iconName: "Lightbulb"
  },
  {
    name: "Creativity",
    description: "Crafting captivating visual identities and narrative-driven copy that command attention.",
    iconName: "Palette"
  },
  {
    name: "Transparency",
    description: "Fostering uncompromised trust through unified campaign dashboards, live reports, and open metrics.",
    iconName: "ShieldCheck"
  },
  {
    name: "Excellence",
    description: "Setting elite benchmarks and maintaining meticulous quality across all client deliverables.",
    iconName: "Award"
  },
  {
    name: "Customer Success",
    description: "Aligning campaign execution directly with actionable leads, sales acquisition, and brand loyalty.",
    iconName: "TrendingUp"
  },
  {
    name: "Continuous Learning",
    description: "Iterating skill sets and adapting dynamically to evolving algorithm updates across digital channels.",
    iconName: "GraduationCap"
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Engaging and high-conversion marketing across major digital platforms to capture and win mindshare.",
    iconName: "Megaphone",
    items: [
      "Social Media Marketing",
      "Facebook & Instagram Ads",
      "Google Ads Management",
      "Email Marketing Campaigns",
      "Influencer Marketing Partners"
    ]
  },
  {
    id: "web-dev",
    title: "Website Development",
    description: "Speed-optimized, responsive, and secure custom applications designed to convert page visits into enterprise revenues.",
    iconName: "Globe",
    items: [
      "Company Profile Websites",
      "E-commerce Web Applications",
      "Landing Page Form Optimization",
      "Custom Creative Portfolios",
      "Website Security & Maintenance"
    ]
  },
  {
    id: "branding",
    title: "Branding & Design",
    description: "Defining memorable identities, brand marks, and layout standards to cut through visual noise.",
    iconName: "Paintbrush",
    items: [
      "Logo Design & Systematics",
      "Brand Identity Style Guides",
      "Digital & Print Marketing Materials",
      "User Interface / Experience (UI/UX) Design"
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Multi-channel content manufacturing that captures human interest and retains audience retention.",
    iconName: "Video",
    items: [
      "Social Media Graphic Content",
      "Professional Video Production",
      "Corporate & Event Photography",
      "Strategic Copywriting & Copyediting"
    ]
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Technical optimization and localized indexing models to rocket your business to Page 1 on Google search engine results.",
    iconName: "Search",
    items: [
      "On-Page SEO Optimization",
      "Technical SEO Auditing",
      "Local SEO (Google Maps & Places)",
      "Comprehensive Organic Competitor Auditing"
    ]
  }
];

export const TARGET_CLIENTS: TargetClient[] = [
  { name: "Small Businesses", description: "Empowering local retailers and local shops looking to step confidently into digital commerce.", iconName: "Store" },
  { name: "Startups", description: "Aggressive, agile seed-stage scaling campaigns designed to drive early-stage traction and investor updates.", iconName: "Zap" },
  { name: "Restaurants & Cafes", description: "Immersive food photography, digital menus, and highly targeted neighborhood map indexing.", iconName: "Utensils" },
  { name: "Educational Institutions", description: "Streamlined modern student enrollment forms and structured institution brand-building.", iconName: "BookOpen" },
  { name: "Real Estate Companies", description: "High-end cinematic property walkthrough videos and premium programmatic visual ads to attract verified homebuyers.", iconName: "Building2" },
  { name: "NGOs & Non-Profits", description: "Strategic issue advocacy campaigns, public impact metrics, and highly optimized donor generation landing pages.", iconName: "Heart" },
  { name: "Healthcare Providers", description: "Professional, patient-focused layouts with high visual credibility and patient booking pipelines.", iconName: "Activity" },
  { name: "E-commerce Businesses", description: "Conversion-first marketing channels and fully responsive, secure web payment integrations.", iconName: "ShoppingCart" }
];

export const WHY_CHOOSE_US = [
  { title: "Experienced Digital Team", description: "A multi-disciplinary taskforce of developers, marketers, designers, and SEO experts.", iconName: "Users" },
  { title: "Creative & Modern Designs", description: "Aesthetics tailored to modern digital audiences, respecting brand spacing and clear visual hierarchy.", iconName: "Sparkles" },
  { title: "Affordable Pricing", description: "Flexible, transparent service packages calibrated to give high ROI to startups and enterprises.", iconName: "DollarSign" },
  { title: "Fast Project Delivery", description: "Rapid turnarounds on web structures and marketing sprints without compromising build and audit quality.", iconName: "MousePointerClick" },
  { title: "Data-Driven Marketing Strategies", description: "Ditching guesswork. Utilizing strict visual click heatmaps, conversion analytics, and verified data.", iconName: "BarChart" },
  { title: "Ongoing Support & Consultation", description: "Providing continuous maintenance, strategic check-ins, and performance monitoring.", iconName: "HeartHandshake" }
];

export const COMPANY_STATS: CompanyStat[] = [
  { id: "projects", value: "100+", numberValue: 100, suffix: "+", label: "Projects Completed", iconName: "CheckCircle2" },
  { id: "clients", value: "50+", numberValue: 50, suffix: "+", label: "Active Clients", iconName: "Smile" },
  { id: "team", value: "15", numberValue: 15, suffix: "", label: "Team Members", iconName: "Users" },
  { id: "experience", value: "3+", numberValue: 3, suffix: "+", label: "Years of Experience", iconName: "Calendar" },
  { id: "satisfaction", value: "95%", numberValue: 95, suffix: "%", label: "Client Satisfaction Rate", iconName: "Award" }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t1",
    name: "Kirubel Siltawi",
    role: "CEO & Founder",
    department: "Executive Leadership",
    bio: "Kirubel leads corporate strategy, business partnerships, and brand development. With years of experience scaling enterprises across East Africa, he ensures Siltawi remains the gold standard for strategic marketing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    skills: ["Business Strategy", "Venture Growth", "Brand Architecture", "Public Relations"]
  },
  {
    id: "t2",
    name: "Rediet Abera",
    role: "Marketing Manager",
    department: "Marketing Strategy",
    bio: "Rediet oversees multi-channel consumer campaigns and keeps clients winning. She directs programmatic spending, social content orchestration, and ensures user leads transition efficiently to revenue.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    skills: ["Campaign Orchestration", "Facebook Ads", "Google Ads", "Social Analytics"]
  },
  {
    id: "t3",
    name: "Yonas Mekonnen",
    role: "Lead Web Developer",
    department: "Web Development Team",
    bio: "Yonas builds secure, high-speed, fully responsive web tools. He translates Figma canvas mockups into highly searchable, accessibility-first React nodes and robust custom checkout architectures.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    skills: ["React & Next.js", "Server Systems", "Speed Optimization", "Tailwind CSS"]
  },
  {
    id: "t4",
    name: "Eden Tesfaye",
    role: "Lead Graphic Designer",
    department: "Graphic Design Team",
    bio: "Eden specializes in brand systematics, visual alignment, and layout proportions. She crafts premium emblems, corporate packaging, and interactive digital branding assets that leave a lasting print.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    skills: ["Figma Branding", "Typography Strategy", "Illustrator System", "Visual Guidelines"]
  },
  {
    id: "t5",
    name: "Abdi Kebede",
    role: "Lead Content & Video Producer",
    department: "Content Creation Team",
    bio: "Abdi leads content manufacturing, cinematic filming, and strategic copywriting. He creates video ads and social stories that capture attention within the first three seconds of scroll.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    skills: ["Cinematic Storytelling", "Premiere Pro", "Photography Setup", "Strategic Copywriting"]
  },
  {
    id: "t6",
    name: "Selam Teklay",
    role: "Senior SEO Specialist",
    department: "SEO & Growth",
    bio: "Selam turns organic research into ranking pages. She configures high-impact off-page link campaigns, schema markup directories, and local metadata profiles so products dominate search engines.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    skills: ["On-Page SEO", "Technical Auditing", "Local Map Rankings", "Keyword Modeling"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    quote: "Siltawi helped us increase our online sales by 200% within six months. Their data-driven approach and dedication were unlike any other agency we've worked with.",
    author: "Dawit Wolde",
    role: "Managing Director",
    company: "Zemen Retail Group",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test2",
    quote: "Their website design and marketing services transformed our brand presence. The web platform is incredibly fast, visually brilliant, and our inquiry volume has surged tenfold.",
    author: "Sara Hagos",
    role: "Co-Founder",
    company: "Sheger Tech Hub",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test3",
    quote: "We trusted Siltawi with our comprehensive rebranding project. From logo system design to targeted Facebook and Instagram campaign setups, they exceeded our highest expectations.",
    author: "Elias Bekele",
    role: "General Manager",
    company: "Bole Luxury Apartments",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "EcoCafé Rebranding & Digital Launch",
    category: "branding",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600",
    client: "EcoCafé Ethiopia",
    description: "A complete visual identity reboot, including logo systems, product tags, menu typography, and local maps configuration to attract high-end coffee enthusiasts.",
    tags: ["Logo System", "Social Content", "Local Map SEO"]
  },
  {
    id: "p2",
    title: "Zemen E-Commerce Store & Ads Blueprint",
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    client: "Zemen Retail Group",
    description: "Developed a secure-checkout web platform. Backed it up with programmatic meta targeting to boost sales acquisitions by 200% within two quarters.",
    tags: ["React Web App", "Meta Ad Sets", "Checkout Optima"]
  },
  {
    id: "p3",
    title: "Abyssinia Travels Lead Generation Sprint",
    category: "digital-marketing",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600",
    client: "Abyssinia Travels",
    description: "Designed a targeted high-converting landing page paired with custom Google Search Ads keyword structuring to double local tour reservations.",
    tags: ["Google Search Ads", "Landing UX", "Analytics Setup"]
  },
  {
    id: "p4",
    title: "Sheger Tech Hub Social Storytelling",
    category: "content-creation",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600",
    client: "Sheger Tech Hub",
    description: "Produced a suite of high-engagement video profiles, founder interview loops, and custom graphics showing daily tech innovations to scale LinkedIn engagement.",
    tags: ["Video Ads", "Copywriting", "LinkedIn Optimization"]
  },
  {
    id: "p5",
    title: "Bole Real Estate SEO Dominance",
    category: "seo",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    client: "Bole Luxury Apartments",
    description: "A detailed technical on-page auditing process and local map SEO schema campaign to make Bole Apartments the top organic result for local luxury housing.",
    tags: ["Technical SEO", "Local Map SEO", "Schema Integration"]
  },
  {
    id: "p6",
    title: "E-Birr Fintech Interactive Platform UX",
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    client: "E-Birr Systems",
    description: "Re-designed the digital product flow, crafting high-fidelity interactive wireframes and deploying a localized company profile page built for speed.",
    tags: ["UI/UX System", "Vite Performance", "Responsive View"]
  }
];
