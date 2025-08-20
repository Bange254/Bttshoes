import { Metadata } from 'next';
import Link from 'next/link';
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Terms of Service - BTT Shoes',
  description: 'Read our terms and conditions for using BTT Shoes services. Learn about your rights and responsibilities as a customer.',
  openGraph: {
    title: 'Terms of Service - BTT Shoes',
    description: 'Read our terms and conditions for using BTT Shoes services. Learn about your rights and responsibilities as a customer.',
    type: 'website',
    url: '/terms',
  },
};

export default function TermsPage() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <DocumentTextIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-blue-200 mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using the BTT Shoes website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                BTT Shoes provides an online platform for purchasing footwear and related products. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Online shopping for shoes and accessories</li>
                <li>Wholesale ordering for businesses</li>
                <li>Customer support and assistance</li>
                <li>Order tracking and management</li>
                <li>Payment processing through MPESA and other methods</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">3. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our service, you may be required to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Updating your account information as necessary</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">4. Product Information and Pricing</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product information, but we do not warrant that product descriptions, prices, or other content is accurate, 
                complete, reliable, current, or error-free. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Modify or discontinue products at any time</li>
                <li>Change prices without prior notice</li>
                <li>Correct any errors in product information</li>
                <li>Limit quantities of any product</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">5. Orders and Payment</h2>
              <p className="text-gray-700 mb-4">
                By placing an order, you offer to purchase the product at the price listed. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Accept or decline any order</li>
                <li>Cancel orders if products are unavailable</li>
                <li>Require additional verification for large orders</li>
                <li>Modify order processing times based on availability</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Payment must be completed before order processing begins. We accept MPESA, credit cards, and bank transfers as payment methods.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">6. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-4">
                We offer various shipping options with different delivery times and costs:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Standard shipping: 3-5 business days</li>
                <li>Express shipping: 1-2 business days</li>
                <li>Free shipping on orders over KES 5,000 within Nairobi</li>
                <li>Delivery to all counties in Kenya</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Delivery times are estimates and may vary based on location and circumstances beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">7. Returns and Refunds</h2>
              <p className="text-gray-700 mb-4">
                We offer a 30-day return policy for most items. Returns must meet the following criteria:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Items must be unworn and in original condition</li>
                <li>Original packaging and tags must be intact</li>
                <li>Return must be initiated within 30 days of delivery</li>
                <li>Some items may be excluded from returns</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Refunds are processed within 5-7 business days and issued to the original payment method.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">8. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">
                You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited activities include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with the service or other users</li>
                <li>Using the service for commercial purposes without authorization</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">9. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                The content on our website, including text, graphics, logos, images, and software, is the property of BTT Shoes and is protected by 
                copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">10. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                BTT Shoes shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our 
                service. Our total liability shall not exceed the amount paid by you for the specific product giving rise to the claim.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">11. Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                Our service is provided "as is" without warranties of any kind. We disclaim all warranties, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the service will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy of product information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">12. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to indemnify and hold harmless BTT Shoes from any claims, damages, or expenses arising from your use of our service, 
                violation of these terms, or violation of any rights of another party.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">13. Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our service, to understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">14. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms or your use 
                of our service shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">15. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued 
                use of our service after such changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@bttshoes.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +254 700 123 456</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Shoe Street, Nairobi, Kenya</p>
                <p className="text-gray-700"><strong>Legal Department:</strong> legal@bttshoes.com</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">17. Severability</h2>
              <p className="text-gray-700 mb-6">
                If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum 
                extent necessary so that these terms will otherwise remain in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">18. Entire Agreement</h2>
              <p className="text-gray-700 mb-6">
                These terms constitute the entire agreement between you and BTT Shoes regarding the use of our service, superseding any prior agreements 
                or understandings.
              </p>

              <div className="border-t pt-8 mt-12">
                <p className="text-sm text-gray-500 text-center">
                  These terms of service are effective as of {lastUpdated}. For previous versions, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Important Notices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Consumer Rights</h3>
                  <p className="text-blue-800 text-sm">
                    These terms do not affect your statutory rights as a consumer under Kenyan law.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Legal Compliance</h3>
                  <p className="text-yellow-800 text-sm">
                    Users must comply with all applicable laws and regulations when using our service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/privacy"
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">Learn about data protection</p>
            </Link>
            
            <Link
              href="/help"
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 text-sm">Get help and support</p>
            </Link>
            
            <Link
              href="/contact"
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExclamationTriangleIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
