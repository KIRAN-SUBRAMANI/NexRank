/**
 * Enriches any case study object with Brandshark-style deep metadata,
 * keyword SERP rankings, tactical media assets, and strategic process phases.
 */

const slugMetadataMap = {
  "scaling-patient-acquisition-regional-healthcare-clinic": {
    clientName: "Regional Healthcare Clinic",
    clientHandle: "@regionalhealthclinic",
    followerCount: "14.2k Patients · 8 Branches",
    categoryHeadline: "A regional healthcare provider, built for accessible family medicine.",
    strategySubtitle: "Local SEO, Google Business Profile optimization, and medical E-E-A-T content were synchronized into a single patient acquisition engine.",
    threeBottlenecks: [
      {
        title: "Buried on Page 3 for High-Intent Queries",
        description: "The clinic was completely invisible for urgent, high-intent local searches like 'pediatrician near me' or 'urgent care walk-in', losing patients to large hospital networks."
      },
      {
        title: "Unclaimed & Underperforming Google Business Profile",
        description: "Their GBP listing was unverified, lacked department categories, had inconsistent hours, and had fewer than 15 total reviews."
      },
      {
        title: "Sluggish Mobile Site Bleeding Bookings",
        description: "Mobile load times exceeded 5 seconds on 4G networks, causing 64% of potential patients to abandon the appointment booking form."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Claim, Audit & Solidify Local Foundations",
        phaseTag: "AWARENESS & LOCAL REACH",
        bullets: [
          "— Full GBP verification across primary and 7 specialty medical departments",
          "— Hyper-local NAP consistency audit across 65+ healthcare directories and citation platforms",
          "— Implementation of Google-compliant MedicalClinic and Physician Schema markup"
        ]
      },
      {
        step: "02",
        title: "Capture High-Intent Symptoms & Specialty Searches",
        phaseTag: "CONSIDERATION & INTENT",
        bullets: [
          "— Rewrote 24 core service pages to align with Google Medical E-E-A-T guidelines",
          "— Geo-targeted micro-neighbourhood landing pages for walk-in urgent care demand",
          "— Verified doctor credentials, patient video testimonials, and FAQ schema integration"
        ]
      },
      {
        step: "03",
        title: "Automate Reviews & Streamline Appointment Funnel",
        phaseTag: "CONVERSION & RETENTION",
        bullets: [
          "— Implemented post-consultation SMS review automation to safely collect Google reviews",
          "— Re-engineered mobile appointment scheduling into a frictionless 2-step booking widget",
          "— Monthly rank tracking and GBP interaction analytics tied to actual clinic intake"
        ]
      }
    ],
    tacticalNarrative: "We stopped relying on generic healthcare messaging and started targeting specific patient moments: urgent weekend fever clinics, sports injury triage, and pediatric immunization schedules. Every search query resolved to an immediate doctor booking.",
    deliverables: [
      {
        title: "Urgent Pediatric Care Local Landing Page",
        category: "LOCAL SEO ASSET",
        quote: "“Finding a trusted pediatrician shouldn't take hours of frantic searching.”",
        badge: "Highest mobile booking conversion (+68%)",
        image: "/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp"
      },
      {
        title: "Automated SMS Patient Review System",
        category: "REPUTATION ENGINE",
        quote: "“Turned positive clinic visits into a permanent 4.9-star digital moat.”",
        badge: "450+ verified Google reviews in 6 months",
        image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp"
      },
      {
        title: "Sub-Second Mobile Appointment Booking Portal",
        category: "CONVERSION ARCHITECTURE",
        quote: "“From landing page to confirmed doctor slot in less than 45 seconds.”",
        badge: "Sub-0.8s LCP on mobile devices",
        image: "/images/blog/website-performance.webp"
      },
      {
        title: "Local Map Pack Geo-Optimized Asset Cluster",
        category: "MAP PACK DOMINANCE",
        quote: "“Ranked #1 across 15 micro-neighbourhoods within a 12-mile radius.”",
        badge: "#1 Google 3-Pack across 18 keywords",
        image: "/images/about/our-vision.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "Top 3", label: "Google Map Pack Dominance" },
        { value: "+1,520%", label: "Growth in Organic Impressions" },
        { value: "1.8", label: "Average Position on Priority Set" },
        { value: "+180%", label: "Monthly Patient Call Inquiries" }
      ],
      keywords: [
        { keyword: "Pediatrician near me", rank: "#1", volume: "3,600/mo", intent: "High-Intent Local" },
        { keyword: "Urgent care walk in clinic", rank: "#1", volume: "2,400/mo", intent: "Immediate Need" },
        { keyword: "Family health doctor in [region]", rank: "#2", volume: "1,900/mo", intent: "Direct Booking" },
        { keyword: "Best general physician appointment", rank: "#1", volume: "1,400/mo", intent: "High Consideration" },
        { keyword: "Same day medical clinic consultation", rank: "#2", volume: "850/mo", intent: "Urgent Appointment" }
      ]
    },
    outcomes: [
      "The clinic now owns the top position in the Google 3-Pack across all target regional postcodes.",
      "Organic search delivers 180% more verified patient bookings every month without relying on ads.",
      "A permanent 4.9-star review moat safeguards market leadership against larger hospital networks."
    ],
    tacticalImages: [
      { image: "/images/case-studies/Healthcare SEO Services for Clinics and Hospitals.jpg", label: "Patient Intent Architecture" },
      { image: "/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp", label: "Local Search Blueprint" },
      { image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp", label: "GBP 3-Pack Optimization" },
      { image: "/images/services/gbp-isometric.jpg", label: "Geo-Fenced Local Citations" },
      { image: "/images/blog/website-performance.webp", label: "Sub-Second Patient Booking" },
      { image: "/images/services/seo-isometric.jpg", label: "Medical Schema Integration" }
    ]
  },

  "achieving-420-percent-roas-for-national-d2c-brand": {
    clientName: "National D2C Activewear",
    clientHandle: "@d2cactivewear",
    followerCount: "86.5k Followers · D2C Brand",
    categoryHeadline: "An eco-conscious activewear brand, built for high performance and everyday comfort.",
    strategySubtitle: "Restructured Google Shopping, Performance Max, and Meta catalog sales into a synchronized full-funnel acquisition engine.",
    threeBottlenecks: [
      {
        title: "Bleeding Budget on Broad Match Search Keywords",
        description: "Unstructured Google Ads accounts were burning ad spend on low-intent generic apparel terms with zero purchase intent."
      },
      {
        title: "Fragmented Meta Ad Account Structure",
        description: "Over 40 competing ad sets created audience fatigue, sky-high CPMs, and self-cannibalizing ad auction bids."
      },
      {
        title: "Unsegmented Shopping Feed Lacking Custom Labels",
        description: "Best-selling high-margin items were receiving the same ad spend as slow-moving low-margin inventory."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Eliminate Wasted Spend & Audit Product Feeds",
        phaseTag: "AUDIT & FEED RESTRUCTURE",
        bullets: [
          "— Negative keyword sculpting to eliminate non-commercial activewear queries",
          "— Merchant Center product feed enrichment with custom labels for high-margin hero SKUs",
          "— Cleaned pixel and Conversion API tracking for 100% accurate first-party attribution"
        ]
      },
      {
        step: "02",
        title: "Restructure Performance Max & Meta Advantage+",
        phaseTag: "TARGETING & BID STRATEGY",
        bullets: [
          "— Consolidated Meta accounts into 3 core funnels: Broad Prospecting, Advantage+ Shopping, and Dynamic Retargeting",
          "— Asset group restructuring in Performance Max paired with high-converting video hooks",
          "— ROAS-based target bidding aligned strictly with unit economics and inventory margins"
        ]
      },
      {
        step: "03",
        title: "Scale Top-Performing Creatives & Retargeting Loops",
        phaseTag: "SCALE & RETENTION",
        bullets: [
          "— Creator UGC and silent-scroll lifestyle video ads tested on a weekly sprint cadence",
          "— Segmented 7-day cart abandoner retargeting sequence yielding 8.4x return on spend",
          "— Scaled ad spend 3.2x while keeping ROAS locked at 420% across all primary product lines"
        ]
      }
    ],
    tacticalNarrative: "We stopped chasing cheap clicks and aligned every dollar of spend directly to inventory gross margin. Dynamic product ads and high-converting UGC hooks brought back repeat buyers while bringing down customer acquisition costs by 42%.",
    deliverables: [
      {
        title: "High-ROAS Advantage+ Creative Set",
        category: "PAID MEDIA ASSET",
        quote: "“Activewear engineered for real movement, zero restriction.”",
        badge: "4.8x ROAS on Meta Prospecting",
        image: "/images/case-studies/Achieving 420 ROAS for National D2C Brand.webp"
      },
      {
        title: "Custom-Tiered Google Shopping Architecture",
        category: "FEED ENGINEERING",
        quote: "“Prioritizing ad spend where inventory profitability is highest.”",
        badge: "+310% Google Shopping revenue",
        image: "/images/services/e-commerce.webp"
      },
      {
        title: "Dynamic Abandoned Cart Recovery Funnel",
        category: "CONVERSION RETENTION",
        quote: "“Re-engaging high-intent shoppers with social proof and size guidance.”",
        badge: "8.4x ROAS on warm remarketing",
        image: "/images/blog/Maximizing Google Ads ROAS with AI Bidding.webp"
      },
      {
        title: "First-Party Attribution & CAPI Setup",
        category: "DATA INFRASTRUCTURE",
        quote: "“Real-time server-side tracking that defies browser cookie loss.”",
        badge: "100% verified conversion accuracy",
        image: "/images/blog/website-performance.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "420%", label: "Overall Return on Ad Spend (ROAS)" },
        { value: "-42%", label: "Reduction in Cost Per Acquisition" },
        { value: "+340%", label: "Total E-Commerce Revenue Growth" },
        { value: "8.4x", label: "Remarketing Campaign ROAS" }
      ],
      keywords: [
        { keyword: "Sustainable activewear for men", rank: "#1", volume: "6,200/mo", intent: "Commercial Transaction" },
        { keyword: "Organic cotton athletic shorts", rank: "#2", volume: "4,100/mo", intent: "Product Search" },
        { keyword: "Ethical performance fitness clothing", rank: "#1", volume: "2,800/mo", intent: "High Consideration" },
        { keyword: "Best moisture wicking gym shirt", rank: "#2", volume: "3,900/mo", intent: "Direct Purchase" },
        { keyword: "Premium minimalist activewear brand", rank: "#1", volume: "1,500/mo", intent: "Brand Affinity" }
      ]
    },
    outcomes: [
      "Transformed advertising from a cash drain into the primary predictable growth channel for the brand.",
      "Consistently maintained 420% ROAS while scaling monthly advertising budget by over 300%.",
      "Built a bulletproof first-party data tracking infrastructure that outperforms competitors post-iOS14."
    ],
    tacticalImages: [
      { image: "/images/case-studies/DIRECT TO CONSUMER.jpg", label: "Full-Funnel D2C Architecture" },
      { image: "/images/case-studies/Achieving 420 ROAS for National D2C Brand.webp", label: "ROAS Scaling Framework" },
      { image: "/images/blog/Maximizing Google Ads ROAS with AI Bidding.webp", label: "Smart Bidding Tiering" },
      { image: "/images/services/e-commerce.webp", label: "Product Catalog Feed Sync" },
      { image: "/images/services/google-ads-isometric.jpg", label: "Performance Max Sculpting" },
      { image: "/images/services/meta-ads-isometric.jpg", label: "Dynamic Product Retargeting" }
    ]
  },

  "high-performance-nextjs-architecture-real-estate-firm": {
    clientName: "Prime Real Estate Group",
    clientHandle: "@primerealestategroup",
    followerCount: "32.4k Investors · Luxury Property",
    categoryHeadline: "A premier real estate firm, engineered for high-value architectural properties.",
    strategySubtitle: "Replaced an outdated, slow WordPress site with a headless Next.js portal featuring sub-second loads and interactive floor plans.",
    threeBottlenecks: [
      {
        title: "6.8-Second Page Load Losing High-Net-Worth Buyers",
        description: "Heavy legacy plugins and unoptimized 4K imagery caused affluent investors to bounce before viewing property listings."
      },
      {
        title: "Zero Indexation for Dynamic Property Listings",
        description: "Search engines were unable to crawl JavaScript-rendered filters, resulting in zero organic search impressions for multimillion-dollar penthouses."
      },
      {
        title: "Disjointed Lead Capture and CRM Sync",
        description: "Broker inquiries were lost in email inboxes without automated routing to regional sales agents."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Headless Architecture & Edge SSR Rebuild",
        phaseTag: "ARCHITECTURE & CORE VITALS",
        bullets: [
          "— Migrated to Next.js with Incremental Static Regeneration (ISR) for instant listing rendering",
          "— Automatic WebP/AVIF image optimization with responsive srcset delivery",
          "— Achieved a 99/100 Google Lighthouse Performance and Accessibility score"
        ]
      },
      {
        step: "02",
        title: "Programmatic Real Estate SEO & Schema Setup",
        phaseTag: "SEARCH DOMINANCE & CRAWLABILITY",
        bullets: [
          "— Programmatic generation of 400+ neighborhood, building, and floor-plan landing pages",
          "— Full RealEstateListing, Place, and AggregateRating Schema.org JSON-LD structured data",
          "— Static XML sitemaps automatically pinging Google upon new listing publication"
        ]
      },
      {
        step: "03",
        title: "Frictionless Private Tour Booking Experience",
        phaseTag: "CONVERSION & BROKER INTAKE",
        bullets: [
          "— 1-click mobile private showing scheduler integrated with broker CRM calendars",
          "— Interactive 3D floor plan explorer and virtual walkthrough modal with zero layout shift",
          "— Real-time SMS and WhatsApp inquiry alerts to senior brokerage partners"
        ]
      }
    ],
    tacticalNarrative: "High-net-worth real estate buyers have zero patience for sluggish websites. By re-engineering the firm's web platform on Next.js, listings loaded instantly worldwide, and private viewing requests increased by 85% in the first quarter.",
    deliverables: [
      {
        title: "Sub-Second Next.js Luxury Listing Portal",
        category: "WEB ARCHITECTURE",
        quote: "“Multimillion-dollar properties presented with the speed they deserve.”",
        badge: "0.6s LCP globally on mobile",
        image: "/images/case-studies/High-Performance Next.js Architecture for Real Estate Firm.webp"
      },
      {
        title: "Interactive 3D Virtual Tour Viewer",
        category: "INTERACTIVE UI",
        quote: "“Allowing overseas investors to walk properties from any mobile device.”",
        badge: "+114% dwell time per session",
        image: "/images/blog/website-performance.webp"
      },
      {
        title: "Programmatic Neighborhood SEO Engine",
        category: "TECHNICAL SEO",
        quote: "“Capturing every micro-district search query before competitors do.”",
        badge: "Page 1 rank for 42 luxury developments",
        image: "/images/blog/Why Next.js is the Ultimate Framework for Marketing Websites.webp"
      },
      {
        title: "Direct-to-Broker VIP Inquiry System",
        category: "CRM INTEGRATION",
        quote: "“Zero friction between property curiosity and private viewing booked.”",
        badge: "85% increase in verified showing requests",
        image: "/images/services/saas.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "< 0.8s", label: "Core Web Vitals Largest Contentful Paint" },
        { value: "+85%", label: "Increase in Verified Private Inquiries" },
        { value: "99/100", label: "Google Lighthouse Performance Score" },
        { value: "+240%", label: "Organic Search Visits to Listings" }
      ],
      keywords: [
        { keyword: "Luxury penthouses for sale downtown", rank: "#1", volume: "2,900/mo", intent: "High-Net-Worth" },
        { keyword: "Waterfront modern architectural villas", rank: "#2", volume: "1,800/mo", intent: "Investor Direct" },
        { keyword: "Pre construction luxury condos [city]", rank: "#1", volume: "3,400/mo", intent: "Commercial Lead" },
        { keyword: "Private gated estate properties for sale", rank: "#2", volume: "1,200/mo", intent: "Exclusive Buyer" },
        { keyword: "Top luxury real estate brokerage [region]", rank: "#1", volume: "2,100/mo", intent: "Brand Authority" }
      ]
    },
    outcomes: [
      "The firm now commands the fastest, most technologically sophisticated real estate portal in the region.",
      "Organic property inquiry volume rose by 85%, cutting reliance on expensive third-party real estate aggregators.",
      "An automated headless CMS empowers the brokerage team to launch new development landing pages in minutes."
    ],
    tacticalImages: [
      { image: "/images/services/web dev.jpg", label: "Next.js Edge Infrastructure" },
      { image: "/images/case-studies/High-Performance Next.js Architecture for Real Estate Firm.webp", label: "Luxury Property UI" },
      { image: "/images/blog/Why Next.js is the Ultimate Framework for Marketing Websites.webp", label: "Headless CMS Architecture" },
      { image: "/images/services/web-dev-isometric.jpg", label: "Sub-0.8s Core Web Vitals" },
      { image: "/images/blog/website-performance.webp", label: "Interactive 3D Virtual Tours" },
      { image: "/images/case-studies/service-3.png", label: "VIP Lead Routing Pipeline" }
    ]
  },

  "scaling-b2b-saas-demos-with-meta-ads": {
    clientName: "CloudSync Pro",
    clientHandle: "@cloudsyncpro",
    followerCount: "24.8k Enterprise Users · SaaS",
    categoryHeadline: "An enterprise workflow SaaS platform, built for seamless team productivity.",
    strategySubtitle: "Restructured Meta ad funnels with Lookalike modeling to slash Cost Per Demo by 55% and inject $1.2M in pipeline.",
    threeBottlenecks: [
      {
        title: "Prohibitive LinkedIn Ad Costs",
        description: "B2B LinkedIn campaigns were burning budget with $140+ CPCs and high customer acquisition costs that stalled unit economics."
      },
      {
        title: "Generic Creative Fatigue",
        description: "Static product screenshots yielded sub-0.5% CTRs with no clear articulation of software ROI or time savings."
      },
      {
        title: "Friction-Heavy Multi-Step Demo Forms",
        description: "Prospective buyers abandoned the qualification questionnaire when asked for 12 required fields on mobile devices."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Calibrate High-LTV Lookalike Audiences",
        phaseTag: "AUDIENCE ARCHITECTURE",
        bullets: [
          "— Uploaded closed-won customer lists and C-level buyer data into Meta CAPI",
          "— Built 1% and 2% nested lookalike tiers targeting decision-maker titles",
          "— Excluded existing customers and open pipeline opportunities in real time"
        ]
      },
      {
        step: "02",
        title: "Deploy Problem-First Video Hook Creatives",
        phaseTag: "CREATIVE & MESSAGING",
        bullets: [
          "— Produced 8 product micro-demos demonstrating 40-hour weekly time savings",
          "— Dynamic creative testing (DCT) iterating on first 3-second hook variations",
          "— Direct-response copy highlighting SOC-2 compliance and instant integration"
        ]
      },
      {
        step: "03",
        title: "Implement Meta Native Instant Forms",
        phaseTag: "CONVERSION & CRM INTEGRATION",
        bullets: [
          "— Replaced external landing pages with 3-field native Meta instant lead forms",
          "— Integrated direct webhook sync into Salesforce & HubSpot within 30 seconds",
          "— Automated SMS booking reminders yielding a 92% demo show-up rate"
        ]
      }
    ],
    tacticalNarrative: "We proved that B2B SaaS buyers spend hours on Meta. By meeting enterprise decision-makers in their feed with high-impact product video hooks and frictionless native booking, we filled the enterprise sales calendar at less than half the cost of LinkedIn.",
    deliverables: [
      {
        title: "C-Suite B2B Meta Video Ad Suite",
        category: "PAID MEDIA ASSET",
        quote: "“Stop losing 20 hours a week to disconnected spreadsheets.”",
        badge: "3.4% click-through rate",
        image: "/images/case-studies/ads-campaign.png"
      },
      {
        title: "Meta Native Instant Demo Form",
        category: "CONVERSION ENGINE",
        quote: "“Book a personalized walkthrough in 2 taps without leaving Facebook.”",
        badge: "-55% Cost Per Demo",
        image: "/images/case-studies/Scaling B2B SaaS Demos with Meta Ads.webp"
      },
      {
        title: "High-LTV Lookalike Audience Matrix",
        category: "DATA & TARGETING",
        quote: "“Trained Meta's algorithm on the top 10% highest-value enterprise accounts.”",
        badge: "300+ qualified demo requests",
        image: "/images/blog/Mastering Meta Ads for B2B Lead Generation.webp"
      },
      {
        title: "Automated CRM Lead Routing Pipeline",
        category: "INFRASTRUCTURE",
        quote: "“From ad click to confirmed SDR calendar invite in under 60 seconds.”",
        badge: "92% calendar show-up rate",
        image: "/images/services/saas.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "-55%", label: "Reduction in Cost Per Demo" },
        { value: "300+", label: "Qualified Demos in First Month" },
        { value: "$1.2M", label: "Qualified Sales Pipeline Added" },
        { value: "92%", label: "Demo Attendance Show-Up Rate" }
      ],
      keywords: [
        { keyword: "Enterprise team workflow automation software", rank: "#1", volume: "3,100/mo", intent: "B2B SaaS" },
        { keyword: "Cloud collaboration tool for fast growing companies", rank: "#2", volume: "2,400/mo", intent: "Product Evaluation" },
        { keyword: "Best project management software for remote teams", rank: "#1", volume: "4,600/mo", intent: "High Consideration" },
        { keyword: "Modern cloud sync software demo", rank: "#1", volume: "1,100/mo", intent: "Direct Demo" },
        { keyword: "SOC 2 compliant enterprise cloud workflow", rank: "#2", volume: "900/mo", intent: "Commercial Lead" }
      ]
    },
    outcomes: [
      "Meta Ads emerged as CloudSync Pro's most profitable and scalable pipeline generation channel.",
      "The sales team secured over 300 verified demos each month while slashing demo acquisition cost by 55%.",
      "Over $1.2M in qualified pipeline was closed in the first quarter with an ongoing automated calendar."
    ],
    tacticalImages: [
      { image: "/images/case-studies/ads-campaign.png", label: "B2B Paid Funnel" },
      { image: "/images/case-studies/Scaling B2B SaaS Demos with Meta Ads.webp", label: "Interactive Demo Flow" },
      { image: "/images/blog/Mastering Meta Ads for B2B Lead Generation.webp", label: "Lookalike Audience Model" },
      { image: "/images/services/saas.webp", label: "SaaS Product Showcase" },
      { image: "/images/services/meta-ads-isometric.jpg", label: "Native Lead Form Capture" },
      { image: "/images/services/meta ads.webp", label: "C-Suite Value Proposition" }
    ]
  },

  "omnichannel-growth-regional-restaurant-chain": {
    clientName: "Bistro 42",
    clientHandle: "@bistro42restaurants",
    followerCount: "48.2k Diners · 6 Regional Locations",
    categoryHeadline: "A regional artisanal dining brand, crafted for unforgettable hospitality experiences.",
    strategySubtitle: "Connected Google Business Profile local search with hyper-targeted radius Meta Ads to boost foot traffic by 40%.",
    threeBottlenecks: [
      {
        title: "New Location Grand Opening Anonymity",
        description: "Opening two new suburban locations risked empty dining rooms without an established local following."
      },
      {
        title: "Fragmented Local Citations & Stale Menus",
        description: "Google Maps profiles showed outdated operating hours, missing specialty menus, and unverified branch addresses."
      },
      {
        title: "Uncoordinated Ad Spend",
        description: "Social media promotions reached diners outside realistic travel radiuses, wasting budget on unreachable customers."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Standardize Multi-Branch Google Profiles",
        phaseTag: "LOCAL FOUNDATIONS",
        bullets: [
          "— Full verification and category optimization across all 6 branch listings",
          "— High-resolution food photography and synchronized digital menu schema",
          "— Implemented OpenTable reservation CTA integration directly inside Google Maps"
        ]
      },
      {
        step: "02",
        title: "Deploy Hyper-Local 5-Mile Radius Meta Ads",
        phaseTag: "GEO-TARGETED ACQUISITION",
        bullets: [
          "— Geofenced video campaigns targeting food lovers within 5 miles of each venue",
          "— Weekend chef special teasers and cocktail pairing video reels",
          "— Timed dayparting boosting ad impressions between 11 AM - 1 PM and 5 PM - 8 PM"
        ]
      },
      {
        step: "03",
        title: "Automate Diner Review Collection",
        phaseTag: "REPUTATION ACCELERATOR",
        bullets: [
          "— QR code table tents incentivizing real-time Google reviews with dessert vouchers",
          "— Generated 850+ verified 5-star reviews in 90 days across all branches",
          "— Retargeted past diners with private event and catering promotions"
        ]
      }
    ],
    tacticalNarrative: "We bridged digital discovery with physical table bookings. Combining geofenced visual appetites on Instagram with top-of-pack Google Maps rankings ensured Bistro 42 was the first and only choice for local diners.",
    deliverables: [
      {
        title: "Hyper-Local Radius Video Campaign",
        category: "PAID SOCIAL ASSET",
        quote: "“The wood-fired grill experience you've been craving all week.”",
        badge: "5.5x promotional ROAS",
        image: "/images/case-studies/Local SEO_.jpg"
      },
      {
        title: "Multi-Location Google Profile Ecosystem",
        category: "MAP PACK DOMINANCE",
        quote: "“Instant table reservations directly from Google Maps search results.”",
        badge: "+210% map views",
        image: "/images/case-studies/Omnichannel Growth for Regional Restaurant Chain.webp"
      },
      {
        title: "Cross-Channel Diner Retargeting Engine",
        category: "OMNICHANNEL SYNC",
        quote: "“Turning one-time dinner guests into weekly regulars.”",
        badge: "+40% sustained foot traffic",
        image: "/images/case-studies/omnichannel-growth.webp"
      },
      {
        title: "Visual Menu & Review Harvesting Loop",
        category: "REPUTATION MOAT",
        quote: "“4.9 stars across 6 locations with 850+ new Google reviews.”",
        badge: "850+ verified reviews",
        image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "+40%", label: "Increase in In-Store Foot Traffic" },
        { value: "+210%", label: "Surge in Google Map Profile Views" },
        { value: "5.5x", label: "ROAS on Promotional Radius Ads" },
        { value: "850+", label: "New 5-Star Reviews Generated" }
      ],
      keywords: [
        { keyword: "Best farm to table restaurant near me", rank: "#1", volume: "4,800/mo", intent: "Immediate Dining" },
        { keyword: "Casual fine dining downtown [city]", rank: "#1", volume: "3,200/mo", intent: "Dinner Booking" },
        { keyword: "Top weekend brunch spots near me", rank: "#2", volume: "5,100/mo", intent: "Weekend Search" },
        { keyword: "Private dining rooms for party reservations", rank: "#1", volume: "1,600/mo", intent: "High Check Size" },
        { keyword: "Artisanal cocktail bar and bistro", rank: "#1", volume: "2,300/mo", intent: "Evening Leisure" }
      ]
    },
    outcomes: [
      "Both new locations achieved record-breaking opening months with 100% capacity weekends.",
      "Foot traffic across all 6 locations sustained an average 40% year-over-year increase.",
      "A permanent 4.9-star rating cemented Bistro 42 as the preeminent dining destination in the region."
    ],
    tacticalImages: [
      { image: "/images/case-studies/Local SEO_.jpg", label: "Radius Foot-Traffic Driver" },
      { image: "/images/case-studies/Omnichannel Growth for Regional Restaurant Chain.webp", label: "Multi-Branch Local Blueprint" },
      { image: "/images/case-studies/omnichannel-growth.webp", label: "Cross-Channel Synchronization" },
      { image: "/images/case-studies/banner1.webp", label: "Menu Discovery Experience" },
      { image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp", label: "Google Maps Menu Integration" },
      { image: "/images/services/gbp-isometric.jpg", label: "Hyper-Local Radius Geofence" }
    ]
  },

  "organic-growth-ecommerce-brand": {
    clientName: "Artisan Direct E-Commerce",
    clientHandle: "@artisandirect",
    followerCount: "120k Shoppers · Global E-Commerce",
    categoryHeadline: "A direct-to-consumer e-commerce retailer, built for premium handcrafted essentials.",
    strategySubtitle: "Executed an end-to-end technical SEO overhaul and category page architecture, boosting organic revenue by 116%.",
    threeBottlenecks: [
      {
        title: "Severe Faceted Navigation Crawl Bloat",
        description: "Over 50,000 auto-generated duplicate URLs consumed Google's crawl budget, leaving priority category pages unindexed."
      },
      {
        title: "Thin Non-Branded Category Copy",
        description: "Product collections had no topical depth, ranking only for branded queries and missing huge commercial intent volume."
      },
      {
        title: "100% Reliance on Expensive PPC Ads",
        description: "Rising customer acquisition costs on paid search threatened e-commerce net profitability."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Resolve Indexation & Technical Crawl Debt",
        phaseTag: "TECHNICAL OVERHAUL",
        bullets: [
          "— Canonicalized faceted filter parameters to reclaim 85% wasted crawl budget",
          "— Implemented Product, Review, and ItemList JSON-LD structured schema",
          "— Accelerated TTFB and Core Web Vitals to sub-0.7s across all catalog templates"
        ]
      },
      {
        step: "02",
        title: "Build Topical Authority Category Silos",
        phaseTag: "CONTENT & ARCHITECTURE",
        bullets: [
          "— Rewrote 65 primary category and sub-category pages with comprehensive buying guides",
          "— Interlinked high-intent hero products with programmatic breadcrumb schema",
          "— Targeted bottom-of-funnel non-branded keywords with high commercial intent"
        ]
      },
      {
        step: "03",
        title: "High-Authority E-Commerce Digital PR",
        phaseTag: "AUTHORITY & SCALE",
        bullets: [
          "— Secured feature mentions in Tier 1 lifestyle, design, and eco-conscious publications",
          "— Built curated holiday gift guides yielding hundreds of organic editorial backlinks",
          "— Scaled organic sessions 3.4x while organic revenue climbed 116%"
        ]
      }
    ],
    tacticalNarrative: "We cured years of technical SEO debt and built an unassailable category silo architecture. Search engines now understand exactly which products to rank, delivering high-margin organic shoppers around the clock.",
    deliverables: [
      {
        title: "Category Silo Organic Engine",
        category: "SEO ARCHITECTURE",
        quote: "“Optimizing category taxonomy to capture transactional non-branded search.”",
        badge: "+240% organic traffic",
        image: "/images/case-studies/From Low Visibility to 3.4x Organic Growth for an E-commerce Brand.webp"
      },
      {
        title: "Enterprise Technical Crawl Fix",
        category: "TECHNICAL INFRASTRUCTURE",
        quote: "“Eliminated 50k+ duplicate URLs and restored Google indexation efficiency.”",
        badge: "0.7s average LCP",
        image: "/images/case-studies/Enterprise SEO Strategies Scaling Your Organic Growth.webp"
      },
      {
        title: "Commercial Intent Keyword Matrix",
        category: "KEYWORD STRATEGY",
        quote: "“Secured Page 1 Google rankings for 350+ commercial search queries.”",
        badge: "+178% non-branded clicks",
        image: "/images/services/Best Seo Agency In Mohali.jpg"
      },
      {
        title: "Automated Product Schema Delivery",
        category: "STRUCTURED DATA",
        quote: "“Rich snippets featuring star ratings, pricing, and stock availability.”",
        badge: "+116% organic revenue",
        image: "/images/services/e-commerce.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "+240%", label: "Organic Traffic Growth" },
        { value: "+178%", label: "Increase in Non-Branded Clicks" },
        { value: "+116%", label: "Boost in Organic Revenue" },
        { value: "350+", label: "Keywords on Google Page 1" }
      ],
      keywords: [
        { keyword: "Handcrafted artisan leather bags", rank: "#1", volume: "8,900/mo", intent: "Transactional Search" },
        { keyword: "Sustainable minimalist everyday backpack", rank: "#1", volume: "6,200/mo", intent: "Commercial Purchase" },
        { keyword: "Full grain leather weekend duffle bag", rank: "#2", volume: "4,500/mo", intent: "Direct Buy" },
        { keyword: "Handmade ceramic dinnerware set", rank: "#1", volume: "3,800/mo", intent: "High Consideration" },
        { keyword: "Eco friendly lifestyle goods shop", rank: "#2", volume: "2,700/mo", intent: "Category Browse" }
      ]
    },
    outcomes: [
      "Organic search overtook paid ads as the single most profitable revenue channel for the company.",
      "The site commands top 3 organic rankings for over 350 high-volume commercial keywords.",
      "The business saved over $180,000 in annual ad spend while continuing to scale sales."
    ],
    tacticalImages: [
      { image: "/images/case-studies/From Low Visibility to 3.4x Organic Growth for an E-commerce Brand.webp", label: "Organic Growth Blueprint" },
      { image: "/images/case-studies/Enterprise SEO Strategies Scaling Your Organic Growth.webp", label: "Category Silo Structure" },
      { image: "/images/services/Best Seo Agency In Mohali.jpg", label: "Commercial Intent Keyword Map" },
      { image: "/images/services/e-commerce.webp", label: "Transactional Product Schema" },
      { image: "/images/blog/seo_strategy_2026.jpg", label: "Technical Crawl Optimization" },
      { image: "/images/services/seo-isometric.jpg", label: "High-Authority Digital PR" }
    ]
  },

  "google-ads-multi-location-education-brand": {
    clientName: "National Academy Group",
    clientHandle: "@nationalacademygroup",
    followerCount: "64k Students · 18 Campuses",
    categoryHeadline: "A national accredited education network, designed for transformative career advancement.",
    strategySubtitle: "Rebuilt Google Ads campaigns with geo-intent negative filtering, reducing cost per student lead by 46%.",
    threeBottlenecks: [
      {
        title: "Astronomical Cost Per Inquiry",
        description: "CPL had spiked above $180 per form fill due to competing against aggregate online course brokers."
      },
      {
        title: "Irrelevant Student Inquiries",
        description: "Over 60% of inquiries came from outside campus catchment areas seeking free tutorials or financial aid grants."
      },
      {
        title: "Account Structure Cannibalization",
        description: "Shared account budgets starved high-performing regional campuses while overfunding low-converting markets."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Granular Location Account Architecture",
        phaseTag: "ACCOUNT RESTRUCTURE",
        bullets: [
          "— Split single multi-location campaigns into 18 discrete geo-targeted campus accounts",
          "— Applied radius bid adjustments prioritizing students within 20 miles of physical classes",
          "— Built strict negative keyword lists eliminating 'free', 'jobs', and 'login' queries"
        ]
      },
      {
        step: "02",
        title: "High-Intent Degree & Certification Keyword Sculpting",
        phaseTag: "SEARCH HARVESTING",
        bullets: [
          "— Replaced broad match terms with Phrase and Exact match career certification intent",
          "— Shifted bidding to Target CPA with offline conversion import (qualified interview rate)",
          "— Dynamic location insertion into ad headlines guaranteeing hyper-local relevance"
        ]
      },
      {
        step: "03",
        title: "Conversion-Rate-Optimized Enrollment Funnels",
        phaseTag: "CRO & NURTURING",
        bullets: [
          "— Built campus-specific landing pages with verified graduate employment statistics",
          "— Friction-free 3-step syllabus download funnel capturing validated student mobile numbers",
          "— Automated CRM SMS follow-up yielding a 65% faster admissions counselor contact speed"
        ]
      }
    ],
    tacticalNarrative: "We stopped letting campuses bid against each other and eliminated wasted search terms with surgical negative keyword sculpting. Student admissions received more qualified prospective student consultations at 46% lower cost.",
    deliverables: [
      {
        title: "Campus-Specific Google Search Campaigns",
        category: "PAID SEARCH ASSET",
        quote: "“Targeting prospective students right in their home neighborhoods.”",
        badge: "-46% Cost Per Lead",
        image: "/images/case-studies/multi brand.jpg"
      },
      {
        title: "Lead Quality Qualification Engine",
        category: "DATA ATTRIBUTION",
        quote: "“Optimizing bidding for completed admissions interviews, not just clicks.”",
        badge: "+134% qualified enrollments",
        image: "/images/case-studies/Cutting Cost Per Lead by 46 percent for a Multi-Location.webp"
      },
      {
        title: "Search Term Harvesting & Negative Tiering",
        category: "SEARCH ENGINE SCULPTING",
        quote: "“Saved $45,000 monthly by eradicating non-converting keyword bleed.”",
        badge: "2.9x Program ROAS",
        image: "/images/services/Expert Google Ads.jpg"
      },
      {
        title: "High-Converting Campus Landing Experience",
        category: "CRO FRAMEWORK",
        quote: "“Transparent tuition schedules and verified graduate outcomes.”",
        badge: "28% landing page conversion rate",
        image: "/images/blog/Maximizing Google Ads ROAS with AI Bidding.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "-46%", label: "Reduction in Cost Per Lead" },
        { value: "+134%", label: "Surge in Qualified Student Leads" },
        { value: "2.9x", label: "Measurable Program ROAS" },
        { value: "18", label: "Campuses Synchronized at Scale" }
      ],
      keywords: [
        { keyword: "Accredited career certification programs near me", rank: "#1", volume: "4,400/mo", intent: "Enrollment Intent" },
        { keyword: "Best vocational institute in [city]", rank: "#1", volume: "2,800/mo", intent: "Campus Search" },
        { keyword: "Evening classes for working professionals", rank: "#2", volume: "3,100/mo", intent: "High Consideration" },
        { keyword: "Fast track healthcare diploma courses", rank: "#1", volume: "2,200/mo", intent: "Direct Enrollment" },
        { keyword: "Hands on technical trade school tuition", rank: "#2", volume: "1,500/mo", intent: "Tuition Search" }
      ]
    },
    outcomes: [
      "Cost per qualified prospective student lead plunged by 46% across all 18 regional campuses.",
      "Admissions counselors reported a 134% surge in verified prospective student interviews.",
      "The institution safely scaled its marketing budget to open 3 additional regional campus facilities."
    ],
    tacticalImages: [
      { image: "/images/case-studies/multi brand.jpg", label: "Multi-Campus Architecture" },
      { image: "/images/case-studies/Cutting Cost Per Lead by 46 percent for a Multi-Location.webp", label: "CPL Optimization Engine" },
      { image: "/images/services/Expert Google Ads.jpg", label: "Search Term Harvesting" },
      { image: "/images/blog/Maximizing Google Ads ROAS with AI Bidding.webp", label: "Geo-Targeted Smart Bidding" },
      { image: "/images/services/google-ads-isometric.jpg", label: "Negative Keyword Sculpting" },
      { image: "/images/case-studies/banner2.webp", label: "Enrollment Landing Funnel" }
    ]
  },

  "meta-ads-premium-fitness-brand": {
    clientName: "Velocity Fitness Club",
    clientHandle: "@velocityfitness",
    followerCount: "52k Members · Premium Fitness",
    categoryHeadline: "A boutique luxury fitness sanctuary, engineered for world-class wellness results.",
    strategySubtitle: "Deployed dynamic creative testing and Lookalike audience funnels on Meta, producing 3,800+ member leads at 43% lower CPL.",
    threeBottlenecks: [
      {
        title: "Creative Burnout Within 10 Days",
        description: "Static gym floor images fatigued rapidly, leading to skyrocketing CPMs and diminishing inquiry volume."
      },
      {
        title: "Leads Stalling at the Trial Stage",
        description: "Casual inquiries dropped off before scheduling physical club tours and consultation sessions."
      },
      {
        title: "Inefficient Broad Geographic Targeting",
        description: "Ads were shown to audiences residing more than 30 minutes away who had near-zero likelihood of regular gym attendance."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "UGC Video & Transformation Hook Testing",
        phaseTag: "CREATIVE TESTING ENGINE",
        bullets: [
          "— Launched 20 authentic member transformation stories and coach workout breakdowns",
          "— Tested dynamic text overlays and high-retention audio hooks on Instagram Reels",
          "— Identified 3 winner creative angles generating 70% of total member inquiries"
        ]
      },
      {
        step: "02",
        title: "Multi-Tiered Lookalikes & Geo-Fencing",
        phaseTag: "AUDIENCE SEGMENTATION",
        bullets: [
          "— Built Lookalikes from top 10% highest lifetime value luxury club members",
          "— Geofenced affluent residential postcodes within an 8-minute commute radius",
          "— Dynamic retargeting showing facility amenities to video viewers"
        ]
      },
      {
        step: "03",
        title: "Meta Native Instant Forms & Instant SMS Booking",
        phaseTag: "CONVERSION & RETENTION",
        bullets: [
          "— Pre-filled native lead forms eliminating manual typing on mobile screens",
          "— Integrated WhatsApp & SMS calendar sync for instant VIP club pass activation",
          "— Increased physical tour show-up rate from 38% to 76% across all clubs"
        ]
      }
    ],
    tacticalNarrative: "We replaced generic stock gym photos with authentic member transformation reels and rapid-response WhatsApp tour bookings. By targeting affluent nearby postcodes with frictionless forms, we filled class rosters with 3,800+ qualified fitness enthusiasts.",
    deliverables: [
      {
        title: "High-Impact Fitness UGC Video Ad Suite",
        category: "PAID SOCIAL ASSET",
        quote: "“Feel the luxury energy before you even step through our doors.”",
        badge: "3,800+ leads generated",
        image: "/images/case-studies/download.jpg"
      },
      {
        title: "VIP 7-Day Experience Pass Native Form",
        category: "CONVERSION FUNNEL",
        quote: "“Claim your exclusive trial pass with 2 taps on Instagram.”",
        badge: "-43% Cost Per Lead",
        image: "/images/case-studies/Generating 3,800+ Qualified Leads for a Premium Fitness.webp"
      },
      {
        title: "High-LTV Fitness Enthusiast Lookalike",
        category: "AUDIENCE ENGINE",
        quote: "“Modeled on our highest-tier recurring personal training clients.”",
        badge: "2.7x Campaign ROAS",
        image: "/images/services/meta ads.webp"
      },
      {
        title: "Automated Club Tour Scheduler",
        category: "CRM AUTOMATION",
        quote: "“Seamless calendar confirmation with coach introduction video.”",
        badge: "76% tour show-up rate",
        image: "/images/case-studies/banner3.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "3,800+", label: "Verified Member Leads Generated" },
        { value: "-43%", label: "Reduction in Cost Per Lead" },
        { value: "2.7x", label: "Return on Ad Spend" },
        { value: "76%", label: "Trial Tour Attendance Rate" }
      ],
      keywords: [
        { keyword: "Luxury fitness club and gym membership near me", rank: "#1", volume: "4,600/mo", intent: "Membership Search" },
        { keyword: "Best boutique personal training studio", rank: "#1", volume: "3,100/mo", intent: "Training Intent" },
        { keyword: "Premium wellness club with spa and recovery", rank: "#2", volume: "2,400/mo", intent: "High-End Buyer" },
        { keyword: "Private gym trial pass offer", rank: "#1", volume: "1,800/mo", intent: "Direct Lead" },
        { keyword: "Elite group strength conditioning classes", rank: "#2", volume: "1,200/mo", intent: "Class Booking" }
      ]
    },
    outcomes: [
      "Generated over 3,800 qualified membership leads in 6 months at a predictable, low CPL.",
      "Doubled physical club tour attendance through instant automated WhatsApp confirmations.",
      "Velocity Fitness expanded its personal training roster by 85% to accommodate surging member demand."
    ],
    tacticalImages: [
      { image: "/images/case-studies/download.jpg", label: "Dynamic Creative Hook" },
      { image: "/images/case-studies/Generating 3,800+ Qualified Leads for a Premium Fitness.webp", label: "Membership Intake Funnel" },
      { image: "/images/services/meta ads.webp", label: "Video UGC Proof Testing" },
      { image: "/images/case-studies/banner3.webp", label: "High-Intent Lead Magnet" },
      { image: "/images/services/meta-ads-isometric.jpg", label: "Meta Instant Experience Form" },
      { image: "/images/blog/tips and guidlines.webp", label: "Trial Activation Funnel" }
    ]
  },

  "local-search-multi-location-dental-practice": {
    clientName: "SmileCare Dental Centers",
    clientHandle: "@smilecaredental",
    followerCount: "28k Patients · 5 Metro Locations",
    categoryHeadline: "A patient-first dental care network, dedicated to gentle, modern family dentistry.",
    strategySubtitle: "Standardized multi-location Google Business Profiles and automated review harvesting, doubling patient phone calls (+104%).",
    threeBottlenecks: [
      {
        title: "Lost in the Google 3-Pack Behind Chains",
        description: "Local dental searches showed large corporate franchises, while SmileCare appeared on page 2 of Maps."
      },
      {
        title: "Stale, Outdated Patient Reviews",
        description: "The practice had fewer than 20 reviews per clinic with an average age of 2 years, failing Google's recency algorithm."
      },
      {
        title: "Inconsistent NAP Citations",
        description: "Inconsistent suite numbers and phone numbers across Yelp and Healthgrades confused Google's local crawl."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "Audit & Harmonize Multi-Clinic Citations",
        phaseTag: "CITATION HYGIENE",
        bullets: [
          "— Standardized exact Name, Address, and Phone (NAP) across 70+ healthcare directories",
          "— Added specific secondary dental categories: Cosmetic Dentist, Pediatric Dentist, Emergency Dental Care",
          "— Embedded custom location maps with Dentist schema markup on each clinic landing page"
        ]
      },
      {
        step: "02",
        title: "Google Business Profile Visual & Product Overhaul",
        phaseTag: "PROFILE OPTIMIZATION",
        bullets: [
          "— Uploaded geotagged clinic tour photography, doctor portraits, and treatment technology photos",
          "— Implemented Google GBP Product & Service catalogs with transparent consultation pricing",
          "— Configured direct 'Book Online' links leading to the practice management scheduler"
        ]
      },
      {
        step: "03",
        title: "Automated Post-Appointment Review Harvesting",
        phaseTag: "REPUTATION ENGINE",
        bullets: [
          "— Integrated dental PMS system with an automated SMS review prompt 1 hour post-visit",
          "— Generated 620+ verified 5-star Google reviews across all 5 clinic locations",
          "— Monitored and responded to 100% of patient reviews within 24 hours"
        ]
      }
    ],
    tacticalNarrative: "When families search for an emergency dentist or routine checkup, they click the top 3 Google Maps results with the freshest reviews. We secured those top spots across all 5 metro locations, doubling incoming patient phone calls.",
    deliverables: [
      {
        title: "Multi-Clinic GBP Checklist & Audit",
        category: "LOCAL SEO ASSET",
        quote: "“Standardizing local data across 70+ medical citation platforms.”",
        badge: "+192% Google Profile views",
        image: "/images/case-studies/Local SEO Checklist.jpg"
      },
      {
        title: "Google Map Pack Dominance Asset",
        category: "MAP PACK DOMINANCE",
        quote: "“Top 3 Google Maps ranking across all primary dental care terms.”",
        badge: "Top 3 Map Pack rankings",
        image: "/images/case-studies/Dominating Local Search for a Multi-Location Dental.webp"
      },
      {
        title: "Automated Patient Review Engine",
        category: "REPUTATION ACCELERATOR",
        quote: "“Turned happy dental visits into 620+ fresh 5-star Google testimonials.”",
        badge: "620+ verified reviews",
        image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp"
      },
      {
        title: "Direct Phone Call & Booking Flow",
        category: "CONVERSION ARCHITECTURE",
        quote: "“Seamless 1-click calls from mobile Google Maps search cards.”",
        badge: "+104% patient phone calls",
        image: "/images/case-studies/Healthcare SEO Services for Clinics and Hospitals.jpg"
      }
    ],
    serpData: {
      stats: [
        { value: "+192%", label: "Surge in Google Profile Views" },
        { value: "+104%", label: "Increase in Direct Patient Phone Calls" },
        { value: "+137%", label: "Growth in Website Clicks from Maps" },
        { value: "Top 3", label: "Rankings Across Priority Service Terms" }
      ],
      keywords: [
        { keyword: "Emergency dentist near me open now", rank: "#1", volume: "4,200/mo", intent: "Immediate Emergency" },
        { keyword: "Best family dentist in [metro area]", rank: "#1", volume: "3,500/mo", intent: "Family Healthcare" },
        { keyword: "Teeth whitening and cosmetic dentistry consultation", rank: "#2", volume: "2,100/mo", intent: "High Value Service" },
        { keyword: "Gentle pediatric dental clinic appointment", rank: "#1", volume: "2,800/mo", intent: "High Consideration" },
        { keyword: "Dental implants specialist [city]", rank: "#2", volume: "1,700/mo", intent: "High Check Size" }
      ]
    },
    outcomes: [
      "All 5 clinic locations now lock down Top 3 positions in the Google Map Pack for regional searches.",
      "Direct inbound patient phone calls from Google Maps increased by 104% year-over-year.",
      "The clinics amassed over 620 verified 5-star reviews, creating a formidable barrier against competitors."
    ],
    tacticalImages: [
      { image: "/images/case-studies/Local SEO Checklist.jpg", label: "Multi-Clinic Local Checklist" },
      { image: "/images/case-studies/Dominating Local Search for a Multi-Location Dental.webp", label: "Dental Map Pack Dominance" },
      { image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp", label: "Automated 5-Star Review Engine" },
      { image: "/images/services/gbp-isometric.jpg", label: "Dental Treatment Schema" },
      { image: "/images/case-studies/banner4.webp", label: "Emergency Call Tracking" },
      { image: "/images/case-studies/Healthcare SEO Services for Clinics and Hospitals.jpg", label: "Patient Intake Optimization" }
    ]
  },

  "conversion-focused-website-redesign": {
    clientName: "Apex Advisory Group",
    clientHandle: "@apexadvisory",
    followerCount: "16.8k Corporate Clients · Global Advisory",
    categoryHeadline: "A high-stakes corporate advisory firm, built for complex international enterprise transactions.",
    strategySubtitle: "Redesigned the digital experience with conversion-first UI/UX and micro-interactions, increasing lead submissions by 74%.",
    threeBottlenecks: [
      {
        title: "Confusing Desktop & Mobile Navigation",
        description: "Enterprise decision-makers struggled to find relevant case studies or service capabilities within an outdated site hierarchy."
      },
      {
        title: "High Bounce Rate on Core Capability Pages",
        description: "Heavy text walls and cluttered layouts overwhelmed visitors, causing 68% of mobile traffic to bounce in 10 seconds."
      },
      {
        title: "Passive, Hidden Contact Mechanisms",
        description: "Inquiry forms were buried at the bottom of long pages with 10+ required fields that scared off busy executives."
      }
    ],
    strategyPhases: [
      {
        step: "01",
        title: "UX Journey Mapping & Information Architecture",
        phaseTag: "RESEARCH & WIREFRAMING",
        bullets: [
          "— Conducted user session recordings and heatmap analysis identifying critical drop-off points",
          "— Streamlined 80+ legacy pages into 5 high-converting service capability pillars",
          "— Designed mobile-first responsive wireframes optimized for senior executive decision journeys"
        ]
      },
      {
        step: "02",
        title: "Modern Visual Design & Interactive Micro-Animations",
        phaseTag: "UI DESIGN & DEVELOPMENT",
        bullets: [
          "— Crafted a sleek, authoritative dark/light contrast aesthetic with modern typography",
          "— Implemented subtle micro-animations and zero-layout-shift responsive interactions",
          "— Engineered sub-second page transitions powered by modern Next.js frontend code"
        ]
      },
      {
        step: "03",
        title: "Frictionless Inquiry Modals & Lead Routing",
        phaseTag: "CRO & PIPELINE",
        bullets: [
          "— Introduced persistent, non-intrusive 2-step executive consultation modals",
          "— Smart qualification routing directing inquiries directly to the relevant practice partner",
          "— Increased verified qualified consultation requests by 74% in the first quarter"
        ]
      }
    ],
    tacticalNarrative: "High-value clients judge expertise by the quality of your digital presence. By transforming a static corporate website into an intuitive, high-speed conversion engine, we turned passive executive visits into confirmed advisory mandates.",
    deliverables: [
      {
        title: "Executive Conversion-First Wireframe",
        category: "UX/UI ARCHITECTURE",
        quote: "“Guiding prospective enterprise buyers intuitively from problem to consultation.”",
        badge: "+118% conversion rate",
        image: "/images/case-studies/Turning a High-Traffic Website Into a Conversion-.webp"
      },
      {
        title: "High-Speed Enterprise Next.js Frontend",
        category: "WEB DEVELOPMENT",
        quote: "“Sub-second load times that keep busy C-level executives engaged.”",
        badge: "+68% mobile engagement",
        image: "/images/services/web dev.jpg"
      },
      {
        title: "Frictionless 2-Step Consultation Modal",
        category: "CRO MECHANISM",
        quote: "“Removing barriers to executive discovery with frictionless qualification.”",
        badge: "+74% lead submissions",
        image: "/images/blog/website-performance.webp"
      },
      {
        title: "Interactive Capability Showcase",
        category: "BRAND AUTHORITY",
        quote: "“Dynamic case studies and quantifiable impact metrics displayed in real time.”",
        badge: "0.6s LCP globally",
        image: "/images/blog/Why Next.js is the Ultimate Framework for Marketing Websites.webp"
      }
    ],
    serpData: {
      stats: [
        { value: "+118%", label: "Increase in Site Conversion Rate" },
        { value: "+74%", label: "Surge in Qualified Lead Submissions" },
        { value: "+68%", label: "Lift in Mobile User Engagement" },
        { value: "< 0.8s", label: "Global Average Page Load Time" }
      ],
      keywords: [
        { keyword: "Corporate advisory and M&A consulting firm", rank: "#1", volume: "3,800/mo", intent: "Executive Search" },
        { keyword: "International business strategy consultants", rank: "#1", volume: "4,200/mo", intent: "High Consideration" },
        { keyword: "Top boutique management consulting agency", rank: "#2", volume: "2,600/mo", intent: "Direct Evaluation" },
        { keyword: "Enterprise financial restructuring advisory", rank: "#1", volume: "1,900/mo", intent: "Specialized Need" },
        { keyword: "Commercial transaction advisory services", rank: "#2", volume: "1,400/mo", intent: "Mandate Search" }
      ]
    },
    outcomes: [
      "The redesigned web platform boosted qualified consultation requests by 74% in 90 days.",
      "Mobile engagement surged by 68% as executive visitors seamlessly browsed client success stories.",
      "The firm cemented an unassailable digital brand presence matching its multimillion-dollar advisory reputation."
    ],
    tacticalImages: [
      { image: "/images/case-studies/Turning a High-Traffic Website Into a Conversion-.webp", label: "Conversion-First Wireframe" },
      { image: "/images/services/web dev.jpg", label: "UX/UI Architecture Transformation" },
      { image: "/images/blog/website-performance.webp", label: "Frictionless Inquiry Form" },
      { image: "/images/services/web-dev-isometric.jpg", label: "Zero-Shift Responsive Layouts" },
      { image: "/images/case-studies/banner5.webp", label: "High-Impact Hero CTA" },
      { image: "/images/blog/Why Next.js is the Ultimate Framework for Marketing Websites.webp", label: "Modern Enterprise Frontend" }
    ]
  }
};

/**
 * Universal fallback generator that inspects any case study
 * and provides realistic, cohesive Brandshark-style data
 */
export function getEnrichedCaseStudy(caseStudy) {
  if (!caseStudy) return null;

  const slug = caseStudy.slug;
  const specificMeta = slugMetadataMap[slug] || {};

  // Extract client name
  const clientName = specificMeta.clientName || 
    caseStudy.testimonial?.items?.[0]?.company || 
    caseStudy.hero?.industry + " Client" || 
    "Enterprise Partner";

  const clientHandle = specificMeta.clientHandle || 
    `@${clientName.toLowerCase().replace(/[^a-z0-9]/g, "")}`;

  const categoryHeadline = specificMeta.categoryHeadline || 
    caseStudy.clientOverview?.heading || 
    `A market leader, built for exceptional customer impact.`;

  const strategySubtitle = specificMeta.strategySubtitle || 
    caseStudy.hero?.subtitle || 
    "A synchronized multi-layer strategy combining search visibility, digital media, and conversion-first architecture.";

  // Extract or generate top stats (4 stats)
  const rawStats = caseStudy.statistics?.stats || [];
  const topHeroStats = [
    {
      number: rawStats[0] ? `${rawStats[0].prefix || ""}${rawStats[0].value}${rawStats[0].suffix || ""}` : "+180%",
      label: rawStats[0]?.label || "Primary Growth KPI"
    },
    {
      number: rawStats[1] ? `${rawStats[1].prefix || ""}${rawStats[1].value}${rawStats[1].suffix || ""}` : "#1 Rank",
      label: rawStats[1]?.label || "Core Visibility Target"
    },
    {
      number: rawStats[2] ? `${rawStats[2].prefix || ""}${rawStats[2].value}${rawStats[2].suffix || ""}` : "+140%",
      label: rawStats[2]?.label || "Traffic / Audience Growth"
    },
    {
      number: caseStudy.hero?.duration || "6 Months",
      label: "Campaign Duration"
    }
  ];

  // Facet definition list
  const facetDetails = [
    { label: "CLIENT", value: clientName },
    { label: "INDUSTRY", value: caseStudy.hero?.industry || "Enterprise" },
    { label: "CHANNELS", value: caseStudy.hero?.servicesUsed?.join(" · ") || "Search · Digital Ads · Web" },
    { label: "TIMELINE", value: caseStudy.hero?.duration || "6 Months" },
    { label: "PRIMARY KPI", value: topHeroStats[0].number + " " + topHeroStats[0].label }
  ];

  // Three bottlenecks (Challenge section)
  const challengeItems = caseStudy.challenge?.items || [];
  const threeBottlenecks = specificMeta.threeBottlenecks || [
    {
      title: challengeItems[0]?.title || "Low Visibility in Competitive Search",
      description: challengeItems[0]?.description || "The brand was buried beneath dominant competitors, missing thousands of high-intent purchase queries."
    },
    {
      title: challengeItems[1]?.title || "Underperforming Acquisition Channels",
      description: challengeItems[1]?.description || "Previous digital investments produced clicks that failed to convert into qualified customer inquiries or revenue."
    },
    {
      title: challengeItems[2]?.title || "Friction-Filled Conversion Architecture",
      description: challengeItems[2]?.description || "Slow load times and confusing navigation caused high drop-offs right at the final consideration stage."
    }
  ];

  // Strategy process phases (01, 02, 03)
  const strategyPhases = specificMeta.strategyPhases || [
    {
      step: "01",
      title: "Audit, Foundations & Demand Mapping",
      phaseTag: "PHASE 1: AUDIT & FOUNDATIONS",
      bullets: [
        "— Comprehensive audit identifying critical technical, content, and bidding leaks",
        "— High-intent keyword mapping tailored to buyer decision-making journeys",
        "— Structural architecture setup ensuring 100% accurate conversion attribution"
      ]
    },
    {
      step: "02",
      title: "Execute Core Acquisition & Intent Capture",
      phaseTag: "PHASE 2: OPTIMIZATION & VELOCITY",
      bullets: [
        "— Deployed search-optimized landing pages and segmented ad campaigns",
        "— Hyper-focused messaging addressing real buyer doubts, fears, and needs",
        "— Cross-channel remarketing sequences to capture undecided high-value prospects"
      ]
    },
    {
      step: "03",
      title: "Scale Conversions & Lock In Sustainable ROI",
      phaseTag: "PHASE 3: SCALE & RETENTION",
      bullets: [
        "— Continuous A/B split testing of headlines, forms, and creative assets",
        "— Scaling budget strictly into proven, high-converting audience clusters",
        "— Review automation and post-conversion retention loops to maximize customer LTV"
      ]
    }
  ];

  // Vertical stat cards for Section 04
  const verticalStats = [
    {
      number: topHeroStats[0].number,
      text: `Surge in ${topHeroStats[0].label.toLowerCase()} over the campaign timeframe.`
    },
    {
      number: rawStats[1] ? `${rawStats[1].prefix || ""}${rawStats[1].value}${rawStats[1].suffix || ""}` : "+212%",
      text: `Increase in engagement and qualified intent actions across all touchpoints.`
    },
    {
      number: rawStats[2] ? `${rawStats[2].prefix || ""}${rawStats[2].value}${rawStats[2].suffix || ""}` : "< 1s",
      text: `Measurable acceleration in conversion rate and technical delivery speed.`
    },
    {
      number: rawStats[4] ? `${rawStats[4].prefix || ""}${rawStats[4].value}${rawStats[4].suffix || ""}` : "4.9★",
      text: `Verified satisfaction rating and reputation consensus among active clients.`
    }
  ];

  // Deliverables
  const deliverables = specificMeta.deliverables || [
    {
      title: `${caseStudy.hero?.servicesUsed?.[0] || "Search"} Growth Architecture`,
      category: "CORE STRATEGY",
      quote: "“Engineered from the ground up to capture commercial intent at scale.”",
      badge: "Top-performing campaign asset",
      image: caseStudy.clientOverview?.image || "/images/case-studies/Enterprise SEO Strategies Scaling Your Organic Growth.webp"
    },
    {
      title: "High-Converting Conversion Funnel",
      category: "CRO INFRASTRUCTURE",
      quote: "“Turning passive website traffic into confirmed high-value inquiries.”",
      badge: "Sub-second mobile experience",
      image: "/images/blog/website-performance.webp"
    },
    {
      title: "Multi-Channel Acquisition System",
      category: "PAID & ORGANIC",
      quote: "“Connecting social discovery directly with high-intent search demand.”",
      badge: "+180% sustained acquisition velocity",
      image: "/images/services/e-commerce.webp"
    },
    {
      title: "Reputation & Review Harvesting Loop",
      category: "AUTHORITY ENGINE",
      quote: "“Building an unassailable digital moat with verified client proof.”",
      badge: "Permanent competitive advantage",
      image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp"
    }
  ];

  // SERP rankings
  const serpData = specificMeta.serpData || {
    stats: [
      { value: "Top 3", label: "Rankings on Priority Terms" },
      { value: "+1,240%", label: "Organic Search Impressions" },
      { value: "1.9", label: "Average Position Across Core Set" },
      { value: "+160%", label: "Growth in Qualified Inquiries" }
    ],
    keywords: [
      { keyword: `Best ${caseStudy.hero?.industry || "business"} services near me`, rank: "#1", volume: "4,200/mo", intent: "Commercial Transaction" },
      { keyword: `Top rated ${caseStudy.hero?.industry || "expert"} agency [region]`, rank: "#1", volume: "2,800/mo", intent: "High Consideration" },
      { keyword: `${caseStudy.hero?.industry || "enterprise"} solutions consultation`, rank: "#2", volume: "1,900/mo", intent: "Direct Lead" },
      { keyword: `Fastest ${caseStudy.hero?.industry || "company"} specialist`, rank: "#3", volume: "1,400/mo", intent: "Urgent Need" },
      { keyword: `Affordable ${caseStudy.hero?.industry || "service"} pricing`, rank: "#2", volume: "950/mo", intent: "Purchase Ready" }
    ]
  };

  // Outcome cards
  const outcomes = specificMeta.outcomes || [
    `The brand now owns the definitive search real estate across its target market.`,
    `Multi-channel acquisition delivers sustainable, predictable pipeline every single month.`,
    `A future-proof digital infrastructure positions the company for years of scalable expansion.`
  ];

  // Tactical media showcase for Section 04
  const tacticalImages = specificMeta.tacticalImages || [
    { image: caseStudy.clientOverview?.image || caseStudy.coverImage || "/images/case-studies/Scaling Patient Acquisition for Regional Healthcare Clinic.webp", label: "Tactical Core" },
    { image: "/images/blog/website-performance.webp", label: "Speed & UX" },
    { image: "/images/blog/The Ultimate Guide to Google Business Profile Optimization.webp", label: "Search Authority" },
    { image: "/images/services/e-commerce.webp", label: "Conversion Funnel" },
    { image: "/images/case-studies/Enterprise SEO Strategies Scaling Your Organic Growth.webp", label: "Organic Reach" },
    { image: "/images/about/our-vision.webp", label: "Scale Architecture" }
  ];

  return {
    ...caseStudy,
    clientName,
    clientHandle,
    followerCount: specificMeta.followerCount || "18.4k Customers · Market Leader",
    categoryHeadline,
    strategySubtitle,
    topHeroStats,
    facetDetails,
    threeBottlenecks,
    strategyPhases,
    tacticalNarrative: specificMeta.tacticalNarrative || "We replaced fragmented, ad-hoc tactics with a unified acquisition architecture. Every touchpoint was engineered to remove friction, build trust, and drive measurable revenue growth.",
    verticalStats,
    deliverables,
    serpData,
    outcomes,
    tacticalImages
  };
}
