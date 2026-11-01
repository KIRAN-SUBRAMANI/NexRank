import { contactData } from "@/data/digital/contact";

export async function getContactData() {
  // Simulate network delay for API-ready architecture
  await new Promise((resolve) => setTimeout(resolve, 0));
  return contactData;
}
