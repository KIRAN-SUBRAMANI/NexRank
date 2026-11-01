/**
 * careers.js — NexRank Careers Data
 * -----------------------------------------------
 * Single source of truth for the /digital/careers page.
 *
 * Architecture Contract:
 *   Today  → components read from this file via lib/content/careers.js
 *   Future → lib/content/careers.js fetches from ATS / HRMS / CMS / REST API
 *            No UI components change — only the content layer changes.
 */

// ─── PAGE META & SEO ─────────────────────────────────────────────────────────
export const careersSEO = {
  metaTitle: "Careers at NexRank | Join Our Expert Team",
  metaDescription:
    "Explore exciting career opportunities at NexRank. Join a team of digital marketing experts, developers, and creatives building world-class digital strategies.",
  keywords: [
    "Digital Marketing Jobs",
    "Careers at NexRank",
    "SEO Jobs",
    "Google Ads Jobs",
    "Web Developer Jobs",
    "Marketing Agency Careers",
    "Digital Marketing Agency Hiring",
  ],
  canonicalUrl: "https://www.nexranktechnogroup.com/digital/careers",
  ogTitle: "Careers at NexRank | Join Our Expert Team",
  ogDescription:
    "Shape the future of digital marketing. We're hiring SEO executives, ad specialists, developers, and content creators.",
  ogImage: "/images/careers/og-careers.jpg",
  twitterCard: "summary_large_image",
};

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────
export const careersBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const careersHero = {
  badge: "We're Hiring",
  heading: "Build the Future of Digital Marketing With Us",
  description:
    "Join a team of passionate strategists, engineers, and creatives who are redefining what a digital marketing agency can achieve. We combine deep technical expertise with bold creative thinking.",
  primaryCTA: {
    text: "Explore Open Positions",
    href: "#open-positions",
  },
  secondaryCTA: {
    text: "Learn About Our Culture",
    href: "#life-at-nexranktechno",
  },
  stats: [
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Employee Satisfaction" },
    { value: "10+", label: "Years of Excellence" },
    { value: "500+", label: "Projects Delivered" },
  ],
};

// ─── WHY JOIN US ──────────────────────────────────────────────────────────────
export const careersWhyJoin = {
  badge: "Why NexRank",
  heading: "A Place Where Talent Thrives",
  description:
    "We don't just offer jobs — we offer careers. Every team member at NexRank is empowered to grow, innovate, and make a measurable impact.",
  features: [
    {
      id: "why-1",
      icon: "learning",
      title: "Continuous Learning",
      description:
        "Dedicated learning budget, industry certifications, workshops, and access to premium courses to keep your skills at the cutting edge.",
      color: "blue",
    },
    {
      id: "why-2",
      icon: "growth",
      title: "Clear Career Growth",
      description:
        "Structured progression paths, quarterly performance reviews, and mentorship programs that accelerate your professional development.",
      color: "amber",
    },
    {
      id: "why-3",
      icon: "team",
      title: "Collaborative Culture",
      description:
        "A supportive, ego-free environment where every voice matters and cross-functional collaboration drives the best results.",
      color: "primary",
    },
    {
      id: "why-4",
      icon: "flexible",
      title: "Flexible Work Culture",
      description:
        "Hybrid and remote-friendly policies, flexible hours, and a results-oriented approach that trusts you to manage your work.",
      color: "violet",
    },
    {
      id: "why-5",
      icon: "tech",
      title: "Latest Technologies",
      description:
        "Work with Next.js, React, Google Analytics 4, Meta Ads Manager, Ahrefs, and the latest generation of AI marketing tools.",
      color: "rose",
    },
    {
      id: "why-6",
      icon: "recognition",
      title: "Performance Recognition",
      description:
        "Transparent appraisals, performance bonuses, public recognition programs, and rewards that celebrate your contributions.",
      color: "emerald",
    },
  ],
};

// ─── CULTURE GALLERY ──────────────────────────────────────────────────────────
export const careersCulture = {
  badge: "Life at NexRank",
  heading: "Where Work Feels Like Purpose",
  description:
    "We believe the best work happens when people are happy, energized, and connected. Here's a glimpse into our everyday world.",
  gallery: [
    {
      id: "gallery-1",
      src: "/images/about/plan.jpg",
      alt: "Strategy & Creative Sprints collaboration at NexRank office",
      caption: "Strategy & Creative Sprints",
      category: "Collaboration",
      featured: true,
    },
    {
      id: "gallery-2",
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      alt: "Digital marketing strategy brainstorming session",
      caption: "Strategy Sessions",
      category: "Work",
      featured: false,
    },
    {
      id: "gallery-3",
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
      alt: "Team celebrating project success together",
      caption: "Team Celebrations",
      category: "Events",
      featured: true,
    },
    {
      id: "gallery-4",
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      alt: "Modern open office workspace",
      caption: "Modern Workspace",
      category: "Office",
      featured: false,
    },
    {
      id: "gallery-6",
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      alt: "Developer working on Next.js web project",
      caption: "Building Products",
      category: "Work",
      featured: true,
    },
  ],
};

// ─── BENEFITS ─────────────────────────────────────────────────────────────────
export const careersBenefits = {
  badge: "Employee Benefits",
  heading: "Everything You Need to Do Your Best Work",
  description:
    "We invest in our people because we know that a thriving team builds thriving results. Our benefits package is designed to support every aspect of your life.",
  benefits: [
    {
      id: "benefit-1",
      icon: "book",
      title: "Learning Budget",
      description:
        "Annual learning allowance for courses, certifications, and industry conferences.",
      highlight: "₹25,000/year",
    },
    {
      id: "benefit-2",
      icon: "certificate",
      title: "Professional Certifications",
      description:
        "Company-sponsored Google, Meta, HubSpot, and other industry certifications.",
      highlight: "Fully Sponsored",
    },
    {
      id: "benefit-3",
      icon: "calendar",
      title: "Generous Paid Leave",
      description:
        "Annual leaves, sick days, and optional work-from-home days built into your package.",
      highlight: "24 Days/Year",
    },
    {
      id: "benefit-4",
      icon: "clock",
      title: "Flexible Hours",
      description:
        "Core hours with flexibility around them. We care about output, not when you clock in.",
      highlight: "Hybrid Ready",
    },
    {
      id: "benefit-5",
      icon: "users",
      title: "Team Events",
      description:
        "Monthly team outings, quarterly off-sites, and annual company retreats to build real bonds.",
      highlight: "Monthly",
    },
    {
      id: "benefit-6",
      icon: "mentor",
      title: "Career Mentorship",
      description:
        "One-on-one mentorship with senior leaders and a structured 90-day onboarding program.",
      highlight: "1:1 Sessions",
    },
    {
      id: "benefit-7",
      icon: "health",
      title: "Health Benefits",
      description:
        "Group health insurance coverage for you and your immediate family members.",
      highlight: "Family Covered",
    },
    {
      id: "benefit-8",
      icon: "performance",
      title: "Performance Bonus",
      description:
        "Bi-annual performance bonuses tied to transparent, measurable KPIs — not politics.",
      highlight: "Twice a Year",
    },
  ],
};

// ─── HIRING PROCESS ───────────────────────────────────────────────────────────
export const careersHiringProcess = {
  badge: "Our Hiring Process",
  heading: "A Simple, Transparent Hiring Journey",
  description:
    "We respect your time and are committed to a clear, fast, and respectful hiring process. Here's exactly what to expect from application to offer.",
  steps: [
    {
      id: "step-1",
      stepNumber: "01",
      title: "Submit Application",
      description:
        "Apply online by filling out our application form and uploading your resume and portfolio.",
      icon: "document",
      estimatedTime: "5 minutes",
    },
    {
      id: "step-2",
      stepNumber: "02",
      title: "Resume Screening",
      description:
        "Our talent team reviews your application and profile within 3-5 business days.",
      icon: "search",
      estimatedTime: "3–5 days",
    },
    {
      id: "step-3",
      stepNumber: "03",
      title: "Technical Assessment",
      description:
        "A role-specific take-home task or case study to showcase your practical skills.",
      icon: "task",
      estimatedTime: "2–3 days",
    },
    {
      id: "step-4",
      stepNumber: "04",
      title: "Technical Interview",
      description:
        "A focused 45-minute video interview with the team lead and relevant senior team members.",
      icon: "video",
      estimatedTime: "45 minutes",
    },
    {
      id: "step-5",
      stepNumber: "05",
      title: "HR Discussion",
      description:
        "A culture-fit conversation with our HR team about expectations, values, and your career goals.",
      icon: "chat",
      estimatedTime: "30 minutes",
    },
    {
      id: "step-6",
      stepNumber: "06",
      title: "Offer & Negotiation",
      description:
        "A competitive offer package with full transparency on compensation, benefits, and growth trajectory.",
      icon: "offer",
      estimatedTime: "1–2 days",
    },
    {
      id: "step-7",
      stepNumber: "07",
      title: "Welcome Aboard",
      description:
        "A structured 90-day onboarding program ensures you integrate, learn, and contribute from day one.",
      icon: "celebration",
      estimatedTime: "Day 1+",
    },
  ],
};

// ─── FILTER OPTIONS ───────────────────────────────────────────────────────────
export const careersDepartments = [
  { id: "all", label: "All Departments", value: "all" },
  { id: "seo", label: "SEO", value: "SEO" },
  { id: "paid-media", label: "Paid Media", value: "Paid Media" },
  { id: "content", label: "Content", value: "Content" },
  { id: "engineering", label: "Engineering", value: "Engineering" },
  { id: "sales", label: "Sales & BD", value: "Sales & BD" },
  { id: "design", label: "Design", value: "Design" },
];

export const careersLocations = [
  { id: "all", label: "All Locations", value: "all" },
  { id: "mumbai", label: "Mumbai", value: "Mumbai" },
  { id: "remote", label: "Remote", value: "Remote" },
  { id: "hybrid", label: "Hybrid", value: "Hybrid" },
];

export const careersEmploymentTypes = [
  { id: "all", label: "All Types", value: "all" },
  { id: "full-time", label: "Full-Time", value: "Full-Time" },
  { id: "part-time", label: "Part-Time", value: "Part-Time" },
  { id: "internship", label: "Internship", value: "Internship" },
  { id: "contract", label: "Contract", value: "Contract" },
];

export const careersExperienceLevels = [
  { id: "all", label: "All Levels", value: "all" },
  { id: "intern", label: "Intern / Fresher", value: "Intern" },
  { id: "junior", label: "Junior (1–2 yrs)", value: "Junior" },
  { id: "mid", label: "Mid-Level (2–4 yrs)", value: "Mid-Level" },
  { id: "senior", label: "Senior (4+ yrs)", value: "Senior" },
];

// ─── OPEN POSITIONS ───────────────────────────────────────────────────────────
export const careersPositions = [
  {
    id: "pos-001",
    slug: "seo-executive",
    title: "SEO Executive",
    department: "SEO",
    location: "Mumbai",
    locationDetail: "Andheri, Mumbai (Hybrid)",
    employmentType: "Full-Time",
    experience: "Mid-Level",
    experienceRange: "2–4 Years",
    salaryRange: "₹3.5L – ₹6L per annum",
    skills: ["Technical SEO", "Google Search Console", "Ahrefs", "On-Page SEO", "Link Building", "GSC", "Content Strategy"],
    shortDescription:
      "Drive organic growth by executing technical SEO audits, on-page optimizations, and strategic link-building campaigns for our enterprise clients.",
    description:
      "We're looking for a results-driven SEO Executive who can own organic search performance for multiple clients. You'll work directly with our senior strategists to implement proven SEO frameworks that deliver measurable rankings growth.",
    responsibilities: [
      "Conduct comprehensive technical SEO audits using tools like Screaming Frog and Ahrefs",
      "Develop and implement keyword strategies for topical authority building",
      "Optimize on-page elements including meta tags, content, and internal linking",
      "Build high-quality backlinks through ethical outreach campaigns",
      "Monitor and report on keyword rankings, organic traffic, and Core Web Vitals",
      "Collaborate with the content team to align SEO and content strategies",
    ],
    requirements: [
      "2–4 years of proven SEO experience, preferably in an agency environment",
      "Strong working knowledge of Google Search Console and GA4",
      "Hands-on experience with tools like Ahrefs, SEMrush, or Moz",
      "Understanding of technical SEO fundamentals (crawlability, indexation, schema)",
      "Excellent analytical and data interpretation skills",
    ],
    benefits: ["Learning Budget", "Certifications", "Hybrid Work", "Performance Bonus"],
    status: "active",
    featured: true,
    displayOrder: 1,
    postedDate: "2026-07-15",
    applicationDeadline: "2026-09-15",
  },
  {
    id: "pos-002",
    slug: "google-ads-specialist",
    title: "Google Ads Specialist",
    department: "Paid Media",
    location: "Hybrid",
    locationDetail: "Mumbai / Remote (Hybrid)",
    employmentType: "Full-Time",
    experience: "Mid-Level",
    experienceRange: "2–4 Years",
    salaryRange: "₹4L – ₹7L per annum",
    skills: ["Google Ads", "PPC", "Google Analytics 4", "Conversion Tracking", "Keyword Research", "A/B Testing"],
    shortDescription:
      "Manage and optimize high-budget Google Ads campaigns across Search, Display, and Shopping for our growing portfolio of enterprise clients.",
    description:
      "As a Google Ads Specialist, you will own the end-to-end management of PPC campaigns, from strategy and setup through to daily optimization and performance reporting. You'll directly impact client ROI.",
    responsibilities: [
      "Plan, create, and manage Search, Display, Shopping, and PMAX campaigns",
      "Conduct in-depth keyword research and competitive analysis",
      "Write compelling ad copy and test multiple creative variations",
      "Optimize bids, Quality Scores, and landing page relevance for maximum ROI",
      "Set up conversion tracking via Google Tag Manager and GA4",
      "Prepare detailed monthly performance reports for client presentations",
    ],
    requirements: [
      "2–4 years of hands-on Google Ads management experience",
      "Google Ads Certified (Search, Display, or Shopping preferred)",
      "Proficiency in Google Analytics 4 and Google Tag Manager",
      "Strong analytical skills and data-driven decision making",
      "Agency experience managing multiple client accounts simultaneously",
    ],
    benefits: ["Learning Budget", "Certifications", "Flexible Hours", "Performance Bonus"],
    status: "active",
    featured: true,
    displayOrder: 2,
    postedDate: "2026-07-20",
    applicationDeadline: "2026-09-20",
  },
  {
    id: "pos-003",
    slug: "meta-ads-specialist",
    title: "Meta Ads Specialist",
    department: "Paid Media",
    location: "Mumbai",
    locationDetail: "Andheri, Mumbai (Hybrid)",
    employmentType: "Full-Time",
    experience: "Mid-Level",
    experienceRange: "2–4 Years",
    salaryRange: "₹4L – ₹7L per annum",
    skills: ["Meta Ads", "Facebook Business Manager", "Audience Segmentation", "Creative Strategy", "Pixel Setup", "CAPI"],
    shortDescription:
      "Build and scale full-funnel Facebook and Instagram campaigns — from audience strategy and creative briefs to daily bid optimization and performance analysis.",
    description:
      "We need a sharp Meta Ads Specialist who understands the full-funnel Meta advertising ecosystem. You'll be responsible for managing paid social campaigns across Facebook and Instagram, with a focus on lead generation and e-commerce objectives.",
    responsibilities: [
      "Create and manage full-funnel campaigns across Facebook and Instagram",
      "Build custom, lookalike, and retargeting audiences for precise targeting",
      "Brief and collaborate with the design team on high-converting ad creatives",
      "Implement and verify Meta Pixel and Conversions API (CAPI) tracking",
      "Conduct A/B testing on audiences, creatives, and campaign objectives",
      "Deliver weekly performance updates and monthly strategy presentations",
    ],
    requirements: [
      "2–4 years of proven Meta Ads management experience",
      "Meta Certified Digital Marketing Associate preferred",
      "Deep understanding of the Facebook ad auction and algorithm",
      "Experience with both lead generation and conversion objectives",
      "Familiarity with creative strategy and ad copy best practices",
    ],
    benefits: ["Learning Budget", "Certifications", "Hybrid Work", "Health Insurance"],
    status: "active",
    featured: false,
    displayOrder: 3,
    postedDate: "2026-07-22",
    applicationDeadline: "2026-09-22",
  },
  {
    id: "pos-004",
    slug: "frontend-web-developer",
    title: "Frontend Web Developer",
    department: "Engineering",
    location: "Remote",
    locationDetail: "Fully Remote (India)",
    employmentType: "Full-Time",
    experience: "Mid-Level",
    experienceRange: "2–4 Years",
    salaryRange: "₹5L – ₹9L per annum",
    skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript", "SEO", "Performance Optimization"],
    shortDescription:
      "Engineer premium, lightning-fast web experiences using Next.js, React, and Tailwind CSS. You'll build scalable, SEO-optimized websites that pass Core Web Vitals.",
    description:
      "We're looking for a talented Frontend Developer who is as passionate about clean code as they are about pixel-perfect design. You'll build the next generation of enterprise websites for our clients using our Next.js-first tech stack.",
    responsibilities: [
      "Build responsive, accessible, and high-performance websites using Next.js and React",
      "Implement pixel-perfect UI from Figma designs with Tailwind CSS",
      "Optimize websites for Core Web Vitals (LCP, FID, CLS)",
      "Integrate headless CMS platforms (Sanity, Contentful) for content management",
      "Implement technical SEO best practices at the code level",
      "Participate in code reviews and contribute to our internal component library",
    ],
    requirements: [
      "2–4 years of professional frontend development experience",
      "Strong proficiency in Next.js App Router and React 18+",
      "Expert-level Tailwind CSS and modern CSS techniques",
      "Understanding of Web Performance and Core Web Vitals optimization",
      "Familiarity with headless CMS and REST/GraphQL APIs",
    ],
    benefits: ["Remote Work", "Learning Budget", "Latest Tech Stack", "Performance Bonus"],
    status: "active",
    featured: true,
    displayOrder: 4,
    postedDate: "2026-07-25",
    applicationDeadline: "2026-09-25",
  },
  {
    id: "pos-005",
    slug: "business-development-executive",
    title: "Business Development Executive",
    department: "Sales & BD",
    location: "Mumbai",
    locationDetail: "Andheri, Mumbai (On-site)",
    employmentType: "Full-Time",
    experience: "Junior",
    experienceRange: "1–3 Years",
    salaryRange: "₹3L – ₹5.5L + Incentives",
    skills: ["B2B Sales", "Lead Generation", "CRM", "Cold Outreach", "Proposal Writing", "Negotiation"],
    shortDescription:
      "Drive new client acquisition for NexRank by identifying prospects, nurturing leads, and converting them into long-term agency partnerships.",
    description:
      "We need a hungry Business Development Executive who can identify new business opportunities, build meaningful relationships with prospects, and close agency deals. You'll be at the forefront of our growth engine.",
    responsibilities: [
      "Identify and qualify potential B2B clients across target industries",
      "Execute outbound sales strategies including cold email, LinkedIn, and referrals",
      "Conduct discovery calls to understand client needs and present tailored solutions",
      "Prepare compelling proposals and present them to decision-makers",
      "Manage the full sales pipeline using CRM software",
      "Collaborate with the delivery team to ensure smooth client onboarding",
    ],
    requirements: [
      "1–3 years of B2B sales or business development experience",
      "Strong communication, presentation, and negotiation skills",
      "Familiarity with digital marketing services (SEO, Ads, Web Dev) preferred",
      "Experience with CRM tools (HubSpot, Salesforce, or similar)",
      "Self-motivated with a results-driven attitude and a hunter mentality",
    ],
    benefits: ["Performance Incentives", "Learning Budget", "Career Growth", "Team Events"],
    status: "active",
    featured: false,
    displayOrder: 5,
    postedDate: "2026-07-28",
    applicationDeadline: "2026-09-28",
  },
  {
    id: "pos-006",
    slug: "content-writer",
    title: "Content Writer",
    department: "Content",
    location: "Remote",
    locationDetail: "Fully Remote (India)",
    employmentType: "Full-Time",
    experience: "Junior",
    experienceRange: "1–2 Years",
    salaryRange: "₹2.5L – ₹4.5L per annum",
    skills: ["SEO Writing", "Copywriting", "Content Strategy", "Blogging", "Research", "Editing"],
    shortDescription:
      "Craft compelling, SEO-optimized content — from long-form blog posts and landing page copy to social media content and ad scripts — that ranks and converts.",
    description:
      "We're searching for a talented Content Writer who lives at the intersection of creativity and SEO. You'll produce high-quality content for our clients' websites, blogs, and marketing campaigns that drives real organic traffic.",
    responsibilities: [
      "Write SEO-optimized blog posts, landing pages, and website copy for clients",
      "Research keywords and topics to align content with search intent",
      "Craft compelling ad copy for Google and Meta campaigns",
      "Develop content calendars in coordination with the SEO and social media teams",
      "Proofread and edit content to ensure brand voice consistency",
      "Stay updated on content marketing and SEO algorithm changes",
    ],
    requirements: [
      "1–2 years of content writing experience, ideally in a marketing agency",
      "Strong understanding of SEO principles and writing for search intent",
      "Excellent written English with a natural, engaging voice",
      "Experience with content planning tools and keyword research",
      "Portfolio of published content that has ranked organically",
    ],
    benefits: ["Remote Work", "Learning Budget", "Flexible Hours", "Creative Freedom"],
    status: "active",
    featured: false,
    displayOrder: 6,
    postedDate: "2026-07-30",
    applicationDeadline: "2026-09-30",
  },
  {
    id: "pos-007",
    slug: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    department: "Paid Media",
    location: "Mumbai",
    locationDetail: "Andheri, Mumbai (In-Office)",
    employmentType: "Internship",
    experience: "Intern",
    experienceRange: "0–1 Year / Fresher",
    salaryRange: "₹10,000 – ₹15,000 per month",
    skills: ["Social Media", "Google Analytics", "Content Writing", "Basic SEO", "Curiosity", "Communication"],
    shortDescription:
      "Kickstart your digital marketing career with a paid internship at NexRank. Learn from seasoned experts across SEO, paid ads, and content marketing.",
    description:
      "This is your launchpad. Our internship program is structured to give freshers a real taste of agency life — working on live client campaigns, learning our tools, and developing skills that will fast-track your career.",
    responsibilities: [
      "Assist the SEO team with keyword research, content audits, and reporting",
      "Support campaign setup and monitoring for Google and Meta Ads",
      "Create and schedule social media content under team guidance",
      "Research competitors and compile industry insights",
      "Help prepare monthly client performance reports",
      "Participate in all team meetings and strategy sessions",
    ],
    requirements: [
      "Graduate or final-year student in Marketing, Communication, or a related field",
      "Basic understanding of digital marketing channels and social media",
      "Strong curiosity, eagerness to learn, and a proactive attitude",
      "Good written and verbal communication skills in English",
      "Commitment to a minimum 3-month internship duration",
    ],
    benefits: ["Paid Internship", "Mentorship", "Real Client Exposure", "PPO Opportunity"],
    status: "active",
    featured: false,
    displayOrder: 7,
    postedDate: "2026-08-01",
    applicationDeadline: "2026-10-01",
  },
];

// ─── APPLICATION FORM CONFIG ──────────────────────────────────────────────────
export const careersFormConfig = {
  title: "Apply for This Position",
  description: "Take the next step in your career. Fill out the form below and our talent team will get back to you within 3–5 business days.",
  submitButtonText: "Submit Application",
  successMessage: {
    heading: "Application Submitted Successfully!",
    body: "Thank you for applying to NexRank. Our talent team will review your application and reach out within 3–5 business days.",
  },
  fields: {
    fullName: {
      id: "fullName",
      label: "Full Name",
      placeholder: "Your full name",
      type: "text",
      required: true,
      autoComplete: "name",
    },
    email: {
      id: "email",
      label: "Email Address",
      placeholder: "you@example.com",
      type: "email",
      required: true,
      autoComplete: "email",
    },
    phone: {
      id: "phone",
      label: "Phone Number",
      placeholder: "+91 98765 43210",
      type: "tel",
      required: true,
      autoComplete: "tel",
    },
    currentLocation: {
      id: "currentLocation",
      label: "Current Location",
      placeholder: "City, State",
      type: "text",
      required: true,
      autoComplete: "address-level2",
    },
    yearsOfExperience: {
      id: "yearsOfExperience",
      label: "Years of Experience",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select experience level" },
        { value: "0", label: "Fresher / 0 Years" },
        { value: "1", label: "1 Year" },
        { value: "2", label: "2 Years" },
        { value: "3", label: "3 Years" },
        { value: "4", label: "4 Years" },
        { value: "5+", label: "5+ Years" },
      ],
    },
    positionApplyingFor: {
      id: "positionApplyingFor",
      label: "Position Applying For",
      type: "select",
      required: true,
      placeholder: "Select a position",
    },
    portfolioUrl: {
      id: "portfolioUrl",
      label: "Portfolio / Website URL",
      placeholder: "https://yourportfolio.com",
      type: "url",
      required: false,
      autoComplete: "url",
    },
    linkedinUrl: {
      id: "linkedinUrl",
      label: "LinkedIn Profile URL",
      placeholder: "https://linkedin.com/in/yourname",
      type: "url",
      required: false,
    },
    coverLetter: {
      id: "coverLetter",
      label: "Cover Letter",
      placeholder: "Tell us why you're a great fit for this role and what makes you stand out...",
      type: "textarea",
      required: true,
      rows: 5,
      maxLength: 1500,
    },
    resume: {
      id: "resume",
      label: "Resume / CV",
      type: "file",
      required: true,
      accept: ".pdf,.doc,.docx",
      maxSizeMB: 5,
      hint: "PDF, DOC, or DOCX — max 5MB",
    },
    consent: {
      id: "consent",
      label: "I consent to NexRank storing my application data for recruitment purposes.",
      type: "checkbox",
      required: true,
    },
  },
  // Future API integration contract:
  // apiEndpoint: "/api/careers/apply",
  // atsWebhook: process.env.ATS_WEBHOOK_URL,
  // hrmsEndpoint: process.env.HRMS_ENDPOINT,
  // resumeStorageBucket: process.env.RESUME_STORAGE_BUCKET,
  // emailNotification: process.env.HR_EMAIL,
};

// ─── CAREER FAQs ──────────────────────────────────────────────────────────────
export const careersFAQs = {
  badge: "Got Questions?",
  heading: "Frequently Asked Career Questions",
  description:
    "Everything you need to know about working at NexRank, our hiring process, and what it's like to be part of our team.",
  faqs: [
    {
      id: "cfaq-1",
      question: "What is the typical hiring timeline from application to offer?",
      answer:
        "Our end-to-end hiring process typically takes 2–3 weeks. This includes 3–5 days for initial review, a take-home assessment, two interview rounds, and offer finalization. We respect your time and ensure you always know where you stand.",
      featured: true,
      displayOrder: 1,
    },
    {
      id: "cfaq-2",
      question: "Do you offer remote or hybrid work options?",
      answer:
        "Yes! Many of our roles are either fully remote or hybrid. The work arrangement is clearly mentioned in each job posting. Our engineering and content roles are predominantly remote, while client-facing and sales roles are typically hybrid or in-office in Mumbai.",
      featured: true,
      displayOrder: 2,
    },
    {
      id: "cfaq-3",
      question: "I'm a fresher. Is there a place for me at NexRank?",
      answer:
        "Absolutely. Our Digital Marketing Internship program is specifically designed for freshers and final-year students. We provide structured mentorship, real client exposure, and a competitive stipend. High-performing interns often receive full-time Pre-Placement Offers (PPO).",
      featured: true,
      displayOrder: 3,
    },
    {
      id: "cfaq-4",
      question: "What does the technical assessment involve?",
      answer:
        "The assessment is role-specific and practical — not a puzzle or a trick test. SEO candidates may be asked to audit a sample website. Developers might be given a small coding challenge. Ad specialists might analyze a campaign scenario. It typically takes 2–3 hours and is evaluated based on logical thinking and practical output.",
      featured: true,
      displayOrder: 4,
    },
    {
      id: "cfaq-5",
      question: "Can I apply for multiple positions at the same time?",
      answer:
        "Yes, you can apply for up to two open positions simultaneously if you genuinely meet the requirements for both. Please tailor your cover letter for each role. Applying to positions you are clearly unqualified for may result in your application being deprioritized.",
      featured: false,
      displayOrder: 5,
    },
    {
      id: "cfaq-6",
      question: "What growth opportunities exist for senior professionals?",
      answer:
        "Senior professionals at NexRank have clear paths into leadership roles — Team Lead, Department Head, and eventually Director-level positions. We actively promote from within and provide mentorship from the founding leadership team. We also support senior employees in building their personal brand through thought leadership opportunities.",
      featured: false,
      displayOrder: 6,
    },
  ],
};

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
export const careersCTA = {
  badge: "Open to Opportunities?",
  heading: "Don't See the Right Role?",
  description:
    "We're always on the lookout for exceptional talent. If you don't see a position that matches your skills, send us your resume and we'll reach out when the perfect opportunity arises.",
  primaryCTA: {
    text: "Send Us Your Resume",
    href: "#apply",
  },
  secondaryCTA: {
    text: "Follow Us on LinkedIn",
    href: "https://linkedin.com/company/nexranktechnogroup",
    external: true,
  },
  email: "careers@nexranktechnogroup.com",
  note: "We review all applications personally and respond within 5 business days.",
};
