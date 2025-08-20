'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BuildingOfficeIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { formatPrice } from '@/lib/utils';

interface Product {
  _id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: string;
  brand: string;
  sku: string;
  images: string[];
  sizes: { size: string; stock: number }[];
  colors: { name: string; hex: string; images: string[] }[];
  tags: string[];
  wholesaleTiers: { minQty: number; price: number }[];
  weight: number;
  dimensions: { length: number; width: number; height: number };
}

export default function WholesalePage() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetchWholesaleProducts();
  }, []);

  const fetchWholesaleProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/products/wholesale');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error('Failed to fetch wholesale products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getWholesalePrice = (product: Product, quantity: number) => {
    if (!product.wholesaleTiers || product.wholesaleTiers.length === 0) {
      return product.price;
    }

    // Find the appropriate tier based on quantity
    let applicableTier = product.wholesaleTiers[0];
    for (const tier of product.wholesaleTiers) {
      if (quantity >= tier.minQty) {
        applicableTier = tier;
      } else {
        break;
      }
    }

    return applicableTier.price;
  };

  const getSavingsPercentage = (product: Product, quantity: number) => {
    const wholesalePrice = getWholesalePrice(product, quantity);
    const savings = ((product.price - wholesalePrice) / product.price) * 100;
    return Math.round(savings);
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'formal', name: 'Formal Shoes' },
    { id: 'school', name: 'School Shoes' },
    { id: 'safety', name: 'Safety Boots' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'sports', name: 'Sports Training' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Volume Discounts',
      description: 'Save up to 40% with our tiered pricing structure. The more you buy, the more you save.',
    },
    {
      icon: TruckIcon,
      title: 'Free Bulk Delivery',
      description: 'Free delivery for orders over 50 pairs within Nairobi. Nationwide delivery available.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Guarantee',
      description: 'All wholesale products come with our quality guarantee and bulk return policy.',
    },
    {
      icon: UserGroupIcon,
      title: 'Dedicated Support',
      description: 'Personal account manager for all wholesale customers with priority support.',
    },
    {
      icon: ChartBarIcon,
      title: 'Business Analytics',
      description: 'Detailed reporting and analytics to help you track your inventory and sales.',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Corporate Solutions',
      description: 'Custom solutions for corporate uniforms, schools, and institutional needs.',
    },
  ];

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <BuildingOfficeIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Wholesale Access Required</h1>
            <p className="text-xl text-gray-600 mb-8">
              Please sign in to access our wholesale pricing and bulk ordering features.
            </p>
            <div className="space-x-4">
              <Link
                href="/auth/signin?callbackUrl=/wholesale"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-md font-medium"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <BuildingOfficeIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">BTT Shoes Wholesale</h1>
            <p className="text-xl mb-8">
              Premium footwear solutions for businesses, schools, and institutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200">Happy Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-blue-200">Pairs Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-blue-200">Maximum Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BTT Wholesale?</h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive footwear solutions for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <Icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Product Catalog</h2>
            <p className="text-xl text-gray-600">
              Professional footwear designed for bulk orders and institutional use
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading wholesale products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No wholesale products available in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const quantity = quantities[product._id] || product.wholesaleTiers?.[0]?.minQty || 10;
                const wholesalePrice = getWholesalePrice(product, quantity);
                const savings = getSavingsPercentage(product, quantity);

                return (
                  <div key={product._id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {savings > 0 && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                          Save {savings}%
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
                      
                      {/* Pricing Tiers */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Volume Pricing:</h4>
                        <div className="space-y-1">
                          {product.wholesaleTiers?.map((tier, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-gray-600">{tier.minQty}+ pairs:</span>
                              <span className="font-medium">{formatPrice(tier.price)} each</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity:
                        </label>
                        <input
                          type="number"
                          min={product.wholesaleTiers?.[0]?.minQty || 1}
                          value={quantity}
                          onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Current Price */}
                      <div className="mb-4 p-3 bg-blue-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Price per pair:</span>
                          <span className="text-lg font-bold text-blue-600">
                            {formatPrice(wholesalePrice)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-gray-600">Total ({quantity} pairs):</span>
                          <span className="text-xl font-bold text-gray-900">
                            {formatPrice(wholesalePrice * quantity)}
                          </span>
                        </div>
                      </div>

                      {/* Available Sizes */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Available Sizes:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map((size, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {size.size} ({size.stock})
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium">
                          Request Quote
                        </button>
                        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 rounded-md font-medium">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">
              Contact our wholesale team for custom quotes and bulk orders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-blue-400" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                  <span>wholesale@bttshoes.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BuildingOfficeIcon className="h-5 w-5 text-blue-400" />
                  <span>123 Shoe Street, Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

