import React from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  Users,
  Heart,
  Target,
  Globe,
  BookOpen,
  Lightbulb,
  Shield,
  TrendingUp
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();

  const values = [
    { icon: Shield, title: 'Integrity', description: 'Upholding the highest standards of honesty, professionalism, and ethical conduct.' },
    { icon: Users, title: 'Accessibility', description: 'Ensuring legal services are approachable, responsive, and available to clients and communities.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Applying creative, forward-thinking, and adaptive solutions to complex legal challenges.' },
    { icon: Scale, title: 'Transformative Justice', description: 'Advocating for outcomes that strengthen legal systems and rectify systemic injustices.' },
    { icon: Heart, title: 'Human-Centered Approach', description: 'Prioritizing clients, communities, and human dignity in all legal engagements.' },
    { icon: TrendingUp, title: 'Reformative Solutions', description: 'Addressing systemic legal deficiencies with practical, sustainable interventions.' }
  ];

  const timeline = [
    { year: '2015', event: 'Yokwe Attorneys Inc. Founded', description: 'Established in Cape Town with a vision for excellence in legal services.' },
    { year: '2017', event: 'Pro Bono Unit Launched', description: 'Dedicated unit created to advance justice beyond commercial imperatives.' },
    { year: '2019', event: 'Blog & Research Unit Established', description: 'Thought leadership initiative to influence legal policy and practice.' },
    { year: '2021', event: 'Expansion of Practice Areas', description: 'Extended services to cover comprehensive legal spectrum across South Africa.' },
    { year: '2023', event: 'Recognition & Awards', description: 'Acknowledged as leading authority in South African legal fraternity.' },
    { year: '2025', event: 'Continental Vision', description: 'Pursuing recognition across the African continent for legal excellence.' }
  ];

  const initiatives = [
    {
      icon: Globe,
      title: 'Responsibility to Protect & Peacebuilding',
      description: 'Engaging with regional mechanisms to prevent atrocities and promote peace across the continent.'
    },
    {
      icon: Users,
      title: 'Women\'s Rights',
      description: 'Strategic litigation and advocacy to advance gender equality and women\'s empowerment.'
    },
    {
      icon: Scale,
      title: 'Criminal Justice Reform',
      description: 'Addressing systemic issues in criminal justice through strategic interventions and policy work.'
    },
    {
      icon: Heart,
      title: 'Children in Conflict with the Law',
      description: 'Protecting the rights and interests of children within the justice system.'
    },
    {
      icon: BookOpen,
      title: 'Democracy & Public Participation',
      description: 'Promoting democratic values, public participation, and freedom of expression.'
    },
    {
      icon: Shield,
      title: 'Atrocity Prevention',
      description: 'Working to prevent mass atrocities and human rights violations through legal mechanisms.'
    }
  ];

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
              About Yokwe Attorneys Inc.
            </h1>
            <p className="text-xl text-secondary/80 dark:text-primary-light/80 leading-relaxed">
              A distinguished law firm delivering unparalleled legal services across the Republic of South Africa,
              grounded in excellence, integrity, and strategic insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={section1.ref}
        className={`py-20 transition-all duration-700 ${
          section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary-light">
                Our Story
              </h2>
              <p className="text-lg text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                Yokwe Attorneys Inc. is a distinguished law firm headquartered in Cape Town, delivering unparalleled
                legal services across the Republic of South Africa. Established on the principles of excellence,
                integrity, and strategic insight, the firm provides robust, innovative, and client-focused solutions
                across an extensive spectrum of legal matters.
              </p>
              <p className="text-lg text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                Our methodology combines rigorous legal analysis with strategic foresight, ensuring that each matter
                is addressed with precision, professionalism, and proactive planning. We recognize that contemporary
                legal challenges demand not only technical expertise but also forward-looking strategies, anticipatory
                risk management, and innovative problem-solving to achieve sustainable outcomes for our clients.
              </p>
              <p className="text-lg text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                Yokwe Attorneys Inc. has cemented its reputation as a respected authority within the South African
                legal fraternity, acknowledged for consistently delivering high-caliber legal services and demonstrating
                thought leadership in complex litigation, advisory, and transactional matters.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-secondary dark:bg-secondary-dark rounded-xl text-primary-light">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  Deliver exceptional, results-driven legal services that combine strategic insight, innovative solutions,
                  and ethical rigor to protect client interests, advance the rule of law, and drive meaningful legal and
                  systemic reform.
                </p>
              </div>

              <div className="p-8 bg-accent/10 dark:bg-accent/20 rounded-xl">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-secondary dark:text-primary-light mb-4">Our Vision</h3>
                <p className="text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                  Establish Yokwe Attorneys Inc. as a leading authority in South Africa and across the African continent,
                  recognized for legal excellence, innovative practice, and impactful engagement in shaping a just,
                  accountable, and progressive legal system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={section2.ref}
        className={`py-20 bg-secondary/5 dark:bg-secondary-dark/20 transition-all duration-700 ${
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

      {/* Timeline Section */}
      <section
        ref={section3.ref}
        className={`py-20 transition-all duration-700 ${
          section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary-light mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-secondary/70 dark:text-primary-light/70 max-w-3xl mx-auto">
              Key milestones in our path to becoming a leading legal authority.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={section3.isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-xl">
                      <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-secondary dark:text-primary-light mb-2">{item.event}</h3>
                      <p className="text-secondary/70 dark:text-primary-light/70">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-primary-light dark:border-primary-dark"></div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Bono & Initiatives Section */}
      <section
        ref={section4.ref}
        className={`py-20 bg-secondary dark:bg-secondary-dark transition-all duration-700 ${
          section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
              Pro Bono & Transformative Initiatives
            </h2>
            <p className="text-xl text-primary-light/80 max-w-3xl mx-auto">
              Our dedicated Pro Bono Unit empowers communities, promotes access to justice, and addresses systemic
              injustices via national and African regional legal mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={section4.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-primary-light/10 border border-primary-light/20 rounded-xl hover:bg-primary-light/20 transition-all group"
              >
                <div className="p-3 bg-accent/20 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  <initiative.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-light mb-3">
                  {initiative.title}
                </h3>
                <p className="text-primary-light/80 leading-relaxed">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary-light/10 border border-primary-light/20 rounded-xl">
            <div className="flex items-start space-x-4">
              <BookOpen className="h-12 w-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-primary-light mb-4">Blog & Research Unit</h3>
                <p className="text-primary-light/80 leading-relaxed">
                  Our distinguished Blog & Research Unit advances legal scholarship, thought leadership, and policy
                  influence. Producing in-depth research, analyses, and expert commentary, it informs strategic
                  litigation, advisory, and pro bono initiatives. The unit's outputs underpin policy interventions,
                  public discourse, and legal reform, ensuring Yokwe Attorneys Inc. remains at the forefront of legal
                  innovation and systemic impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
