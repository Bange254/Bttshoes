'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  LockClosedIcon, 
  CreditCardIcon, 
  TruckIcon, 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { formatPrice } from '@/lib/utils';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  county: string;
  postalCode: string;
}

interface PaymentMethod {
  type: 'mpesa' | 'card' | 'bank';
  details: any;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    county: '',
    postalCode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    type: 'mpesa',
    details: {}
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock cart items - replace with actual cart data
  const cartItems: CartItem[] = [
    {
      _id: '1',
      name: 'Nike Air Max 270',
      price: 12500,
      originalPrice: 15000,
      image: '/api/placeholder/100/100',
      size: '9',
      color: 'Black',
      quantity: 1
    },
    {
      _id: '2',
      name: 'Adidas Ultraboost 22',
      price: 18900,
      image: '/api/placeholder/100/100',
      size: '10',
      color: 'Blue',
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 500;
  const tax = subtotal * 0.16; // 16% VAT
  const total = subtotal + shipping + tax;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep(3);
    }, 2000);
  };

  const handlePlaceOrder = () => {
    // Redirect to order confirmation
    router.push('/orders');
  };

  const counties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Nyeri', 'Machakos',
    'Kakamega', 'Kisii', 'Kericho', 'Bungoma', 'Busia', 'Vihiga', 'Siaya', 'Migori',
    'Homa Bay', 'Nyamira', 'Trans Nzoia', 'Uasin Gishu', 'Elgeyo Marakwet', 'Nandi',
    'West Pokot', 'Samburu', 'Turkana', 'Marsabit', 'Isiolo', 'Meru', 'Tharaka Nithi',
    'Embu', 'Kirinyaga', 'Murang\'a', 'Kiambu', 'Laikipia', 'Nakuru', 'Narok', 'Kajiado',
    'Kericho', 'Bomet', 'Nakuru', 'Laikipia', 'Nyeri', 'Kirinyaga', 'Murang\'a', 'Kiambu',
    'Machakos', 'Makueni', 'Kitui', 'Garissa', 'Wajir', 'Mandera', 'Tana River', 'Lamu'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              BTT Shoes
            </Link>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                Secure Checkout
              </span>
              <LockClosedIcon className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
                }`}>
                  {currentStep > 1 ? <CheckCircleIcon className="h-5 w-5" /> : '1'}
                </div>
                <span className="ml-2 font-medium">Shipping</span>
              </div>
              
              <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 2 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
                }`}>
                  {currentStep > 2 ? <CheckCircleIcon className="h-5 w-5" /> : '2'}
                </div>
                <span className="ml-2 font-medium">Payment</span>
              </div>
              
              <div className={`w-16 h-0.5 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 3 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
                }`}>
                  3
                </div>
                <span className="ml-2 font-medium">Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Address */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
                <form onSubmit={handleAddressSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.firstName}
                        onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.lastName}
                        onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingAddress.email}
                        onChange={(e) => setShippingAddress({...shippingAddress, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.address}
                      onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        County *
                      </label>
                      <select
                        required
                        value={shippingAddress.county}
                        onChange={(e) => setShippingAddress({...shippingAddress, county: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select County</option>
                        {counties.map((county) => (
                          <option key={county} value={county}>{county}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress({...shippingAddress, postalCode: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <input
                        type="radio"
                        id="mpesa"
                        name="paymentMethod"
                        value="mpesa"
                        checked={paymentMethod.type === 'mpesa'}
                        onChange={(e) => setPaymentMethod({...paymentMethod, type: 'mpesa'})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="mpesa" className="ml-3 flex items-center">
                        <div className="h-8 w-8 bg-green-100 rounded flex items-center justify-center mr-3">
                          <PhoneIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">MPESA Mobile Money</span>
                          <p className="text-sm text-gray-500">Pay using your mobile money account</p>
                        </div>
                      </label>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod.type === 'card'}
                        onChange={(e) => setPaymentMethod({...paymentMethod, type: 'card'})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="card" className="ml-3 flex items-center">
                        <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                          <CreditCardIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Credit/Debit Card</span>
                          <p className="text-sm text-gray-500">Visa, MasterCard, American Express</p>
                        </div>
                      </label>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <input
                        type="radio"
                        id="bank"
                        name="paymentMethod"
                        value="bank"
                        checked={paymentMethod.type === 'bank'}
                        onChange={(e) => setPaymentMethod({...paymentMethod, type: 'bank'})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="bank" className="ml-3 flex items-center">
                        <div className="h-8 w-8 bg-purple-100 rounded flex items-center justify-center mr-3">
                          <TruckIcon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Bank Transfer</span>
                          <p className="text-sm text-gray-500">Direct bank transfer (2-3 business days)</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                    >
                      {isProcessing ? 'Processing...' : 'Continue to Review'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Review</h2>
                
                <div className="space-y-6">
                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Shipping Address</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-900">
                        {shippingAddress.firstName} {shippingAddress.lastName}
                      </p>
                      <p className="text-gray-600">{shippingAddress.address}</p>
                      <p className="text-gray-600">
                        {shippingAddress.city}, {shippingAddress.county} {shippingAddress.postalCode}
                      </p>
                      <p className="text-gray-600">{shippingAddress.phone}</p>
                      <p className="text-gray-600">{shippingAddress.email}</p>
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Payment Method</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-900 capitalize">
                        {paymentMethod.type === 'mpesa' && 'MPESA Mobile Money'}
                        {paymentMethod.type === 'card' && 'Credit/Debit Card'}
                        {paymentMethod.type === 'bank' && 'Bank Transfer'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Order Items */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Order Items</h3>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item._id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                          <div className="h-16 w-16 bg-gray-200 rounded flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-500">
                              Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Size: {item.size} | Color: {item.color}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (VAT 16%)</span>
                  <span className="text-gray-900">{formatPrice(tax)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">{formatPrice(total)}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium">Secure Checkout</p>
                    <p>Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
