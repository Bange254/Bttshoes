import { Metadata } from 'next';
import { 
    ScaleIcon, 
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Size Guide - BTT Shoes',
  description: 'Find your perfect shoe size with our comprehensive size guide. Learn how to measure your feet and convert between different sizing systems.',
  openGraph: {
    title: 'Size Guide - BTT Shoes',
    description: 'Find your perfect shoe size with our comprehensive size guide. Learn how to measure your feet and convert between different sizing systems.',
    type: 'website',
    url: '/size-guide',
  },
};

export default function SizeGuidePage() {
  const sizeCharts = {
    men: [
      { us: '7', uk: '6.5', eu: '40', cm: '25.5' },
      { us: '7.5', uk: '7', eu: '40.5', cm: '26' },
      { us: '8', uk: '7.5', eu: '41', cm: '26.5' },
      { us: '8.5', uk: '8', eu: '42', cm: '27' },
      { us: '9', uk: '8.5', eu: '42.5', cm: '27.5' },
      { us: '9.5', uk: '9', eu: '43', cm: '28' },
      { us: '10', uk: '9.5', eu: '44', cm: '28.5' },
      { us: '10.5', uk: '10', eu: '44.5', cm: '29' },
      { us: '11', uk: '10.5', eu: '45', cm: '29.5' },
      { us: '11.5', uk: '11', eu: '45.5', cm: '30' },
      { us: '12', uk: '11.5', eu: '46', cm: '30.5' }
    ],
    women: [
      { us: '5', uk: '3', eu: '35', cm: '22.5' },
      { us: '5.5', uk: '3.5', eu: '36', cm: '23' },
      { us: '6', uk: '4', eu: '36.5', cm: '23.5' },
      { us: '6.5', uk: '4.5', eu: '37', cm: '24' },
      { us: '7', uk: '5', eu: '37.5', cm: '24.5' },
      { us: '7.5', uk: '5.5', eu: '38', cm: '25' },
      { us: '8', uk: '6', eu: '38.5', cm: '25.5' },
      { us: '8.5', uk: '6.5', eu: '39', cm: '26' },
      { us: '9', uk: '7', eu: '39.5', cm: '26.5' },
      { us: '9.5', uk: '7.5', eu: '40', cm: '27' },
      { us: '10', uk: '8', eu: '40.5', cm: '27.5' }
    ]
  };

  const measuringSteps = [
    {
      step: 1,
      title: 'Prepare Your Foot',
      description: 'Wear the type of socks you plan to wear with the shoes. Stand on a piece of paper or cardboard.'
    },
    {
      step: 2,
      title: 'Trace Your Foot',
      description: 'Have someone trace around your foot with a pencil, keeping the pencil perpendicular to the paper.'
    },
    {
      step: 3,
      title: 'Measure Length',
      description: 'Measure the longest distance from heel to toe in centimeters or inches.'
    },
    {
      step: 4,
      title: 'Measure Width',
      description: 'Measure the widest part of your foot across the ball of your foot.'
    },
    {
      step: 5,
      title: 'Find Your Size',
      description: 'Use our size chart to find your corresponding shoe size in US, UK, or EU sizing.'
    }
  ];

  const tips = [
    'Measure your feet in the afternoon when they are at their largest',
    'Always measure both feet as they may be different sizes',
    'Leave about 1cm (0.4 inches) of space between your longest toe and the end of the shoe',
    'Consider the type of shoe - athletic shoes may need more room than dress shoes',
    'If you\'re between sizes, go with the larger size for comfort'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
            <ScaleIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Size Guide</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find your perfect fit with our comprehensive size guide. Learn how to measure your feet and convert between different sizing systems.
          </p>
        </div>
      </section>

      {/* How to Measure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Measure Your Feet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to get accurate measurements for the perfect fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {measuringSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Charts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Size Conversion Charts</h2>
            <p className="text-xl text-gray-600">
              Convert between US, UK, EU, and centimeter sizing systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Men's Size Chart */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Men's Sizes</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">US</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">UK</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">EU</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeCharts.men.map((size, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.us}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.uk}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.eu}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Women's Size Chart */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Women's Sizes</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">US</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">UK</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">EU</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeCharts.women.map((size, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.us}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.uk}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.eu}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pro Tips for the Perfect Fit</h2>
            <p className="text-xl text-gray-600">
              Expert advice to ensure you get the most comfortable fit possible.
            </p>
          </div>
          
          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <p className="text-gray-700 text-lg">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Width Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Shoe Widths</h2>
            <p className="text-xl text-gray-600">
              Width is just as important as length for a comfortable fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">N</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Narrow (N)</h3>
              <p className="text-gray-600">For feet that are narrower than average. Provides a snug, secure fit.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">M</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medium (M)</h3>
              <p className="text-gray-600">Standard width for most feet. Offers a comfortable, balanced fit.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">W</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wide (W)</h3>
              <p className="text-gray-600">For feet that are wider than average. Provides extra room and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Sizing Issues</h2>
            <p className="text-xl text-gray-600">
              Learn how to identify and solve common fit problems.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Shoes Too Tight</h3>
                  <p className="text-red-800">
                    If your toes feel cramped or you experience pain, try going up half a size or opt for a wider width.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Shoes Too Loose</h3>
                  <p className="text-yellow-800">
                    If your feet slide around or you get blisters, try going down half a size or choose a narrower width.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <InformationCircleIcon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Breaking In New Shoes</h3>
                  <p className="text-blue-800">
                    New shoes may feel slightly tight initially. Wear them around the house for short periods to break them in gradually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Perfect Fit?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Now that you know your size, explore our collection of comfortable, stylish footwear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/category/all"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Shop All Shoes
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600"
            >
              Need Help?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
