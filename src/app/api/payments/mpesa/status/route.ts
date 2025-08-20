import { NextRequest, NextResponse } from 'next/server';
import { mpesaService } from '@/lib/mpesa';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { checkoutRequestId } = body;

    if (!checkoutRequestId) {
      return NextResponse.json(
        { error: 'Missing checkoutRequestId' },
        { status: 400 }
      );
    }

    console.log('🔄 Checking MPESA payment status:', checkoutRequestId);

    const result = await mpesaService.checkPaymentStatus(checkoutRequestId);

    return NextResponse.json({
      success: result.success,
      status: result.status,
      transactionId: result.transactionId,
      mpesaReceiptNumber: result.mpesaReceiptNumber,
      amount: result.amount,
      phoneNumber: result.phoneNumber,
      errorMessage: result.errorMessage,
    });
  } catch (error) {
    console.error('MPESA status check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

