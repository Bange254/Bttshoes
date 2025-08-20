import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();

    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing required fields: type, data' },
        { status: 400 }
      );
    }

    let result;

    switch (type) {
      case 'order-confirmation':
        if (!data.orderNumber || !data.customerEmail) {
          return NextResponse.json(
            { error: 'Missing required fields for order confirmation' },
            { status: 400 }
          );
        }
        result = await emailService.sendOrderConfirmation(data);
        break;

      case 'welcome':
        if (!data.customerEmail || !data.customerName) {
          return NextResponse.json(
            { error: 'Missing required fields for welcome email' },
            { status: 400 }
          );
        }
        result = await emailService.sendWelcomeEmail(data);
        break;

      case 'password-reset':
        if (!data.customerEmail || !data.resetLink) {
          return NextResponse.json(
            { error: 'Missing required fields for password reset' },
            { status: 400 }
          );
        }
        result = await emailService.sendPasswordReset(data);
        break;

      case 'admin-order-notification':
        // Only admins can send admin notifications
        if (!session || session.user.role !== 'admin') {
          return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 403 }
          );
        }
        result = await emailService.sendAdminOrderNotification(data);
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        );
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        messageId: result.messageId,
      });
    } else {
      return NextResponse.json(
        { 
          error: result.errorMessage || 'Failed to send email',
          success: false 
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

