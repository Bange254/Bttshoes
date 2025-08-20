import { Metadata } from 'next';
import Link from 'next/link';
import { 
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  TruckIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  UserIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Help Center - BTT Shoes',
  description: 'Get help with your orders, returns, shipping, and more. Find answers to frequently asked questions and contact our support team.',
  openGraph: {
    title: 'Help Center - BTT Shoes',
    description: 'Get help with your orders, returns, shipping, and more. Find answers to frequently asked questions and contact our support team.',
    type: 'website',
    url: '/help',
  },
};

export default function HelpPage() {
  const helpCategories = [
    {
      icon: ShoppingBagIcon,
      title: 'Shopping & Orders',
      description: 'Help with browsing, ordering, and managing your purchases',
      topics: ['How to place an order', 'Order tracking', 'Order modifications', 'Guest checkout']
    },
    {
      icon: CreditCardIcon,
      title: 'Payment & Billing',
      description: 'Information about payment methods and billing',
      topics: ['MPESA payments', 'Accepted payment methods', 'Billing issues', 'Refunds']
    },
    {
      icon: TruckIcon,
      title: 'Shipping & Delivery',
      description: 'Shipping options, delivery times, and tracking',
      topics: ['Shipping options', 'Delivery times', 'Tracking orders', 'International shipping']
    },
    {
      icon: ArrowPathIcon,
      title: 'Returns & Exchanges',
      description: 'How to return or exchange items',
      topics: ['Return policy', 'Exchange process', 'Return shipping', 'Refund timeline']
    },
    {
      icon: UserIcon,
      title: 'Account & Profile',
      description: 'Managing your account and profile settings',
      topics: ['Account creation', 'Password reset', 'Profile updates', 'Order history']
    },
    {
      icon: CogIcon,
      title: 'Technical Support',
      description: 'Website and app technical issues',
      topics: ['Website problems', 'Mobile app issues', 'Browser compatibility', 'Performance issues']
    }
  ];

  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "Orders" section, or by using the tracking number sent to your email. For guest orders, use the order confirmation email.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept MPESA mobile money payments, credit/debit cards (Visa, Mastercard), and bank transfers. All payments are processed securely through our payment partners.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping within Nairobi takes 2-3 business days. Nationwide delivery takes 3-7 business days. Express shipping is available for an additional fee with 1-2 business day delivery.'
    },
    {
      question: 'Can I return or exchange my purchase?',
      answer: 'Yes, we offer a 30-day return policy for most items. Items must be unworn, in original packaging, and with all tags attached. Some items like sale items may have different return terms.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes, we offer wholesale pricing for bulk orders. Please visit our wholesale page or contact our wholesale team at wholesale@bttshoes.com for more information and pricing.'
    },
    {
      question: 'Is there free shipping?',
      answer: 'Yes, we offer free shipping on all orders over KES 5,000 within Nairobi. For orders below this threshold, standard shipping costs KES 500.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <QuestionMarkCircleIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions, get help with your orders, and learn more about our services.
          </p>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Help Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a category below to find the help you need quickly and easily.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-gray-700">
                      • {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-600">
              Get help faster with these common actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/contact"
              className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors"
            >
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-600">Get in touch with our team</p>
            </Link>
            
            <Link
              href="/track-order"
              className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors"
            >
              <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Track Order</h3>
              <p className="text-sm text-gray-600">Check your order status</p>
            </Link>
            
            <Link
              href="/returns"
              className="bg-yellow-50 p-6 rounded-lg text-center hover:bg-yellow-100 transition-colors"
            >
              <div className="h-12 w-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowPathIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Return</h3>
              <p className="text-sm text-gray-600">Return or exchange items</p>
            </Link>
            
            <Link
              href="/size-guide"
              className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors"
            >
              <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Size Guide</h3>
              <p className="text-sm text-gray-600">Find your perfect fit</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to the most common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still need help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our customer support team is here to help you with any questions or concerns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+254 700 123 456</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8AM-8PM</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">support@bttshoes.com</p>
              <p className="text-sm text-gray-500">24/7 support</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600">Start a conversation</p>
              <p className="text-sm text-gray-500">Instant help</p>
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
              href="/wholesale"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
