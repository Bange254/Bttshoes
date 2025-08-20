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
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - BTT Shoes',
  description: 'Find answers to common questions about BTT Shoes products, shipping, returns, payments, and customer service.',
  openGraph: {
    title: 'Frequently Asked Questions - BTT Shoes',
    description: 'Find answers to common questions about BTT Shoes products, shipping, returns, payments, and customer service.',
    type: 'website',
    url: '/faq',
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'Shopping & Orders',
      icon: ShoppingBagIcon,
      questions: [
        {
          question: 'How do I place an order?',
          answer: 'Browse our products, select your desired items, add them to cart, and proceed to checkout. You can pay using MPESA, credit card, or bank transfer.'
        },
        {
          question: 'Can I modify or cancel my order after placing it?',
          answer: 'Orders can be modified or cancelled within 2 hours of placement. Contact our customer service team immediately if you need to make changes.'
        },
        {
          question: 'Do you offer wholesale pricing?',
          answer: 'Yes, we offer special wholesale pricing for businesses. Visit our wholesale page or contact our sales team for more information.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept MPESA, credit cards (Visa, MasterCard), and bank transfers. All payments are processed securely.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: TruckIcon,
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Delivery times may vary by location.'
        },
        {
          question: 'Do you ship to all counties in Kenya?',
          answer: 'Yes, we deliver to all 47 counties in Kenya. Shipping costs and delivery times vary by location.'
        },
        {
          question: 'Is there free shipping?',
          answer: 'Yes, we offer free shipping on orders over KES 5,000 within Nairobi. Other locations may have different thresholds.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, you can track your order using the tracking number provided in your order confirmation email.'
        }
      ]
    },
    {
      title: 'Returns & Exchanges',
      icon: ArrowPathIcon,
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for most items. Products must be unworn and in original condition with tags attached.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Contact our customer service team to initiate a return. We will provide you with a return shipping label and instructions.'
        },
        {
          question: 'How long do refunds take?',
          answer: 'Refunds are processed within 5-7 business days and issued to your original payment method.'
        },
        {
          question: 'Can I exchange for a different size or color?',
          answer: 'Yes, you can exchange items for different sizes or colors if they are available in stock.'
        }
      ]
    },
    {
      title: 'Account & Security',
      icon: UserIcon,
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the header, fill in your details, and verify your email address to create your account.'
        },
        {
          question: 'I forgot my password. What should I do?',
          answer: 'Use the "Forgot Password" link on the sign-in page. We will send you a reset link via email.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Yes, we use industry-standard encryption and security measures to protect your personal and payment information.'
        },
        {
          question: 'Can I save my payment information?',
          answer: 'Yes, you can save your payment methods securely in your account for faster checkout.'
        }
      ]
    },
    {
      title: 'Product Information',
      icon: CogIcon,
      questions: [
        {
          question: 'How do I know what size to order?',
          answer: 'Use our size guide to measure your feet and find the perfect fit. We also provide detailed sizing information for each product.'
        },
        {
          question: 'Are your products authentic?',
          answer: 'Yes, all our products are 100% authentic and sourced directly from authorized manufacturers and distributors.'
        },
        {
          question: 'Do you offer warranty on products?',
          answer: 'Most products come with manufacturer warranty. Check individual product pages for specific warranty information.'
        },
        {
          question: 'Can I see more product photos?',
          answer: 'Yes, each product page includes multiple high-quality images from different angles to help you make an informed decision.'
        }
      ]
    },
    {
      title: 'Customer Service',
      icon: ShieldCheckIcon,
      questions: [
        {
          question: 'How can I contact customer service?',
          answer: 'You can reach us via phone (+254 700 123 456), email (support@bttshoes.com), or live chat on our website.'
        },
        {
          question: 'What are your customer service hours?',
          answer: 'Our customer service team is available Monday to Friday, 8 AM to 6 PM EAT, and Saturday 9 AM to 3 PM EAT.'
        },
        {
          question: 'Do you offer after-sales support?',
          answer: 'Yes, we provide comprehensive after-sales support including product assistance, warranty claims, and technical support.'
        },
        {
          question: 'Can I get help with product recommendations?',
          answer: 'Absolutely! Our team can help you find the perfect shoes based on your needs, style preferences, and budget.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <QuestionMarkCircleIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Find quick answers to common questions about our products, services, and policies.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">
              Search our FAQ or contact our support team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                Browse Help Center
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDownIcon className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-4 bg-white border-l-2 border-green-200 ml-4 mt-2">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/track-order"
              className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors text-center"
            >
              <TruckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-900 mb-2">Track Order</h3>
              <p className="text-blue-800 text-sm">Check your order status</p>
            </Link>
            
            <Link
              href="/size-guide"
              className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors text-center"
            >
              <CogIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-purple-900 mb-2">Size Guide</h3>
              <p className="text-purple-800 text-sm">Find your perfect fit</p>
            </Link>
            
            <Link
              href="/returns"
              className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors text-center"
            >
              <ArrowPathIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-orange-900 mb-2">Returns</h3>
              <p className="text-orange-800 text-sm">Start a return or exchange</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help you with any questions or concerns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <PhoneIcon className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm mb-3">+254 700 123 456</p>
              <p className="text-gray-400 text-xs">Mon-Fri: 8 AM - 6 PM EAT</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <EnvelopeIcon className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-3">support@bttshoes.com</p>
              <p className="text-gray-400 text-xs">Response within 24 hours</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-green-400 hover:bg-green-300 transition-colors"
            >
              Contact Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
