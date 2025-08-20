'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  XMarkIcon, 
  StarIcon, 
  ShoppingCartIcon,
  HeartIcon,
  CheckIcon,
  XMarkIcon as XMarkIconSolid
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { formatPrice } from '@/lib/utils';

interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isWishlisted?: boolean;
}

export default function ComparePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  // Mock products for comparison
  const mockProducts: Product[] = [
    {
      _id: '1',
      name: 'Nike Air Max 270',
      brand: 'Nike',
      category: 'Sneakers',
      price: 12500,
      originalPrice: 15000,
      images: ['/api/placeholder/300/300'],
      rating: 4.5,
      reviewCount: 128,
      description: 'Maximum comfort and style with Nike Air technology.',
      features: ['Air Max technology', 'Breathable mesh', 'Cushioned sole', 'Lightweight'],
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black', 'White', 'Red'],
      inStock: true
    },
    {
      _id: '2',
      name: 'Adidas Ultraboost 22',
      brand: 'Adidas',
      category: 'Running',
      price: 18900,
      originalPrice: 22000,
      images: ['/api/placeholder/300/300'],
      rating: 4.8,
      reviewCount: 95,
      description: 'Premium running shoes with responsive cushioning.',
      features: ['Boost midsole', 'Primeknit upper', 'Continental outsole', 'Energy return'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Blue', 'Black', 'White'],
      inStock: true
    },
    {
      _id: '3',
      name: 'Converse Chuck Taylor All Star',
      brand: 'Converse',
      category: 'Casual',
      price: 8500,
      images: ['/api/placeholder/300/300'],
      rating: 4.3,
      reviewCount: 256,
      description: 'Classic canvas sneakers for everyday wear.',
      features: ['Canvas upper', 'Rubber outsole', 'Classic design', 'Versatile'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      colors: ['Black', 'White', 'Navy', 'Red'],
      inStock: true
    }
  ];

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearch(true);
    } else {
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const addToComparison = (product: Product) => {
    if (selectedProducts.length >= 4) {
      alert('You can compare up to 4 products at a time');
      return;
    }
    if (!selectedProducts.find(p => p._id === product._id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
    setShowSearch(false);
    setSearchQuery('');
  };

  const removeFromComparison = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p._id !== productId));
  };

  const clearAll = () => {
    setSelectedProducts([]);
  };

  const toggleWishlist = (productId: string) => {
    setSelectedProducts(products =>
      products.map(p =>
        p._id === productId
          ? { ...p, isWishlisted: !p.isWishlisted }
          : p
      )
    );
  };

  const getFeatureValue = (product: Product, feature: string) => {
    switch (feature) {
      case 'Brand':
        return product.brand;
      case 'Category':
        return product.category;
      case 'Price':
        return formatPrice(product.price);
      case 'Rating':
        return `${product.rating}/5 (${product.reviewCount} reviews)`;
      case 'In Stock':
        return product.inStock ? 'Yes' : 'No';
      case 'Sizes Available':
        return product.sizes.join(', ');
      case 'Colors Available':
        return product.colors.join(', ');
      default:
        return product.features.includes(feature) ? '✓' : '✗';
    }
  };

  const comparisonFeatures = [
    'Brand',
    'Category',
    'Price',
    'Rating',
    'In Stock',
    'Sizes Available',
    'Colors Available',
    'Air Max technology',
    'Boost midsole',
    'Primeknit upper',
    'Canvas upper',
    'Breathable mesh',
    'Cushioned sole',
    'Lightweight',
    'Continental outsole',
    'Energy return',
    'Rubber outsole',
    'Classic design',
    'Versatile'
  ];

  if (selectedProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compare Products</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Compare up to 4 products side by side to make the best choice for your needs.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mx-auto h-24 w-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <MagnifyingGlassIcon className="h-12 w-12 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Comparing Products</h2>
              <p className="text-gray-600 mb-8">
                Search for products to add to your comparison. You can compare up to 4 products at once.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      handleSearch(e.target.value);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
                
                {showSearch && searchResults.length > 0 && (
                  <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                    {searchResults.map((product) => (
                      <div
                        key={product._id}
                        className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                        onClick={() => addToComparison(product)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 bg-gray-200 rounded flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.brand}</p>
                            <p className="text-sm font-semibold text-purple-600">{formatPrice(product.price)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Popular comparisons: Nike vs Adidas, Running vs Casual, Budget vs Premium
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Compare Products</h1>
              <p className="text-gray-600 mt-1">
                Comparing {selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
                Add More
              </button>
              <button
                onClick={clearAll}
                className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mt-4">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search for products to add..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                
                {searchResults.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-64 overflow-y-auto">
                    {searchResults.map((product) => (
                      <div
                        key={product._id}
                        className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                        onClick={() => addToComparison(product)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 bg-gray-200 rounded flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.brand}</p>
                            <p className="text-sm font-semibold text-purple-600">{formatPrice(product.price)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Features
                    </th>
                    {selectedProducts.map((product) => (
                      <th key={product._id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center justify-between">
                          <span>Product</span>
                          <button
                            onClick={() => removeFromComparison(product._id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Product Images and Basic Info */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Product</td>
                    {selectedProducts.map((product) => (
                      <td key={product._id} className="px-6 py-4">
                        <div className="text-center">
                          <div className="h-32 w-32 bg-gray-200 rounded-lg mx-auto mb-3"></div>
                          <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
                          <p className="text-gray-500 text-xs mb-2">{product.brand}</p>
                          <div className="flex items-center justify-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                          </div>
                          <p className="font-semibold text-purple-600 text-sm mb-3">
                            {formatPrice(product.price)}
                          </p>
                          <div className="flex space-x-2 justify-center">
                            <button
                              onClick={() => toggleWishlist(product._id)}
                              className={`p-2 rounded-full ${
                                product.isWishlisted
                                  ? 'text-red-500 bg-red-50'
                                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                              }`}
                            >
                              {product.isWishlisted ? (
                                <HeartSolidIcon className="h-4 w-4" />
                              ) : (
                                <HeartIcon className="h-4 w-4" />
                              )}
                            </button>
                            <button className="p-2 rounded-full text-gray-400 hover:text-green-500 hover:bg-green-50">
                              <ShoppingCartIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Feature Comparisons */}
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                        {feature}
                      </td>
                      {selectedProducts.map((product) => (
                        <td key={product._id} className="px-6 py-4 text-sm text-gray-900">
                          <div className="text-center">
                            {getFeatureValue(product, feature)}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cart"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add Selected to Cart
            </Link>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              Add More Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
