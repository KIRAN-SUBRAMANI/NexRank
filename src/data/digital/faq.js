export const faqData = {
  section: {
    badge: "Answers & Insights",
    heading: "Frequently Asked <span class='text-[#D4AF37]'>Questions</span>",
    description: "Find quick answers to common questions about our digital marketing processes, pricing, and timelines.",
  },
  cta: {
    title: "Still Have Questions?",
    text: "Talk to Our Digital Marketing Experts",
    link: "/contact"
  },
  faqs: [
    {
      id: "faq-1",
      category: "General",
      question: "How long does it take to see results?",
      answer: "Digital marketing timelines vary by channel. Paid Ads (Google/Meta) can generate leads within 48 hours of launch. SEO generally takes 3 to 6 months to see significant compounding growth, while web development projects typically take 4-8 weeks to launch.",
      displayOrder: 1,
      featured: true,
      relatedService: "All Services",
      keywords: ["timeline", "results", "how long"],
      status: "Published"
    },
    {
      id: "faq-2",
      category: "General",
      question: "Do you require long-term contracts?",
      answer: "We typically work on 6 to 12-month retainers for ongoing marketing services like SEO and Ads management. This allows us sufficient time to implement strategies, gather data, and optimize campaigns for maximum ROI.",
      displayOrder: 2,
      featured: true,
      relatedService: null,
      keywords: ["contract", "retainer", "commitment"],
      status: "Published"
    },
    {
      id: "faq-3",
      category: "SEO",
      question: "Will I rank #1 on Google guaranteed?",
      answer: "No reputable agency can guarantee a #1 ranking due to the dynamic nature of Google's algorithms. However, we guarantee that we will employ enterprise-grade, white-hat SEO strategies that have consistently driven top 3 map pack and organic rankings for our clients.",
      displayOrder: 3,
      featured: false,
      relatedService: "SEO",
      keywords: ["guarantee", "ranking", "google #1"],
      status: "Published"
    },
    {
      id: "faq-4",
      category: "Google Ads",
      question: "How do you manage ad budgets?",
      answer: "Your ad budget is paid directly to Google or Meta. We charge a separate management fee. This ensures complete transparency; you always retain ownership of your ad accounts and data, and you see exactly how every dollar is spent.",
      displayOrder: 4,
      featured: false,
      relatedService: "Google Ads",
      keywords: ["budget", "management fee", "transparency"],
      status: "Published"
    },
    {
      id: "faq-5",
      category: "Web Development",
      question: "Why do you use Next.js instead of WordPress?",
      answer: "We specialize in headless Next.js architecture because it offers unparalleled page load speeds, superior security, and better Core Web Vitalsâ€”which directly impact your SEO rankings and lead conversion rates compared to traditional WordPress setups.",
      displayOrder: 5,
      featured: false,
      relatedService: "Web Development",
      keywords: ["next.js", "wordpress", "speed"],
      status: "Published"
    },
    {
      id: "faq-6",
      category: "Meta Ads",
      question: "Do you create the ad graphics and videos?",
      answer: "Yes. Our team includes creative strategists who design high-converting static images, carousels, and short-form video creatives tailored specifically for Facebook and Instagram algorithms.",
      displayOrder: 6,
      featured: false,
      relatedService: "Meta Ads",
      keywords: ["creative", "video", "graphics"],
      status: "Published"
    }
  ]
};
