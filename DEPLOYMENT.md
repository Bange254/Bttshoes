# BTT Shoes - Deployment Guide

This guide covers the complete deployment process for the BTT Shoes e-commerce platform on Vercel.

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] MongoDB Atlas cluster created and configured
- [ ] MPESA Daraja API credentials obtained (optional)
- [ ] Resend.dev account setup and domain verified (optional)
- [ ] Vercel account created
- [ ] Domain purchased (bttshoes.com)

### 2. Code Preparation
- [ ] All environment variables documented
- [ ] Database seeding script tested
- [ ] Build process verified locally
- [ ] All dependencies installed

## 🚀 Vercel Deployment Steps

### Step 1: Repository Setup

1. **Push code to Git repository** (GitHub, GitLab, or Bitbucket)
   ```bash
   git add .
   git commit -m "Initial BTT Shoes deployment"
   git push origin main
   ```

### Step 2: Vercel Project Creation

1. **Login to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your Git provider

2. **Import Project**
   - Click "New Project"
   - Select your BTT Shoes repository
   - Choose "Next.js" framework (auto-detected)

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Development Command: `npm run dev`

### Step 3: Environment Variables

Set these environment variables in Vercel dashboard:

#### Required Variables
```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret-key-here
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/btt-shoes
```

#### Optional Variables (for full functionality)
```env
MPESA_CONSUMER_KEY=your-mpesa-consumer-key
MPESA_CONSUMER_SECRET=your-mpesa-consumer-secret
MPESA_SHORTCODE=your-mpesa-shortcode
MPESA_PASSKEY=your-mpesa-passkey
MPESA_ENVIRONMENT=production
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=noreply@bttshoes.com
```

### Step 4: Initial Deployment

1. **Deploy**
   - Click "Deploy" in Vercel dashboard
   - Wait for build to complete
   - Note the generated URL (e.g., `btt-shoes.vercel.app`)

2. **Test Deployment**
   - Visit the generated URL
   - Verify homepage loads correctly
   - Test basic navigation

## 🌐 Custom Domain Setup

### Step 1: Add Domain to Vercel

1. **In Vercel Dashboard**
   - Go to your project settings
   - Click "Domains"
   - Add `bttshoes.com` and `www.bttshoes.com`

### Step 2: Configure DNS

Update your domain's DNS settings:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Update Environment Variables

Update `NEXTAUTH_URL` to use your custom domain:
```env
NEXTAUTH_URL=https://bttshoes.com
```

## 🗄️ Database Setup

### Step 1: MongoDB Atlas Configuration

1. **Create Production Cluster**
   - Login to MongoDB Atlas
   - Create new cluster (M0 free tier or higher)
   - Configure network access (allow all IPs: 0.0.0.0/0)

2. **Create Database User**
   - Create user with read/write permissions
   - Note username and password

3. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with actual password

### Step 2: Database Seeding

1. **Local Seeding** (recommended)
   ```bash
   # Set production MongoDB URI in .env.local
   MONGODB_URI=your-production-connection-string
   
   # Run seeding script
   npm run seed
   ```

2. **Alternative: Vercel Function Seeding**
   - Create temporary API route for seeding
   - Call the route once after deployment
   - Remove the route after seeding

## 🔧 Service Integrations

### MPESA Daraja API Setup

1. **Register for Production**
   - Visit [developer.safaricom.co.ke](https://developer.safaricom.co.ke)
   - Create production app
   - Get production credentials

2. **Configure Callback URL**
   - Set callback URL to: `https://bttshoes.com/api/payments/mpesa/callback`
   - Ensure SSL certificate is active

3. **Test Integration**
   - Use production phone numbers
   - Verify callback handling
   - Check order confirmation emails

### Resend.dev Email Setup

1. **Domain Verification**
   - Add domain to Resend.dev
   - Configure DNS records for verification
   - Wait for verification completion

2. **API Key Configuration**
   - Generate production API key
   - Set appropriate permissions
   - Update environment variables

3. **Test Email Delivery**
   - Send test welcome email
   - Verify order confirmation emails
   - Check spam folder if needed

## 🔒 Security Configuration

### SSL Certificate
- Vercel automatically provides SSL certificates
- Verify HTTPS is working for all pages
- Check mixed content warnings

### Environment Variables Security
- Never commit `.env` files to repository
- Use Vercel's environment variable encryption
- Rotate secrets regularly

### Database Security
- Use strong passwords for database users
- Enable MongoDB Atlas security features
- Monitor access logs

## 📊 Monitoring and Analytics

### Vercel Analytics
1. **Enable Analytics**
   - Go to project settings in Vercel
   - Enable Web Analytics
   - Add analytics script to layout

### Error Monitoring
1. **Vercel Functions Logs**
   - Monitor API route performance
   - Check for errors in function logs
   - Set up alerts for critical errors

### Performance Monitoring
1. **Core Web Vitals**
   - Monitor loading performance
   - Check mobile responsiveness
   - Optimize images and assets

## 🚀 Post-Deployment Tasks

### Step 1: Functionality Testing

Test all major features:
- [ ] User registration and login
- [ ] Product browsing and search
- [ ] Shopping cart functionality
- [ ] MPESA payment flow
- [ ] Order confirmation emails
- [ ] Wholesale portal access
- [ ] Blog post rendering
- [ ] Admin panel access

### Step 2: SEO Setup

1. **Submit Sitemap**
   - Submit `https://bttshoes.com/sitemap.xml` to Google Search Console
   - Verify robots.txt is accessible

2. **Google Analytics**
   - Set up Google Analytics 4
   - Add tracking code to layout
   - Configure conversion goals

### Step 3: Performance Optimization

1. **Image Optimization**
   - Verify Next.js Image component is working
   - Check image loading performance
   - Optimize large images

2. **Caching Configuration**
   - Verify Vercel edge caching
   - Check API response times
   - Monitor database query performance

## 🔄 Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main
# Vercel automatically deploys
```

### Preview Deployments

- Every pull request gets a preview deployment
- Test changes before merging to main
- Share preview URLs for stakeholder review

## 🐛 Troubleshooting

### Common Deployment Issues

**Build Failures:**
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm run build  # Test locally first
npm install    # Ensure all dependencies
```

**Environment Variable Issues:**
- Verify all required variables are set
- Check for typos in variable names
- Ensure values don't contain special characters

**Database Connection Issues:**
- Verify MongoDB Atlas network access
- Check connection string format
- Test connection from local environment

**MPESA Integration Issues:**
- Verify production credentials
- Check callback URL accessibility
- Ensure SSL certificate is valid

### Performance Issues

**Slow Loading:**
- Check image optimization
- Monitor API response times
- Use Vercel Analytics for insights

**High Memory Usage:**
- Monitor function execution logs
- Optimize database queries
- Check for memory leaks

## 📞 Support and Maintenance

### Regular Maintenance Tasks

**Weekly:**
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Verify backup systems

**Monthly:**
- [ ] Update dependencies
- [ ] Review security settings
- [ ] Analyze user feedback

**Quarterly:**
- [ ] Performance optimization review
- [ ] Security audit
- [ ] Feature usage analysis

### Getting Help

1. **Vercel Support**
   - Check Vercel documentation
   - Use Vercel community forums
   - Contact Vercel support for critical issues

2. **MongoDB Atlas Support**
   - MongoDB documentation
   - Atlas support portal
   - Community forums

3. **MPESA Support**
   - Safaricom developer portal
   - Technical support channels
   - Community forums

---

## 🎉 Deployment Complete!

Your BTT Shoes e-commerce platform is now live at `https://bttshoes.com`

**Next Steps:**
1. Monitor initial traffic and performance
2. Gather user feedback
3. Plan feature enhancements
4. Set up regular maintenance schedule

**Key URLs:**
- Website: `https://bttshoes.com`
- Admin Panel: `https://bttshoes.com/admin`
- Wholesale Portal: `https://bttshoes.com/wholesale`
- Blog: `https://bttshoes.com/blog`

**Demo Accounts:**
- Admin: `admin@bttshoes.com` / `admin123`
- Customer: `customer@example.com` / `customer123`

