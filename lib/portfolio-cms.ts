// Portfolio CMS - Simple data structure for easy management
// You can replace this with a headless CMS like Strapi, Contentful, or Sanity later

export interface PortfolioWork {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  image: string;
  images?: string[];
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  client?: string;
  projectUrl?: string;
  githubUrl?: string;
  technologies: string[];
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
}

// Portfolio data - Update this to add/edit your works
export const portfolioWorks: PortfolioWork[] = [
  {
    id: 'ecommerce-platform-2024',
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced analytics dashboard, customer relationship management, and multi-vendor support. The platform handles high-traffic scenarios with optimized performance and SEO.',
    shortDescription: 'Modern e-commerce platform with real-time analytics',
    image: '/portfolio/ecommerce-hero.jpg',
    images: [
      '/portfolio/ecommerce-hero.jpg',
      '/portfolio/ecommerce-dashboard.jpg',
      '/portfolio/ecommerce-products.jpg'
    ],
    date: '2024-09-15',
    category: 'Web Development',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'Analytics'],
    featured: true,
    client: 'TechStore Inc.',
    projectUrl: 'https://techstore.example.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    status: 'published',
    createdAt: '2024-09-01',
    updatedAt: '2024-09-15'
  },
  {
    id: 'saas-dashboard-2024',
    title: 'SaaS Analytics Dashboard',
    description: 'Modern dashboard interface for SaaS applications with comprehensive data visualization, real-time metrics, user management features, and customizable reporting. Built with performance and scalability in mind.',
    shortDescription: 'Data visualization dashboard for SaaS apps',
    image: '/portfolio/saas-dashboard.jpg',
    date: '2024-08-20',
    category: 'UI/UX Design',
    tags: ['Dashboard', 'SaaS', 'Analytics', 'Data Viz'],
    featured: false,
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    status: 'published',
    createdAt: '2024-08-01',
    updatedAt: '2024-08-20'
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, real-time transaction processing, budget tracking, and investment portfolio management. Designed with security and user experience as top priorities.',
    shortDescription: 'Secure mobile banking with biometric auth',
    image: '/portfolio/banking-app.jpg',
    date: '2024-07-10',
    category: 'Mobile Development',
    tags: ['React Native', 'Banking', 'Security', 'Fintech'],
    featured: false,
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'published',
    createdAt: '2024-06-15',
    updatedAt: '2024-07-10'
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    description: 'Educational platform with video streaming capabilities, progress tracking, interactive assessments, and collaborative learning features. Supports multiple content formats and learning paths.',
    shortDescription: 'Educational platform with video streaming',
    image: '/portfolio/lms-platform.jpg',
    date: '2024-06-05',
    category: 'Web Development',
    tags: ['Education', 'LMS', 'Video Streaming', 'Assessment'],
    featured: true,
    technologies: ['Next.js', 'Video.js', 'PostgreSQL', 'Redis'],
    status: 'published',
    createdAt: '2024-05-01',
    updatedAt: '2024-06-05'
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Management Portal',
    description: 'Patient management system with appointment scheduling, telemedicine capabilities, electronic health records, and prescription management. HIPAA compliant with robust security measures.',
    shortDescription: 'Patient management with telemedicine',
    image: '/portfolio/healthcare-portal.jpg',
    date: '2024-05-15',
    category: 'Web Development',
    tags: ['Healthcare', 'Telemedicine', 'HIPAA', 'Portal'],
    featured: false,
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    status: 'published',
    createdAt: '2024-04-01',
    updatedAt: '2024-05-15'
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tours, mortgage calculators, advanced search filters, and agent management system. Features interactive maps and neighborhood analytics.',
    shortDescription: 'Property platform with virtual tours',
    image: '/portfolio/real-estate.jpg',
    date: '2024-04-20',
    category: 'Web Development',
    tags: ['Real Estate', 'Virtual Tours', 'Maps', 'Property'],
    featured: false,
    technologies: ['Next.js', 'Google Maps API', 'Three.js', 'PostgreSQL'],
    status: 'published',
    createdAt: '2024-03-15',
    updatedAt: '2024-04-20'
  }
];

// Utility functions for portfolio management
export class PortfolioCMS {
  // Get all published works
  static getAllWorks(): PortfolioWork[] {
    return portfolioWorks.filter(work => work.status === 'published');
  }

  // Get featured works
  static getFeaturedWorks(): PortfolioWork[] {
    return portfolioWorks.filter(work => work.featured && work.status === 'published');
  }

  // Get works by category
  static getWorksByCategory(category: string): PortfolioWork[] {
    return portfolioWorks.filter(work =>
      work.category === category && work.status === 'published'
    );
  }

  // Get single work by ID
  static getWorkById(id: string): PortfolioWork | undefined {
    return portfolioWorks.find(work => work.id === id && work.status === 'published');
  }

  // Get works by tag
  static getWorksByTag(tag: string): PortfolioWork[] {
    return portfolioWorks.filter(work =>
      work.tags.includes(tag) && work.status === 'published'
    );
  }

  // Get recent works (last 6 months)
  static getRecentWorks(limit: number = 6): PortfolioWork[] {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    return portfolioWorks
      .filter(work => work.status === 'published' && new Date(work.date) >= sixMonthsAgo)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  // Get all unique categories
  static getCategories(): string[] {
    const categories = portfolioWorks
      .filter(work => work.status === 'published')
      .map(work => work.category);
    return [...new Set(categories)];
  }

  // Get all unique tags
  static getTags(): string[] {
    const tags = portfolioWorks
      .filter(work => work.status === 'published')
      .flatMap(work => work.tags);
    return [...new Set(tags)];
  }

  // Search works by title or description
  static searchWorks(query: string): PortfolioWork[] {
    const searchQuery = query.toLowerCase();
    return portfolioWorks.filter(work =>
      work.status === 'published' && (
        work.title.toLowerCase().includes(searchQuery) ||
        work.description.toLowerCase().includes(searchQuery) ||
        work.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      )
    );
  }
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Helper function to get relative time
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;

  return `${Math.floor(diffInDays / 365)} years ago`;
}