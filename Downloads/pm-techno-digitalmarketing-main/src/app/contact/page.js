import { getContactData } from "@/lib/content/contact";
import { getFAQData } from "@/lib/content/faq";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import BusinessHours from "@/components/contact/BusinessHours";
import MapSection from "@/components/contact/MapSection";
import FAQPreview from "@/components/contact/FAQPreview";

export async function generateMetadata() {
  const contactData = await getContactData();
  if (!contactData || !contactData.seo) return { title: "Contact Us | NexRank" };
  
  return {
    title: contactData.seo.metaTitle,
    description: contactData.seo.metaDescription,
    keywords: contactData.seo.keywords?.join(", "),
    alternates: {
      canonical: contactData.seo.canonicalUrl,
    },
    openGraph: {
      title: contactData.seo.ogTitle,
      description: contactData.seo.ogDescription,
      url: contactData.seo.canonicalUrl,
      type: "website",
    },
    twitter: {
      card: contactData.seo.twitterCard,
      title: contactData.seo.metaTitle,
      description: contactData.seo.metaDescription,
    },
  };
}

export default async function ContactPage() {
  const [contactData, faqData] = await Promise.all([
    getContactData(),
    getFAQData()
  ]);
  
  if (!contactData) return null;

  // Extract top 4 featured FAQs
  const featuredFaqs = faqData?.faqs?.filter(faq => faq.featured).slice(0, 4) || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact NexRank",
            "description": contactData.seo.metaDescription,
            "url": "https://www.nexranktechnogroup.com/contact"
          })
        }}
      />
      <main className="bg-white contact-page-wrapper">
        {/* 1. High-Impact Hero */}
        <ContactHero hero={contactData.hero} />

        {/* 2. Interactive Direct Contact Channels */}
        <ContactCards contactInfo={contactData.contactInfo} />
        
        {/* 3. Inquiry Form & Live Strategic Operations Hub */}
        <section id="inquiry-form-section" className="py-10 md:py-14 bg-white border-b border-slate-100 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Interactive Project Inquiry Form */}
              <div className="lg:col-span-7">
                <ContactForm config={contactData.formConfig} />
              </div>
              
              {/* Right Column: Live Operational Status & Leadership Assurance */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <BusinessHours hours={contactData.businessHours} />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Headquarters Location Map */}
        <MapSection config={contactData.mapConfig} />

        {/* 5. Strategic FAQ Accordion */}
        <FAQPreview faqs={featuredFaqs} />
      </main>
    </>
  );
}
