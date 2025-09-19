import { Upload, Wand2, Download, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Choose a high-quality photo (720p+) for best results. Our AI works with any portrait image.",
      step: "01"
    },
    {
      icon: Wand2,
      title: "Add Your Script",
      description: "Type your script or upload audio. Our AI will generate natural speech and lip-sync perfectly.",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "AI Processing",
      description: "Our state-of-the-art models create your realistic talking avatar with advanced AI technology.",
      step: "03"
    },
    {
      icon: Download,
      title: "Download & Share",
      description: "Get your HD video in minutes. Perfect for social media, marketing, or personal use.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create professional AI avatar videos in just 4 simple steps. 
            No technical skills required.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-secondary rounded-full flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300 shadow-card">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;