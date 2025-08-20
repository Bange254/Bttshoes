import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  UserIcon,
  ArrowLeftIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import { getPostBySlug, getAllPosts, getRelatedPosts, formatDate } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | BTT Shoes Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.seoKeywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div className="text-white">
            <div className="mb-4">
              <Link
                href="/blog"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Article Meta */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="ml-4">{children}</li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
                        {children}
                      </blockquote>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-900">{children}</strong>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-blue-600 hover:text-blue-700 underline"
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                    <p className="text-gray-600">Help others discover this content</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      <ShareIcon className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {relatedPost.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{relatedPost.readingTime} min</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">In This Article</h3>
                <nav className="space-y-2">
                  {/* This would be dynamically generated from headings in a real implementation */}
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Introduction
                  </a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Key Features
                  </a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Best Practices
                  </a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Conclusion
                  </a>
                </nav>
              </div>

              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-600">Footwear Expert</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Our team of footwear experts brings years of experience in the shoe industry, 
                  helping customers find the perfect fit and style for every occasion.
                </p>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 rounded-lg shadow-sm p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get the latest footwear tips and exclusive offers.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

