import Link from "next/link";
import Image from "next/image";
import FooterCTAWrapper from "./FooterCTAWrapper";
import BackToTop from "./BackToTop";
import { getFooterData } from "@/lib/content/footer";
import { getSiteSettings } from "@/lib/content/settings";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Globe2,
  Sparkles,
  TrendingUp,
  Search,
  MousePointer2,
  Code2,
  Zap,
  ExternalLink,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Search Engine Optimization", href: "/services/seo" },
  { label: "Google Ads Management", href: "/services/google-ads" },
  { label: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads" },
  {
    label: "Google Business Profile",
    href: "/services/google-business-profile",
  },
  { label: "Web Development", href: "/services/web-development" },
];

const countries = [
  "India",
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "UAE",
  "Singapore",
  "Australia",
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="nr-footer-link group flex w-fit items-center gap-2 py-1.5 text-[13px] text-[#A9B5AB] transition-colors duration-300 hover:text-[#D8FA65] sm:text-[14px]"
    >
      <span className="nr-link-arrow -ml-4 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100">
        <ArrowRight size={13} />
      </span>
      <span>{children}</span>
    </Link>
  );
}

function GrowthArtwork() {
  return (
    <div className="nr-artwork relative mx-auto w-full max-w-[540px]">
      {/* Ambient light */}
      <div className="nr-art-glow pointer-events-none absolute inset-[12%] rounded-full bg-[#D8FA65]/15 blur-[75px]" />
      <div className="pointer-events-none absolute -right-5 top-5 h-36 w-36 rounded-full bg-[#C8B7FF]/15 blur-[60px]" />

      {/* Main animated dashboard */}
      <div className="nr-dashboard relative mx-auto w-[90%] max-w-[470px] overflow-hidden rounded-[26px] border border-white/20 bg-[#25342B]/95 shadow-[0_35px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF9476]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD47D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D8FA65]" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
            NexRank / Growth Lab
          </span>
          <span className="h-2 w-2 rounded-full bg-[#D8FA65] shadow-[0_0_12px_#D8FA65]" />
        </div>

        <div className="px-6 pb-5 pt-6 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A4B9A9]">
                Digital momentum
              </p>
              <h3 className="mt-3 text-[32px] font-black leading-none tracking-[-0.06em] text-white sm:text-[43px]">
                Grow beyond<span className="text-[#D8FA65]">.</span>
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D8FA65]/10 text-[#D8FA65]">
              <TrendingUp size={23} />
            </div>
          </div>

          <svg
            viewBox="0 0 460 210"
            className="mt-5 w-full overflow-visible"
            role="img"
            aria-label="Illustrative upward growth chart"
          >
            <defs>
              <linearGradient id="nr-chart-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#D8FA65" stopOpacity=".25" />
                <stop offset="100%" stopColor="#D8FA65" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="nr-chart-stroke" x1="0" x2="1">
                <stop offset="0%" stopColor="#8BD5A4" />
                <stop offset="55%" stopColor="#D8FA65" />
                <stop offset="100%" stopColor="#F4FFAE" />
              </linearGradient>
            </defs>

            {[45, 95, 145, 195].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="460"
                y2={y}
                stroke="#FFFFFF"
                strokeOpacity=".11"
                strokeDasharray="5 8"
              />
            ))}

            <path
              d="M0 190 C35 190 46 160 75 165 S120 180 145 135 S200 155 230 112 S270 135 302 88 S350 100 380 52 S425 68 460 20 L460 210 L0 210 Z"
              fill="url(#nr-chart-fill)"
            />

            <path
              className="nr-chart-line"
              d="M0 190 C35 190 46 160 75 165 S120 180 145 135 S200 155 230 112 S270 135 302 88 S350 100 380 52 S425 68 460 20"
              fill="none"
              stroke="url(#nr-chart-stroke)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <circle
              className="nr-chart-point"
              cx="460"
              cy="20"
              r="7"
              fill="#D8FA65"
              stroke="#F3FFCB"
              strokeWidth="3"
            />
            <circle
              className="nr-chart-pulse"
              cx="460"
              cy="20"
              r="15"
              fill="none"
              stroke="#D8FA65"
              strokeWidth="2"
            />
          </svg>

          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-[11px] text-[#A9B9AC]">
              Strategy → Execution → Growth
            </span>
            <ArrowUpRight size={19} className="text-[#D8FA65]" />
          </div>
        </div>
      </div>

      {/* Floating service badges */}
      <div className="nr-float-one absolute -left-1 top-[8%] z-10 flex items-center gap-3 rounded-[17px] border border-white/60 bg-[#C8B7FF] px-4 py-3 text-[#342A48] shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:-left-7">
        <div className="rounded-xl bg-white/35 p-2.5">
          <Search size={20} />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-60">
            Visibility
          </p>
          <p className="text-[13px] font-black">Get discovered</p>
        </div>
      </div>

      <div className="nr-float-two absolute -bottom-3 -left-2 z-10 flex items-center gap-3 rounded-[17px] border border-white/50 bg-[#FF9476] px-4 py-3 text-[#492E28] shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:-left-8">
        <div className="rounded-xl bg-white/35 p-2.5">
          <MousePointer2 size={20} />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.15em] opacity-60">
            Campaigns
          </p>
          <p className="text-[13px] font-black">Make an impact</p>
        </div>
      </div>

      <div className="nr-float-three absolute -right-2 bottom-[13%] z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#D8FA65] text-[#19241B] shadow-[0_15px_40px_rgba(216,250,101,0.2)] sm:-right-6">
        <ArrowUpRight size={34} strokeWidth={1.7} />
      </div>
    </div>
  );
}

export default async function Footer() {
  const footerData = await getFooterData();
  const siteSettings = await getSiteSettings();

  if (!footerData || !siteSettings) return null;

  const logoSrc = siteSettings.logo?.src || "/images/common/logo-badge.png";

  return (
    <footer className="relative w-full overflow-hidden bg-[#151F19] text-white">
      <style>{`
        @keyframes nrFloatA {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes nrFloatB {
          0%,100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(13px) rotate(-2deg); }
        }
        @keyframes nrFloatC {
          0%,100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-13px) rotate(-5deg); }
        }
        @keyframes nrDashboard {
          0%,100% { transform: perspective(1000px) rotateY(-7deg) rotateX(3deg) translateY(0); }
          50% { transform: perspective(1000px) rotateY(-3deg) rotateX(1deg) translateY(-10px); }
        }
        @keyframes nrGlow {
          0%,100% { opacity: .4; transform: scale(.92); }
          50% { opacity: .85; transform: scale(1.1); }
        }
        @keyframes nrDraw {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes nrPulse {
          0%,100% { opacity: .25; transform: scale(.8); transform-origin: 460px 20px; }
          50% { opacity: 1; transform: scale(1.35); transform-origin: 460px 20px; }
        }
        @keyframes nrReveal {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes nrShine {
          from { transform: translateX(-180%) skewX(-20deg); }
          to { transform: translateX(340%) skewX(-20deg); }
        }
        .nr-float-one { animation: nrFloatA 5.5s ease-in-out infinite; }
        .nr-float-two { animation: nrFloatB 6s ease-in-out infinite; }
        .nr-float-three { animation: nrFloatC 4.8s ease-in-out infinite; }
        .nr-dashboard { animation: nrDashboard 8s ease-in-out infinite; }
        .nr-art-glow { animation: nrGlow 6s ease-in-out infinite; }
        .nr-chart-line {
          stroke-dasharray: 1000;
          animation: nrDraw 4s cubic-bezier(.22,1,.36,1) both;
        }
        .nr-chart-pulse { animation: nrPulse 2.5s ease-in-out infinite; }
        .nr-footer-heading { animation: nrReveal .9s both; }
        .nr-cta-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 35%;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);
          animation: nrShine 5s ease-in-out infinite;
          pointer-events: none;
        }
        .nr-footer-link:hover .nr-link-arrow { transform: translateX(2px); }
        @media (prefers-reduced-motion: reduce) {
          .nr-float-one,.nr-float-two,.nr-float-three,
          .nr-dashboard,.nr-art-glow,.nr-chart-line,
          .nr-chart-pulse,.nr-footer-heading,.nr-cta-shine::after {
            animation: none !important;
          }
          .nr-chart-line { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Animated CTA */}
      <FooterCTAWrapper>
        <section className="footer-ready-to-grow relative isolate overflow-hidden border-b border-white/10 bg-[#19241C]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#D8FA65_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="pointer-events-none absolute -left-40 top-[-120px] h-[470px] w-[470px] rounded-full bg-[#D8FA65]/[0.06] blur-[110px]" />
          <div className="pointer-events-none absolute -right-32 bottom-[-180px] h-[550px] w-[550px] rounded-full bg-[#C8B7FF]/[0.08] blur-[120px]" />

          <div className="relative mx-auto grid max-w-[1480px] items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-16 lg:py-28">
            <div className="relative z-20">
              <div className="nr-footer-heading mb-8 inline-flex items-center gap-2 rounded-full border border-[#D8FA65]/30 bg-[#D8FA65]/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D8FA65] shadow-[0_0_14px_rgba(216,250,101,.7)]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8FA65]">
                  Ready to grow?
                </span>
              </div>

              <h2 className="nr-footer-heading max-w-[780px] text-[clamp(3.4rem,5.4vw,6.8rem)] font-black leading-[1.02] tracking-[-0.075em]">
                Big ideas deserve
                <br />
                <span className="relative inline-block text-[#D8FA65]">
                  bigger impact.
                  <svg
                    className="absolute -bottom-4 left-0 w-full"
                    viewBox="0 0 530 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 16 C130 2 320 4 525 11"
                      stroke="#FF9476"
                      strokeWidth="7"
                      strokeLinecap="round"
                      opacity=".95"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-10 max-w-[620px] text-[16px] leading-[1.9] text-[#B7C3B9] sm:text-[18px]">
                From a standout website to smarter SEO and high-performing
                campaigns, let&apos;s create a digital presence that moves your
                business forward.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="nr-cta-shine group relative inline-flex min-h-[62px] items-center gap-10 overflow-hidden rounded-full bg-[#D8FA65] px-8 text-[14px] font-black text-[#172219] shadow-[0_14px_40px_rgba(216,250,101,.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(216,250,101,.25)]"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <ArrowUpRight
                    size={21}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <span className="text-[13px] text-[#A5B5A8]">
                  Let&apos;s build what&apos;s next.
                </span>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  ["SEO", Search],
                  ["Paid Ads", Zap],
                  ["Web Development", Code2],
                ].map(([name, Icon]) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold text-[#B9C7BB] transition-colors duration-300 hover:border-[#D8FA65]/40 hover:text-[#D8FA65]"
                  >
                    <Icon size={14} />
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 px-2 py-10 sm:px-7 lg:px-0">
              <GrowthArtwork />
            </div>
          </div>
        </section>
      </FooterCTAWrapper>

      {/* Main footer */}
      <div className="relative overflow-hidden bg-[#151F19]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(216,250,101,.045),transparent_50%)]" />

        <div className="relative mx-auto max-w-[1480px] px-6 pb-8 pt-16 sm:px-10 lg:px-16 lg:pt-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_1fr_1.1fr] lg:gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src={logoSrc}
                  alt="NexRank Techno Group"
                  width={245}
                  height={90}
                  className="h-auto max-h-[82px] w-auto max-w-[245px] object-contain"
                />
              </Link>

              <p className="mt-7 max-w-[350px] text-[14px] leading-[2] text-[#A9B5AB]">
                NexRank helps businesses build a stronger digital presence
                through creative strategy, performance marketing, and modern web
                development.
              </p>

              <div className="mt-7 flex items-center gap-3">
                {[
                  {
                    label: "Facebook",
                    href: "https://facebook.com",
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com",
                  },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#BCC8BE] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8FA65] hover:bg-[#D8FA65] hover:text-[#152119]"
                  >
                    <ExternalLink size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.13em] text-[#D8FA65]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8FA65]" />
                Explore
              </h3>
              <nav aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.13em] text-[#D8FA65]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8FA65]" />
                What we do
              </h3>
              <nav aria-label="Our services">
                {serviceLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.13em] text-[#D8FA65]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8FA65]" />
                Get in touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin size={19} className="mt-1 shrink-0 text-[#D8FA65]" />
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.08em] text-white">
                      NEXRANK PRIVATE LIMITED
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.9] text-[#A9B5AB]">
                      No. 31, 2nd Floor, 9th B Main,
                      <br />
                      Chairman Layout, Banaswadi,
                      <br />
                      Bangalore, Karnataka – 560043
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:info@nexrank.com"
                  className="group flex items-center gap-3 text-[13px] text-[#A9B5AB] transition-colors hover:text-[#D8FA65]"
                >
                  <Mail size={19} className="shrink-0 text-[#D8FA65]" />
                  info@nexrank.com
                </a>

                <a
                  href="tel:+917760245945"
                  className="group flex items-center gap-3 text-[13px] text-[#A9B5AB] transition-colors hover:text-[#D8FA65]"
                >
                  <Phone size={19} className="shrink-0 text-[#D8FA65]" />
                  +91 77602 45945
                </a>
              </div>
            </div>
          </div>

          {/* Global reach */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <div className="flex items-center gap-2 text-[12px] font-bold text-[#D8FA65]">
                <Globe2 size={18} />
                Global reach
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="text-[11px] text-[#8F9F92] transition-colors hover:text-white"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-9 flex flex-col gap-5 border-t border-white/10 pt-7 text-[11px] text-[#819184] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} NexRank Private Limited. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#D8FA65]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#D8FA65]"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund-policy"
                className="transition-colors hover:text-[#D8FA65]"
              >
                Refund Policy
              </Link>
            </div>

            <span className="flex items-center gap-1.5">
              Made for growth <Sparkles size={13} className="text-[#D8FA65]" />
            </span>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
