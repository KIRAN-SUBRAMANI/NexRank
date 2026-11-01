/**
 * lib/content/careers.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Content accessor layer for careers data.
 *
 * Architecture contract:
 *   TODAY  → reads from src/data/careers.js (static)
 *   FUTURE → replace the import with a fetch() call to your ATS/HRMS/CMS API.
 *            All components remain unchanged.
 *
 * Usage:
 *   import { getCareersData, getOpenPositions, ... } from "@/lib/content/careers";
 */

import {
  careersSEO,
  careersBreadcrumb,
  careersHero,
  careersWhyJoin,
  careersCulture,
  careersBenefits,
  careersHiringProcess,
  careersDepartments,
  careersLocations,
  careersEmploymentTypes,
  careersExperienceLevels,
  careersPositions,
  careersFormConfig,
  careersFAQs,
  careersCTA,
} from "@/data/digital/careers";

// ─── FULL DATA BUNDLE ─────────────────────────────────────────────────────────
export async function getCareersPageData() {
  // Future: return await fetch(`${process.env.CMS_API}/careers`).then(r => r.json());
  return {
    seo: careersSEO,
    breadcrumb: careersBreadcrumb,
    hero: careersHero,
    whyJoin: careersWhyJoin,
    culture: careersCulture,
    benefits: careersBenefits,
    hiringProcess: careersHiringProcess,
    departments: careersDepartments,
    locations: careersLocations,
    employmentTypes: careersEmploymentTypes,
    experienceLevels: careersExperienceLevels,
    positions: careersPositions,
    formConfig: careersFormConfig,
    faqs: careersFAQs,
    cta: careersCTA,
  };
}

// ─── INDIVIDUAL ACCESSORS ─────────────────────────────────────────────────────
export async function getCareersSEO() {
  return careersSEO || null;
}

export async function getCareersHero() {
  return careersHero || null;
}

export async function getOpenPositions({ status = "active" } = {}) {
  // Future: return await atsClient.getPositions({ status });
  return careersPositions
    .filter((p) => p.status === status)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getFeaturedPositions() {
  return careersPositions
    .filter((p) => p.featured && p.status === "active")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getPositionBySlug(slug) {
  // Future: return await atsClient.getPosition({ slug });
  return careersPositions.find((p) => p.slug === slug) || null;
}

export async function getCareersFilterOptions() {
  return {
    departments: careersDepartments,
    locations: careersLocations,
    employmentTypes: careersEmploymentTypes,
    experienceLevels: careersExperienceLevels,
  };
}

export async function getCareersFormConfig() {
  const positions = await getOpenPositions();
  // Inject active position options into the form config
  const positionOptions = [
    { value: "", label: "Select a position" },
    ...positions.map((p) => ({ value: p.id, label: p.title })),
    { value: "other", label: "Other / General Application" },
  ];

  return {
    ...careersFormConfig,
    fields: {
      ...careersFormConfig.fields,
      positionApplyingFor: {
        ...careersFormConfig.fields.positionApplyingFor,
        options: positionOptions,
      },
    },
  };
}

export async function getCareersFAQs({ featuredOnly = false } = {}) {
  const faqs = careersFAQs.faqs || [];
  const filtered = featuredOnly ? faqs.filter((f) => f.featured) : faqs;
  return {
    ...careersFAQs,
    faqs: filtered.sort((a, b) => a.displayOrder - b.displayOrder),
  };
}

export async function getCareersCTA() {
  return careersCTA || null;
}
