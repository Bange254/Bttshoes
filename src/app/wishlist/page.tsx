'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, ShoppingCartIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { formatPrice } from '@/lib/utils';

interface WishlistItem {
  _id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: string;
  brand: string;
  featured?: boolean;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      _id: '1',
      name: 'Nike Air Max 270',
      price: 8500,
      compareAtPrice: 10000,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      category: 'sneakers',
      brand: 'Nike',
      featured: true,
    },
    {
      _id: '2',
      name: 'Adidas Ultraboost 22',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
      category: 'sneakers',
      brand: 'Adidas',
      featured: true,
    },
    {
      _id: '3',
      name: 'Clarks Desert Boot',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      category: 'boots',
      brand: 'Clarks',
      featured: true,
    },
  ]);

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems(prev => prev.filter(item => item._id !== itemId));
  };

  const addToCart = (item: WishlistItem) => {
    // Add to cart logic here
    console.log('Adding to cart:', item);
    // You can implement cart state management here
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
              <HeartIcon className="h-full w-full" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding products you love to your wishlist.</p>
            <Link
              href="/category/all"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600 mt-2">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {item.featured && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  {item.compareAtPrice && item.compareAtPrice > item.price && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      -{Math.round(((item.compareAtPrice - item.price) / item.compareAtPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Remove from wishlist button */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 opacity-0 group-hover:opacity-100"
                >
                  <TrashIcon className="h-4 w-4 text-red-500" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
                  <Link 
                    href={`/products/${item._id}`}
                    className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                  >
                    {item.name}
                  </Link>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    {item.compareAtPrice && item.compareAtPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(item.compareAtPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Found everything you were looking for?
          </p>
          <Link
            href="/category/all"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
