import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Clock, User } from "lucide-react";
import type { BlogPost, FAQ } from "../types/blog";
import { fetchBlogPosts, fetchCategories } from "../services/wordpress";
import { Link } from "react-router-dom";
import { env } from "@/lib/env";

const faqs: FAQ[] = [
  {
    question: "How do I get started with NowSites?",
    answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call. We'll discuss your AI needs and create a customized solution that works for your business."
  },
  {
    question: "What AI services do you offer?",
    answer: "We offer a comprehensive range of AI-powered services including intelligent websites, automation solutions, data analytics, and custom AI integrations. Contact us to learn more about how we can help transform your business."
  },
  {
    question: "How long does AI implementation typically take?",
    answer: "The timeline varies depending on your specific requirements and the complexity of the AI solution. We'll provide you with a clear timeline during our initial consultation and keep you updated throughout the process."
  },
  {
    question: "Do you offer AI consultations?",
    answer: "Yes! We offer initial consultations to understand your business needs and explain how AI can help. This gives us both a chance to see if we're a good fit for working together."
  },
  {
    question: "What makes NowSites different from other AI companies?",
    answer: "Our commitment to cutting-edge AI technology, personalized service, and proven track record sets us apart. We focus on building long-term relationships and delivering measurable results."
  },
  {
    question: "How do you handle customer support?",
    answer: "We pride ourselves on excellent customer support. You can reach us via phone, email, or through our contact form, and we typically respond within 24 hours."
  },
  {
    question: "Can I see examples of your AI work?",
    answer: "Absolutely! We'd be happy to share case studies and examples relevant to your needs. Contact us to learn more about our past AI projects and success stories."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment options to suit different needs. We'll discuss payment terms during our initial consultation and ensure everything is clear before we begin."
  }
];

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="block h-full">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-[#C7F63D] transition-all duration-300 border border-gray-100 border-l-4 border-l-[#C7F63D] h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/hero-bg.jpg';
            }}
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="bg-[#C7F63D]/10 text-[#C7F63D] px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#C7F63D] transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <span>{post.date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#C7F63D] transition duration-300 border-l-4 border-l-[#C7F63D]">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
        onClick={onToggle}
      >
        <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [posts, cats] = await Promise.all([
          fetchBlogPosts(),
          fetchCategories()
        ]);
        setBlogPosts(posts);
        setCategories(cats);
        setError(null);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error loading blog data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-200">
              Insights, updates, and stories from our team
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Featured Blog Posts */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[#C7F63D] text-black"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C7F63D] mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading articles...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No articles found for this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="bg-white rounded-xl p-8 mb-16 shadow-sm border border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest insights, updates, and tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Section - Only show if enabled */}
          {env.enableFaq && (
            <section className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our services and processes.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openFAQ === index}
                    onToggle={() => toggleFAQ(index)}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
