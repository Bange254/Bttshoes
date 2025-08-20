'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    compareAtPrice?: number;
    images: string[];
    category: string;
    brand: string;
    featured?: boolean;
  };
  isWishlisted?: boolean;
  onWishlistToggle?: (productId: string) => void;
  showWholesalePrice?: boolean;
  wholesalePrice?: number;
}

export default function ProductCard({ 
  product, 
  isWishlisted = false, 
  onWishlistToggle,
  showWholesalePrice = false,
  wholesalePrice
}: ProductCardProps) {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onWishlistToggle) {
      onWishlistToggle(product._id);
    }
  };

  const displayPrice = showWholesalePrice && wholesalePrice ? wholesalePrice : product.price;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link href={`/products/${product._id}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
          <Image
            src={product.images[0] || '/placeholder-shoe.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.featured && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Featured
              </span>
            )}
            {hasDiscount && (
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
            {showWholesalePrice && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                Wholesale
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={handleWishlistClick}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {isWishlisted ? (
              <HeartSolidIcon className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>

        <div className="p-4">
          <div className="mb-1">
            <p className="text-sm text-gray-500">{product.brand}</p>
            <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(displayPrice)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.compareAtPrice!)}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500 capitalize">
              {product.category}
            </span>
          </div>

          {showWholesalePrice && wholesalePrice && (
            <div className="mt-2 text-sm text-green-600">
              Wholesale from {formatPrice(wholesalePrice)}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

