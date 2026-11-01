import HeroSkeleton from "@/components/states/HeroSkeleton";

export default function Loading() {
  // Global loading fallback
  return (
    <div className="min-h-screen bg-bg-secondary">
      <HeroSkeleton hasImage={false} />
      <div className="py-24">
        {/* We can just show a spinner in the main body or section skeleton */}
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-border-divider border-t-[#D4AF37] rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
