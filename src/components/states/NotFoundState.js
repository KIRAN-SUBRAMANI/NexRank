import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFoundState() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-surface">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="text-[#D4AF37] font-serif font-black text-8xl md:text-9xl mb-6 opacity-20">
            404
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif font-bold text-text-primary mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" variant="primary" className="w-full sm:w-auto">
              Return Home
            </Button>
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto bg-bg-secondary border-0 shadow-none">
              Contact Support
            </Button>
          </div>

        </div>
      </Container>
    </div>
  );
}
