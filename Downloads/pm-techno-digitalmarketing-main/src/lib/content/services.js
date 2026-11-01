import { servicesData } from "@/data/digital/services";

export async function getServices() {
  return servicesData || [];
}

export async function getServiceBySlug(slug) {
  try {
    // Dynamically import the service data based on slug
    if (slug === 'seo') {
      const { seoServiceData } = await import('@/data/digital/services/seo');
      return seoServiceData;
    }
    
    if (slug === 'google-ads') {
      const { googleAdsServiceData } = await import('@/data/digital/services/googleAds');
      return googleAdsServiceData;
    }
    
    if (slug === 'meta-ads') {
      const { metaAdsServiceData } = await import('@/data/digital/services/metaAds');
      return metaAdsServiceData;
    }
    
    if (slug === 'google-business-profile') {
      const { googleBusinessProfileData } = await import('@/data/digital/services/googleBusinessProfile');
      return googleBusinessProfileData;
    }
    
    if (slug === 'web-development') {
      const { webDevelopmentData } = await import('@/data/digital/services/webDevelopment');
      return webDevelopmentData;
    }
    // As other services are added (e.g., google-ads.js), they can be added here
    // Or we could use a generic dynamic import: const data = await import(`@/data/digital/services/${slug}`);
    
    // Fallback to the generic services.js data if specific file doesn't exist yet
    if (servicesData) {
      return servicesData.find((service) => service.slug === slug) || null;
    }
    
    return null;
  } catch (error) {
    console.error(`Failed to load service data for slug: ${slug}`, error);
    return null;
  }
}

export async function getRelatedServices(currentSlug, limit = 3) {
  if (!servicesData) return [];
  // For now, just return other services from the main list
  return servicesData.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
