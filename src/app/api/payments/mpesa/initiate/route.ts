import { NextRequest, NextResponse } from 'next/server';
import { mpesaService } from '@/lib/mpesa';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();

    const { phoneNumber, amount, orderNumber } = body;

    // Validate required fields
    if (!phoneNumber || !amount || !orderNumber) {
      return NextResponse.json(
        { error: 'Missing required fields: phoneNumber, amount, orderNumber' },
        { status: 400 }
      );
    }

    // Validate phone number format
    if (!mpesaService.validatePhoneNumber(phoneNumber)) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Please use Kenyan mobile number format.' },
        { status: 400 }
      );
    }

    // Validate amount
    if (amount < 1 || amount > 300000) {
      return NextResponse.json(
        { error: 'Amount must be between KES 1 and KES 300,000' },
        { status: 400 }
      );
    }

    const formattedPhone = mpesaService.formatPhoneNumber(phoneNumber);
    
    // Prepare STK push request
    const stkRequest = {
      phoneNumber: formattedPhone,
      amount: Math.round(amount), // Ensure amount is integer
      accountReference: orderNumber,
      transactionDesc: `Payment for order ${orderNumber} - BTT Shoes`,
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/payments/mpesa/callback`,
    };

    console.log('🔄 Initiating MPESA payment:', {
      orderNumber,
      amount,
      phoneNumber: formattedPhone,
      userId: session?.user?.id,
    });

    const result = await mpesaService.initiateSTKPush(stkRequest);

    if (result.success) {
      return NextResponse.json({
        success: true,
        checkoutRequestId: result.checkoutRequestId,
        message: result.customerMessage || 'Payment request sent to your phone',
      });
    } else {
      return NextResponse.json(
        { 
          error: result.errorMessage || 'Failed to initiate payment',
          success: false 
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('MPESA initiate payment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

