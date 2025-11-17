import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-secondary-dark text-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <Scale className="h-6 w-6 text-primary-light" />
              </div>
              <span className="text-lg font-bold">Yokwe Attorneys Inc.</span>
            </div>
            <p className="text-primary-light/80 text-sm mb-4">
              Distinguished law firm delivering unparalleled legal services across the Republic of South Africa.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-light/10 rounded-lg hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-light/10 rounded-lg hover:bg-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-light/10 rounded-lg hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-light/10 rounded-lg hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-light/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-light/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-light/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-light/80 hover:text-accent transition-colors">
                  Blog & Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-light/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-primary-light/80">
              <li>Corporate & Commercial Litigation</li>
              <li>Criminal Litigation</li>
              <li>Family Law</li>
              <li>Labour Law</li>
              <li>Immigration</li>
              <li>Administrative & Constitutional Law</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-light/80">
                  43 Fisher Street, Goodwood, 7462<br />Cape Town, South Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:0664875467" className="text-primary-light/80 hover:text-accent transition-colors">
                  066 487 5467
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@yokweattorneys.co.za" className="text-primary-light/80 hover:text-accent transition-colors">
                  info@yokweattorneys.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-light/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-light/60">
              &copy; {currentYear} Yokwe Attorneys Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-light/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/popia" className="hover:text-accent transition-colors">POPIA Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
