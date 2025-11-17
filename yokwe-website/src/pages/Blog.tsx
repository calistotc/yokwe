import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogPosts, categories } from '../data/blog';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <BookOpen className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary dark:text-primary-light mb-6">
              Blog & Thought Leadership
            </h1>
            <p className="text-xl text-secondary/80 dark:text-primary-light/80 leading-relaxed">
              In-depth legal research, analyses, and expert commentary informing strategic litigation, advisory,
              and pro bono initiatives across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Unit Info */}
      <section
        ref={section1.ref}
        className={`py-12 bg-secondary/5 dark:bg-secondary-dark/20 transition-all duration-700 ${
          section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-xl">
            <div className="flex items-start space-x-4">
              <BookOpen className="h-12 w-12 text-accent flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-secondary dark:text-primary-light mb-4">
                  About Our Research Unit
                </h2>
                <p className="text-secondary/80 dark:text-primary-light/80 leading-relaxed">
                  Our distinguished Blog & Research Unit advances legal scholarship, thought leadership, and policy
                  influence. Producing in-depth research, analyses, and expert commentary, it informs strategic
                  litigation, advisory, and pro bono initiatives. The unit's outputs underpin policy interventions,
                  public discourse, and legal reform, ensuring Yokwe Attorneys Inc. remains at the forefront of legal
                  innovation and systemic impact. By providing authoritative insights to clients, practitioners, and
                  policymakers, the Blog & Research Unit reinforces the firm's standing as an intellectually rigorous
                  and influential voice in South African and African legal practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary/50 dark:text-primary-light/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-lg text-secondary dark:text-primary-light placeholder-secondary/50 dark:placeholder-primary-light/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-primary-light shadow-lg'
                    : 'bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 text-secondary dark:text-primary-light hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        ref={section2.ref}
        className={`py-12 transition-all duration-700 ${
          section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-secondary/30 dark:text-primary-light/30 mx-auto mb-4" />
              <p className="text-xl text-secondary/60 dark:text-primary-light/60">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={section2.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-light dark:bg-secondary-dark border border-secondary/10 dark:border-accent/20 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
                >
                  {/* Category Badge */}
                  <div className="p-6 pb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-bold text-secondary dark:text-primary-light mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary/70 dark:text-primary-light/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2 text-sm text-secondary/60 dark:text-primary-light/60">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-ZA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="px-6 pb-6">
                    <button className="inline-flex items-center text-accent hover:text-accent-dark font-semibold group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary dark:bg-secondary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-primary-light/80 mb-8">
            Subscribe to our newsletter for the latest legal insights, research, and thought leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-primary-light dark:bg-primary-dark text-secondary dark:text-primary-light placeholder-secondary/50 dark:placeholder-primary-light/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-8 py-4 bg-accent hover:bg-accent-dark text-primary-light font-semibold rounded-lg transition-all hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
