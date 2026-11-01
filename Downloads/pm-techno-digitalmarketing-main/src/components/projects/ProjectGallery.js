import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ProjectGallery({ coverImage, gallery, title }) {
  if (!coverImage && (!gallery || gallery.length === 0)) return null;

  return (
 <section className="py-10 bg-surface">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Main Cover Image */}
          {coverImage && (
            <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg mb-8">
              <Image
                src={coverImage}
                alt={`${title} - Project Cover`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )}

          {/* Additional Gallery Images */}
          {gallery && gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gallery.map((img, index) => (
                <div key={index} className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={img}
                    alt={`${title} - Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
