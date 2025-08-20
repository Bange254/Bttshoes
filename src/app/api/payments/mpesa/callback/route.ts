import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Order from '@/models/Order';
import { emailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('📞 MPESA Callback received:', JSON.stringify(body, null, 2));

    // MPESA callback structure
    const { Body } = body;
    const { stkCallback } = Body;
    
    const {
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata
    } = stkCallback;

    await dbConnect();

    if (ResultCode === 0) {
      // Payment successful
      const metadata = CallbackMetadata?.Item || [];
      
      // Extract payment details from metadata
      const getMetadataValue = (name: string) => {
        const item = metadata.find((item: any) => item.Name === name);
        return item?.Value;
      };

      const amount = getMetadataValue('Amount');
      const mpesaReceiptNumber = getMetadataValue('MpesaReceiptNumber');
      const transactionDate = getMetadataValue('TransactionDate');
      const phoneNumber = getMetadataValue('PhoneNumber');

      console.log('✅ MPESA Payment successful:', {
        CheckoutRequestID,
        amount,
        mpesaReceiptNumber,
        phoneNumber,
      });

      // Find and update the order
      const order = await Order.findOne({
        'paymentDetails.checkoutRequestId': CheckoutRequestID
      });

      if (order) {
        order.paymentStatus = 'paid';
        order.status = 'paid';
        order.paymentDetails = {
          ...order.paymentDetails,
          transactionId: mpesaReceiptNumber,
          mpesaReceiptNumber,
          phoneNumber,
        };

        await order.save();

        console.log('📦 Order updated:', order.orderNumber);

        // Send order confirmation email
        try {
          await emailService.sendOrderConfirmation({
            orderNumber: order.orderNumber,
            customerName: order.shippingAddress.name,
            customerEmail: order.email,
            items: order.items.map((item: any) => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              image: item.image,
            })),
            subtotal: order.subtotal,
            shipping: order.shipping,
            total: order.total,
            shippingAddress: {
              name: order.shippingAddress.name,
              address: order.shippingAddress.address,
              city: order.shippingAddress.city,
              phone: order.shippingAddress.phone,
            },
            paymentMethod: 'MPESA',
            estimatedDelivery: order.estimatedDelivery?.toDateString(),
          });

          // Send admin notification
          await emailService.sendAdminOrderNotification({
            orderNumber: order.orderNumber,
            customerName: order.shippingAddress.name,
            customerEmail: order.email,
            items: order.items.map((item: any) => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              image: item.image,
            })),
            subtotal: order.subtotal,
            shipping: order.shipping,
            total: order.total,
            shippingAddress: {
              name: order.shippingAddress.name,
              address: order.shippingAddress.address,
              city: order.shippingAddress.city,
              phone: order.shippingAddress.phone,
            },
            paymentMethod: 'MPESA',
          });

          console.log('📧 Order confirmation emails sent');
        } catch (emailError) {
          console.error('📧 Failed to send order confirmation emails:', emailError);
        }
      } else {
        console.warn('⚠️ Order not found for CheckoutRequestID:', CheckoutRequestID);
      }
    } else {
      // Payment failed or cancelled
      console.log('❌ MPESA Payment failed:', {
        CheckoutRequestID,
        ResultCode,
        ResultDesc,
      });

      // Update order status to failed
      const order = await Order.findOne({
        'paymentDetails.checkoutRequestId': CheckoutRequestID
      });

      if (order) {
        order.paymentStatus = 'failed';
        order.status = 'cancelled';
        await order.save();
        console.log('📦 Order marked as failed:', order.orderNumber);
      }
    }

    // Always respond with success to MPESA
    return NextResponse.json({ 
      ResultCode: 0,
      ResultDesc: 'Accepted'
    });
  } catch (error) {
    console.error('MPESA callback error:', error);
    
    // Still respond with success to avoid MPESA retries
    return NextResponse.json({ 
      ResultCode: 0,
      ResultDesc: 'Accepted'
    });
  }
}

