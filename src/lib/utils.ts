import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'KES'): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `BTT-${timestamp.slice(-6)}-${random}`;
}

export function generateSKU(name: string, category: string): string {
  const nameCode = name.substring(0, 3).toUpperCase();
  const categoryCode = category.substring(0, 3).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${nameCode}-${categoryCode}-${random}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function calculateWholesalePrice(price: number, quantity: number, tiers: { minQty: number; price: number }[]): number {
  if (!tiers || tiers.length === 0) return price;
  
  // Sort tiers by minQty in descending order
  const sortedTiers = tiers.sort((a, b) => b.minQty - a.minQty);
  
  // Find the applicable tier
  for (const tier of sortedTiers) {
    if (quantity >= tier.minQty) {
      return tier.price;
    }
  }
  
  return price;
}

export function isNairobiDelivery(city: string): boolean {
  return city.toLowerCase().includes('nairobi');
}

export function calculateShipping(city: string, orderType: 'retail' | 'wholesale' = 'retail'): number {
  if (isNairobiDelivery(city)) {
    return orderType === 'wholesale' ? 0 : 200; // Free shipping for wholesale in Nairobi
  }
  return orderType === 'wholesale' ? 500 : 300; // Higher shipping for wholesale outside Nairobi
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+254|0)[17]\d{8}$/; // Kenyan phone number format
  return phoneRegex.test(phone);
}

