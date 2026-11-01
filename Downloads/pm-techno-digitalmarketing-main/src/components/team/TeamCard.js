import Image from "next/image";
import Link from "next/link";
import IconWrapper from "@/components/common/IconWrapper";

export default function TeamCard({ member }) {
  if (!member) return null;

  return (
    <div className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border-divider transition-all duration-300 flex flex-col h-full">
      {/* Profile Image */}
      <div className="relative h-72 w-full overflow-hidden bg-bg-secondary">
        <Image
          src={member.profileImage}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          {/* We will route to /team/[slug] once dynamic pages are built */}
          <Link href={`#`} className="px-6 py-3 bg-surface text-text-primary font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-[#D4AF37] hover:text-text-primary">
            View Profile
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
        <h3 className="text-xl md:text-2xl font-bold font-serif text-text-primary mb-1">
          {member.name}
        </h3>
        <p className="text-[#D4AF37] font-semibold text-sm mb-4">
          {member.designation}
        </p>

        <div className="w-12 h-1 bg-bg-secondary mx-auto mb-4 rounded-full"></div>

        <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
          {member.shortBio}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-center space-x-4 border-t border-border-divider">
          {member.socialLinks?.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:bg-[#0077B5] hover:text-text-primary transition-colors"
              aria-label={`LinkedIn profile for ${member.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {member.socialLinks?.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:bg-[#1DA1F2] hover:text-text-primary transition-colors"
              aria-label={`Twitter profile for ${member.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
