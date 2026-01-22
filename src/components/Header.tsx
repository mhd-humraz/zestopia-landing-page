import collegeLogo from "@/assets/mescas-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={collegeLogo} 
            alt="MES College Logo" 
            className="w-12 h-12 rounded-full bg-white p-1 object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-xs text-muted-foreground leading-tight">
              MES M.K. Mackar Pillay College
            </p>
            <p className="text-xs text-muted-foreground leading-tight">
              for Advanced Studies, Edathala
            </p>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <a 
            href="#events" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Events
          </a>
          <a 
            href="#location" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Location
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
