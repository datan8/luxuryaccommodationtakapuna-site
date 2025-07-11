import { Link } from "react-router-dom";
import { env } from "@/lib/env";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-900 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 text-xl font-bold">NowSites</h3>
            <p className="mb-6 text-gray-600">
              Your trusted partner for AI-powered web solutions and digital services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600">Documentation</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600">Support</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-gray-400">📞</span>
                <a href={`tel:${env.contactPhone}`} className="text-gray-600">
                  {env.contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">✉️</span>
                <a href={`mailto:${env.contactEmail}`} className="text-gray-600">
                  {env.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">📍</span>
                <address className="text-gray-600 not-italic">
                  {env.contactAddress.line1}<br />
                  {env.contactAddress.suburb}<br />
                  {env.contactAddress.city} {env.contactAddress.postcode}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-300"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-500">
            © {currentYear} NowSites. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-gray-500">Privacy Policy</Link>
            <Link to="#" className="text-gray-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
