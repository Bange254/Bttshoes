import { Metadata } from 'next';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us - BTT Shoes',
  description: 'Get in touch with BTT Shoes. We\'re here to help with any questions about our products, orders, or wholesale partnerships.',
  openGraph: {
    title: 'Contact Us - BTT Shoes',
    description: 'Get in touch with BTT Shoes. We\'re here to help with any questions about our products, orders, or wholesale partnerships.',
    type: 'website',
    url: '/contact',
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Our Store',
      details: ['123 Shoe Street', 'Nairobi, Kenya'],
      action: 'Get Directions'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+254 700 123 456', '+254 700 123 457'],
      action: 'Call Now'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['info@bttshoes.com', 'support@bttshoes.com'],
      action: 'Send Email'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 6:00 PM'],
      action: 'View Hours'
    }
  ];

  const departments = [
    {
      name: 'Customer Service',
      email: 'support@bttshoes.com',
      phone: '+254 700 123 456',
      description: 'For general inquiries, order status, and returns'
    },
    {
      name: 'Wholesale Inquiries',
      email: 'wholesale@bttshoes.com',
      phone: '+254 700 123 458',
      description: 'For bulk orders and wholesale partnerships'
    },
    {
      name: 'Technical Support',
      email: 'tech@bttshoes.com',
      phone: '+254 700 123 459',
      description: 'For website issues and technical problems'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to help! Get in touch with our team for any questions about our products, orders, or wholesale partnerships.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+254 700 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPinIcon className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">Live Chat</h3>
                </div>
                <p className="text-blue-800 mb-4">
                  Need immediate assistance? Chat with our customer service team in real-time.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Chat
                </button>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Support</h3>
                <p className="text-red-800 text-sm mb-3">
                  For urgent matters outside business hours, please call our emergency line.
                </p>
                <p className="text-red-900 font-semibold">+254 700 123 999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact by Department</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the right team for your specific needs. We're here to help you get the best service possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    <a href={`mailto:${dept.email}`} className="hover:text-blue-600">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    <a href={`tel:${dept.phone}`} className="hover:text-blue-600">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-medium text-gray-900">What are your shipping options?</span>
                <span className="text-gray-500">+</span>
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-medium text-gray-900">How do I return or exchange an item?</span>
                <span className="text-gray-500">+</span>
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-medium text-gray-900">Do you offer wholesale pricing?</span>
                <span className="text-gray-500">+</span>
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                <span className="font-medium text-gray-900">What payment methods do you accept?</span>
                <span className="text-gray-500">+</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
