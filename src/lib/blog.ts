import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  content: string;
  readingTime: number;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug);
    })
    .filter(post => post !== null) as BlogPost[];

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Calculate reading time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    author: data.author || 'BTT Shoes Team',
    publishedAt: data.publishedAt || '',
    updatedAt: data.updatedAt || data.publishedAt || '',
    category: data.category || 'General',
    tags: data.tags || [],
    featured: data.featured || false,
    image: data.image || '',
    imageAlt: data.imageAlt || data.title || '',
    seoTitle: data.seoTitle || data.title || '',
    seoDescription: data.seoDescription || data.excerpt || '',
    seoKeywords: data.seoKeywords || [],
    content,
    readingTime,
  };
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  const currentPost = getPostBySlug(currentSlug);
  
  if (!currentPost) {
    return [];
  }

  // Find posts with similar tags or category
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // Same category gets higher score
      if (post.category === currentPost.category) {
        score += 3;
      }
      
      // Shared tags get points
      const sharedTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;
      
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return relatedPosts;
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map(post => post.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap(post => post.tags));
  return Array.from(tags).sort();
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    return dateString;
  }
}

export function generateBlogSitemap(): string {
  const allPosts = getAllPosts();
  const baseUrl = process.env.NEXTAUTH_URL || 'https://bttshoes.com';
  
  const urls = allPosts.map(post => {
    return `\n  <url>\n    <loc>${baseUrl}/blog/${post.slug}</loc>\n    <lastmod>${post.updatedAt}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${baseUrl}/blog</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>${urls}\n</urlset>`;
}


