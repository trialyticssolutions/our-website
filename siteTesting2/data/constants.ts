import { Service, ProjectCase, Testimonial, TeamMember, SiteConfig } from '@/types'

export const SITE_CONFIG: SiteConfig = {
  name: "Data Consulting Agency",
  description: "Transforming raw data into actionable insights and automated solutions for scalable growth",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  email: process.env.CONTACT_EMAIL || "connect@acubeinsights.com",
  phone: "+91-8112217234",
  address: "363 Sector 57, Gurugram, Haryana, India 122003",
  social: {
    linkedin: "https://linkedin.com/company/youragency",
    twitter: "https://twitter.com/youragency",
    facebook: "https://facebook.com/youragency",
    instagram: "https://instagram.com/youragency"
  },
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+918112217234",
  whatsappMessage: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hello! I'm interested in your data consulting services."
}

export const SERVICES: Service[] = [
  {
    id: "database-consultancy",
    title: "Database Consultancy 0 to 1",
    description: "Setting up foundational data infrastructure from scratch with robust, scalable solutions.",
    fullDescription: "Assisting businesses in setting up their foundational data infrastructure from scratch. This includes database design (relational/non-relational), selection (e.g., PostgreSQL, MongoDB, Snowflake), implementation, data modeling, ETL/ELT pipeline setup, and initial data migration, ensuring a robust, scalable, and secure data environment tailored to business needs.",
    icon: "database",
    features: [
      "Database design and architecture",
      "Technology selection and implementation",
      "Data modeling and schema design",
      "ETL/ELT pipeline setup",
      "Data migration and integration",
      "Security and compliance setup"
    ],
    targetAudience: "Businesses with no existing data infrastructure, those experiencing data silos, or those looking to overhaul their current setup for performance and scalability.",
    benefits: [
      "Scalable data foundation",
      "Improved data quality",
      "Reduced operational costs",
      "Enhanced security",
      "Better decision making"
    ],
    technologies: ["PostgreSQL", "MongoDB", "Snowflake", "AWS", "Apache Airflow"],
    href: "/services#database-consultancy"
  },
  {
    id: "data-insights",
    title: "Data Insights and Business Insights",
    description: "Transforming raw data into actionable intelligence with advanced analytics and strategic recommendations.",
    fullDescription: "Transforming raw data into actionable intelligence. This involves advanced data cleaning, exploratory data analysis, statistical modeling, predictive analytics, and identifying key trends and patterns. We provide strategic business recommendations, performance dashboards, and custom reports to drive growth, efficiency, and competitive advantage.",
    icon: "trending-up",
    features: [
      "Advanced data cleaning and preparation",
      "Exploratory data analysis",
      "Statistical modeling and predictive analytics",
      "Trend identification and pattern recognition",
      "Strategic business recommendations",
      "Custom dashboards and reports"
    ],
    targetAudience: "Businesses struggling to derive value from their data, seeking deeper understanding of market trends, or aiming for data-driven decision-making.",
    benefits: [
      "Data-driven decision making",
      "Competitive advantage",
      "Revenue growth",
      "Cost optimization",
      "Risk mitigation"
    ],
    technologies: ["Python", "R", "SQL", "Tableau", "Power BI"],
    href: "/services#data-insights"
  },
  {
    id: "ai-automation",
    title: "Business Automation using AI",
    description: "Leveraging AI and ML to automate processes, optimize workflows, and enhance decision-making.",
    fullDescription: "Leveraging Artificial Intelligence (AI) and Machine Learning (ML) to automate repetitive tasks, optimize workflows, and enhance decision-making processes across various business functions. This includes custom AI model development, integration with existing systems, and implementation of intelligent automation solutions for areas like customer service, marketing, operations, and finance.",
    icon: "bot",
    features: [
      "Custom AI model development",
      "Process automation design",
      "Workflow optimization",
      "System integration",
      "Intelligent automation solutions",
      "Performance monitoring and optimization"
    ],
    targetAudience: "Organizations looking to improve operational efficiency, reduce manual effort, minimize human error, and innovate with AI-powered solutions.",
    benefits: [
      "Increased efficiency",
      "Reduced manual effort",
      "Minimized human error",
      "Cost savings",
      "Enhanced innovation"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "AWS ML", "Azure AI"],
    href: "/services#ai-automation"
  },
  {
    id: "data-visualization",
    title: "Data Visualizations",
    description: "Creating intuitive, interactive dashboards and reports that transform complex data into clear insights.",
    fullDescription: "Creating intuitive, interactive, and aesthetically pleasing dashboards and reports. Utilizing industry-leading tools like Tableau, Power BI, Looker Studio, or developing custom web-based visualization solutions, we transform complex datasets into easily digestible visual formats, enabling quick understanding, real-time monitoring, and informed strategic decision-making.",
    icon: "bar-chart",
    features: [
      "Interactive dashboard development",
      "Custom visualization design",
      "Real-time data monitoring",
      "Mobile-responsive visualizations",
      "Automated reporting",
      "Data storytelling"
    ],
    targetAudience: "Businesses needing clear, visual representations of their Key Performance Indicators (KPIs), operational metrics, and financial data for effective communication and analysis.",
    benefits: [
      "Clear data communication",
      "Real-time insights",
      "Improved decision making",
      "Enhanced stakeholder engagement",
      "Operational transparency"
    ],
    technologies: ["Tableau", "Power BI", "Looker Studio", "D3.js", "Plotly"],
    href: "/services#data-visualization"
  },
  {
    id: "website-setup",
    title: "Website Setup 0 to 1",
    description: "Comprehensive website development from domain to launch with modern design and optimization.",
    fullDescription: "Comprehensive website development services for businesses establishing their initial online presence or requiring a modern refresh. This includes domain registration, secure hosting setup, responsive website design, content integration, e-commerce functionality (if needed), and launch. Focus is on user experience (UX), search engine optimization (SEO), and conversion rate optimization (CRO).",
    icon: "globe",
    features: [
      "Domain registration and setup",
      "Secure hosting configuration",
      "Responsive website design",
      "Content management system",
      "E-commerce integration",
      "SEO and CRO optimization"
    ],
    targetAudience: "New businesses, startups, or those without an existing professional, high-performing, and mobile-friendly website.",
    benefits: [
      "Professional online presence",
      "Improved search rankings",
      "Enhanced user experience",
      "Increased conversions",
      "Mobile optimization"
    ],
    technologies: ["Next.js", "React", "WordPress", "Shopify", "AWS"],
    href: "/services#website-setup"
  },
  {
    id: "marketing-optimization",
    title: "Marketing Optimizations (Google and Meta)",
    description: "Enhancing digital marketing performance with data-driven strategies and advanced targeting.",
    fullDescription: "Enhancing digital marketing campaign performance across major platforms like Google Ads (Search, Display, YouTube) and Meta (Facebook/Instagram Ads). This involves data-driven strategy development, advanced audience targeting, A/B testing of ad creatives and copy, bid management, landing page optimization, and in-depth performance analysis to maximize Return on Ad Spend (ROAS) and lead generation.",
    icon: "megaphone",
    features: [
      "Campaign strategy development",
      "Advanced audience targeting",
      "A/B testing and optimization",
      "Bid management and optimization",
      "Landing page optimization",
      "Performance analysis and reporting"
    ],
    targetAudience: "Businesses looking to improve their online advertising effectiveness, achieve higher conversion rates, and optimize their marketing budget.",
    benefits: [
      "Higher ROAS",
      "Increased lead generation",
      "Better targeting accuracy",
      "Reduced advertising costs",
      "Improved conversion rates"
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "Facebook Pixel", "GTM"],
    href: "/services#marketing-optimization"
  },
  {
    id: "zoho-setup",
    title: "Zoho One Setup: Streamline Operations & Accelerate Growth",
    description: "Comprehensive Zoho One implementation to unify and automate business operations.",
    fullDescription: "Comprehensive implementation, customization, and ongoing support for the Zoho One suite. We empower your organization to unify critical business functions—from CRM and finance to HR and marketing—into a single, integrated cloud platform. This leads to enhanced collaboration, automated workflows, superior data visibility, and ultimately, significantly higher growth and scalable operational systems.",
    icon: "workflow",
    features: [
      "Complete Zoho One implementation",
      "Custom workflow automation",
      "System integration and migration",
      "User training and support",
      "Performance optimization",
      "Ongoing maintenance and updates"
    ],
    targetAudience: "Businesses seeking an all-in-one, integrated cloud-based solution to manage and automate their entire operational ecosystem, aiming for increased efficiency and sustainable growth.",
    benefits: [
      "Unified business operations",
      "Automated workflows",
      "Enhanced collaboration",
      "Better data visibility",
      "Scalable growth"
    ],
    technologies: ["Zoho CRM", "Zoho Books", "Zoho Projects", "Zoho Analytics", "Zoho Flow"],
    href: "/services#zoho-setup"
  },
  {
    id: "ga4-setup",
    title: "GA4 Setup: Uncover Deep User Insights & Optimize Digital Performance",
    description: "Expert GA4 implementation with advanced tracking and custom insights for data-driven optimization.",
    fullDescription: "Expert setup, meticulous configuration, and in-depth auditing of Google Analytics 4 (GA4) properties. We go beyond basic tracking to provide profound, event-based insights into user behavior across your websites and mobile applications. This includes advanced custom event tracking, precise conversion setup, intelligent audience segmentation, and tailored reports, enabling you to truly understand customer journeys, measure campaign effectiveness, and optimize your digital presence for maximum engagement and conversions.",
    icon: "analytics",
    features: [
      "Complete GA4 property setup",
      "Custom event tracking implementation",
      "Conversion tracking and optimization",
      "Audience segmentation and analysis",
      "Custom reports and dashboards",
      "E-commerce tracking setup"
    ],
    targetAudience: "Businesses needing advanced, future-proof web and app analytics to gain a comprehensive understanding of their audience, user paths, and digital performance, driving data-driven optimization strategies.",
    benefits: [
      "Deep user insights",
      "Better conversion tracking",
      "Enhanced audience understanding",
      "Improved digital performance",
      "Data-driven optimization"
    ],
    technologies: ["Google Analytics 4", "Google Tag Manager", "Google Looker Studio", "BigQuery"],
    href: "/services#ga4-setup"
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Amit Agrawal",
    company: "USA India CFO",
    position: "CFO",
    content: "They helped us clean up fragmented financial data and build a reliable reporting layer on top of Zoho Books and GA4. Month-end close time dropped from 9 days to 4, and leadership finally trusts a single source of truth for revenue and unit economics.",
    rating: 5,
    image: "/images/testimonials/sarah-johnson.jpg",
    featured: true,
    date: new Date("2024-01-15")
  },
  {
    id: "testimonial-2",
    name: "Vipul Maheshwari",
    company: "Mamaearth",
    position: "SVP Analytics",
    content: "We moved from weekly manual reports to automated daily dashboards across marketing, supply chain, and CX. Campaign budgets are now allocated with confidence—blended ROAS improved by 32% and we cut wasted spend within the first quarter.",
    rating: 4.5,
    image: "/images/testimonials/michael-chen.jpg",
    featured: true,
    date: new Date("2024-04-12")
  },
  {
    id: "testimonial-3",
    name: "Ashutosh Chugh",
    company: "Wishlink",
    position: "AVP Analytics",
    content: "Their event schema and attribution overhaul fixed our broken funnel insights. Ticket resolution time dropped by 55% thanks to automation, and we finally measure creator ROI accurately across channels.",
    rating: 5,
    image: "/images/testimonials/emily-rodriguez.jpg",
    featured: true,
    date: new Date("2024-07-08")
  },
  {
    id: "testimonial-4",
    name: "Priya Nair",
    company: "Park+",
    position: "Head of Growth",
    content: "The GA4 + BigQuery setup finally gave us cohort-level clarity. We identified two leaky steps in the activation flow and lifted Week 4 retention by 11% without increasing budgets.",
    rating: 5,
    image: "/images/testimonials/david-park.jpg",
    featured: true,
    date: new Date("2024-10-21")
  },
  {
    id: "testimonial-5",
    name: "Arjun Mehta",
    company: "Fleetx",
    position: "Head of Analytics",
    content: "They built a near real-time ops dashboard for our logistics network. Dispatch issues are flagged automatically and TAT breaches dropped by 18% in the first month. It paid for itself quickly.",
    rating: 5,
    image: "/images/testimonials/lisa-wang.jpg",
    featured: false,
    date: new Date("2024-12-03")
  },
  {
    id: "testimonial-6",
    name: "Samantha Brooks",
    company: "Postalytics",
    position: "Marketing Operations Manager",
    content: "Our tracking was a mess across web and CRM. Their audit and rebuild removed duplicate events, fixed attribution lag, and improved form conversion by 19% after they streamlined the journey.",
    rating: 5,
    image: "/images/testimonials/robert-taylor.jpg",
    featured: false,
    date: new Date("2025-02-14")
  },
  {
    id: "testimonial-7",
    name: "Akshay Jain",
    company: "Pragati Plastics",
    position: "CEO",
    content: "We unified production, dispatch, and receivables into one warehouse with automated reports. Stockouts dropped by 22% and on-time deliveries improved within two months.",
    rating: 5,
    image: "/images/testimonials/akshay-jain.jpg",
    featured: false,
    date: new Date("2025-04-02")
  },
  {
    id: "testimonial-8",
    name: "Neha Kapoor",
    company: "FreshCart",
    position: "Head of Marketing",
    content: "With clean events and MMM-style reporting, we reallocated budget smartly and improved paid CAC by 28% without hurting volumes.",
    rating: 5,
    image: "/images/testimonials/neha-kapoor.jpg",
    featured: false,
    date: new Date("2025-06-18")
  },
  {
    id: "testimonial-9",
    name: "Rohit Verma",
    company: "CityRides",
    position: "Operations Lead",
    content: "The alerting layer on top of our pipelines flags issues before riders notice. SLA breaches are down 30% and weekend incidents are easier to manage now.",
    rating: 5,
    image: "/images/testimonials/rohit-verma.jpg",
    featured: false,
    date: new Date("2025-08-06")
  }
]

export const PORTFOLIO_CASES: ProjectCase[] = [
  {
    id: "case-1",
    title: "E-commerce Data Infrastructure Transformation",
    description: "Built a scalable data infrastructure for a growing e-commerce company, enabling real-time analytics and personalized customer experiences.",
    client: "Leading E-commerce Retailer",
    challenge: "The client was experiencing data silos across multiple platforms, slow query performance, and inability to track customer behavior in real-time, limiting their ability to personalize experiences and optimize operations.",
    solution: "Implemented a cloud-based data warehouse using Snowflake, created automated ETL pipelines with Apache Airflow, and integrated real-time streaming data from web analytics, CRM, and inventory systems. Built custom dashboards for different stakeholder groups.",
    results: [
      "30% reduction in data processing time",
      "Real-time customer behavior tracking",
      "25% increase in conversion rates through personalization",
      "20% improvement in inventory management efficiency"
    ],
    technologies: ["Snowflake", "Apache Airflow", "Python", "dbt", "Tableau", "AWS"],
    image: "/images/portfolio/ecommerce-infrastructure.jpg",
    category: "Database Consultancy",
    featured: true,
    completionDate: new Date("2024-01-30")
  },
  {
    id: "case-2",
    title: "AI-Powered Customer Service Automation",
    description: "Developed an intelligent chatbot system that handles around 60% of customer inquiries automatically while maintaining high satisfaction rates.",
    client: "SaaS Technology Company",
    challenge: "High volume of repetitive customer support tickets was overwhelming the support team, leading to long response times and decreased customer satisfaction. Manual ticket routing was inefficient and error-prone.",
    solution: "Built a custom AI chatbot using natural language processing to handle common inquiries, implemented intelligent ticket routing system, and created automated response templates. Integrated with existing CRM and knowledge base systems.",
    results: [
      "30% reduction in manual support tickets",
      "25% improvement in response time",
      "15% increase in CSAT",
      "25% ROI within 6 months"
    ],
    technologies: ["OpenAI GPT", "Python", "Node.js", "MongoDB", "React", "Webhooks"],
    image: "/images/portfolio/ai-customer-service.jpg",
    category: "AI Automation",
    featured: true,
    completionDate: new Date("2024-05-15")
  },
  {
    id: "case-3",
    title: "Executive Dashboard for Manufacturing Company",
    description: "Created comprehensive executive dashboards providing real-time visibility into production, quality, and financial metrics across multiple facilities.",
    client: "Manufacturing Corporation",
    challenge: "Executive team lacked real-time visibility into operations across multiple manufacturing facilities. Key metrics were scattered across different systems, making strategic decision-making difficult and reactive rather than proactive.",
    solution: "Designed and implemented interactive executive dashboards using Tableau, integrated data from ERP, quality management, and financial systems. Created automated daily/weekly reports and mobile-responsive dashboards for on-the-go access.",
    results: [
      "Real-time visibility across all facilities",
      "25% reduction in production downtime",
      "15% improvement in overall equipment effectiveness",
      "20% faster executive decision-making"
    ],
    technologies: ["Tableau", "SQL Server", "Python", "REST APIs", "Power Automate"],
    image: "/images/portfolio/manufacturing-dashboard.jpg",
    category: "Data Visualization",
    featured: true,
    completionDate: new Date("2024-09-10")
  },
  {
    id: "case-4",
    title: "Digital Marketing Campaign Optimization",
    description: "Optimized multi-channel marketing campaigns resulting in a 25% improvement in ROAS and a 20% reduction in customer acquisition cost.",
    client: "Digital Marketing Agency",
    challenge: "Client's Google Ads and Meta campaigns were underperforming with high costs and low conversion rates. Lack of proper tracking and attribution made it difficult to optimize campaigns effectively.",
    solution: "Implemented comprehensive tracking setup with GA4 and conversion pixels, created automated bid management system, developed A/B testing framework for ad creatives, and built custom attribution models for better budget allocation.",
    results: [
      "25% improvement in ROAS",
      "20% reduction in customer acquisition cost",
      "30% increase in qualified leads",
      "15% improvement in campaign performance visibility"
    ],
    technologies: ["Google Ads API", "Meta Ads API", "Google Analytics 4", "Python", "Looker Studio"],
    image: "/images/portfolio/marketing-optimization.jpg",
    category: "Marketing Optimization",
    featured: true,
    completionDate: new Date("2024-12-05")
  },
  {
    id: "case-5",
    title: "Complete Business Operations Integration",
    description: "Integrated all business operations into Zoho One ecosystem, creating seamless workflows and improving operational efficiency by 60%.",
    client: "Growing Service Business",
    challenge: "The client was using multiple disconnected systems for CRM, accounting, project management, and HR, leading to data inconsistencies, manual work, and poor visibility across business operations.",
    solution: "Implemented complete Zoho One ecosystem including CRM, Books, Projects, People, and Analytics. Created automated workflows between systems, migrated historical data, and provided comprehensive user training and ongoing support.",
    results: [
      "25% improvement in operational efficiency",
      "30% reduction in manual data entry",
      "20% improvement in cross-team data visibility",
      "20% improvement in team collaboration"
    ],
    technologies: ["Zoho One Suite", "Zoho Flow", "APIs", "Custom Functions", "Deluge Scripts"],
    image: "/images/portfolio/zoho-integration.jpg",
    category: "Zoho Setup",
    featured: false,
    completionDate: new Date("2025-03-18")
  },
  {
    id: "case-6",
    title: "Advanced Analytics Implementation",
    description: "Implemented GA4 with custom tracking to provide deep insights into user behavior and optimize digital performance.",
    client: "Media & Entertainment Company",
    challenge: "The client needed advanced analytics to understand complex user journeys across multiple touchpoints, track content engagement, and optimize their digital platforms for better user experience and revenue generation.",
    solution: "Set up comprehensive GA4 implementation with custom event tracking, audience segmentation, and conversion funnel analysis. Created custom reports and dashboards, implemented enhanced e-commerce tracking, and provided training on data interpretation.",
    results: [
      "Complete visibility into user behavior",
      "30% increase in content engagement",
      "25% improvement in conversion rates",
      "Enhanced understanding of customer journey"
    ],
    technologies: ["Google Analytics 4", "Google Tag Manager", "BigQuery", "Looker Studio", "JavaScript"],
    image: "/images/portfolio/ga4-analytics.jpg",
    category: "GA4 Setup",
    featured: false,
    completionDate: new Date("2025-07-22")
  }
  ,
  {
    id: "case-7",
    title: "Data Pipeline Cost Optimization",
    description: "Refactored batch and streaming pipelines to reduce compute overhead and improve reliability across environments.",
    client: "FinTech Startup",
    challenge: "Data processing costs were rising with unstable nightly jobs causing delays in reporting and stakeholder friction.",
    solution: "Consolidated DAGs, introduced incremental loads, added data quality checks, and right-sized cluster configurations with autoscaling.",
    results: [
      "22% reduction in monthly data platform spend",
      "30% decrease in failed job incidents",
      "15% faster SLA for executive reports"
    ],
    technologies: ["dbt", "Airflow", "BigQuery", "Python"],
    image: "/images/portfolio/pipeline-optimization.jpg",
    category: "Database Consultancy",
    featured: false,
    completionDate: new Date("2025-05-28")
  }
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "founder-ceo",
    name: "Alex Johnson",
    position: "Founder & CEO",
    bio: "Data science expert with 10+ years of experience in transforming businesses through data-driven solutions. Former lead data scientist at Fortune 500 companies, passionate about helping businesses unlock their data potential.",
    image: "/images/team/alex-johnson.jpg",
    linkedIn: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    expertise: ["Data Strategy", "Machine Learning", "Business Intelligence", "Team Leadership"]
  },
  {
    id: "cto",
    name: "Sarah Kim",
    position: "Chief Technology Officer",
    bio: "Full-stack developer and data engineer with expertise in building scalable data infrastructures. Specializes in cloud architectures, automation, and modern web technologies.",
    image: "/images/team/sarah-kim.jpg",
    linkedIn: "https://linkedin.com/in/sarahkim",
    twitter: "https://twitter.com/sarahkim",
    expertise: ["Data Engineering", "Cloud Architecture", "Web Development", "AI/ML Implementation"]
  },
  {
    id: "lead-analyst",
    name: "Michael Rodriguez",
    position: "Lead Data Analyst",
    bio: "Analytics expert with a background in statistics and business intelligence. Skilled in transforming complex data into actionable insights and beautiful visualizations.",
    image: "/images/team/michael-rodriguez.jpg",
    linkedIn: "https://linkedin.com/in/michaelrodriguez",
    expertise: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Business Intelligence"]
  },
  {
    id: "marketing-specialist",
    name: "Emily Chen",
    position: "Digital Marketing Specialist",
    bio: "Digital marketing expert with deep knowledge of Google Ads, Meta advertising, and marketing automation. Focuses on data-driven marketing strategies and ROI optimization.",
    image: "/images/team/emily-chen.jpg",
    linkedIn: "https://linkedin.com/in/emilychen",
    expertise: ["Digital Marketing", "PPC Advertising", "Marketing Analytics", "Conversion Optimization"]
  }
]

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
]

export const CONTACT_SUBJECTS = [
  "General Inquiry",
  "Service Inquiry",
  "Partnership Opportunity",
  "Career Opportunity",
  "Technical Support",
  "Other"
]

export const HERO_STATS = [
  { value: "100+", label: "Successful Projects" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" }
]

export const TRUST_INDICATORS = [
  { name: "TechCorp", logo: "/images/clients/techcorp.png" },
  { name: "AcubeInsights", logo: "/images/clients/dataflow.png" },
  { name: "CloudSystems", logo: "/images/clients/cloudsystems.png" },
  { name: "InnovateLabs", logo: "/images/clients/innovatelabs.png" },
  { name: "ScaleUp", logo: "/images/clients/scaleup.png" },
  { name: "GrowthCo", logo: "/images/clients/growthco.png" }
]