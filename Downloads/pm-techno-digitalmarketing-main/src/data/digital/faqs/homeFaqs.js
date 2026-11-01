export const homeFaqs = {
  section: {
    badge: "FREQUENTLY ASKED QUESTIONS",
    heading: "Everything You Need to Know",
    description: "Find answers to the most common questions about our digital marketing services, web development solutions, pricing, project timelines, SEO strategies, Google Ads, Meta Ads, Google Business Profile optimization, and ongoing support.",
    statsLabel: "20+ Frequently Asked Questions"
  },
  items: [
    // GENERAL
    {
      id: "faq-1",
      category: "General",
      question: "What services does NexRank offer?",
      answer: "NexRank is a full-service digital marketing and technology agency. We specialize in Search Engine Optimization (SEO), Google Ads (PPC), Meta Ads (Social Media Marketing), Google Business Profile optimization, and enterprise-grade Web Development using modern frameworks like Next.js.",
      featured: true,
      order: 1,
      createdAt: "2024-01-10T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-2",
      category: "General",
      question: "Why should I choose NexRank?",
      answer: "We take a data-driven, ROI-focused approach to every project. Unlike traditional agencies that offer cookie-cutter solutions, we engineer custom strategies tailored to your industry. Our enterprise-level architecture ensures fast websites, while our targeted marketing campaigns guarantee measurable business growth.",
      featured: true,
      order: 2,
      createdAt: "2024-01-11T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-3",
      category: "General",
      question: "How do I get started with your services?",
      answer: "Getting started is simple. Reach out to us via our contact form or book a discovery call. We'll conduct a comprehensive audit of your current digital presence, identify growth opportunities, and propose a customized strategy aligned with your business goals.",
      featured: false,
      order: 3,
      createdAt: "2024-01-12T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-4",
      category: "General",
      question: "Do you work with startups and small businesses?",
      answer: "Absolutely. While we implement enterprise-level strategies, our solutions are highly scalable. Whether you are an ambitious startup looking to establish your digital footprint or an established enterprise seeking to scale, we have tailored packages to suit your specific growth stage.",
      featured: false,
      order: 4,
      createdAt: "2024-01-13T10:00:00Z",
      status: "published"
    },
    
    // SEO
    {
      id: "faq-5",
      category: "SEO",
      question: "What is SEO and why is it important?",
      answer: "Search Engine Optimization (SEO) is the practice of improving your website's visibility on search engines like Google. It is crucial because organic search is often the primary source of high-quality website traffic. Ranking higher for relevant keywords means more qualified leads and increased revenue without paying for every click.",
      featured: true,
      order: 5,
      createdAt: "2024-01-14T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-6",
      category: "SEO",
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term strategy. While technical fixes can yield immediate improvements, significant ranking and traffic growth typically take 3 to 6 months of consistent effort. We focus on sustainable, white-hat techniques that compound over time, providing lasting ROI.",
      featured: false,
      order: 6,
      createdAt: "2024-01-15T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-7",
      category: "SEO",
      question: "Do you provide Local SEO?",
      answer: "Yes, Local SEO is one of our core specialties. We optimize your website, build local citations, and manage your Google Business Profile to ensure your business dominates the 'Local Pack' and map results for customers searching in your geographical area.",
      featured: false,
      order: 7,
      createdAt: "2024-01-16T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-8",
      category: "SEO",
      question: "Can SEO improve my website traffic?",
      answer: "Significantly. By targeting high-intent keywords, optimizing your content architecture, and building authoritative backlinks, we capture users who are actively searching for your products or services. This results in a massive increase in highly qualified, organic website traffic.",
      featured: false,
      order: 8,
      createdAt: "2024-01-17T10:00:00Z",
      status: "published"
    },

    // GOOGLE ADS
    {
      id: "faq-9",
      category: "Google Ads",
      question: "How do Google Ads help my business?",
      answer: "Google Ads place your business at the very top of search results the moment a potential customer searches for your services. It provides immediate visibility, precise targeting, and measurable ROI, making it one of the most effective channels for rapid lead generation and sales.",
      featured: true,
      order: 9,
      createdAt: "2024-01-18T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-10",
      category: "Google Ads",
      question: "How much should I spend on Google Ads?",
      answer: "Your ad budget depends on your industry, competition, and goals. We recommend a starting budget that allows enough data collection for optimization—usually starting around $1,500 to $3,000 per month. Our goal is to quickly find the most profitable keywords and scale your budget based on positive ROAS.",
      featured: false,
      order: 10,
      createdAt: "2024-01-19T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-11",
      category: "Google Ads",
      question: "How do you optimize Google Ads campaigns?",
      answer: "We perform continuous optimization including A/B testing ad copy, adjusting bid strategies, refining keyword match types, utilizing negative keywords to eliminate wasted spend, and optimizing landing pages to maximize Quality Score and conversion rates.",
      featured: false,
      order: 11,
      createdAt: "2024-01-20T10:00:00Z",
      status: "published"
    },

    // META ADS
    {
      id: "faq-12",
      category: "Meta Ads",
      question: "Why should I advertise on Facebook and Instagram?",
      answer: "Meta Ads offer unparalleled audience targeting based on demographics, interests, and behaviors. It is the perfect platform for building brand awareness, retargeting website visitors, and driving direct response campaigns with highly visual, engaging ad formats.",
      featured: true,
      order: 12,
      createdAt: "2024-01-21T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-13",
      category: "Meta Ads",
      question: "What industries benefit from Meta Ads?",
      answer: "Virtually all industries can benefit, but it is exceptionally powerful for E-commerce, Real Estate, Healthcare, Education, and even B2B lead generation. By using Custom Audiences and Lookalike Audiences, we can find your ideal customers regardless of your niche.",
      featured: false,
      order: 13,
      createdAt: "2024-01-22T10:00:00Z",
      status: "published"
    },

    // GOOGLE BUSINESS PROFILE
    {
      id: "faq-14",
      category: "Google Business Profile",
      question: "Why is Google Business Profile important?",
      answer: "A fully optimized Google Business Profile (GBP) is critical for local search visibility. It dictates how you appear on Google Maps and Local Search, allowing customers to easily find your contact info, read reviews, and get directions. A strong GBP directly correlates with increased foot traffic and local phone calls.",
      featured: true,
      order: 14,
      createdAt: "2024-01-23T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-15",
      category: "Google Business Profile",
      question: "Can you optimize multiple business locations?",
      answer: "Yes. We have extensive experience managing and optimizing Google Business Profiles for multi-location enterprises and franchises. We ensure consistent NAP (Name, Address, Phone) data, manage reviews, and implement localized SEO strategies for every single location.",
      featured: false,
      order: 15,
      createdAt: "2024-01-24T10:00:00Z",
      status: "published"
    },

    // WEB DEVELOPMENT
    {
      id: "faq-16",
      category: "Web Development",
      question: "Why should I build my website using Next.js?",
      answer: "Next.js provides server-side rendering (SSR) and static site generation (SSG), resulting in lightning-fast page loads and perfect Core Web Vitals. This dramatically improves user experience, lowers bounce rates, and gives you a significant advantage in SEO rankings compared to traditional CMS platforms like WordPress.",
      featured: true,
      order: 16,
      createdAt: "2024-01-25T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-17",
      category: "Web Development",
      question: "Do you build mobile-responsive websites?",
      answer: "Absolutely. We employ a mobile-first design philosophy. Every website we develop is rigorously tested across all devices and screen sizes to ensure a flawless, intuitive user experience whether your customers are on a smartphone, tablet, or desktop.",
      featured: false,
      order: 17,
      createdAt: "2024-01-26T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-18",
      category: "Web Development",
      question: "Will my website be SEO-friendly?",
      answer: "Yes, SEO is baked into our development process from day one. We ensure clean semantic HTML, proper heading hierarchies, optimized meta tags, automated XML sitemaps, structured data (Schema.org), and blazing-fast load times—all prerequisites for technical SEO success.",
      featured: false,
      order: 18,
      createdAt: "2024-01-27T10:00:00Z",
      status: "published"
    },

    // PRICING
    {
      id: "faq-19",
      category: "Pricing",
      question: "How much do your digital marketing services cost?",
      answer: "Our pricing is customized based on the scope of work, your specific goals, and the competitive landscape of your industry. We offer flexible retainer packages for ongoing marketing and fixed-bid pricing for development projects. Contact us for a detailed, transparent proposal.",
      featured: true,
      order: 19,
      createdAt: "2024-01-28T10:00:00Z",
      status: "published"
    },

    // SUPPORT
    {
      id: "faq-20",
      category: "Support",
      question: "Do you provide monthly reports?",
      answer: "Yes, transparency is a core value. We provide comprehensive, easy-to-understand monthly reports detailing key performance indicators (KPIs), traffic growth, lead generation metrics, ad spend efficiency, and our strategic plan for the upcoming month.",
      featured: true,
      order: 20,
      createdAt: "2024-01-29T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-21",
      category: "Support",
      question: "Do you provide ongoing support?",
      answer: "Absolutely. A website or marketing campaign requires continuous attention. We offer ongoing maintenance, technical support, and strategic consulting to ensure your digital assets remain secure, up-to-date, and consistently performing at their peak.",
      featured: false,
      order: 21,
      createdAt: "2024-01-30T10:00:00Z",
      status: "published"
    },
    {
      id: "faq-22",
      category: "Support",
      question: "Can I upgrade my marketing plan later?",
      answer: "Of course. As your business grows, your marketing needs will evolve. Our strategies are built to scale. You can seamlessly add new services, increase ad budgets, or expand into new channels at any time to accelerate your growth.",
      featured: false,
      order: 22,
      createdAt: "2024-01-31T10:00:00Z",
      status: "published"
    }
  ]
};
