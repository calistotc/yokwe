import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Scale,
  Award,
  Users,
  Lightbulb,
  Heart,
  CheckCircle,
  TrendingUp,
  Shield,
  Target
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [counters, setCounters] = useState({ years: 0, cases: 0, clients: 0 });
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { years: 10, cases: 500, clients: 1000 };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        cases: Math.floor(targets.cases * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty, professionalism, and ethical conduct.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Ensuring legal services are approachable, responsive, and available to clients and communities.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Applying creative, forward-thinking, and adaptive solutions to complex legal challenges.'
    },
    {
      icon: Scale,
      title: 'Transformative Justice',
      description: 'Advocating for outcomes that strengthen legal systems and rectify systemic injustices.'
    },
    {
      icon: Heart,
      title: 'Ubuntu',
      description: 'Operating with empathy, collaboration, and a shared sense of responsibility.'
    },
    {
      icon: Target,
      title: 'Reformative Solutions',
      description: 'Addressing systemic legal deficiencies with practical, sustainable interventions.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/5 to-transparent dark:from-secondary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold text-sm">Excellence in Legal Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary dark:text-primary-light leading-tight">
                Yokwe Attorneys Inc.
              </h1>

              <p className="text-xl md:text-2xl text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                Delivering unparalleled legal services across the Republic of South Africa with excellence, integrity, and strategic insight.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg transition-all hover:shadow-xl group"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary dark:border-accent text-secondary dark:text-accent font-semibold rounded-lg hover:bg-secondary hover:text-primary-light dark:hover:bg-accent dark:hover:text-secondary transition-all"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary/10 dark:border-accent/20">
                <div>
                  <div className="text-4xl font-bold text-accent">{counters.years}+</div>
                  <div className="text-sm text-secondary/70 dark:text-primary-light/70">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">{counters.cases}+</div>
                  <div className="text-sm text-secondary/70 dark:text-primary-light/70">Cases Won</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">{counters.clients}+</div>
                  <div className="text-sm text-secondary/70 dark:text-primary-light/70">Satisfied Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Decorative */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>

                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-secondary dark:bg-secondary-light rounded-3xl shadow-2xl">
                  <Scale className="h-48 w-48 text-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        ref={section1.ref}
        className={`py-20 bg-secondary dark:bg-secondary-dark transition-all duration-700 ${
          section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary-light">Our Mission</h2>
              </div>
              <p className="text-primary-light/90 text-lg leading-relaxed">
                Deliver exceptional, results-driven legal services that combine strategic insight, innovative solutions,
                and ethical rigor to protect client interests, advance the rule of law, and drive meaningful legal and
                systemic reform.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold text-primary-light">Our Vision</h2>
              </div>
              <p className="text-primary-light/90 text-lg leading-relaxed">
                Establish Yokwe Attorneys Inc. as a leading authority in South Africa and across the African continent,
                recognized for legal excellence, innovative practice, and impactful engagement in shaping a just,
                accountable, and progressive legal system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={section2.ref}
        className={`py-20 transition-all duration-700 ${
          section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary-light mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary/70 dark:text-primary-light/70 max-w-3xl mx-auto">
              The principles that guide every decision, every case, and every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={section2.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-xl hover:shadow-xl transition-all group"
              >
                <div className="p-3 bg-accent/10 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-primary-light mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary/70 dark:text-primary-light/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section
        ref={section3.ref}
        className={`py-20 bg-secondary/5 dark:bg-secondary-dark/20 transition-all duration-700 ${
          section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary-light">
                About Yokwe Attorneys Inc.
              </h2>
              <p className="text-lg text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                A distinguished law firm headquartered in Cape Town, delivering unparalleled legal services across
                the Republic of South Africa. Established on the principles of excellence, integrity, and strategic
                insight, the firm provides robust, innovative, and client-focused solutions across an extensive
                spectrum of legal matters.
              </p>
              <p className="text-lg text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                Our methodology combines rigorous legal analysis with strategic foresight, ensuring that each matter
                is addressed with precision, professionalism, and proactive planning.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-accent hover:text-accent-dark font-semibold group"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="p-6 bg-primary-light dark:bg-secondary-dark rounded-xl border border-secondary/10 dark:border-accent/20">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-bold text-secondary dark:text-primary-light mb-2">Excellence</h3>
                  <p className="text-sm text-secondary/70 dark:text-primary-light/70">
                    Recognized authority in South African legal fraternity
                  </p>
                </div>
                <div className="p-6 bg-primary-light dark:bg-secondary-dark rounded-xl border border-secondary/10 dark:border-accent/20">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-bold text-secondary dark:text-primary-light mb-2">Pro Bono Unit</h3>
                  <p className="text-sm text-secondary/70 dark:text-primary-light/70">
                    Advancing justice beyond commercial imperatives
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="p-6 bg-primary-light dark:bg-secondary-dark rounded-xl border border-secondary/10 dark:border-accent/20">
                  <CheckCircle className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-bold text-secondary dark:text-primary-light mb-2">Strategic</h3>
                  <p className="text-sm text-secondary/70 dark:text-primary-light/70">
                    Forward-looking strategies and innovative solutions
                  </p>
                </div>
                <div className="p-6 bg-primary-light dark:bg-secondary-dark rounded-xl border border-secondary/10 dark:border-accent/20">
                  <Lightbulb className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-bold text-secondary dark:text-primary-light mb-2">Thought Leadership</h3>
                  <p className="text-sm text-secondary/70 dark:text-primary-light/70">
                    Shaping South Africa's legal landscape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={section4.ref}
        className={`py-20 bg-secondary dark:bg-secondary-dark transition-all duration-700 ${
          section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-xl text-primary-light/80 mb-8">
            Our experienced attorneys are ready to provide you with strategic legal counsel tailored to your unique situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg transition-all hover:shadow-xl group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
