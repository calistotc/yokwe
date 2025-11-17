import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Scale,
  Gavel,
  Users,
  FileText,
  HardHat,
  Briefcase,
  Globe,
  Shield,
  CreditCard,
  ShoppingCart,
  Heart,
  Lock,
  Landmark,
  Activity,
  UserX,
  Mountain,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

interface ServiceDetail {
  id: string;
  icon: any;
  title: string;
  description: string;
  details: string[];
}

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();

  const services: ServiceDetail[] = [
    {
      id: 'corporate-commercial',
      icon: Building2,
      title: 'Corporate & Commercial Litigation',
      description: 'Strategic legal counsel in corporate governance, shareholder agreements, and commercial contracts, with representation in High Court and specialized tribunals.',
      details: [
        'Corporate governance and compliance',
        'Shareholder disputes and agreements',
        'Commercial contract drafting and negotiation',
        'Mergers and acquisitions',
        'High Court and tribunal representation'
      ]
    },
    {
      id: 'civil-litigation',
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Representation in contractual disputes, property claims, and debt enforcement, balancing legal rigor with practical strategies to achieve enforceable outcomes.',
      details: [
        'Contractual disputes',
        'Property claims and disputes',
        'Debt enforcement and recovery',
        'Delictual claims',
        'Alternative dispute resolution'
      ]
    },
    {
      id: 'criminal-litigation',
      icon: Gavel,
      title: 'Criminal Litigation',
      description: 'Defense and advisory services across criminal matters, ensuring protection of constitutional rights and procedural fairness throughout the criminal justice process.',
      details: [
        'Criminal defense representation',
        'Appeals and reviews in Superior Courts',
        'Constitutional rights protection',
        'Petition applications',
        'Pre-trial consultations and strategy'
      ]
    },
    {
      id: 'family-law',
      icon: Users,
      title: 'Family Law',
      description: 'Guidance in divorce, child custody, guardianship, and maintenance proceedings, grounded in the Children\'s Act, Divorce Act, and Maintenance Act.',
      details: [
        'Divorce proceedings',
        'Child custody and access',
        'Guardianship applications',
        'Maintenance claims',
        'Parenting plans and agreements'
      ]
    },
    {
      id: 'wills-estates',
      icon: FileText,
      title: 'Wills & Estates',
      description: 'Drafting of wills, administration of deceased estates, and estate planning in compliance with the Wills Act and Administration of Estates Act.',
      details: [
        'Will drafting and amendments',
        'Estate administration',
        'Executor appointments',
        'Estate planning strategies',
        'Intestate succession matters'
      ]
    },
    {
      id: 'construction-law',
      icon: HardHat,
      title: 'Construction Law',
      description: 'Advising on construction contracts, disputes, and regulatory compliance within South African building and construction legislation.',
      details: [
        'Construction contract review',
        'Builder and contractor disputes',
        'Regulatory compliance',
        'Court and tribunal representation',
        'Project documentation'
      ]
    },
    {
      id: 'labour-law',
      icon: Briefcase,
      title: 'Labour Law',
      description: 'Expert services in employment disputes, unfair dismissal, discrimination, and workplace compliance under the Labour Relations Act and BCEA.',
      details: [
        'Unfair dismissal cases',
        'CCMA and Labour Court representation',
        'Discrimination claims',
        'Employment contracts',
        'Workplace compliance audits'
      ]
    },
    {
      id: 'immigration',
      icon: Globe,
      title: 'Immigration',
      description: 'Legal guidance on visas, work permits, residency applications, and compliance with the Immigration Act for individuals and corporates.',
      details: [
        'Visa applications',
        'Work permit processing',
        'Permanent residency',
        'Citizenship applications',
        'Corporate immigration compliance'
      ]
    },
    {
      id: 'bail-applications',
      icon: Shield,
      title: 'Bail Applications',
      description: 'Representation in bail proceedings, ensuring constitutional rights are upheld in accordance with the Criminal Procedure Act.',
      details: [
        'Bail application preparation',
        'Bail hearings representation',
        'Bail variation applications',
        'Constitutional rights advocacy',
        'Emergency bail services'
      ]
    },
    {
      id: 'nca-solutions',
      icon: CreditCard,
      title: 'National Credit Act Solutions',
      description: 'Assistance in debt review, reckless lending matters, and compliance with the National Credit Act to promote responsible lending and borrowing practices.',
      details: [
        'Debt review applications',
        'Reckless lending claims',
        'NCA compliance advice',
        'Credit agreement reviews',
        'Debt restructuring'
      ]
    },
    {
      id: 'consumer-protection',
      icon: ShoppingCart,
      title: 'Consumer Protection',
      description: 'Advisory and representation in disputes governed by the Consumer Protection Act, including defective goods, unfair practices, and enforcement of consumer rights.',
      details: [
        'Consumer rights enforcement',
        'Defective goods claims',
        'Unfair contract terms',
        'CPA compliance',
        'Consumer tribunal representation'
      ]
    },
    {
      id: 'maintenance',
      icon: Heart,
      title: 'Maintenance Matters',
      description: 'Legal support in child and spousal maintenance cases, prioritizing the interests of dependents in accordance with the Maintenance Act.',
      details: [
        'Child maintenance claims',
        'Spousal maintenance',
        'Maintenance court representation',
        'Variation applications',
        'Enforcement proceedings'
      ]
    },
    {
      id: 'parole',
      icon: Lock,
      title: 'Parole & Correctional Services',
      description: 'Representation in parole hearings, correctional supervision, and enforcement of prisoner rights under the Correctional Services Act.',
      details: [
        'Parole board hearings',
        'Correctional supervision',
        'Prisoner rights advocacy',
        'Early release applications',
        'Correctional center complaints'
      ]
    },
    {
      id: 'administrative-constitutional',
      icon: Landmark,
      title: 'Administrative & Constitutional Law',
      description: 'Challenging administrative decisions, enforcing constitutional rights, and pursuing judicial reviews under the Constitution and PAJA.',
      details: [
        'Judicial reviews',
        'PAJA applications',
        'Constitutional challenges',
        'Administrative appeals',
        'Public interest litigation'
      ]
    },
    {
      id: 'medical-negligence',
      icon: Activity,
      title: 'Medical Negligence & Malpractice Claims',
      description: 'Representation in claims against healthcare professionals and institutions, ensuring accountability under the Health Professions Act and common law principles.',
      details: [
        'Medical malpractice claims',
        'Hospital negligence cases',
        'Expert medical evidence',
        'Compensation claims',
        'Professional misconduct matters'
      ]
    },
    {
      id: 'personal-injury',
      icon: UserX,
      title: 'Personal Injury Claims',
      description: 'Assisting clients with claims arising from accidents and occupational injuries, to secure just compensation.',
      details: [
        'Road accident claims',
        'Workplace injuries',
        'Slip and fall cases',
        'Loss of income claims',
        'RAF claims'
      ]
    },
    {
      id: 'mining-law',
      icon: Mountain,
      title: 'Mining Law Litigation',
      description: 'Legal services for disputes in the mining sector, including mineral rights, environmental compliance, and regulatory compliance.',
      details: [
        'Mineral rights disputes',
        'Mining permits and licenses',
        'Environmental compliance',
        'Community consultations',
        'Mining tribunal representation'
      ]
    }
  ];

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
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
              <Scale className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary dark:text-primary-light mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl text-secondary/80 dark:text-primary-light/80 leading-relaxed">
              Comprehensive legal solutions across an extensive spectrum of practice areas, delivered with
              excellence, integrity, and strategic insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        ref={section1.ref}
        className={`py-20 transition-all duration-700 ${
          section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={section1.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/5 dark:hover:bg-secondary-light/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary dark:text-primary-light mb-1">
                        {service.title}
                      </h3>
                      <p className="text-secondary/70 dark:text-primary-light/70 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-accent" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-secondary/10 dark:border-accent/20"
                    >
                      <div className="p-6 bg-secondary/5 dark:bg-secondary-light/5">
                        <h4 className="font-semibold text-secondary dark:text-primary-light mb-3">
                          Services Include:
                        </h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-secondary/80 dark:text-primary-light/80"
                            >
                              <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={section2.ref}
        className={`py-20 bg-secondary dark:bg-secondary-dark transition-all duration-700 ${
          section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-primary-light/80 mb-8">
            Our experienced attorneys are ready to provide you with expert legal counsel tailored to your specific needs.
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

export default Services;
