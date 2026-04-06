import { useState, useEffect } from "react";
import { Link, useLocation } from "@/lib/router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getImageSrc } from "@/lib/utils";
import logoWhite from "@/assets/zinfinity-logo-2.png";
import logoColor from "@/assets/zinfinity-logo-color.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Solutions",
    path: "/solutions"
  }, {
    name: "Partners",
    path: "/partners"
  }, {
    name: "Resources",
    path: "/resources"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== "/" ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 md:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "h-32 md:h-36" : "h-24 md:h-28"}`}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={isScrolled || location.pathname !== "/" ? getImageSrc(logoColor) : getImageSrc(logoWhite)} alt="Zinfinity Tech" className={`w-auto max-w-[160px] md:max-w-none object-contain transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "h-28 md:h-32" : "h-16 md:h-20"}`} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map(link => <a key={link.path} href={link.path} className={`text-base lg:text-lg font-medium transition-colors link-underline whitespace-nowrap ${location.pathname === link.path ? "text-accent" : isScrolled || location.pathname !== "/" ? "text-foreground hover:text-accent" : "text-background hover:text-accent"}`}>
                {link.name}
              </a>)}
            <Button variant={!isScrolled && location.pathname === "/" ? "outline" : "default"} size="default" asChild className={`whitespace-nowrap ${!isScrolled && location.pathname === "/" ? "border-white text-white hover:bg-white hover:text-foreground" : ""}`}>
              <a href="/contact">Talk to Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-2 transition-colors ${isScrolled || location.pathname !== "/" ? "text-foreground hover:text-accent" : "text-background hover:text-accent"}`} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-6 space-y-4 animate-fade-in border-t border-border">
            {navLinks.map(link => <a key={link.path} href={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg font-medium py-2 transition-colors ${location.pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"}`}>
                {link.name}
              </a>)}
            <Button variant="default" size="lg" className="w-full" asChild>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
