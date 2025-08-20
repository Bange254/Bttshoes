'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ClockIcon, 
  CheckCircleIcon, 
  TruckIcon, 
  ExclamationTriangleIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { formatPrice } from '@/lib/utils';

interface Order {
  _id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
}

interface OrderItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

export default function OrdersPage() {
  const { data: session } = useSession();
  const [orders] = useState<Order[]>([
    {
      _id: '1',
      orderNumber: 'BTT-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 20500,
      items: [
        {
          _id: '1',
          name: 'Nike Air Max 270',
          price: 8500,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
          size: '9',
          color: 'Black'
        },
        {
          _id: '2',
          name: 'Adidas Ultraboost 22',
          price: 12000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
          size: '10',
          color: 'Blue'
        }
      ],
      shippingAddress: '123 Main St, Nairobi, Kenya',
      paymentMethod: 'MPESA'
    },
    {
      _id: '2',
      orderNumber: 'BTT-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 6500,
      items: [
        {
          _id: '3',
          name: 'Clarks Desert Boot',
          price: 6500,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
          size: '8',
          color: 'Brown'
        }
      ],
      shippingAddress: '456 Oak Ave, Mombasa, Kenya',
      paymentMethod: 'MPESA'
    },
    {
      _id: '3',
      orderNumber: 'BTT-2024-003',
      date: '2024-01-25',
      status: 'processing',
      total: 4500,
      items: [
        {
          _id: '4',
          name: 'Converse Chuck Taylor',
          price: 4500,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500',
          size: '7',
          color: 'White'
        }
      ],
      shippingAddress: '789 Pine Rd, Kisumu, Kenya',
      paymentMethod: 'Credit Card'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'processing':
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <TruckIcon className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view your orders</h1>
          <p className="text-gray-600 mb-8">You need to be signed in to access your order history.</p>
          <Link
            href="/auth/signin"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-2">
            Track your orders and view your purchase history
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">Start shopping to see your orders here.</p>
            <Link
              href="/category/all"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Order Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Order #{order.orderNumber}</p>
                        <p className="text-sm text-gray-500">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                      <span className="text-lg font-semibold text-gray-900">
                        {formatPrice(order.total)}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ArrowDownTrayIcon className="h-5 w-5" />
                        </button>
                        <Link
                          href={`/orders/${order._id}`}
                          className="p-2 text-gray-400 hover:text-gray-600"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item._id} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900">
                            <Link href={`/products/${item._id}`} className="hover:text-blue-600">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-500">
                            Size: {item.size} | Color: {item.color}
                          </p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Footer */}
                <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-gray-600">
                        <span className="font-medium">Shipping to:</span> {order.shippingAddress}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Payment:</span> {order.paymentMethod}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      {order.status === 'delivered' && (
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Buy Again
                        </button>
                      )}
                      {order.status === 'shipped' && (
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Track Package
                        </button>
                      )}
                      {order.status === 'delivered' && (
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Write Review
                        </button>
                      )}
                      <Link
                        href={`/orders/${order._id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
