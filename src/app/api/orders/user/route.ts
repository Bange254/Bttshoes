import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import Order from '@/models/Order';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();

    const orders = await Order.find({ user: session.user.id })
      .sort({ createdAt: -1 })
      .populate('items.product', 'name images')
      .lean();

    return NextResponse.json({
      orders: orders.map(order => ({
        _id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentStatus: order.paymentStatus,
        total: order.total,
        subtotal: order.subtotal,
        shipping: order.shipping,
        items: order.items,
        shippingAddress: order.shippingAddress,
        paymentMethod: order.paymentMethod,
        createdAt: order.createdAt,
        estimatedDelivery: order.estimatedDelivery,
        trackingNumber: order.trackingNumber,
      })),
    });
  } catch (error) {
    console.error('User orders fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

