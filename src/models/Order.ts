import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderItem {
  product: mongoose.Types.ObjectId;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
  sku: string;
}

export interface IOrder extends Document {
  orderNumber: string;
  user?: mongoose.Types.ObjectId;
  email: string;
  items: IOrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  currency: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentMethod: 'mpesa' | 'cod' | 'stripe';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentDetails?: {
    transactionId?: string;
    mpesaReceiptNumber?: string;
    phoneNumber?: string;
  };
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    postalCode?: string;
  };
  billingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    postalCode?: string;
  };
  orderType: 'retail' | 'wholesale';
  notes?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
});

const AddressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: false,
  },
});

const OrderSchema = new Schema<IOrder>({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false, // Optional for guest orders
  },
  email: {
    type: String,
    required: true,
  },
  items: [OrderItemSchema],
  subtotal: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
    required: true,
    default: 0,
  },
  tax: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: 'KES',
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['mpesa', 'cod', 'stripe'],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentDetails: {
    transactionId: {
      type: String,
      required: false,
    },
    mpesaReceiptNumber: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
  },
  shippingAddress: AddressSchema,
  billingAddress: AddressSchema,
  orderType: {
    type: String,
    enum: ['retail', 'wholesale'],
    default: 'retail',
  },
  notes: {
    type: String,
    required: false,
  },
  trackingNumber: {
    type: String,
    required: false,
  },
  estimatedDelivery: {
    type: Date,
    required: false,
  },
  deliveredAt: {
    type: Date,
    required: false,
  },
}, {
  timestamps: true,
});

// Create indexes for better performance
OrderSchema.index({ orderNumber: 1 });
OrderSchema.index({ user: 1, createdAt: -1 });
OrderSchema.index({ status: 1, createdAt: -1 });
OrderSchema.index({ email: 1, createdAt: -1 });

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

