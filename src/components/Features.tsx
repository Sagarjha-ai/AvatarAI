import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import photoToVideoIcon from "@/assets/photo-to-video-icon.png";
import translateIcon from "@/assets/translate-icon.png";
import audioIcon from "@/assets/audio-icon.png";

const Features = () => {
  const features = [
    {
      icon: photoToVideoIcon,
      title: "Photo to Video with Portrait Avatar",
      description: "Turn a single photo and script into a high-quality avatar video using AI portrait models. Perfect for content creation, marketing, and personalized messages.",
      highlight: "Most Popular"
    },
    {
      icon: translateIcon,
      title: "Translate Video",
      description: "Automatically translate your videos into 30+ languages with voice cloning and perfect lip-syncing. Expand your global reach effortlessly.",
      highlight: "New"
    },
    {
      icon: audioIcon,
      title: "Change Video Audio",
      description: "Replace existing video audio with new voiceovers while maintaining perfect synchronization. Ideal for dubbing and audio enhancement.",
      highlight: "Pro"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Creator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three revolutionary AI tools to transform your content creation workflow. 
            From photos to professional videos in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-border bg-card/50 backdrop-blur-sm shadow-card hover:shadow-glow transition-all duration-300 group">
              {feature.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {feature.highlight}
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 p-3 bg-gradient-secondary rounded-xl group-hover:bg-gradient-primary transition-all duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <CardTitle className="text-xl text-center text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;