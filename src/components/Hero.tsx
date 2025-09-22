import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Avatar Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">State-of-the-art AI technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Create Realistic
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Avatar Videos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform a single photo into high-quality talking avatar videos. Translate videos with voice cloning, 
            replace audio, and bring your content to life with cutting-edge AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="min-w-48">
              <Play className="w-5 h-5 mr-2" />
              Start Creating
            </Button>
            <Button variant="modern" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              No setup required
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              30+ languages
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              HD quality output
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;