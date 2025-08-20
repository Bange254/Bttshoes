'use client';

import { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  TruckIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isTracking, setIsTracking] = useState(false);

  // Mock tracking data - replace with actual API call
  const mockTrackingData = {
    orderNumber: 'BTT-2024-001',
    status: 'shipped',
    estimatedDelivery: '2024-01-20',
    currentLocation: 'Nairobi Distribution Center',
    trackingNumber: 'TRK123456789',
    courier: 'BTT Express',
    courierPhone: '+254 700 123 456',
    courierEmail: 'tracking@bttshoes.com',
    timeline: [
      {
        date: '2024-01-15 10:30 AM',
        status: 'Order Placed',
        description: 'Your order has been confirmed and is being processed',
        icon: '📝',
        completed: true
      },
      {
        date: '2024-01-16 2:15 PM',
        status: 'Processing',
        description: 'Your order is being prepared for shipment',
        icon: '⚙️',
        completed: true
      },
      {
        date: '2024-01-17 9:45 AM',
        status: 'Shipped',
        description: 'Your order has been shipped and is on its way',
        icon: '📦',
        completed: true
      },
      {
        date: '2024-01-18 11:20 AM',
        status: 'In Transit',
        description: 'Your package is currently in transit to your location',
        icon: '🚚',
        completed: true
      },
      {
        date: '2024-01-20 9:00 AM',
        status: 'Out for Delivery',
        description: 'Your package is out for delivery today',
        icon: '📬',
        completed: false
      },
      {
        date: '2024-01-20 5:00 PM',
        status: 'Delivered',
        description: 'Your package has been delivered',
        icon: '🎉',
        completed: false
      }
    ]
  };

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim() || !email.trim()) return;

    setIsTracking(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setTrackingResult(mockTrackingData);
      setIsTracking(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Order Placed':
      case 'Processing':
        return <ClockIcon className="h-6 w-6 text-blue-500" />;
      case 'Shipped':
      case 'In Transit':
        return <TruckIcon className="h-6 w-6 text-purple-500" />;
      case 'Out for Delivery':
        return <MapPinIcon className="h-6 w-6 text-orange-500" />;
      case 'Delivered':
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      default:
        return <ClockIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Order Placed':
      case 'Processing':
        return 'border-blue-500 bg-blue-50';
      case 'Shipped':
      case 'In Transit':
        return 'border-purple-500 bg-purple-50';
      case 'Out for Delivery':
        return 'border-orange-500 bg-orange-50';
      case 'Delivered':
        return 'border-green-500 bg-green-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <TruckIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Order</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated on your package from order confirmation to delivery. Enter your order number and email to track your order.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Track Your Package</h2>
            
            <form onSubmit={handleTrackOrder} className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number *
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., BTT-2024-001"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isTracking}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isTracking ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                    Track Order
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have your order number?{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Order Number</h3>
                  <p className="text-lg font-semibold text-gray-900">{trackingResult.orderNumber}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                  <p className="text-lg font-semibold text-gray-900 capitalize">{trackingResult.status}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Estimated Delivery</h3>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Date(trackingResult.estimatedDelivery).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Tracking Number</h3>
                  <p className="text-lg font-semibold text-gray-900">{trackingResult.trackingNumber}</p>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TruckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Current Status</h3>
                  <p className="text-blue-800">
                    Your package is currently at <strong>{trackingResult.currentLocation}</strong>
                  </p>
                  <p className="text-blue-800 text-sm mt-1">
                    Courier: {trackingResult.courier}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Timeline</h3>
              <div className="space-y-6">
                {trackingResult.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${
                        event.completed ? getStatusColor(event.status) : 'border-gray-300 bg-gray-50'
                      }`}>
                        {event.completed ? (
                          getStatusIcon(event.status)
                        ) : (
                          <span className="text-2xl">{event.icon}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className={`text-lg font-semibold ${
                          event.completed ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {event.status}
                        </h4>
                        {event.completed && (
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      <p className={`text-sm ${
                        event.completed ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {event.date}
                      </p>
                      <p className={`text-gray-700 ${
                        event.completed ? '' : 'text-gray-400'
                      }`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courier Information */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Courier Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <TruckIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Courier</p>
                    <p className="text-gray-900">{trackingResult.courier}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-gray-900">{trackingResult.courierPhone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-gray-900">{trackingResult.courierEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need help with your order or have questions about delivery?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How Tracking Works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Order Tracking Works</h2>
            <p className="text-xl text-gray-600">
              Understand the different stages of your order and what they mean.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Placed</h3>
              <p className="text-gray-600 text-sm">
                Your order has been confirmed and is being prepared for processing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipped</h3>
              <p className="text-gray-600 text-sm">
                Your package has been shipped and is on its way to you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivered</h3>
              <p className="text-gray-600 text-sm">
                Your package has been successfully delivered to your address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
