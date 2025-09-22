import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-card-foreground">AvatarAI</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Create realistic AI avatar videos with state-of-the-art technology. 
              Transform your content creation workflow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                YouTube
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Status</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025 AvatarAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-card-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-card-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-card-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;