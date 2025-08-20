BTT Shoes - E-commerce Platform

A comprehensive e-commerce website for BTT Shoes built with Next.js, featuring MPESA integration, email services, wholesale pricing, user authentication, and content management.

Features

Core E-commerce
- Product Catalog - 15 products (10 retail + 5 wholesale-specific)
- User Authentication - NextAuth.js with role-based access
- Shopping Cart - Add/remove items, guest/logged-in checkout
- Order Management - Order history, status tracking
- Search & Filters - Category, price, size, color filtering

Payment Integration
- MPESA Daraja API - STK Push payments with callback handling
- **Mock Payment System - For testing with placeholder credentials
- Order Confirmation - Automated email notifications

Wholesale Features
- Tiered Pricing - Volume discounts up to 40%
- Bulk Ordering - Minimum quantity requirements
- Wholesale Portal - Dedicated B2B interface
- Quote Requests - Custom pricing for large orders




Tech Stack

- Frontend: Next.js 15, React 19, TypeScript
- Styling: Tailwind CSS, Headless UI
- Authentication: NextAuth.js
- Database: MongoDB with Mongoose
- Payments: MPESA Daraja API
- Email: Resend.dev
- Deployment: Vercel
- Content: Markdown/MDX with gray-matter

Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- MPESA Daraja API credentials (optional for testing)
- Resend.dev account (optional for testing)

quick Start

1. Clone and Install

```bash
git clone <repository-url>
cd btt-shoes
npm install
```

2. Environment Setup

Copy the environment example file:

```bash
cp .env.example .env.local
```

Update `.env.local` with your configuration:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/btt-shoes

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# MPESA (optional - uses mock responses if not provided)
MPESA_CONSUMER_KEY=your-consumer-key
MPESA_CONSUMER_SECRET=your-consumer-secret
MPESA_SHORTCODE=174379
MPESA_PASSKEY=your-passkey
MPESA_ENVIRONMENT=sandbox

# Email (optional - uses mock responses if not provided)
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=noreply@bttshoes.com
```
3. Database Setup

Seed the database with initial data:

```bash
npm run seed
```

This creates:
- Admin user: `admin@bttshoes.com` / `admin123`
- Customer user: `customer@example.com` / `customer123`
- 15 products with complete data

4. Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

Configuration

MongoDB Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to `MONGODB_URI` in `.env.local`

MPESA Integration

1. Register for MPESA Daraja API
2. Get your Consumer Key and Secret
3. Configure your shortcode and passkey
4. Set environment variables

Note: The app works with mock MPESA responses if credentials aren't provided.

Email Service

1. Sign up for Resend.dev
2. Get your API key
3. Verify your domain (for production)
4. Set environment variables

Note: The app uses mock email responses if API key isn't provided.

Project Structure

```
btt-shoes/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── blog/              # Blog pages
│   │   ├── profile/           # User profile
│   │   ├── wholesale/         # Wholesale portal
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   └── ui/               # UI components
│   ├── content/              # Static content
│   │   └── blog/             # Blog posts (Markdown)
│   ├── lib/                  # Utility libraries
│   │   ├── auth.ts           # NextAuth configuration
│   │   ├── mongodb.ts        # Database connection
│   │   ├── mpesa.ts          # MPESA integration
│   │   ├── email.ts          # Email service
│   │   └── blog.ts           # Blog utilities
│   ├── models/               # Mongoose models
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   └── Order.ts
│   └── scripts/              # Utility scripts
│       └── seedDatabase.ts   # Database seeding
├── public/                   # Static assets
├── .env.example             # Environment variables template
├── vercel.json              # Vercel configuration
└── README.md               # This file
```

Deployment

Vercel Deployment

1. Connect Repository
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. Environment Variables
   
   Set these in Vercel dashboard:
   
   ```
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-production-secret
   MONGODB_URI=your-mongodb-connection-string
   MPESA_CONSUMER_KEY=your-mpesa-key
   MPESA_CONSUMER_SECRET=your-mpesa-secret
   MPESA_SHORTCODE=your-shortcode
   MPESA_PASSKEY=your-passkey
   MPESA_ENVIRONMENT=production
   RESEND_API_KEY=your-resend-key
   FROM_EMAIL=noreply@bttshoes.com
   ```

3. Domain Configuration
   
   For custom domain (bttshoes.com):
   - Add domain in Vercel dashboard
   - Update DNS records
   - Update `NEXTAUTH_URL` to use custom domain

Production Checklist

- [ ] MongoDB Atlas production cluster configured
- [ ] MPESA production credentials obtained
- [ ] Resend.dev domain verified
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Database seeded with production data


MPESA Testing

The app includes mock MPESA responses for testing:
- Phone numbers ending in `1`: Invalid format error
- Phone numbers ending in `2`: Insufficient funds error
- Other numbers: Success response

Email Testing

Mock email responses are provided when `RESEND_API_KEY` is not set.

Features Overview

User Roles

Customer Features:
- Browse products and categories
- Add items to cart and wishlist
- Place orders with MPESA payment
- View order history and tracking
- Access wholesale pricing (when logged in)
- Manage profile and addresses

Admin Features:
- All customer features
- Access to admin dashboard
- Order management
- User management
- Product management
- Wholesale order oversight

Wholesale Products:
- BTT Business Oxford (Corporate)
- BTT School Uniform Shoes
- BTT Safety Work Boots
- BTT Hotel Slip-On Shoes
- BTT Sports Training Shoes

Payment Flow

1. Customer adds items to cart
2. Proceeds to checkout
3. Enters delivery information
4. Selects MPESA payment
5. Receives STK push notification
6. Completes payment on phone
7. Order confirmed via email
8. Admin receives order notification

Development

Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run seed         # Seed database with initial data
```

Adding New Products

1. Update `src/lib/seedData.ts`
2. Run `npm run seed` to update database
3. Or add via admin interface (when implemented)

Adding Blog Posts

1. Create new `.md` file in `src/content/blog/`
2. Include frontmatter with metadata
3. Blog will automatically appear on site

Customizing Emails

Email templates are in `src/lib/email.ts`. Modify the HTML and text content as needed.

 Troubleshooting

Common Issues
MongoDB Connection Error:
- Check connection string format
- Verify network access in MongoDB Atlas
- Ensure IP whitelist includes your deployment

MPESA Integration Issues:
- Verify credentials are correct
- Check callback URL is accessible
- Ensure proper SSL certificate for production

Email Delivery Problems:
- Verify domain in Resend.dev
- Check API key permissions
- Ensure FROM_EMAIL domain is verified

Build Errors:
- Clear `.next` folder and rebuild
- Check for TypeScript errors
- Verify all dependencies are installed

Getting Help

1. Check the console for error messages
2. Verify environment variables are set correctly
3. Test with mock services first
4. Check network connectivity for external APIs

License

This project is proprietary software developed for BTT Shoes.



NOTE: THIS IS INCOMPLETE PROJECT STILL BEING WORKED ON: 

Developed by: Bange.

