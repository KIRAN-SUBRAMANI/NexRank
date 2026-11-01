import React from "react";

// Inline CSS Keyframes for Lottie-like continuous animations
const LottieStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes lottieLevitate {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    @keyframes lottieSheen {
      0% { transform: translateX(-150%) rotate(25deg); opacity: 0; }
      20% { opacity: 0.7; }
      40% { transform: translateX(160%) rotate(25deg); opacity: 0; }
      100% { transform: translateX(160%) rotate(25deg); opacity: 0; }
    }
    @keyframes lottiePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.08); }
    }
    @keyframes lottieBounceUp {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    @keyframes lottieBarGrow {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(1.18); }
    }
    @keyframes lottieRippleWave {
      0% { transform: scale(0.65); opacity: 0.85; }
      70% { opacity: 0.35; }
      100% { transform: scale(1.35); opacity: 0; }
    }
    @keyframes lottieSparkle {
      0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.6; }
      50% { transform: scale(1.25) rotate(90deg); opacity: 1; }
    }
    @keyframes lottieCoinWobble {
      0%, 100% { transform: rotate(-2.5deg) scale(1); }
      50% { transform: rotate(2.5deg) scale(1.03); }
    }
    @keyframes lottieSliceExplode {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(3px, -3.5px); }
    }
    @keyframes lottieFloatAlt {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-4px) rotate(1.5deg); }
    }
  `}} />
);

// 1. Animated Lottie-Style Mobile Phone (Better User Experience / Mobile UX)
export function RealMobilePhoneIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Chassis Gradient */}
          <linearGradient id="phoneBodyGrad" x1="14" y1="4" x2="40" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E293B" />
            <stop offset="1" stopColor="#0B132B" />
          </linearGradient>
          {/* Screen OLED Wallpaper */}
          <linearGradient id="phoneScreenGrad" x1="16.5" y1="8" x2="37.5" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="0.45" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
          {/* Screen Gloss Clip */}
          <clipPath id="phoneScreenClip">
            <rect x="16.5" y="8" width="21" height="36" rx="4.5" />
          </clipPath>
          {/* Ambient Outer Glow */}
          <filter id="phoneShadow" x="8" y="2" width="38" height="50" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Floating Mobile Group */}
        <g style={{ animation: "lottieLevitate 3.5s ease-in-out infinite" }}>
          {/* Hardware Buttons */}
          <rect x="12.5" y="15" width="1.5" height="5.5" rx="0.75" fill="#475569" />
          <rect x="12.5" y="22.5" width="1.5" height="5.5" rx="0.75" fill="#475569" />
          <rect x="40" y="17.5" width="1.5" height="7.5" rx="0.75" fill="#475569" />

          {/* Main Chassis */}
          <rect x="14" y="5" width="26" height="42" rx="7" fill="url(#phoneBodyGrad)" stroke="#334155" strokeWidth="1.2" filter="url(#phoneShadow)" />

          {/* Screen Bezel */}
          <rect x="16" y="7.5" width="22" height="37" rx="5" fill="#020617" />

          {/* OLED Display Screen */}
          <rect x="16.5" y="8" width="21" height="36" rx="4.5" fill="url(#phoneScreenGrad)" />

          {/* Screen App UI */}
          <g clipPath="url(#phoneScreenClip)">
            {/* Top Search Pill */}
            <rect x="18.5" y="13" width="17" height="3.5" rx="1.75" fill="#FFFFFF" fillOpacity="0.9" />
            <circle cx="20.5" cy="14.75" r="1" fill="#3B82F6" />

            {/* Pulsing App Icons */}
            <rect x="18.5" y="19" width="4" height="4" rx="1.2" fill="#38BDF8" style={{ animation: "lottiePulse 2.4s ease-in-out 0.1s infinite" }} />
            <rect x="25" y="19" width="4" height="4" rx="1.2" fill="#34D399" style={{ animation: "lottiePulse 2.4s ease-in-out 0.4s infinite" }} />
            <rect x="31.5" y="19" width="4" height="4" rx="1.2" fill="#FBBF24" style={{ animation: "lottiePulse 2.4s ease-in-out 0.7s infinite" }} />

            <rect x="18.5" y="25" width="4" height="4" rx="1.2" fill="#F43F5E" style={{ animation: "lottiePulse 2.4s ease-in-out 0.2s infinite" }} />
            <rect x="25" y="25" width="4" height="4" rx="1.2" fill="#A855F7" style={{ animation: "lottiePulse 2.4s ease-in-out 0.5s infinite" }} />
            <rect x="31.5" y="25" width="4" height="4" rx="1.2" fill="#60A5FA" style={{ animation: "lottiePulse 2.4s ease-in-out 0.8s infinite" }} />

            {/* Bottom App Dock */}
            <rect x="18" y="36.5" width="18" height="4.5" rx="2.25" fill="#FFFFFF" fillOpacity="0.3" />
            <circle cx="21.5" cy="38.75" r="1.2" fill="#FFFFFF" />
            <circle cx="27" cy="38.75" r="1.2" fill="#FFFFFF" />
            <circle cx="32.5" cy="38.75" r="1.2" fill="#FFFFFF" />

            {/* Diagonal Sweeping Glass Sheen Animation */}
            <rect
              x="10"
              y="-10"
              width="8"
              height="70"
              fill="#FFFFFF"
              fillOpacity="0.4"
              style={{
                transformOrigin: "center",
                animation: "lottieSheen 3.6s ease-in-out infinite"
              }}
            />
          </g>

          {/* Dynamic Island / Front Camera */}
          <rect x="22.5" y="9.5" width="9" height="2.4" rx="1.2" fill="#020617" />
          <circle cx="29" cy="10.7" r="0.6" fill="#38BDF8" style={{ animation: "lottiePulse 1.8s ease-in-out infinite" }} />

          {/* Home Indicator */}
          <rect x="23" y="41.5" width="8" height="1.2" rx="0.6" fill="#FFFFFF" fillOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

// 2. Animated Lottie-Style Google Rankings (Search Growth & Trendline)
export function RealGoogleRankingIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rankBgGrad" x1="6" y1="8" x2="48" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="growthLineGrad" x1="12" y1="36" x2="42" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="rankDropShadow" x="4" y="4" width="46" height="46" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Floating Rank Dashboard */}
        <g style={{ animation: "lottieLevitate 4s ease-in-out 0.3s infinite" }}>
          {/* Card Base */}
          <rect x="7" y="10" width="40" height="34" rx="7" fill="url(#rankBgGrad)" stroke="#CBD5E1" strokeWidth="1.2" filter="url(#rankDropShadow)" />

          {/* Google 4-Color Header Pill */}
          <g transform="translate(11, 14)">
            <rect x="0" y="0" width="6" height="2.8" rx="1.4" fill="#4285F4" style={{ animation: "lottiePulse 2s ease-in-out 0.1s infinite" }} />
            <rect x="7.5" y="0" width="5.5" height="2.8" rx="1.4" fill="#EA4335" style={{ animation: "lottiePulse 2s ease-in-out 0.4s infinite" }} />
            <rect x="14.5" y="0" width="5.5" height="2.8" rx="1.4" fill="#FBBC05" style={{ animation: "lottiePulse 2s ease-in-out 0.7s infinite" }} />
            <rect x="21.5" y="0" width="6" height="2.8" rx="1.4" fill="#34A853" style={{ animation: "lottiePulse 2s ease-in-out 1.0s infinite" }} />
          </g>

          {/* Grid lines */}
          <line x1="12" y1="24" x2="42" y2="24" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="12" y1="31" x2="42" y2="31" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="12" y1="38" x2="42" y2="38" stroke="#CBD5E1" strokeWidth="1" />

          {/* Animated Ascending Bars */}
          <rect x="14" y="32" width="4" height="6" rx="1.2" fill="#93C5FD" fillOpacity="0.85" />
          <rect x="21.5" y="27" width="4" height="11" rx="1.2" fill="#60A5FA" fillOpacity="0.85" />
          <rect x="29" y="21" width="4" height="17" rx="1.2" fill="#3B82F6" fillOpacity="0.9" />
          <rect
            x="36.5"
            y="15"
            width="4"
            height="23"
            rx="1.2"
            fill="#2563EB"
            style={{ transformOrigin: "38.5px 38px", animation: "lottieBarGrow 2.8s ease-in-out infinite" }}
          />

          {/* Animated Surging Emerald Trendline & Arrow */}
          <g style={{ animation: "lottieBounceUp 2s ease-in-out infinite" }}>
            <path
              d="M13 36 L21 28 L29 31 L41 14"
              stroke="url(#growthLineGrad)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrowhead */}
            <path
              d="M34 14 H41 V21"
              stroke="#06B6D4"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Floating #1 Gold Badge */}
          <g transform="translate(32, 5)" style={{ animation: "lottiePulse 2.2s ease-in-out infinite" }}>
            <rect x="0" y="0" width="14" height="10" rx="3.5" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />
            <text x="7" y="7.5" textAnchor="middle" fontSize="7" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">#1</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

// 3. Animated Lottie-Style More Organic Traffic (Audience & Inbound Waves)
export function RealUsersTrafficIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="userCenterGrad" x1="18" y1="18" x2="36" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="userLeftGrad" x1="8" y1="22" x2="23" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="userRightGrad" x1="31" y1="22" x2="46" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" />
            <stop offset="1" stopColor="#C2410C" />
          </linearGradient>
        </defs>

        {/* Animated Expanding Ripple Waves */}
        <circle
          cx="27"
          cy="14"
          r="10"
          stroke="#38BDF8"
          strokeWidth="2"
          fill="none"
          style={{ transformOrigin: "27px 14px", animation: "lottieRippleWave 2.2s cubic-bezier(0.1, 0.7, 0.1, 1) infinite" }}
        />
        <circle
          cx="27"
          cy="14"
          r="14"
          stroke="#34D399"
          strokeWidth="1.8"
          fill="none"
          style={{ transformOrigin: "27px 14px", animation: "lottieRippleWave 2.2s cubic-bezier(0.1, 0.7, 0.1, 1) 0.8s infinite" }}
        />

        {/* Left User (Emerald) */}
        <g style={{ animation: "lottieFloatAlt 3.8s ease-in-out 0.2s infinite" }}>
          <circle cx="17" cy="24" r="4.5" fill="#FCD34D" stroke="#D97706" strokeWidth="0.6" />
          <path d="M10 41C10 35 13.5 31 19 31C21.2 31 23.2 31.7 24.6 32.8C23 34.8 21.8 37.5 21.8 41H10Z" fill="url(#userLeftGrad)" />
        </g>

        {/* Right User (Sunset Coral) */}
        <g style={{ animation: "lottieFloatAlt 3.8s ease-in-out 0.6s infinite" }}>
          <circle cx="37" cy="24" r="4.5" fill="#FDE68A" stroke="#D97706" strokeWidth="0.6" />
          <path d="M44 41C44 35 40.5 31 35 31C32.8 31 30.8 31.7 29.4 32.8C31 34.8 32.2 37.5 32.2 41H44Z" fill="url(#userRightGrad)" />
        </g>

        {/* Center Main User (Royal Blue) */}
        <g style={{ animation: "lottieLevitate 3.2s ease-in-out infinite" }}>
          <circle cx="27" cy="20" r="6.2" fill="#FBBF24" stroke="#B45309" strokeWidth="0.9" />
          <path d="M21.5 19C21.5 16 23.5 14.5 27 14.5C30.5 14.5 32.5 16 32.5 19C32.5 17.5 31 16 27 16C23 16 21.5 17.5 21.5 19Z" fill="#1E293B" />
          <path d="M16 43C16 35.5 21 30 27 30C33 30 38 35.5 38 43H16Z" fill="url(#userCenterGrad)" stroke="#1E40AF" strokeWidth="0.6" />
          <path d="M25 30L27 34L29 30" fill="#FFFFFF" />
        </g>

        {/* Pulsing Green Plus Traffic Badge */}
        <g transform="translate(39, 13)" style={{ animation: "lottiePulse 1.8s ease-in-out infinite" }}>
          <circle cx="0" cy="0" r="5.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.6" />
          <path d="M0 -3V3M-3 0H3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

// 4. Animated Lottie-Style Qualified Leads (Official Verified Rosette Seal)
export function RealQualifiedLeadsIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sealBodyGrad" x1="10" y1="10" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="0.5" stopColor="#059669" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="sealGoldBorder" x1="14" y1="14" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="0.5" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>
          <filter id="sealDropShadow" x="4" y="4" width="46" height="46" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#047857" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Breathing Verified Seal Group */}
        <g style={{ transformOrigin: "27px 27px", animation: "lottiePulse 3s ease-in-out infinite" }}>
          {/* 12-Point Scalloped Rosette Seal */}
          <path
            d="M27 5L30.8 9.2L36.6 8.5L38.6 13.8L44.1 15.8L43.8 21.6L48.3 25.3L45.6 30.5L47.9 35.8L43.3 39.4L42.7 45.2L37.2 46.1L34.9 51.3L29.3 50.3L27 54L24.7 50.3L19.1 51.3L16.8 46.1L11.3 45.2L10.7 39.4L6.1 35.8L8.4 30.5L5.7 25.3L10.2 21.6L9.9 15.8L15.4 13.8L17.4 8.5L23.2 9.2L27 5Z"
            fill="url(#sealBodyGrad)"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            filter="url(#sealDropShadow)"
          />

          {/* Inner Gold Embossed Ring */}
          <circle cx="27" cy="27" r="16.5" stroke="url(#sealGoldBorder)" strokeWidth="1.6" strokeDasharray="1.8 1.8" />
          <circle cx="27" cy="27" r="13.5" fill="#047857" fillOpacity="0.35" />

          {/* Bold 3D White Checkmark with Shadow */}
          <path
            d="M19 27.5L25 33.5L35 21"
            stroke="#064E3B"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 27L25 33L35 20.5"
            stroke="#FFFFFF"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Animated Twinkling Specular Star */}
        <g style={{ transformOrigin: "38px 12px", animation: "lottieSparkle 2.6s ease-in-out infinite" }}>
          <path d="M38 8L39.2 11.2L42.5 12.5L39.2 13.8L38 17L36.8 13.8L33.5 12.5L36.8 11.2L38 8Z" fill="#FEF08A" />
        </g>
      </svg>
    </div>
  );
}

// 5. Animated Lottie-Style Higher ROI (3D Gold Coin & Profit Surge)
export function RealRoiDollarIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="coinFaceGold" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FEF9C3" />
            <stop offset="35%" stopColor="#FBBF24" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </radialGradient>
          <linearGradient id="coinOuterRim" x1="10" y1="10" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE68A" />
            <stop offset="0.5" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#78350F" />
          </linearGradient>
          <filter id="coinDropShadow" x="6" y="8" width="42" height="42" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#78350F" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 3D Tilting Gold Coin Group */}
        <g style={{ transformOrigin: "26px 28px", animation: "lottieCoinWobble 4s ease-in-out infinite" }}>
          {/* Main Gold Coin Body */}
          <circle cx="26" cy="28" r="18" fill="url(#coinFaceGold)" stroke="url(#coinOuterRim)" strokeWidth="2.2" filter="url(#coinDropShadow)" />

          {/* Inner Bevel Rings */}
          <circle cx="26" cy="28" r="14.5" stroke="#FEF08A" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />
          <circle cx="26" cy="28" r="13.2" stroke="#B45309" strokeWidth="0.8" strokeOpacity="0.65" fill="none" />

          {/* Embossed Bold Dollar Sign */}
          <text
            x="26.5"
            y="36"
            textAnchor="middle"
            fontSize="23"
            fontWeight="900"
            fontFamily="sans-serif"
            fill="#78350F"
            opacity="0.65"
          >
            $
          </text>
          <text
            x="26"
            y="35"
            textAnchor="middle"
            fontSize="23"
            fontWeight="900"
            fontFamily="sans-serif"
            fill="#FFFFFF"
          >
            $
          </text>
        </g>

        {/* Animated Surging Green Profit Indicator */}
        <g transform="translate(39, 14)" style={{ transformOrigin: "0 0", animation: "lottieBounceUp 1.8s ease-in-out infinite" }}>
          <circle cx="0" cy="0" r="9" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
          <path d="M-3 3L3 -3M3 -3H-1.5M3 -3V1.5" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Twinkling Coin Sparkle */}
        <g style={{ transformOrigin: "14px 18px", animation: "lottieSparkle 3s ease-in-out infinite" }}>
          <path d="M14 13L15.5 16.5L19 18L15.5 19.5L14 23L12.5 19.5L9 18L12.5 16.5L14 13Z" fill="#FFFFFF" fillOpacity="0.95" />
        </g>
      </svg>
    </div>
  );
}

// 6. Animated Lottie-Style Long-Term Growth (3D Multi-Color Analytics Donut Chart)
export function RealAnalyticsPieIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pieEmeraldGrad" x1="27" y1="7" x2="47" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="pieBlueGrad" x1="27" y1="27" x2="47" y2="47" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="pieAmberGrad" x1="7" y1="27" x2="27" y2="47" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="piePurpleGrad" x1="7" y1="7" x2="27" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
          <filter id="pieDropShadow" x="4" y="6" width="46" height="46" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Floating Donut Chart Group */}
        <g style={{ animation: "lottieLevitate 4s ease-in-out infinite" }}>
          <g filter="url(#pieDropShadow)">
            {/* Top-Right Emerald Slice (Exploding Segment) */}
            <path
              d="M29 9C38.5 9.5 45 16 46 25.5H29V9Z"
              fill="url(#pieEmeraldGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              style={{ animation: "lottieSliceExplode 2.8s ease-in-out infinite" }}
            />

            {/* Bottom-Right Blue Slice */}
            <path
              d="M27 28H45C44.5 37.5 37 44.5 27 45V28Z"
              fill="url(#pieBlueGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.8"
            />

            {/* Bottom-Left Amber Slice */}
            <path
              d="M26 28V45C16.5 44.5 9.5 37.5 9 28H26Z"
              fill="url(#pieAmberGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.8"
            />

            {/* Top-Left Violet Slice */}
            <path
              d="M26 26H9C9.5 16.5 16.5 9.5 26 9V26Z"
              fill="url(#piePurpleGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.8"
            />
          </g>

          {/* Central Donut Core */}
          <circle cx="27" cy="27" r="7.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          {/* Animated Growth Arrow in core */}
          <g style={{ animation: "lottieBounceUp 2s ease-in-out infinite" }}>
            <path d="M27 23V31M27 23L24 26M27 23L30 26" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Floating Sparkle */}
          <circle cx="44" cy="10" r="3" fill="#34D399" style={{ animation: "lottiePulse 2s ease-in-out infinite" }} />
        </g>
      </svg>
    </div>
  );
}

// 7. Desktop Monitor
export function RealDesktopIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "lottieLevitate 3.6s ease-in-out infinite" }}>
        <rect x="7" y="9" width="40" height="27" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1.2" />
        <rect x="9" y="11" width="36" height="21" rx="2" fill="#1E293B" />
        <rect x="9" y="11" width="36" height="5" fill="#3B82F6" />
        <circle cx="12.5" cy="13.5" r="1" fill="#EF4444" />
        <circle cx="15.5" cy="13.5" r="1" fill="#FBBF24" />
        <circle cx="18.5" cy="13.5" r="1" fill="#10B981" />
        <rect x="12" y="19" width="16" height="4.5" rx="1.2" fill="#F97316" />
        <rect x="12" y="25" width="9" height="2.5" rx="0.6" fill="#94A3B8" />
        <rect x="31" y="19" width="12" height="10" rx="1.2" fill="#10B981" fillOpacity="0.85" />
        <path d="M23.5 36H30.5L32 43H22L23.5 36Z" fill="#64748B" />
        <rect x="18" y="43" width="18" height="2.5" rx="1.25" fill="#475569" />
      </svg>
    </div>
  );
}

// 8. Magnifying Glass
export function RealMagnifyingGlassIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "lottieFloatAlt 3.8s ease-in-out infinite" }}>
        <circle cx="23" cy="23" r="15" fill="#60A5FA" fillOpacity="0.3" stroke="#2563EB" strokeWidth="3.5" />
        <circle cx="23" cy="23" r="10" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="2.5 2.5" />
        <path d="M33 33L46 46" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
        <path d="M34 34L45 45" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 16C18.5 13.5 23 13.5 26.5 14.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 9. Bolt
export function RealBoltIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "lottieBounceUp 1.8s ease-in-out infinite" }}>
        <defs>
          <linearGradient id="boltGrad" x1="16" y1="4" x2="38" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.5" stopColor="#EAB308" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <path
          d="M29 4L14 28H27L23 50L40 24H27L29 4Z"
          fill="url(#boltGrad)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// 10. Shield Check
export function RealShieldCheckIcon({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none flex items-center justify-center`}>
      <LottieStyles />
      <svg className="w-full h-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "lottiePulse 3s ease-in-out infinite" }}>
        <path
          d="M27 6L43 12V25C43 35.5 36 44.5 27 48C18 44.5 11 35.5 11 25V12L27 6Z"
          fill="#1E40AF"
          stroke="#60A5FA"
          strokeWidth="1.6"
        />
        <path
          d="M27 9.5L40 14V25C40 33.5 34 41.5 27 44.5C20 41.5 14 33.5 14 25V14L27 9.5Z"
          fill="#10B981"
          fillOpacity="0.3"
        />
        <path d="M20 26L25 31L34 21" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Master Icon Resolver
export function getRealisticBenefitIcon(iconName, title = "") {
  const t = (title || "").toLowerCase();

  switch (iconName) {
    case "DevicePhoneMobileIcon":
      return RealMobilePhoneIcon;
    case "ArrowTrendingUpIcon":
      return RealGoogleRankingIcon;
    case "UsersIcon":
      return RealUsersTrafficIcon;
    case "CheckBadgeIcon":
      return RealQualifiedLeadsIcon;
    case "CurrencyDollarIcon":
      return RealRoiDollarIcon;
    case "ChartPieIcon":
      return RealAnalyticsPieIcon;
    case "ComputerDesktopIcon":
      return RealDesktopIcon;
    case "MagnifyingGlassIcon":
      return RealMagnifyingGlassIcon;
    case "BoltIcon":
      return RealBoltIcon;
    case "ShieldCheckIcon":
      return RealShieldCheckIcon;
  }

  // Title-based fallback detection
  if (t.includes("mobile") || t.includes("phone") || t.includes("responsive") || t.includes("experience")) {
    return RealMobilePhoneIcon;
  }
  if (t.includes("ranking") || t.includes("google") || t.includes("seo") || t.includes("search")) {
    return RealGoogleRankingIcon;
  }
  if (t.includes("traffic") || t.includes("user") || t.includes("visitor") || t.includes("audience")) {
    return RealUsersTrafficIcon;
  }
  if (t.includes("lead") || t.includes("qualified") || t.includes("trust") || t.includes("verified")) {
    return RealQualifiedLeadsIcon;
  }
  if (t.includes("roi") || t.includes("revenue") || t.includes("dollar") || t.includes("cost") || t.includes("profit")) {
    return RealRoiDollarIcon;
  }
  if (t.includes("growth") || t.includes("analytics") || t.includes("chart") || t.includes("long-term")) {
    return RealAnalyticsPieIcon;
  }

  return RealGoogleRankingIcon;
}
