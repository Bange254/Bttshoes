import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  subcategory?: string;
  brand: string;
  sku: string;
  images: string[];
  sizes: {
    size: string;
    stock: number;
  }[];
  colors: {
    name: string;
    hex: string;
    images: string[];
  }[];
  tags: string[];
  featured: boolean;
  status: 'active' | 'inactive' | 'draft';
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  wholesaleTiers: {
    minQty: number;
    price: number;
  }[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  compareAtPrice: {
    type: Number,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: false,
  },
  brand: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  sizes: [{
    size: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  }],
  colors: [{
    name: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      required: true,
    },
    images: [{
      type: String,
    }],
  }],
  tags: [{
    type: String,
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'draft'],
    default: 'active',
  },
  seoTitle: {
    type: String,
    required: false,
  },
  seoDescription: {
    type: String,
    required: false,
  },
  seoKeywords: [{
    type: String,
  }],
  wholesaleTiers: [{
    minQty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }],
  weight: {
    type: Number,
    required: false,
  },
  dimensions: {
    length: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
  },
}, {
  timestamps: true,
});

// Create indexes for better performance
ProductSchema.index({ category: 1, status: 1 });
ProductSchema.index({ featured: 1, status: 1 });
ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

