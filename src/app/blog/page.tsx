import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CalendarIcon, 
  ClockIcon, 
  TagIcon,
  UserIcon 
} from '@heroicons/react/24/outline';
import { getAllPosts, getAllCategories, getAllTags, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'BTT Shoes Blog - Footwear Tips, Guides & Industry News',
  description: 'Discover expert footwear advice, shoe care tips, industry insights, and style guides from BTT Shoes. Your ultimate resource for all things shoes in Kenya.',
  keywords: ['shoe blog', 'footwear tips', 'shoe care', 'style guide', 'BTT shoes blog', 'kenya footwear'],
  openGraph: {
    title: 'BTT Shoes Blog - Expert Footwear Advice & Tips',
    description: 'Expert footwear advice, shoe care tips, and style guides from BTT Shoes Kenya.',
    type: 'website',
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();
  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">BTT Shoes Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, tips, and insights from the world of footwear
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">{posts.length}</div>
                <div className="text-gray-300">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{categories.length}</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{tags.length}</div>
                <div className="text-gray-300">Topics Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <article key={post.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <UserIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.image}
                            alt={post.imageAlt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <UserIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                        {post.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                <TagIcon className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const categoryPosts = posts.filter(post => post.category === category);
                    return (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span>{category}</span>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {categoryPosts.length}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 10).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    >
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 rounded-lg shadow-sm p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-4">
                  Get the latest footwear tips, style guides, and exclusive offers delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Have Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Our footwear experts are here to help with any questions about shoes, care, or sizing.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:info@bttshoes.com" className="text-blue-600 hover:text-blue-700">
                      info@bttshoes.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Phone:</span>
                    <a href="tel:+254700123456" className="text-blue-600 hover:text-blue-700">
                      +254 700 123 456
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

