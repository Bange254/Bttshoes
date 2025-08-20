import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  UsersIcon, 
  GlobeAltIcon, 
  HeartIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us - BTT Shoes',
  description: 'Learn about BTT Shoes, Kenya\'s premier destination for quality footwear. Discover our story, mission, and commitment to excellence.',
  openGraph: {
    title: 'About Us - BTT Shoes',
    description: 'Learn about BTT Shoes, Kenya\'s premier destination for quality footwear. Discover our story, mission, and commitment to excellence.',
    type: 'website',
    url: '/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'We source only the finest materials and work with trusted manufacturers to ensure every product meets our high standards.'
    },
    {
      icon: HeartIcon,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to provide exceptional service and support.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Local Focus',
      description: 'We\'re proud to serve Kenya and contribute to our local economy while bringing global footwear trends to our community.'
    },
    {
      icon: TruckIcon,
      title: 'Reliable Delivery',
      description: 'Fast, secure, and reliable delivery across Kenya with our trusted logistics partners.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years in Business' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Available' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const team = [
    {
      name: 'John Kamau',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'With over 15 years in the footwear industry, John leads BTT Shoes with passion and expertise.'
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      bio: 'Sarah ensures smooth operations and maintains our high standards of customer service.'
    },
    {
      name: 'David Ochieng',
      role: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'David leads our sales team and wholesale partnerships across Kenya.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200"
            alt="About BTT Shoes"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BTT Shoes
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Kenya's premier destination for quality footwear, serving both retail customers and wholesale partners since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2014, BTT Shoes began as a small family business with a simple mission: to provide Kenyans with access to high-quality, affordable footwear.
                </p>
                <p>
                  What started as a single store in Nairobi has grown into one of Kenya's most trusted footwear retailers, serving customers across the country through our online platform and wholesale partnerships.
                </p>
                <p>
                  Today, we're proud to offer a curated selection of footwear from world-renowned brands, alongside our own exclusive collections designed specifically for the Kenyan market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600"
                  alt="Our store"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-blue-800 text-lg">
                To provide every Kenyan with access to high-quality, stylish, and comfortable footwear that enhances their daily life and reflects their personal style.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Our Vision</h3>
              <p className="text-green-800 text-lg">
                To become East Africa's leading footwear destination, known for quality, innovation, and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with customers, partners, and our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind BTT Shoes who work tirelessly to bring you the best footwear experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience BTT Shoes?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust BTT Shoes for their footwear needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/all"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
