import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  
  return {
    title: `${categoryName} Shoes - BTT Shoes`,
    description: `Shop the latest ${categoryName} shoes at BTT Shoes. Quality footwear for every occasion.`,
    openGraph: {
      title: `${categoryName} Shoes - BTT Shoes`,
      description: `Shop the latest ${categoryName} shoes at BTT Shoes. Quality footwear for every occasion.`,
      type: 'website',
      url: `/category/${params.slug}`,
    },
  };
}

// Mock data - replace with actual API call
const getCategoryProducts = (category: string) => {
  const allProducts = [
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
    {
      _id: '5',
      name: 'Dr. Martens 1460',
      price: 15000,
      images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500'],
      category: 'boots',
      brand: 'Dr. Martens',
      featured: false,
    },
    {
      _id: '6',
      name: 'Vans Old Skool',
      price: 5500,
      images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500'],
      category: 'sneakers',
      brand: 'Vans',
      featured: false,
    },
  ];

  if (category === 'all') return allProducts;
  
  return allProducts.filter(product => {
    if (category === 'men') return product.category === 'formal' || product.category === 'boots';
    if (category === 'women') return product.category === 'sneakers' || product.category === 'formal';
    return product.category === category;
  });
};

const getCategoryInfo = (slug: string) => {
  const categories = {
    men: {
      name: "Men's Shoes",
      description: "Discover our collection of men's footwear",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200"
    },
    women: {
      name: "Women's Shoes", 
      description: "Elegant and comfortable shoes for women",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200"
    },
    sneakers: {
      name: "Sneakers",
      description: "Latest sneaker trends and classics",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200"
    },
    boots: {
      name: "Boots",
      description: "Durable and stylish boots for all occasions",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1200"
    },
    all: {
      name: "All Products",
      description: "Browse our complete collection of footwear",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200"
    }
  };

  return categories[slug as keyof typeof categories] || categories.all;
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryInfo = getCategoryInfo(params.slug);
  const products = getCategoryProducts(params.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <Image
            src={categoryInfo.image}
            alt={categoryInfo.name}
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-gray-200">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {products.length} Products Found
            </h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or browse other categories.</p>
              <Link
                href="/category/all"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
