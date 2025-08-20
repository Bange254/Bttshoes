import { Metadata } from 'next';
import Link from 'next/link';
import { 
  TruckIcon, 
  MapPinIcon, 
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CreditCardIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Shipping Information - BTT Shoes',
  description: 'Learn about our shipping options, delivery times, and costs. Free shipping on orders over KES 5,000 within Nairobi.',
  openGraph: {
    title: 'Shipping Information - BTT Shoes',
    description: 'Learn about our shipping options, delivery times, and costs. Free shipping on orders over KES 5,000 within Nairobi.',
    type: 'website',
    url: '/shipping',
  },
};

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'KES 500',
      time: '3-5 business days',
      description: 'Reliable ground shipping across Kenya',
      icon: TruckIcon,
      features: ['Tracking included', 'Signature required', 'Insurance included']
    },
    {
      name: 'Express Shipping',
      price: 'KES 1,200',
      time: '1-2 business days',
      description: 'Fast delivery for urgent orders',
      icon: ClockIcon,
      features: ['Priority handling', 'Real-time tracking', 'Insurance included']
    },
    {
      name: 'Free Shipping',
      price: 'FREE',
      time: '3-5 business days',
      description: 'Free shipping on orders over KES 5,000',
      icon: ShieldCheckIcon,
      features: ['Orders KES 5,000+', 'Standard delivery', 'Tracking included']
    }
  ];

  const deliveryZones = [
    {
      zone: 'Nairobi',
      time: '1-3 business days',
      cost: 'KES 500',
      freeThreshold: 'KES 5,000+',
      icon: MapPinIcon
    },
    {
      zone: 'Major Cities',
      time: '3-5 business days',
      cost: 'KES 800',
      freeThreshold: 'KES 8,000+',
      icon: MapPinIcon
    },
    {
      zone: 'Other Areas',
      time: '5-7 business days',
      cost: 'KES 1,200',
      freeThreshold: 'KES 10,000+',
      icon: MapPinIcon
    }
  ];

  const trackingInfo = [
    {
      step: 1,
      title: 'Order Confirmed',
      description: 'You\'ll receive an email confirmation with your order details and tracking number.',
      icon: '✓'
    },
    {
      step: 2,
      title: 'Processing',
      description: 'We\'ll prepare your order and hand it over to our shipping partner.',
      icon: '📦'
    },
    {
      step: 3,
      title: 'In Transit',
      description: 'Your package is on its way with real-time tracking updates.',
      icon: '🚚'
    },
    {
      step: 4,
      title: 'Out for Delivery',
      description: 'Your package is out for delivery and will arrive soon.',
      icon: '📬'
    },
    {
      step: 5,
      title: 'Delivered',
      description: 'Your package has been delivered and signed for.',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <TruckIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping Information</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fast, reliable shipping across Kenya. Free shipping on orders over KES 5,000 within Nairobi.
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the shipping option that best fits your needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <option.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
                  <p className="text-gray-600 mb-4">{option.time}</p>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery Zones & Times</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shipping times and costs vary by location. See below for details.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryZones.map((zone, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <zone.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{zone.zone}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Delivery Time:</span> {zone.time}</p>
                  <p><span className="font-medium">Shipping Cost:</span> {zone.cost}</p>
                  <p><span className="font-medium">Free Shipping:</span> {zone.freeThreshold}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Tracking */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h2>
            <p className="text-xl text-gray-600">
              Stay updated on your package from order confirmation to delivery.
            </p>
          </div>
          
          <div className="space-y-8">
            {trackingInfo.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">{step.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < trackingInfo.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gray-200 mx-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Policies</h2>
            <p className="text-xl text-gray-600">
              Important information about our shipping practices and policies.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <ShieldCheckIcon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Order Processing</h3>
                  <p className="text-blue-800">
                    Orders are typically processed within 24 hours during business days. Orders placed after 2 PM may be processed the next business day.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <GlobeAltIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Delivery Areas</h3>
                  <p className="text-green-800">
                    We currently ship to all counties in Kenya. International shipping is not available at this time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Delivery Attempts</h3>
                  <p className="text-yellow-800">
                    We make up to 3 delivery attempts. If unsuccessful, packages are held at the nearest pickup location for 7 days.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <CreditCardIcon className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Payment & Shipping</h3>
                  <p className="text-purple-800">
                    Shipping costs are calculated at checkout. Payment is required before shipping. We accept MPESA, credit cards, and bank transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about shipping and delivery.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">When will my order ship?</h3>
              <p className="text-gray-600">
                Orders are typically processed and shipped within 24 hours during business days. You'll receive a tracking number via email once your order ships.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my shipping address after ordering?</h3>
              <p className="text-gray-600">
                Address changes can only be made within 2 hours of placing your order. Please contact our customer service team immediately if you need to make changes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I'm not home when delivery is attempted?</h3>
              <p className="text-gray-600">
                If you're not home, the delivery person will leave a notice with pickup instructions. You can also authorize someone else to sign for your package.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer same-day delivery?</h3>
              <p className="text-gray-600">
                Same-day delivery is available for orders placed before 10 AM within Nairobi for an additional fee of KES 2,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start shopping and enjoy fast, reliable shipping to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/all"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
