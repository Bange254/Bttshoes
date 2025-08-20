import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  LockClosedIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Privacy Policy - BTT Shoes',
  description: 'Learn about how BTT Shoes collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  openGraph: {
    title: 'Privacy Policy - BTT Shoes',
    description: 'Learn about how BTT Shoes collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
    type: 'website',
    url: '/privacy',
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <ShieldCheckIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-blue-200 mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, place an order, or contact us:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Payment information (MPESA details, credit card information)</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
                <li>Account credentials</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Cookies and similar technologies</li>
                <li>Location information (if you grant permission)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send order confirmations and updates</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, shipping companies)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure payment processing through trusted partners</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Consent Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">6. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
              </ul>
              <p className="text-gray-700 mb-6">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">7. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party services or integrate with external platforms:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Payment processors (MPESA, credit card companies)</li>
                <li>Social media platforms</li>
                <li>Analytics services</li>
                <li>Advertising networks</li>
              </ul>
              <p className="text-gray-700 mb-6">
                These third-party services have their own privacy policies. We encourage you to review them before providing any personal information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide our services and fulfill orders</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services</li>
              </ul>
              <p className="text-gray-700 mb-6">
                When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">10. International Data Transfers</h2>
              <p className="text-gray-700 mb-6">
                Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with 
                applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">11. Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website 
                and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@bttshoes.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +254 700 123 456</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Shoe Street, Nairobi, Kenya</p>
                <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@bttshoes.com</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">13. Complaints</h2>
              <p className="text-gray-700 mb-6">
                If you believe we have not addressed your privacy concerns adequately, you have the right to lodge a complaint with the relevant data 
                protection authority in your jurisdiction.
              </p>

              <div className="border-t pt-8 mt-12">
                <p className="text-sm text-gray-500 text-center">
                  This privacy policy is effective as of {lastUpdated}. For previous versions, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/terms"
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <DocumentTextIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Terms of Service</h3>
              <p className="text-gray-600 text-sm">Read our terms and conditions</p>
            </Link>
            
            <Link
              href="/help"
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <EyeIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 text-sm">Get help and support</p>
            </Link>
            
            <Link
              href="/contact"
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <LockClosedIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
