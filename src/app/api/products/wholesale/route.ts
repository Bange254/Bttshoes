import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // For now, allow all logged-in users to access wholesale
    // Later can be restricted to specific wholesale role
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required for wholesale access' },
        { status: 401 }
      );
    }

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    // Build query for wholesale products
    const query: any = {
      status: 'active',
      $or: [
        // BTT brand products (wholesale-specific)
        { brand: 'BTT' },
        // Regular products that have wholesale tiers
        { wholesaleTiers: { $exists: true, $ne: [] } }
      ]
    };

    if (category && category !== 'all') {
      query.category = category;
    }

    if (brand) {
      query.brand = brand;
    }

    const skip = (page - 1) * limit;

    const [products, totalCount] = await Promise.all([
      Product.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Product.countDocuments(query)
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      products: products.map(product => ({
        _id: product._id,
        name: product.name,
        description: product.description,
        shortDescription: product.shortDescription,
        price: product.price,
        category: product.category,
        subcategory: product.subcategory,
        brand: product.brand,
        sku: product.sku,
        images: product.images,
        sizes: product.sizes,
        colors: product.colors,
        tags: product.tags,
        wholesaleTiers: product.wholesaleTiers,
        weight: product.weight,
        dimensions: product.dimensions,
        status: product.status,
      })),
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error('Wholesale products fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

