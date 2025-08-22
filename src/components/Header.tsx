import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-primary">
            APEX<span className="text-foreground">Studio</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
            Home
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
            About
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
            Services
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="cta" size="lg" className="hidden md:inline-flex">
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;