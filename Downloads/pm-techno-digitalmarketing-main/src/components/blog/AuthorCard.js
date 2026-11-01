import Image from "next/image";
import IconWrapper from "@/components/common/IconWrapper";

export default function AuthorCard({ author, authorImage, authorRole }) {
  if (!author) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start p-8 bg-bg-secondary/50 rounded-3xl border border-border-divider my-16 text-center sm:text-left transition-all hover:bg-bg-secondary hover:shadow-[0_4px_20px_rgba(11,31,58,0.03)]">
      <div className="w-24 h-24 rounded-full bg-surface border-2 border-white shadow-sm flex items-center justify-center overflow-hidden mb-6 sm:mb-0 sm:mr-8 flex-shrink-0 relative">
        {authorImage ? (
          <Image src={authorImage} alt={author} fill className="object-cover" sizes="96px" />
        ) : (
          <IconWrapper name="user" size="w-10 h-10 text-text-secondary" />
        )}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Written By</p>
        <h4 className="text-2xl font-extrabold text-[#0B1F3A] mb-1">{author}</h4>
        {authorRole && (
          <p className="text-brand-primary text-sm font-semibold mb-4">
            {authorRole}
          </p>
        )}
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl">
          Digital marketing strategies, insights and practical resources for growing businesses online.
          Dedicated to driving measurable results through advanced digital strategies.
        </p>
      </div>
    </div>
  );
}
