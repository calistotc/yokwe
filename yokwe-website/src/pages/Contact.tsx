import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary/5 to-transparent dark:from-secondary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block p-4 bg-accent/10 rounded-full mb-6">
              <MessageSquare className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary dark:text-primary-light mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary/80 dark:text-primary-light/80 leading-relaxed">
              Get in touch with our team of experienced attorneys. We're here to help with your legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section
        ref={section1.ref}
        className={`py-20 transition-all duration-700 ${
          section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 bg-secondary dark:bg-secondary-dark rounded-xl text-primary-light">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-primary-light/80">
                        43 Fisher Street<br />
                        Goodwood, 7462<br />
                        Cape Town, South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:0664875467"
                        className="text-primary-light/80 hover:text-accent transition-colors"
                      >
                        066 487 5467
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@yokweattorneys.co.za"
                        className="text-primary-light/80 hover:text-accent transition-colors"
                      >
                        info@yokweattorneys.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-primary-light/80">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: By Appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:0664875467"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg transition-all hover:shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/27664875467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-secondary-light hover:bg-secondary text-primary-light font-semibold rounded-lg transition-all hover:shadow-lg"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-xl">
                <h2 className="text-2xl font-bold text-secondary dark:text-primary-light mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-secondary dark:text-primary-light mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-secondary/70 dark:text-primary-light/70 text-center">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-secondary dark:text-primary-light mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-primary-light dark:bg-primary-dark border border-secondary/20 dark:border-accent/20 rounded-lg text-secondary dark:text-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-secondary dark:text-primary-light mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-primary-light dark:bg-primary-dark border border-secondary/20 dark:border-accent/20 rounded-lg text-secondary dark:text-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-secondary dark:text-primary-light mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-primary-light dark:bg-primary-dark border border-secondary/20 dark:border-accent/20 rounded-lg text-secondary dark:text-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="+27 12 345 6789"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold text-secondary dark:text-primary-light mb-2"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-primary-light dark:bg-primary-dark border border-secondary/20 dark:border-accent/20 rounded-lg text-secondary dark:text-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                          <option value="">Select a service</option>
                          <option value="corporate">Corporate & Commercial Litigation</option>
                          <option value="civil">Civil Litigation</option>
                          <option value="criminal">Criminal Litigation</option>
                          <option value="family">Family Law</option>
                          <option value="labour">Labour Law</option>
                          <option value="immigration">Immigration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-secondary dark:text-primary-light mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-light dark:bg-primary-dark border border-secondary/20 dark:border-accent/20 rounded-lg text-secondary dark:text-primary-light focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Tell us about your legal needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg transition-all hover:shadow-xl group"
                    >
                      <span>Send Message</span>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        ref={section2.ref}
        className={`py-20 bg-secondary/5 dark:bg-secondary-dark/20 transition-all duration-700 ${
          section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary-light mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-secondary/70 dark:text-primary-light/70">
              Located in Goodwood, Cape Town
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-secondary/10 dark:border-accent/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d18.56!3d-33.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU3JzM2LjAiUyAxOMKwMzMnMzYuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yokwe Attorneys Inc. Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
