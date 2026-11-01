import { projectsData } from "@/data/digital/projects";

export async function getProjects() {
  return projectsData || [];
}

export async function getProjectBySlug(slug) {
  if (!projectsData) return null;
  // Simulate network delay for loading states
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return projectsData.find((project) => project.slug === slug) || null;
}

export async function getFeaturedProjects() {
  if (!projectsData) return [];
  return projectsData.filter((p) => p.featured);
}

export async function getProjectsByService(serviceName) {
  if (!projectsData) return [];
  return projectsData.filter((p) => p.services.includes(serviceName));
}

export async function getProjectsByIndustry(industryName, excludeSlug = null) {
  if (!projectsData) return [];
  let filtered = projectsData.filter((p) => p.industry === industryName);
  if (excludeSlug) {
    filtered = filtered.filter((p) => p.slug !== excludeSlug);
  }
  return filtered;
}
