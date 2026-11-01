import Link from "next/link";
import Image from "next/image";
import FooterWaves from "./FooterWaves";
import FooterCTAWrapper from "./FooterCTAWrapper";
import BackToTop from "./BackToTop";
import { getFooterData } from "@/lib/content/footer";
import { getSiteSettings } from "@/lib/content/settings";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default async function Footer() {
  const footerData = await getFooterData();
  const siteSettings = await getSiteSettings();

  if (!footerData || !siteSettings) return null;

  const { logo } = siteSettings;

  const clientCountries = [
    "India", "US", "Canada", "Germany", "UK", "France",
    "Italy", "Spain", "Ukraine", "Belgium", "Qatar",
    "Saudi Arabia", "UAE", "Dubai", "Oman", "Singapore",
    "Nigeria", "South Africa", "Australia"
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" }
  ];

  const serviceLinks = [
    { label: "Search Engine Optimization", href: "/services/seo" },
    { label: "Google Ads Management", href: "/services/google-ads" },
    { label: "Meta Ads (FB & IG)", href: "/services/meta-ads" },
    { label: "Google Business Profile", href: "/services/google-business-profile" },
    { label: "Web Development", href: "/services/web-development" }
  ];

  return (
    <footer className="w-full relative bg-white">
      
      {/* STAGE 1: Pre-Footer CTA Section (Full-width, matching site colors) */}
      <FooterCTAWrapper>
        <div className="footer-ready-to-grow w-full bg-white relative z-20">
          <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <span className="text-[#D4AF37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
                READY TO GROW?
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-[#2D3436] leading-tight max-w-xl">
                Let&apos;s turn your digital presence into measurable growth.
              </h2>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white rounded-full bg-[#D4AF37] hover:bg-[#C59B27] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1 shrink-0"
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </FooterCTAWrapper>

      {/* STAGE 2: Seamless Multi-Layer Gold Wave Transition */}
      <FooterWaves />

      {/* STAGE 3: Main Footer Area matching website brand theme (#2D3436 Charcoal Slate) */}
      <div 
        className="w-full pt-10 sm:pt-12 pb-10 relative z-10 text-white border-none overflow-hidden"
        style={{ backgroundColor: "#2D3436" }}
      >
        
        {/* Global Client Base Top Bar */}
        <div className="w-full border-b border-white/10 pb-6 mb-10">
          <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                Client Base :
              </span>
              {clientCountries.map((country, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-white/90 hover:text-white transition-all duration-200 cursor-default"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 mb-12">
            
            {/* Column 1: Brand & About Us (span 4) */}
            <div className="flex flex-col lg:col-span-4 pr-0 lg:pr-6">
              
              <div className="mb-4">
                <Link href="/" className="inline-block group">
                  <div className="relative h-10 w-[180px] rounded-xl overflow-hidden">
                    <Image
                      src={logo?.src || "/images/common/logo-badge.png"}
                      alt="NexRank Techno Group"
                      fill
                      sizes="180px"
                      className="object-contain object-left"
                    />
                  </div>
                </Link>
              </div>

              <h4 className="text-base font-bold text-[#D4AF37] uppercase tracking-wide mb-3">
                ABOUT US
              </h4>
              
              <p className="text-white/90 leading-relaxed mb-6 text-[15px] font-normal">
                NexRank Pvt Ltd as a professional digital marketing agency in Bangalore since 2018. We are into website, application, web portal development and Digital marketing services.
              </p>
              
              {/* Follow Us On */}
              <div>
                <h4 className="text-sm font-bold text-[#D4AF37] uppercase mb-4 tracking-wide">
                  FOLLOW US ON
                </h4>
                <div className="flex items-center gap-3">
                  {/* Facebook - Official Brand Color #1877F2 */}
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook" 
                    title="Facebook"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  
                  {/* X / Twitter - Official Brand Color #000000 */}
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="X (formerly Twitter)" 
                    title="X (Twitter)"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#000000] hover:bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram - Official Brand Sunset Gradient */}
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram" 
                    title="Instagram"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* LinkedIn - Official Brand Color #0A66C2 */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn" 
                    title="LinkedIn"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] hover:bg-[#095196] flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Column 2: Quick Links (span 2) */}
            <div className="flex flex-col lg:col-span-2">
              <h4 className="text-base font-bold text-[#D4AF37] mb-5 uppercase tracking-wide">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-[15px] font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services (span 3) */}
            <div className="flex flex-col lg:col-span-3">
              <h4 className="text-base font-bold text-[#D4AF37] mb-5 uppercase tracking-wide">
                SERVICES
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-[15px] font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get Touch With Us (span 3) */}
            <div className="flex flex-col lg:col-span-3">
              <h4 className="text-base font-bold text-[#D4AF37] mb-5 uppercase tracking-wide">
                GET TOUCH WITH US
              </h4>
              <ul className="space-y-4">
                
                <li className="flex items-start gap-3.5">
                  <div className="mt-1 shrink-0 text-[#D4AF37]">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] text-white/90 leading-relaxed font-normal">
                    <strong className="text-white font-semibold block text-xs tracking-wider uppercase mb-0.5">
                      NEXRANK PRIVATE LIMITED
                    </strong>
                    No. 31, 2nd Floor, 9h B Main,<br />
                    Chairman Layout, Banaswadi,<br />
                    Bangalore, Karnataka-560043
                  </span>
                </li>

                <li className="flex items-center gap-3.5">
                  <div className="shrink-0 text-[#D4AF37]">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <a 
                    href="mailto:info@nexrank.com" 
                    className="text-[15px] font-medium text-white/90 hover:text-[#D4AF37] transition-colors"
                  >
                    info@nexrank.com
                  </a>
                </li>

                <li className="flex items-center gap-3.5">
                  <div className="shrink-0 text-[#D4AF37]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <a 
                    href="tel:+917760245945" 
                    className="text-[15px] font-medium text-white/90 hover:text-[#D4AF37] transition-colors"
                  >
                    +91-77602 45945
                  </a>
                </li>

                <li className="flex items-center gap-3.5">
                  <div className="shrink-0 text-[#D4AF37]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <a 
                    href="tel:+917760245945" 
                    className="text-[15px] font-medium text-white/90 hover:text-[#D4AF37] transition-colors"
                  >
                    +91-77602 45945
                  </a>
                </li>

              </ul>
            </div>

          </div>

          {/* Bottom Bar: Legal Links & Copyright */}
          <div className="border-t border-white/15 pt-8 mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] font-medium text-white/90">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <Link href="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors">
                  Terms and Conditions
                </Link>
                <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/refund-policy" className="hover:text-[#D4AF37] transition-colors">
                  Refund Policy
                </Link>
                <Link href="/careers" className="hover:text-[#D4AF37] transition-colors">
                  Careers
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <p className="text-white/80">
                  &copy; 2026 All Rights Reserved
                </p>
                <BackToTop />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
