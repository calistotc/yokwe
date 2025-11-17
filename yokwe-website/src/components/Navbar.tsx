import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Scale } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog & Research' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-light dark:bg-primary-dark border-b border-secondary/10 dark:border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-secondary dark:bg-secondary-light rounded-lg transition-transform group-hover:scale-105">
              <Scale className="h-8 w-8 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-secondary dark:text-primary-light">
                Yokwe Attorneys Inc.
              </span>
              <span className="text-xs text-secondary/70 dark:text-primary-light/70">
                Excellence in Legal Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-secondary text-primary-light'
                    : 'text-secondary dark:text-primary-light hover:bg-secondary/10 dark:hover:bg-secondary-light/10'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-secondary/10 dark:bg-secondary-light/10 hover:bg-secondary/20 dark:hover:bg-secondary-light/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-secondary dark:text-primary-light" />
              ) : (
                <Sun className="h-5 w-5 text-secondary dark:text-primary-light" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary/10 dark:bg-secondary-light/10"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-secondary dark:text-primary-light" />
              ) : (
                <Sun className="h-5 w-5 text-secondary dark:text-primary-light" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-secondary/10 dark:bg-secondary-light/10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-secondary dark:text-primary-light" />
              ) : (
                <Menu className="h-6 w-6 text-secondary dark:text-primary-light" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-light dark:bg-primary-dark border-t border-secondary/10 dark:border-accent/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-secondary text-primary-light'
                      : 'text-secondary dark:text-primary-light hover:bg-secondary/10 dark:hover:bg-secondary-light/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg text-center transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
