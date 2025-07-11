import type { BlogPost } from '../types/blog';
import { env } from '../lib/env';

// Get environment variables from centralized config
const WORDPRESS_API_BASE = env.wordPressApiBase;
const WORDPRESS_SITE = env.wordPressSite;
const POSTS_PER_PAGE = env.wordPressPostsPerPage;

// Debug log to check environment variables
console.log('WordPress API Configuration:', {
  WORDPRESS_API_BASE,
  WORDPRESS_SITE,
  POSTS_PER_PAGE,
  NODE_ENV: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL
});

// Helper function to get the correct image URL
function getImageUrl(media: any): string {
  if (!media) return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
  
  // Try to get the medium size image first, fallback to full size
  const imageUrl = media.media_details?.sizes?.medium?.source_url || 
                  media.media_details?.sizes?.large?.source_url ||
                  media.source_url;
                  
  // If the image URL is relative, prepend the WordPress API base URL
  if (imageUrl && !imageUrl.startsWith('http')) {
    return `${WORDPRESS_API_BASE}${imageUrl}`;
  }
  
  return imageUrl || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
}

export async function fetchBlogPosts(page = 1): Promise<BlogPost[]> {
  const apiUrl = `${WORDPRESS_API_BASE}/wp-json/wp/v2/posts?page=${page}&per_page=${POSTS_PER_PAGE}&_embed`;
  console.log('Fetching blog posts from:', apiUrl);
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    console.log('Sample post data:', posts[0]); // Debug log to see the post structure
    
    return posts.map((post: any) => {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
      console.log('Featured media for post:', post.id, featuredMedia); // Debug log for media data
      
      return {
        id: post.id.toString(),
        slug: post.slug,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Remove HTML tags
        content: post.content.rendered,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} minute read`,
        author: post._embedded?.author?.[0]?.name || 'Your Team',
        image: getImageUrl(featuredMedia),
        category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost> {
  const apiUrl = `${WORDPRESS_API_BASE}/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  console.log('Fetching blog post from:', apiUrl);
  
  try {
    const response = await fetch(apiUrl);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    console.log('Raw posts data:', posts);
    
    if (!posts || posts.length === 0) {
      throw new Error('Blog post not found');
    }

    const post = posts[0];
    console.log('Selected post data:', post);
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    console.log('Featured media:', featuredMedia);
    
    const mappedPost = {
      id: post.id.toString(),
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Remove HTML tags
      content: post.content.rendered,
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} minute read`,
      author: post._embedded?.author?.[0]?.name || 'Your Team',
      image: getImageUrl(featuredMedia),
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'
    };
    
    console.log('Mapped post data:', mappedPost);
    return mappedPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

export async function fetchCategories(): Promise<string[]> {
  const apiUrl = `${WORDPRESS_API_BASE}/wp-json/wp/v2/categories`;
  console.log('Fetching categories from:', apiUrl);
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    const categories = await response.json();
    return ['All', ...categories.map((cat: any) => cat.name)];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['All'];
  }
} 