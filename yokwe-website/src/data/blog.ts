export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Constitutional Protections in Criminal Proceedings: Recent Developments',
    excerpt: 'An in-depth analysis of recent Constitutional Court judgments affecting criminal procedure and the rights of accused persons in South Africa.',
    author: 'Legal Research Team',
    date: '2025-11-10',
    category: 'Criminal Law',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'The Evolving Landscape of Corporate Governance in South Africa',
    excerpt: 'Exploring the latest amendments to the Companies Act and their implications for corporate directors and shareholders.',
    author: 'Legal Research Team',
    date: '2025-11-03',
    category: 'Corporate Law',
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'Labour Relations in the Post-Pandemic Era',
    excerpt: 'How COVID-19 has reshaped employment law, remote work policies, and employer-employee relationships under South African labour legislation.',
    author: 'Legal Research Team',
    date: '2025-10-28',
    category: 'Labour Law',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Mining Rights and Environmental Compliance: Balancing Economic Development',
    excerpt: 'Examining the intersection of mining law, environmental protection, and community rights in South Africa\'s extractive industries.',
    author: 'Legal Research Team',
    date: '2025-10-20',
    category: 'Mining Law',
    readTime: '12 min read'
  },
  {
    id: '5',
    title: 'Administrative Justice and PAJA: A Practitioner\'s Guide',
    excerpt: 'Practical insights into challenging administrative decisions under the Promotion of Administrative Justice Act.',
    author: 'Legal Research Team',
    date: '2025-10-15',
    category: 'Administrative Law',
    readTime: '9 min read'
  },
  {
    id: '6',
    title: 'Children\'s Rights in Family Law Proceedings',
    excerpt: 'The best interests of the child standard and its application in custody, guardianship, and maintenance disputes.',
    author: 'Legal Research Team',
    date: '2025-10-08',
    category: 'Family Law',
    readTime: '6 min read'
  }
];

export const categories = [
  'All',
  'Criminal Law',
  'Corporate Law',
  'Labour Law',
  'Mining Law',
  'Administrative Law',
  'Family Law'
];
