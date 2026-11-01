import { teamPageData, teamMembers } from "@/data/digital/team";

export async function getTeamPageData() {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return teamPageData;
}

export async function getTeamMembers() {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return teamMembers.sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getFeaturedMembers() {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return teamMembers.filter((member) => member.featured).sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getTeamMemberBySlug(slug) {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return teamMembers.find((member) => member.slug === slug) || null;
}
