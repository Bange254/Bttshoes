import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowPathIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  TruckIcon,
  CreditCardIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Returns & Exchanges - BTT Shoes',
  description: 'Learn about our 30-day return policy, how to return items, and our exchange process. Easy returns for your peace of mind.',
  openGraph: {
    title: 'Returns & Exchanges - BTT Shoes',
    description: 'Learn about our 30-day return policy, how to return items, and our exchange process. Easy returns for your peace of mind.',
    type: 'website',
    url: '/returns',
  },
};

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Log into your account and go to your order history to start a return request.',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Package Item',
      description: 'Securely package the item in its original packaging with all tags attached.',
      icon: '📦'
    },
    {
      step: 3,
      title: 'Ship Back',
      description: 'Use the provided return label to ship the item back to us.',
      icon: '🚚'
    },
    {
      step: 4,
      title: 'Inspection',
      description: 'We\'ll inspect the returned item to ensure it meets our return criteria.',
      icon: '🔍'
    },
    {
      step: 5,
      title: 'Refund/Exchange',
      description: 'Once approved, you\'ll receive your refund or exchange within 5-7 business days.',
      icon: '💳'
    }
  ];

  const returnPolicy = [
    {
      title: '30-Day Return Window',
      description: 'You have 30 days from the date of delivery to return your purchase.',
      icon: ClockIcon,
      color: 'blue'
    },
    {
      title: 'Original Condition Required',
      description: 'Items must be unworn, unwashed, and in original packaging with all tags attached.',
      icon: CheckCircleIcon,
      color: 'green'
    },
    {
      title: 'Free Return Shipping',
      description: 'We provide free return shipping for items that meet our return criteria.',
      icon: TruckIcon,
      color: 'purple'
    },
    {
      title: 'Full Refund',
      description: 'Receive a full refund to your original payment method within 5-7 business days.',
      icon: CreditCardIcon,
      color: 'green'
    }
  ];

  const nonReturnableItems = [
    'Sale items (unless defective)',
    'Personalized or custom items',
    'Items marked as final sale',
    'Gift cards',
    'Items that have been worn, washed, or altered',
    'Items without original packaging or tags'
  ];

  const returnReasons = [
    'Wrong size or fit',
    'Defective product',
    'Not as described',
    'Changed my mind',
    'Received wrong item',
    'Quality issues'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <ArrowPathIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Returns & Exchanges</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We want you to love your purchase. If you're not completely satisfied, we offer easy returns and exchanges.
          </p>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Return Policy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward returns for your peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnPolicy.map((policy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className={`mx-auto h-16 w-16 bg-${policy.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <policy.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 text-sm">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Return an Item</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to return your purchase.
            </p>
          </div>
          
          <div className="space-y-8">
            {returnSteps.map((step, index) => (
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
                {index < returnSteps.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gray-200 mx-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Requirements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What Can Be Returned */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Can Be Returned</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Regular Items</h3>
                    <p className="text-gray-600 text-sm">Most items can be returned within 30 days of delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Defective Items</h3>
                    <p className="text-gray-600 text-sm">Items with manufacturing defects can be returned anytime</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Wrong Items</h3>
                    <p className="text-gray-600 text-sm">If you received the wrong item, we'll cover return shipping</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Cannot Be Returned */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Cannot Be Returned</h2>
              <div className="space-y-3">
                {nonReturnableItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Reasons */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Return Reasons</h2>
            <p className="text-xl text-gray-600">
              We understand that sometimes items don't work out as expected.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {returnReasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-semibold text-gray-900">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Information</h2>
            <p className="text-xl text-gray-600">
              What to expect when your return is processed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Processing Time</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Returns are typically processed within 2-3 business days of receipt.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Inspection: 1-2 business days</li>
                <li>• Refund processing: 1-2 business days</li>
                <li>• Bank processing: 3-5 business days</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <CreditCardIcon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Refund Methods</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Refunds are issued to your original payment method.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• MPESA: Refunded to your MPESA account</li>
                <li>• Credit/Debit Cards: Refunded to your card</li>
                <li>• Bank Transfer: Refunded to your bank account</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exchanges</h2>
            <p className="text-xl text-gray-600">
              Need a different size or color? We make exchanges easy.
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Exchange Process</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Choose your new item during the return process</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>We'll ship the new item once return is received</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>No additional shipping charges for exchanges</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Exchange Options</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Different size of the same item</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Different color of the same item</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Different item of equal or lesser value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help with Your Return?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our customer service team is here to help you with any questions about returns or exchanges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <InformationCircleIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer Service</h3>
              <p className="text-gray-600">support@bttshoes.com</p>
              <p className="text-sm text-gray-500">+254 700 123 456</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8AM-8PM</p>
              <p className="text-sm text-gray-500">Sat-Sun: 9AM-6PM</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Return Address</h3>
              <p className="text-gray-600">BTT Shoes Returns</p>
              <p className="text-sm text-gray-500">123 Shoe Street, Nairobi</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Support
            </Link>
            <Link
              href="/help"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
