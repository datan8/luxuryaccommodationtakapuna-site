import type { BlogPost } from "@/types/blog";
import { env } from "@/lib/env";

// WordPress configuration
export const WORDPRESS_API_BASE = env.wordPressApiBase;
export const WORDPRESS_SITE = env.wordPressSite;

export async function fetchWordPressAPI(endpoint: string) {
  const response = await fetch(`${WORDPRESS_API_BASE}/wp-json/wp/v2/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return response.json();
}

function getImageUrl(post: any): string {
  console.log('Getting image URL for post:', post.title?.rendered);
  console.log('Post featured media:', post._embedded?.['wp:featuredmedia']);
  
  // Try to get the featured image URL
  if (post._embedded?.['wp:featuredmedia']?.[0]) {
    const media = post._embedded['wp:featuredmedia'][0];
    console.log('Media object:', media);
    console.log('Media details:', media.media_details);
    console.log('Media sizes:', media.media_details?.sizes);
    
    // Try different possible image URL locations
    const possibleUrls = [
      media.source_url,
      media.media_details?.sizes?.full?.source_url,
      media.media_details?.sizes?.large?.source_url,
      media.media_details?.sizes?.medium_large?.source_url,
      media.media_details?.sizes?.medium?.source_url,
      media.guid?.rendered,
      media.link,
      // Try direct URL from media_details
      media.media_details?.file ? `${WORDPRESS_API_BASE}/wp-content/uploads/${media.media_details.file}` : null
    ];
    
    console.log('Possible URLs:', possibleUrls);
    
    // Find the first valid URL
    const imageUrl = possibleUrls.find(url => url && typeof url === 'string');
    if (imageUrl) {
      console.log('Found image URL:', imageUrl);
      return imageUrl;
    }
  } else {
    console.log('No featured media found in post');
    // Try to find image in content
    const content = post.content?.rendered || '';
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) {
      console.log('Found image in content:', imgMatch[1]);
      return imgMatch[1];
    }
  }
  
  // If no image found, return the placeholder
  console.log('No image found, using placeholder');
  return '/images/hero-bg.jpg';
}

function transformPost(post: any): BlogPost {
  console.log('Transforming post:', post.title?.rendered);
  
  const transformedPost = {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} min read`,
    author: post._embedded?.author?.[0]?.name || 'Unknown Author',
    image: getImageUrl(post),
    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'
  };
  
  console.log('Transformed post:', transformedPost);
  return transformedPost;
}

export async function getPosts(page = 1, perPage = env.wordPressPostsPerPage): Promise<{ posts: BlogPost[]; totalPages: number }> {
  const posts = await fetchWordPressAPI(`posts?page=${page}&per_page=${perPage}&_embed`);
  const totalPages = parseInt(posts.headers?.get('X-WP-TotalPages') || '1');
  
  return {
    posts: posts.map((post: any) => ({
      id: post.id.toString(),
      title: post.title.rendered,
      slug: post.slug,
      excerpt: stripHtml(post.excerpt.rendered),
      content: post.content.rendered,
      date: post.date,
      readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} min read`,
      author: post._embedded?.author?.[0]?.name || 'Your Team',
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/800/400',
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
    })),
    totalPages,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchWordPressAPI(`posts?slug=${slug}&_embed`);
  if (posts.length === 0) return null;
  
  const post = posts[0];
  return {
    id: post.id.toString(),
    title: post.title.rendered,
    slug: post.slug,
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    date: post.date,
    readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} min read`,
    author: post._embedded?.author?.[0]?.name || 'Your Team',
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/800/400',
    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
  };
}

export async function getPages() {
  return fetchWordPressAPI('pages');
}

export async function getPage(slug: string) {
  const pages = await fetchWordPressAPI(`pages?slug=${slug}`);
  return pages[0];
}

// Helper function to strip HTML tags
function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
} 