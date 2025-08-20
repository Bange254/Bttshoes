import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

// Mock data for development - will be replaced with real data
const featuredProducts = [
  {
    _id: '1',
    name: 'Nike Air Max 270',
    price: 8500,
    compareAtPrice: 10000,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    category: 'sneakers',
    brand: 'Nike',
    featured: true,
  },
  {
    _id: '2',
    name: 'Adidas Ultraboost 22',
    price: 12000,
    images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500'],
    category: 'sneakers',
    brand: 'Adidas',
    featured: true,
  },
  {
    _id: '3',
    name: 'Clarks Desert Boot',
    price: 6500,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'],
    category: 'boots',
    brand: 'Clarks',
    featured: true,
  },
  {
    _id: '4',
    name: 'Converse Chuck Taylor',
    price: 4500,
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500'],
    category: 'sneakers',
    brand: 'Converse',
    featured: true,
  },
];

const categories = [
  {
    name: 'Men\'s Shoes',
    href: '/category/men',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500',
    description: 'Discover our collection of men\'s footwear',
  },
  {
    name: 'Women\'s Shoes',
    href: '/category/women',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    description: 'Elegant and comfortable shoes for women',
  },
  {
    name: 'Sneakers',
    href: '/category/sneakers',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500',
    description: 'Latest sneaker trends and classics',
  },
  {
    name: 'Boots',
    href: '/category/boots',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500',
    description: 'Durable and stylish boots for all occasions',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200"
            alt="Hero background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Step Into Style with BTT Shoes
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover premium quality footwear for every occasion. From casual sneakers to formal shoes, 
              we have everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/category/all"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/wholesale"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Wholesale Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect shoes for every style and occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites that our customers love
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/category/all"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over KES 5,000 within Nairobi</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All our shoes come with a quality guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it with our customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with BTT Shoes
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive deals, and special offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
