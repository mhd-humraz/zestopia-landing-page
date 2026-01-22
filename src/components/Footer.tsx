import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import collegeLogo from "@/assets/mescas-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and college info */}
          <div className="flex items-center gap-4">
            <img 
              src={collegeLogo} 
              alt="MES College Logo" 
              className="w-14 h-14 rounded-full bg-white p-1 object-contain"
            />
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold gradient-text">
                ZESTOPIA
              </h3>
              <p className="text-xs text-muted-foreground leading-tight mt-1">
                MES M.K. Mackar Pillay College<br />
                for Advanced Studies, Edathala
              </p>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ZESTOPIA. All rights reserved. Made with passion by the IF Dept.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
