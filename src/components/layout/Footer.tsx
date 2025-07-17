import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-bg luxury-text border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Logo variant="dark" size="sm" />
            </div>
            <p className="mb-6 luxury-text-muted leading-relaxed">
              Experience unparalleled luxury and comfort in Auckland's premier beachside destination.
              Your home away from home in Takapuna.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold luxury-text">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="luxury-text-muted hover:luxury-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="luxury-text-muted hover:luxury-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="luxury-text-muted hover:luxury-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="luxury-text-muted hover:luxury-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold luxury-text">Our Services</h3>
            <ul className="space-y-3">
              <li className="luxury-text-muted">Luxury Accommodation</li>
              <li className="luxury-text-muted">Concierge Services</li>
              <li className="luxury-text-muted">Event Planning</li>
              <li className="luxury-text-muted">Transportation</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold luxury-text">Contact Information</h3>
            <ul className="space-y-3">
              <li>
                <span className="luxury-text-muted">+64 9 xxx xxxx</span>
              </li>
              <li>
                <span className="luxury-text-muted">tim@luxuryaccommodationtakapuna.com</span>
              </li>
              <li>
                <address className="luxury-text-muted not-italic">
                  Takapuna / Milford Border<br />
                  Auckland, New Zealand<br />
                  North Shore
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-border" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="luxury-text-muted">
            © {currentYear} Luxury Accommodation Takapuna. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="luxury-text-muted">Privacy Policy</span>
            <span className="luxury-text-muted">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
