import { ServiceItem, CaseStudy, BlogPost, TeamMember, AnimePoster, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'EraTech',
  legalName: 'EraTech IT Solutions & Digital Media',
  tagline: 'We Believe in Future Prediction',
  phone: '+91 88722 82955',
  phoneClean: '+918872282955',
  email: 'ronit201103@gmail.com',
  address: 'Mohali, Punjab, India',
  whatsappUrl: 'https://wa.me/918872282955?text=Hello%20EraTech,%20I%20would%20like%20to%20consult%20on%20a%20Web%20Development%20/%20Digital%20Marketing%20project.',
  workingHours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
  establishedYear: 2021,
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54873.5432098223!2d76.67844885820311!3d30.704648799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9302684b0d%3A0x9c3132cf07b8b7e2!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-web-dev',
    category: 'web',
    title: 'Custom Web & Application Development',
    shortDesc: 'Modern, high-performance web systems and digital platforms engineered with React, Next.js, TypeScript, and clean responsive interfaces.',
    fullDesc: 'We architect and build clean, reliable, ultra-fast websites and web applications. Built from the ground up to ensure instantaneous page loads, intuitive user experience, and seamless adaptability on mobile and desktop.',
    deliverables: [
      'Tailored Full-Stack Web Architecture',
      'Mobile-First Responsive Design System',
      'Sub-Second Page Load Optimization',
      'Secure Contact & Lead Capture Forms',
      '30-Day Post-Launch Technical Support'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'],
    pencilAnnotation: 'Engineered for sub-second Core Web Vitals',
    iconName: 'Code'
  },
  {
    id: 'ecommerce-solutions',
    category: 'web',
    title: 'High-Conversion E-Commerce Systems',
    shortDesc: 'Streamlined online stores with rapid checkout flows, secure payment gateways (UPI, Razorpay, Cards), and automated inventory tracking.',
    fullDesc: 'Turn your catalog into an effortless revenue channel. We build intuitive online stores engineered for maximum checkout conversion, lightning-fast product filtering, and frictionless payment processing.',
    deliverables: [
      'Custom Product Showcase & Filter System',
      'Seamless 1-Click UPI & Card Checkout',
      'Order & Customer Management Dashboard',
      'Automated WhatsApp/SMS Order Alerts',
      'Search Engine Optimized Product Pages'
    ],
    technologies: ['Shopify', 'WooCommerce', 'React Commerce', 'Razorpay', 'Stripe'],
    pencilAnnotation: 'Frictionless checkout designed to maximize sales',
    iconName: 'ShoppingBag'
  },
  {
    id: 'performance-seo',
    category: 'marketing',
    title: 'Technical & Local Organic SEO',
    shortDesc: 'Rank at the top of Google searches for high-intent queries across Mohali, Punjab, and nationwide with ethical, data-backed optimization.',
    fullDesc: 'Get discovered by customers who are actively searching for your services. We implement structured Schema.org markup, complete keyword research, Google Business Profile ranking, and speed enhancements that Google favors.',
    deliverables: [
      'Comprehensive Website Audit & Fixes',
      'Targeted Commercial Keyword Strategy',
      'Google Business Profile & Local Map Pack Ranking',
      'On-Page Semantic & Meta Optimization',
      'Monthly Transparent Ranking Reports'
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Schema.org', 'GA4 Analytics'],
    pencilAnnotation: 'Proven protocols to rank higher in local search',
    iconName: 'Search'
  },
  {
    id: 'growth-marketing-ads',
    category: 'marketing',
    title: 'Google Ads & Meta Performance Marketing',
    shortDesc: 'Targeted ad campaigns calibrated for genuine customer inquiries, phone calls, and purchases rather than wasted ad budget.',
    fullDesc: 'Stop wasting budget on clicks that do not convert. We craft laser-focused Google Search campaigns and Meta (Instagram/Facebook) creative ads that reach qualified buyers and generate measurable inbound revenue.',
    deliverables: [
      'High-Intent Google Search Ad Campaigns',
      'Instagram & Facebook Ad Creative Sets',
      'Accurate Conversion & Lead Tracking Setup',
      'Continuous Negative-Keyword Refinements',
      'Weekly Inbound Inquiry Reporting'
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager'],
    pencilAnnotation: 'Optimized for minimum cost per qualified lead',
    iconName: 'TrendingUp'
  },
  {
    id: 'ui-ux-design',
    category: 'web',
    title: 'UI/UX & Modern Brand Prototyping',
    shortDesc: 'Clean, elegant visual layouts, wireframes, and interactive prototypes tailored to establish trust and professional credibility.',
    fullDesc: 'Before any development begins, we map the entire customer experience. We craft clean, modern UI designs that look stunning, convey authority, and lead visitors naturally toward contacting your business.',
    deliverables: [
      'Interactive Web Layout Prototypes',
      'Modern Color & Typography Systems',
      'Clear Information Architecture',
      'User-Friendly Mobile Navigation Flows',
      'Custom Iconography & Visual Assets'
    ],
    technologies: ['Figma', 'Prototyping', 'Design Systems'],
    pencilAnnotation: 'Drafted on blueprint grid before development',
    iconName: 'Layers'
  },
  {
    id: 'website-maintenance',
    category: 'web',
    title: 'Website Maintenance & Speed Optimization',
    shortDesc: 'Continuous security updates, routine backups, server management, and performance tuning to keep your digital platform running 24/7.',
    fullDesc: 'Ensure your business website remains online, lightning fast, and protected against downtime. We handle all routine updates, cloud server management, SSL certificates, and technical troubleshooting.',
    deliverables: [
      '24/7 Uptime & Health Monitoring',
      'Routine Cloud Backups & Restorations',
      'Security Patching & Malware Defense',
      'Speed Tuning & Cache Optimization',
      'Priority WhatsApp Support for Urgent Edits'
    ],
    technologies: ['Cloudflare', 'SSL', 'Server Management', 'Performance Auditing'],
    pencilAnnotation: 'Worry-free uptime and priority technical care',
    iconName: 'Feather'
  }
];

export const PRICING_PLANS = [
  {
    id: 'sprint',
    code: '01. SPRINT',
    title: 'Starter Business Web Sprint',
    description: 'Perfect for small businesses, local services, and professionals in Mohali wanting a modern, credible, high-speed digital presence.',
    price: '₹12,000',
    priceSubtitle: 'one-time complete package',
    isPopular: false,
    deliverables: [
      'Complete 4–5 page custom responsive website',
      'Sub-second fast loading speed on mobile & desktop',
      'Direct WhatsApp chat & click-to-call integration',
      'Google Maps & basic local search setup',
      'Domain & cloud hosting deployment assistance',
      '15-day complimentary technical hypercare'
    ],
    ctaText: 'Start with Starter Sprint'
  },
  {
    id: 'full-platform',
    code: '02. FULL PLATFORM',
    title: 'Growth Web & App Architecture',
    description: 'Comprehensive custom web development or online store tailored for growing brands looking to scale customer acquisition.',
    price: '₹28,000',
    priceSubtitle: 'turnkey bespoke deployment',
    isPopular: true,
    deliverables: [
      'Bespoke React / Next.js / TypeScript custom architecture',
      'E-commerce catalogue OR multi-page service portal',
      'Full technical SEO & Google rich snippet markup',
      'Automated lead capture & inquiry notifications',
      'Interactive prototype review before final coding',
      '30-day dedicated post-launch support'
    ],
    ctaText: 'Book Growth Architecture'
  },
  {
    id: 'retainer',
    code: '03. RETAINER',
    title: 'Digital Marketing & SEO Growth',
    description: 'Continuous monthly management to generate consistent inquiries, rank higher on Google, and run profitable ad campaigns.',
    price: '₹15,000',
    priceSubtitle: 'per month partnership',
    isPopular: false,
    deliverables: [
      'Dedicated Google Ads / Meta Ads campaign management',
      'Local Mohali & Punjab SEO rank optimization',
      'Conversion tracking and weekly inquiry updates',
      'Continuous website speed & content updates',
      'Direct priority WhatsApp contact with Ronit',
      'Transparent ad spend & ROI reporting'
    ],
    ctaText: 'Inquire on Growth Retainer'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-logistics',
    title: 'Punjab Freight & Fleet Automation Portal',
    client: 'Apex Transline (Mohali)',
    category: 'Web Development & Portal',
    summary: 'Engineered a real-time transport dispatch and client tracking portal replacing legacy manual paper manifests with automated route validation.',
    challenge: 'The client handled over 300 daily truck dispatches using manual paper slips and WhatsApp threads, leading to invoice delays and lost load tracking.',
    solution: 'Designed and deployed a responsive web portal with real-time GPS integration, driver ePOD (electronic proof of delivery), and instant client billing.',
    metrics: [
      { label: 'Dispatch Turnaround', value: '-65% time' },
      { label: 'Monthly Active Shipments', value: '8,400+' },
      { label: 'Billing Dispute Rate', value: '< 0.4%' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    accentColor: '#B53CB5'
  },
  {
    id: 'nordic-pharma',
    title: 'Regional Healthcare SEO & Patient Inbound Engine',
    client: 'Lifeline Speciality Clinics',
    category: 'Digital Marketing & SEO',
    summary: 'Re-architected localized organic search presence and Google My Business authority across Tricity (Chandigarh, Mohali, Panchkula).',
    challenge: 'Facing steep competition from large hospital chains, the multi-speciality clinic spent excessively on ads with minimal organic discoverability.',
    solution: 'Implemented structured medical Schema.org markup, localized treatment hubs, and patient FAQ authority silos ranking #1 for over 80 high-intent keywords.',
    metrics: [
      { label: 'Organic Inbound Consults', value: '+215%' },
      { label: 'Top 3 Google Map Pack Rankings', value: '47 terms' },
      { label: 'Patient CAC Reduction', value: '48% drop' }
    ],
    techStack: ['Technical SEO', 'Schema.org', 'Local Citation Silos', 'GA4'],
    accentColor: '#D97706'
  },
  {
    id: 'pureveda-organics',
    title: 'Direct-to-Consumer Headless E-Commerce Scale',
    client: 'Veda Organics Naturals',
    category: 'E-Commerce & Performance Marketing',
    summary: 'Migrated an Ayurvedic wellness brand from sluggish template store to headless Next.js frontend with integrated Meta performance marketing.',
    challenge: 'Mobile bounce rate was 68% due to 5.2s page load times, capping return on ad spend at 1.4x.',
    solution: 'Built a custom sub-second headless storefront with 1-click UPI checkout and paired it with dynamic creative testing across Instagram Reels.',
    metrics: [
      { label: 'Mobile Page Speed Score', value: '98 / 100' },
      { label: 'Blended Meta ROAS', value: '3.85x' },
      { label: 'Monthly Net Revenue', value: '₹28.4 Lakhs' }
    ],
    techStack: ['Next.js', 'Shopify Storefront API', 'Razorpay UPI', 'Meta CAPI'],
    accentColor: '#10B981'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'modern-web-architecture-2026',
    title: 'Why Vite and Micro-Frontends Outperform Legacy WordPress Monoliths',
    slug: 'modern-web-architecture-2026',
    excerpt: 'A pragmatic engineering breakdown of why forward-thinking companies are abandoning bloated page builders for clean, typed React architectures.',
    category: 'Web Architecture',
    author: 'Ronit',
    authorRole: 'Founder & Lead Architect',
    date: 'September 24, 2026',
    readTime: '6 min read',
    pencilNote: 'Benchmark data tested across 50 production sites',
    keyTakeaways: [
      'Sub-50ms Time-to-Interactive delivers direct SEO rank advantages in Google mobile indexes.',
      'Headless decouples presentation from data logic, eliminating recurring plugin security vulnerabilities.',
      'TypeScript strict typing prevents 80% of runtime state glitches before client deployment.'
    ],
    content: [
      'In the current digital ecosystem, speed is not a vanity metric—it is the baseline barrier of entry. Every additional 100ms of latency costs businesses 1% in conversions.',
      'Legacy content management systems rely on database queries for every HTML render, accompanied by dozens of unoptimized third-party plugins that bloat JavaScript bundles to multiple megabytes.',
      'At EraTech, we follow a zero-bloat philosophy. By pre-rendering critical static paths and delivering client interactions through lightweight, tree-shaken React bundles, our client applications regularly attain 95+ performance scores on Google Lighthouse.',
      'When your digital presence feels instantaneous, prospective enterprise buyers inherently trust your technical competence.'
    ]
  },
  {
    id: 'local-seo-playbook-punjab',
    title: 'The Local SEO Blueprint for Mohali & Tricity Businesses',
    slug: 'local-seo-playbook-punjab',
    excerpt: 'How regional enterprises can dominate Google Map Pack results, earn high-intent commercial calls, and beat nationwide competitors locally.',
    category: 'SEO Strategy',
    author: 'Ronit',
    authorRole: 'Founder & Lead Architect',
    date: 'September 12, 2026',
    readTime: '5 min read',
    pencilNote: 'Actionable geo-tagging checklist included',
    keyTakeaways: [
      'Consistent NAP (Name, Address, Phone) citation health across Indian business registries is mandatory.',
      'Hyper-localized landing pages targeting specific commercial areas in Mohali capture high-intent B2B inquiries.',
      'Schema.org LocalBusiness with geo-coordinates and review aggregations guarantees rich Google Map pack presence.'
    ],
    content: [
      'Search intent in 2026 has shifted heavily toward localized immediacy. When decision-makers search for technical partners or service providers, algorithms prioritize geographically verified entities.',
      'We outline the exact protocol we use at EraTech: establishing strict semantic schema, claiming and optimizing Google Business profiles with geo-tagged verification, and building authentic local citations.',
      'By pairing local signals with high-speed technical web foundations, regional businesses can capture dominant market share without runaway ad spends.'
    ]
  },
  {
    id: 'future-prediction-digital-marketing',
    title: 'Future Prediction: The Shift from Vanity Metrics to Attributed Pipeline',
    slug: 'future-prediction-digital-marketing',
    excerpt: 'Our founding philosophy explained: why predictive analytics and real revenue attribution matter more than raw impressions.',
    category: 'Digital Growth',
    author: 'Ronit',
    authorRole: 'Founder & Lead Architect',
    date: 'August 29, 2026',
    readTime: '7 min read',
    pencilNote: 'Our company motto dissected',
    keyTakeaways: [
      'Impressions and raw page views do not pay operational payroll; qualified pipeline does.',
      'Predictive modeling analyzes historic user behavioral cohorts to allocate ad capital before ad fatigue sets in.',
      'Transparent reporting with server-side attribution eliminates privacy tracking blackouts.'
    ],
    content: [
      'At EraTech, our company motto is "We Believe in Future Prediction". But what does future prediction mean in digital engineering and performance marketing?',
      'It means we do not guess. We do not throw ad budget at generic audiences and hope for the best. Instead, we establish rigorous predictive data pipelines that map customer lifetime value, search query trends, and conversion probability.',
      'When an agency understands the future trajectory of consumer intent, every marketing rupee spent yields compounding equity for the client.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Harpreet Singh',
    role: 'Managing Director',
    company: 'Apex Transline',
    location: 'Mohali, Punjab',
    quote: 'EraTech built our fleet dispatch portal from scratch on time and on budget. Their pencil wireframes gave us complete confidence before any code was written. Our dispatch speed increased by over 60%.',
    serviceReceived: 'Custom Web Application',
    rating: 5,
    rotationDeg: -1.2,
    noteColor: 'yellow'
  },
  {
    id: 't2',
    clientName: 'Dr. Simran Kaur',
    role: 'Clinical Director',
    company: 'Lifeline Speciality Clinics',
    location: 'Mohali, Punjab',
    quote: 'Within 4 months of EraTech taking over our search marketing and web architecture, our organic patient inquiries more than doubled. Ronit is transparent, sharp, and genuinely invested in client success.',
    serviceReceived: 'Technical SEO & Web Redesign',
    rating: 5,
    rotationDeg: 1.5,
    noteColor: 'blue'
  },
  {
    id: 't3',
    clientName: 'Vikramaditya Verma',
    role: 'Co-Founder',
    company: 'Veda Organics Naturals',
    location: 'Punjab / NCR',
    quote: 'The headless store EraTech engineered loads in the blink of an eye on mobile devices. Our checkout drop-off rate fell instantly, and our Meta ad campaigns finally achieved 3.8x+ ROAS. Truly top-tier IT partners.',
    serviceReceived: 'E-Commerce & Paid Performance',
    rating: 5,
    rotationDeg: -0.8,
    noteColor: 'green'
  }
];

export const FOUNDER_INFO = {
  name: 'Ronit',
  role: 'Founder & Lead Technical Architect',
  agency: 'EraTech',
  location: 'Mohali, Punjab, India',
  image: '/src/assets/images/ronit_founder_portrait_1790948970306.jpeg',
  experience: '2+ Years in Full-Stack & Growth Systems',
  bio: 'Ronit is the founder and lead technical architect of EraTech. Combining a passion for clean, mathematical software architecture with algorithmic search intelligence, Ronit personally oversees every client blueprint—from initial wireframing to production deployment and growth scaling.',
  quote: 'We treat every client digital system like mission-critical infrastructure: engineered to load instantly, convert intent cleanly, and compound in business value over time.',
  specialties: [
    'Bespoke Web & Application Architecture',
    'Sub-Second Performance Optimization',
    'Technical & Organic Local SEO Systems',
    'High-ROI Digital Acquisition Funnels',
    'Modern UI/UX & Interactive Design Systems'
  ]
};

export const ANIME_POSTERS: AnimePoster[] = [
  {
    id: 'poster-1',
    title: 'The Digital Architect',
    theme: 'Blueprint Precision & Future Code',
    image: '/src/assets/images/sketch_architect_blueprint_1790956655046.jpg',
    quote: '"Code is the blueprint of tomorrow. We craft every line with architectural foresight."',
    pencilCaption: 'Spec: EraTech Core Visionary Engine v2.6',
    tags: ['Future Prediction', 'Clean Architecture', 'Pencil Drafting']
  },
  {
    id: 'poster-2',
    title: 'The Modern Craftsman',
    theme: 'From Paper Sketch to Production',
    image: '/src/assets/images/sketch_craftsman_table_1790956671404.jpg',
    quote: '"Every breakthrough system begins with a pencil sketch on drafting paper."',
    pencilCaption: 'Drafting: Handcrafted wireframes meeting silicon execution',
    tags: ['Paper to Silicon', 'UI/UX Mastery', 'Graphite Precision']
  },
  {
    id: 'poster-3',
    title: 'Predictive Horizons',
    theme: 'Digital Cities & Compounding Growth',
    image: '/src/assets/images/sketch_future_city_1790956697134.jpg',
    quote: '"We do not wait for the digital revolution. We calculate its trajectory."',
    pencilCaption: 'Perspective: Mohali & global technological landscape',
    tags: ['Trajectory Modeling', 'Algorithmic Growth', 'Architectural Vision']
  }
];

export const COMPANY_TIMELINE = [
  {
    year: 'Early 2025',
    milestone: 'Headless Architectures & Algorithmic Foundation',
    description: 'Pioneered custom high-velocity headless web stacks, reactive Next.js / TypeScript engines, and serverless APIs from our Mohali drafting table.'
  },
  {
    year: 'Mid 2025',
    milestone: 'Predictive Marketing & Attributed Revenue Pipelines',
    description: 'Engineered closed-loop attribution models and mathematical SEO pipelines, scaling 50+ regional and international enterprise client deployments.'
  },
  {
    year: 'Late 2025',
    milestone: 'Sub-Second Performance & Enterprise Benchmark Standards',
    description: 'Established 99.4/100 Core Web Vitals benchmark standards, expanding our Mohali IT presence with 98% on-time milestone delivery.'
  },
  {
    year: '2026',
    milestone: 'The Modern EraTech Platform & Autonomous Scale',
    description: 'Operating as the premier digital engineering and performance studio in Mohali, Punjab — executing mission-critical software and high-conversion market systems.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Where is EraTech located and do you serve clients outside Punjab?',
    answer: 'EraTech is proudly headquartered in Mohali, Punjab, India. While we are rooted in Mohali and the Tricity region, our web development and digital marketing infrastructure serves businesses across India, North America, the UK, and the UAE with seamless online collaboration.'
  },
  {
    question: 'What is your typical web development delivery timeline?',
    answer: 'Our Starter Sprint takes only 7 to 14 days from wireframe approval to launch. Custom full platform architectures or e-commerce systems typically take 3 to 5 weeks with transparent milestone updates.'
  },
  {
    question: 'How does EraTech ensure results for Digital Marketing & SEO?',
    answer: 'We do not rely on speculative vanity metrics. Every SEO and paid advertising campaign begins with predictive competitor benchmarking, strict conversion tracking, and transparent weekly KPI dashboards showing attributed inbound leads and cost per acquisition.'
  },
  {
    question: 'Do you offer ongoing maintenance, security patches, and support?',
    answer: 'Yes. Every project includes complimentary post-launch hypercare, followed by affordable monthly care packages covering automated backups, uptime monitoring, security updates, and performance tuning.'
  },
  {
    question: 'How do I start a project with EraTech?',
    answer: 'You can click "Get a Quote" on any page to submit your project requirements, call Ronit directly at +91 88722 82955, email ronit201103@gmail.com, or message us directly on WhatsApp. We typically provide a comprehensive scope proposal within 24 hours.'
  }
];

