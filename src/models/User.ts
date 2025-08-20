import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'customer' | 'admin';
  image?: string;
  emailVerified?: Date;
  wishlist: mongoose.Types.ObjectId[];
  addresses: {
    type: 'billing' | 'shipping';
    name: string;
    phone: string;
    address: string;
    city: string;
    postalCode?: string;
    isDefault: boolean;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // Optional for OAuth users
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
  image: {
    type: String,
    required: false,
  },
  emailVerified: {
    type: Date,
    required: false,
  },
  wishlist: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],
  addresses: [{
    type: {
      type: String,
      enum: ['billing', 'shipping'],
      required: true,
    },
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
    isDefault: {
      type: Boolean,
      default: false,
    },
  }],
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

