import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-primary font-medium">Ready to get started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Start Creating Amazing 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Videos Today</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who are already using our AI technology to produce 
            stunning avatar videos. No credit card required to start.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" className="min-w-48 shadow-glow">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Free trial available
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Cancel anytime
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;