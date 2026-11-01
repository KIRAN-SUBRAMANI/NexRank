export async function getCaseStudies() {
  // Normally this would fetch from a database or CMS.
  // For now, we manually build the array.
  const { healthcareClinicData } = await import('@/data/digital/caseStudies/healthcareClinic');
  const { d2cBrandRoasData } = await import('@/data/digital/caseStudies/d2cBrandRoas');
  const { realEstateNextjsData } = await import('@/data/digital/caseStudies/realEstateNextjs');
  const { b2bSaasMetaAdsData } = await import('@/data/digital/caseStudies/b2bSaasMetaAds');
  const { restaurantOmnichannelGrowthData } = await import('@/data/digital/caseStudies/restaurantOmnichannelGrowth');
  const { seoEcommerceGrowthData } = await import('@/data/digital/caseStudies/seoEcommerceGrowth');
  const { googleAdsEducationData } = await import('@/data/digital/caseStudies/googleAdsEducation');
  const { metaAdsFitnessData } = await import('@/data/digital/caseStudies/metaAdsFitness');
  const { gbpDentalLocalData } = await import('@/data/digital/caseStudies/gbpDentalLocal');
  const { webDevConversionData } = await import('@/data/digital/caseStudies/webDevConversion');
  
  return [
    healthcareClinicData,
    d2cBrandRoasData,
    realEstateNextjsData,
    b2bSaasMetaAdsData,
    restaurantOmnichannelGrowthData,
    seoEcommerceGrowthData,
    googleAdsEducationData,
    metaAdsFitnessData,
    gbpDentalLocalData,
    webDevConversionData
  ];
}

export async function getCaseStudyBySlug(slug) {
  if (slug === 'scaling-patient-acquisition-regional-healthcare-clinic') {
    const { healthcareClinicData } = await import('@/data/digital/caseStudies/healthcareClinic');
    return healthcareClinicData;
  }
  
  if (slug === 'achieving-420-percent-roas-for-national-d2c-brand') {
    const { d2cBrandRoasData } = await import('@/data/digital/caseStudies/d2cBrandRoas');
    return d2cBrandRoasData;
  }
  
  if (slug === 'high-performance-nextjs-architecture-real-estate-firm') {
    const { realEstateNextjsData } = await import('@/data/digital/caseStudies/realEstateNextjs');
    return realEstateNextjsData;
  }
  
  if (slug === 'scaling-b2b-saas-demos-with-meta-ads') {
    const { b2bSaasMetaAdsData } = await import('@/data/digital/caseStudies/b2bSaasMetaAds');
    return b2bSaasMetaAdsData;
  }
  
  if (slug === 'omnichannel-growth-regional-restaurant-chain') {
    const { restaurantOmnichannelGrowthData } = await import('@/data/digital/caseStudies/restaurantOmnichannelGrowth');
    return restaurantOmnichannelGrowthData;
  }
  
  if (slug === 'organic-growth-ecommerce-brand') {
    const { seoEcommerceGrowthData } = await import('@/data/digital/caseStudies/seoEcommerceGrowth');
    return seoEcommerceGrowthData;
  }
  
  if (slug === 'google-ads-multi-location-education-brand') {
    const { googleAdsEducationData } = await import('@/data/digital/caseStudies/googleAdsEducation');
    return googleAdsEducationData;
  }
  
  if (slug === 'meta-ads-premium-fitness-brand') {
    const { metaAdsFitnessData } = await import('@/data/digital/caseStudies/metaAdsFitness');
    return metaAdsFitnessData;
  }
  
  if (slug === 'local-search-multi-location-dental-practice') {
    const { gbpDentalLocalData } = await import('@/data/digital/caseStudies/gbpDentalLocal');
    return gbpDentalLocalData;
  }
  
  if (slug === 'conversion-focused-website-redesign') {
    const { webDevConversionData } = await import('@/data/digital/caseStudies/webDevConversion');
    return webDevConversionData;
  }
  
  return null;
}
