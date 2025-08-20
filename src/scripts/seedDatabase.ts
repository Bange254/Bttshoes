import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dbConnect from '../lib/mongodb';
import User from '../models/User';
import Product from '../models/Product';
import { seedProducts } from '../lib/seedData';

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    await dbConnect();
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🧹 Clearing existing data...');
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('✅ Existing data cleared');

    // Create admin user
    console.log('👤 Creating admin user...');
    const adminPassword = await bcrypt.hash('admin123', 12);
    const adminUser = new User({
      name: 'BTT Admin',
      email: 'admin@bttshoes.com',
      password: adminPassword,
      role: 'admin',
      wishlist: [],
      addresses: [
        {
          type: 'billing',
          name: 'BTT Admin',
          phone: '+254700123456',
          address: '123 Shoe Street',
          city: 'Nairobi',
          postalCode: '00100',
          isDefault: true,
        },
      ],
    });
    await adminUser.save();
    console.log('✅ Admin user created:', adminUser.email);

    // Create demo customer user
    console.log('👤 Creating demo customer user...');
    const customerPassword = await bcrypt.hash('customer123', 12);
    const customerUser = new User({
      name: 'Demo Customer',
      email: 'customer@example.com',
      password: customerPassword,
      role: 'customer',
      wishlist: [],
      addresses: [
        {
          type: 'shipping',
          name: 'Demo Customer',
          phone: '+254700654321',
          address: '456 Customer Avenue',
          city: 'Nairobi',
          postalCode: '00200',
          isDefault: true,
        },
      ],
    });
    await customerUser.save();
    console.log('✅ Demo customer user created:', customerUser.email);

    // Seed products
    console.log('📦 Seeding products...');
    let createdCount = 0;
    
    for (const productData of seedProducts) {
      try {
        const product = new Product(productData);
        await product.save();
        createdCount++;
        console.log(`✅ Created product: ${product.name} (${product.sku})`);
      } catch (error) {
        console.error(`❌ Failed to create product: ${productData.name}`, error);
      }
    }

    console.log(`✅ Successfully created ${createdCount} products`);

    // Summary
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const retailProducts = await Product.countDocuments({ 
      category: { $in: ['sneakers', 'boots', 'formal'] },
      brand: { $ne: 'BTT' }
    });
    const wholesaleProducts = await Product.countDocuments({ brand: 'BTT' });

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('📊 Summary:');
    console.log(`   👥 Users: ${totalUsers}`);
    console.log(`   📦 Total Products: ${totalProducts}`);
    console.log(`   🛍️  Retail Products: ${retailProducts}`);
    console.log(`   🏢 Wholesale Products: ${wholesaleProducts}`);
    console.log('\n🔐 Demo Accounts:');
    console.log('   Admin: admin@bttshoes.com / admin123');
    console.log('   Customer: customer@example.com / customer123');

  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run the seeding script
if (require.main === module) {
  seedDatabase();
}

export default seedDatabase;

