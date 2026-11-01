import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function JoinTeamCTA() {
  return (
 <section id="join" className="py-10 bg-[#D4AF37] text-text-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif font-bold mb-6">
            Ready to Do Your Best Work?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            We are always looking for ambitious digital marketers, strategists, and developers to join our growing agency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto font-bold px-8 py-4 text-base">
              View Open Roles
            </Button>
            <Button href="/about" className="w-full sm:w-auto font-bold px-8 py-4 text-base bg-surface/10 hover:bg-surface/20 text-text-primary border-0 shadow-none">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
