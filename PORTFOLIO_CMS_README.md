# Portfolio CMS Guide

## Overview

Your portfolio now uses a simple CMS (Content Management System) that makes it easy to add, edit, and manage your portfolio works without touching the page code.

## How to Add/Edit Portfolio Works

### 1. Adding a New Project

Edit the file: `lib/portfolio-cms.ts`

Add a new project to the `portfolioWorks` array:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  description: 'Detailed description of the project...',
  shortDescription: 'Brief one-liner description',
  image: '/portfolio/project-image.jpg',
  images: ['/portfolio/img1.jpg', '/portfolio/img2.jpg'], // Optional: multiple images
  date: '2024-12-01',
  category: 'Web Development', // or 'UI/UX Design', 'Mobile Development', etc.
  tags: ['React', 'Next.js', 'TypeScript'],
  featured: true, // true for featured projects, false for regular
  client: 'Client Name', // Optional
  projectUrl: 'https://project-url.com', // Optional
  githubUrl: 'https://github.com/username/repo', // Optional
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  status: 'published', // 'published' or 'draft'
  createdAt: '2024-11-01',
  updatedAt: '2024-12-01'
}
```

### 2. Project Images

Place your project images in the `public/portfolio/` directory:

```
public/
  portfolio/
    project-name-hero.jpg
    project-name-dashboard.jpg
    project-name-mobile.jpg
```

### 3. Project Categories

Available categories (you can add more):
- `Web Development`
- `UI/UX Design`
- `Mobile Development`
- `E-commerce`
- `SaaS`

### 4. Featured vs Regular Projects

- **Featured projects** (`featured: true`): Appear in the top section with larger cards
- **Regular projects** (`featured: false`): Appear in the grid section below

## Portfolio Layout Structure

1. **Hero Section**: Page title and description
2. **Featured Projects**: Large cards for your best works
3. **Grid Projects**: Smaller cards for other projects
4. **Footer**: Contact and social links

## CMS Functions Available

The CMS provides these utility functions:

```typescript
// Get all published works
PortfolioCMS.getAllWorks()

// Get only featured works
PortfolioCMS.getFeaturedWorks()

// Get works by category
PortfolioCMS.getWorksByCategory('Web Development')

// Get single work by ID
PortfolioCMS.getWorkById('project-id')

// Search works
PortfolioCMS.searchWorks('React')

// Get recent works (last 6 months)
PortfolioCMS.getRecentWorks(6)
```

## Quick Edit Checklist

When adding a new project:

- [ ] Add project data to `portfolioWorks` array
- [ ] Add project images to `public/portfolio/`
- [ ] Set `status: 'published'` to make it live
- [ ] Choose `featured: true/false` for positioning
- [ ] Add relevant tags and technologies
- [ ] Test the portfolio page

## Future CMS Upgrades

This simple file-based CMS can be easily upgraded to:
- **Contentful** - Headless CMS with web interface
- **Strapi** - Self-hosted CMS with admin panel
- **Sanity** - Real-time CMS with rich editing
- **Ghost** - Blog-focused CMS with portfolio features

The current structure is designed to be compatible with these systems.

## Troubleshooting

**Images not loading?**
- Check image paths start with `/portfolio/`
- Ensure images are in `public/portfolio/` directory
- Verify image file extensions match the paths

**Project not showing?**
- Check `status: 'published'`
- Verify the ID is unique
- Make sure date format is `YYYY-MM-DD`

**Need help?**
The portfolio system is designed to be simple and intuitive. Most changes just require editing the `portfolioWorks` array in `lib/portfolio-cms.ts`.