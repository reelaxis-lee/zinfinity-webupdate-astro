import { Mail, Phone } from "lucide-react";
import logo from "@/assets/zinfinity-logo-2.png";
import { getImageSrc } from "@/lib/utils";

const Footer = () => {
  const logoSrc = getImageSrc(logo);
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src={logoSrc} alt="Zinfinity Tech" className="h-20 w-auto" />
            <p className="text-sm text-primary-foreground/80">
              Peace of mind. Powered by IT.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-sm hover:text-secondary transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/partners" className="text-sm hover:text-secondary transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="/resources" className="text-sm hover:text-secondary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-heading mb-4">What We Do</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/solutions" className="hover:text-secondary transition-colors">AI Readiness & Data</a></li>
              <li><a href="/solutions" className="hover:text-secondary transition-colors">Cloud Engineering</a></li>
              <li><a href="/solutions" className="hover:text-secondary transition-colors">Cybersecurity</a></li>
              <li><a href="/solutions" className="hover:text-secondary transition-colors">The Stack</a></li>
              <li><a href="/solutions" className="hover:text-secondary transition-colors">Managed Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@zinfinity.tech" className="hover:text-secondary transition-colors">info@zinfinity.tech</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:8322631185" className="hover:text-secondary transition-colors">832-263-1185</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center space-y-2">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Zinfinity Tech. All rights reserved. | Ride the Wave of Modern IT.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60">
            <a href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
