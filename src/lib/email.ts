// Email Service using Resend.dev
// This is a mock implementation with placeholder API keys
// Replace with real API key when available

import { Resend } from 'resend';

interface EmailConfig {
  apiKey: string;
  fromEmail: string;
  fromName: string;
}

interface SendEmailRequest {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
}

interface SendEmailResponse {
  success: boolean;
  messageId?: string;
  errorMessage?: string;
}

interface OrderConfirmationData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    phone: string;
  };
  paymentMethod: string;
  estimatedDelivery?: string;
}

interface WelcomeEmailData {
  customerName: string;
  customerEmail: string;
}

interface PasswordResetData {
  customerName: string;
  resetLink: string;
}

class EmailService {
  private resend: Resend | null = null;
  private config: EmailConfig;
  private isPlaceholder: boolean;

  constructor() {
    this.config = {
      apiKey: process.env.RESEND_API_KEY || 'placeholder-api-key',
      fromEmail: process.env.FROM_EMAIL || 'noreply@bttshoes.com',
      fromName: 'BTT Shoes',
    };

    this.isPlaceholder = this.config.apiKey === 'placeholder-api-key';

    if (!this.isPlaceholder) {
      this.resend = new Resend(this.config.apiKey);
    }
  }

  private async sendEmail(request: SendEmailRequest): Promise<SendEmailResponse> {
    // Mock implementation for placeholder API key
    if (this.isPlaceholder) {
      console.log('📧 EMAIL: Sending mock email:', {
        to: request.to,
        subject: request.subject,
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
      });

      // Simulate different responses for testing
      const recipient = Array.isArray(request.to) ? request.to[0] : request.to;
      
      if (recipient.includes('invalid')) {
        return {
          success: false,
          errorMessage: 'Invalid email address',
        };
      }

      return {
        success: true,
        messageId: `mock-message-${Date.now()}`,
      };
    }

    try {
      if (!this.resend) {
        throw new Error('Resend client not initialized');
      }

      const response = await this.resend.emails.send({
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        to: request.to,
        subject: request.subject,
        html: request.html,
        text: request.text,
        reply_to: request.replyTo,
      });

      return {
        success: true,
        messageId: response.data?.id,
      };
    } catch (error: any) {
      console.error('EMAIL: Failed to send email:', error);
      return {
        success: false,
        errorMessage: error.message || 'Failed to send email',
      };
    }
  }

  async sendOrderConfirmation(data: OrderConfirmationData): Promise<SendEmailResponse> {
    const subject = `Order Confirmation - ${data.orderNumber}`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .order-details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .item { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; }
            .item:last-child { border-bottom: none; }
            .item img { width: 60px; height: 60px; object-fit: cover; margin-right: 15px; border-radius: 4px; }
            .totals { margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee; }
            .total-row { display: flex; justify-content: space-between; margin: 5px 0; }
            .total-final { font-weight: bold; font-size: 18px; color: #1f2937; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>BTT Shoes</h1>
              <h2>Order Confirmation</h2>
            </div>
            
            <div class="content">
              <p>Dear ${data.customerName},</p>
              <p>Thank you for your order! We're excited to get your new shoes to you.</p>
              
              <div class="order-details">
                <h3>Order Details</h3>
                <p><strong>Order Number:</strong> ${data.orderNumber}</p>
                <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
                ${data.estimatedDelivery ? `<p><strong>Estimated Delivery:</strong> ${data.estimatedDelivery}</p>` : ''}
                
                <h4>Items Ordered:</h4>
                ${data.items.map(item => `
                  <div class="item">
                    <img src="${item.image}" alt="${item.name}" />
                    <div style="flex: 1;">
                      <div><strong>${item.name}</strong></div>
                      <div>Quantity: ${item.quantity}</div>
                      <div>Price: KES ${item.price.toLocaleString()}</div>
                    </div>
                  </div>
                `).join('')}
                
                <div class="totals">
                  <div class="total-row">
                    <span>Subtotal:</span>
                    <span>KES ${data.subtotal.toLocaleString()}</span>
                  </div>
                  <div class="total-row">
                    <span>Shipping:</span>
                    <span>KES ${data.shipping.toLocaleString()}</span>
                  </div>
                  <div class="total-row total-final">
                    <span>Total:</span>
                    <span>KES ${data.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div class="order-details">
                <h3>Shipping Address</h3>
                <p>
                  ${data.shippingAddress.name}<br>
                  ${data.shippingAddress.address}<br>
                  ${data.shippingAddress.city}<br>
                  Phone: ${data.shippingAddress.phone}
                </p>
              </div>
              
              <p>We'll send you another email when your order ships with tracking information.</p>
              <p>If you have any questions, please don't hesitate to contact us.</p>
            </div>
            
            <div class="footer">
              <p>Thank you for shopping with BTT Shoes!</p>
              <p>Visit us at <a href="https://bttshoes.com">bttshoes.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      Order Confirmation - ${data.orderNumber}
      
      Dear ${data.customerName},
      
      Thank you for your order! We're excited to get your new shoes to you.
      
      Order Number: ${data.orderNumber}
      Payment Method: ${data.paymentMethod}
      ${data.estimatedDelivery ? `Estimated Delivery: ${data.estimatedDelivery}` : ''}
      
      Items Ordered:
      ${data.items.map(item => `- ${item.name} (Qty: ${item.quantity}) - KES ${item.price.toLocaleString()}`).join('\n')}
      
      Subtotal: KES ${data.subtotal.toLocaleString()}
      Shipping: KES ${data.shipping.toLocaleString()}
      Total: KES ${data.total.toLocaleString()}
      
      Shipping Address:
      ${data.shippingAddress.name}
      ${data.shippingAddress.address}
      ${data.shippingAddress.city}
      Phone: ${data.shippingAddress.phone}
      
      We'll send you another email when your order ships with tracking information.
      
      Thank you for shopping with BTT Shoes!
      Visit us at https://bttshoes.com
    `;

    return this.sendEmail({
      to: data.customerEmail,
      subject,
      html,
      text,
    });
  }

  async sendWelcomeEmail(data: WelcomeEmailData): Promise<SendEmailResponse> {
    const subject = 'Welcome to BTT Shoes!';
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .cta { text-align: center; margin: 30px 0; }
            .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>BTT Shoes</h1>
              <h2>Welcome!</h2>
            </div>
            
            <div class="content">
              <p>Dear ${data.customerName},</p>
              <p>Welcome to BTT Shoes! We're thrilled to have you join our community of shoe enthusiasts.</p>
              <p>At BTT Shoes, we're committed to providing you with the highest quality footwear for every occasion. From casual sneakers to formal shoes, we have everything you need to step out in style.</p>
              
              <div class="cta">
                <a href="https://bttshoes.com" class="button">Start Shopping</a>
              </div>
              
              <p>As a new member, you'll enjoy:</p>
              <ul>
                <li>Free shipping on orders over KES 5,000 in Nairobi</li>
                <li>Exclusive access to sales and promotions</li>
                <li>Quality guarantee on all products</li>
                <li>24/7 customer support</li>
              </ul>
              
              <p>If you have any questions, please don't hesitate to reach out to us.</p>
            </div>
            
            <div class="footer">
              <p>Happy shopping!</p>
              <p>The BTT Shoes Team</p>
              <p>Visit us at <a href="https://bttshoes.com">bttshoes.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      Welcome to BTT Shoes!
      
      Dear ${data.customerName},
      
      Welcome to BTT Shoes! We're thrilled to have you join our community of shoe enthusiasts.
      
      At BTT Shoes, we're committed to providing you with the highest quality footwear for every occasion. From casual sneakers to formal shoes, we have everything you need to step out in style.
      
      As a new member, you'll enjoy:
      - Free shipping on orders over KES 5,000 in Nairobi
      - Exclusive access to sales and promotions
      - Quality guarantee on all products
      - 24/7 customer support
      
      Start shopping at https://bttshoes.com
      
      If you have any questions, please don't hesitate to reach out to us.
      
      Happy shopping!
      The BTT Shoes Team
    `;

    return this.sendEmail({
      to: data.customerEmail,
      subject,
      html,
      text,
    });
  }

  async sendPasswordReset(data: PasswordResetData): Promise<SendEmailResponse> {
    const subject = 'Reset Your BTT Shoes Password';
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .cta { text-align: center; margin: 30px 0; }
            .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
            .warning { background: #fef3cd; border: 1px solid #fecaca; padding: 15px; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>BTT Shoes</h1>
              <h2>Password Reset</h2>
            </div>
            
            <div class="content">
              <p>Dear ${data.customerName},</p>
              <p>We received a request to reset your password for your BTT Shoes account.</p>
              
              <div class="cta">
                <a href="${data.resetLink}" class="button">Reset Password</a>
              </div>
              
              <div class="warning">
                <p><strong>Important:</strong> This link will expire in 1 hour for security reasons.</p>
                <p>If you didn't request this password reset, please ignore this email or contact us if you have concerns.</p>
              </div>
              
              <p>For security reasons, please don't share this link with anyone.</p>
            </div>
            
            <div class="footer">
              <p>The BTT Shoes Team</p>
              <p>Visit us at <a href="https://bttshoes.com">bttshoes.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      Reset Your BTT Shoes Password
      
      Dear ${data.customerName},
      
      We received a request to reset your password for your BTT Shoes account.
      
      Click the following link to reset your password:
      ${data.resetLink}
      
      Important: This link will expire in 1 hour for security reasons.
      
      If you didn't request this password reset, please ignore this email or contact us if you have concerns.
      
      For security reasons, please don't share this link with anyone.
      
      The BTT Shoes Team
      Visit us at https://bttshoes.com
    `;

    return this.sendEmail({
      to: data.customerEmail,
      subject,
      html,
      text,
    });
  }

  async sendAdminOrderNotification(data: OrderConfirmationData): Promise<SendEmailResponse> {
    const subject = `New Order Received - ${data.orderNumber}`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .order-details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .item { padding: 10px 0; border-bottom: 1px solid #eee; }
            .item:last-child { border-bottom: none; }
            .totals { margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee; }
            .total-row { display: flex; justify-content: space-between; margin: 5px 0; }
            .total-final { font-weight: bold; font-size: 18px; color: #dc2626; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>BTT Shoes Admin</h1>
              <h2>New Order Alert</h2>
            </div>
            
            <div class="content">
              <p>A new order has been placed on BTT Shoes.</p>
              
              <div class="order-details">
                <h3>Order Information</h3>
                <p><strong>Order Number:</strong> ${data.orderNumber}</p>
                <p><strong>Customer:</strong> ${data.customerName} (${data.customerEmail})</p>
                <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
                <p><strong>Total Amount:</strong> KES ${data.total.toLocaleString()}</p>
                
                <h4>Items:</h4>
                ${data.items.map(item => `
                  <div class="item">
                    <strong>${item.name}</strong><br>
                    Quantity: ${item.quantity} | Price: KES ${item.price.toLocaleString()}
                  </div>
                `).join('')}
                
                <div class="totals">
                  <div class="total-row total-final">
                    <span>Total:</span>
                    <span>KES ${data.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div class="order-details">
                <h3>Shipping Address</h3>
                <p>
                  ${data.shippingAddress.name}<br>
                  ${data.shippingAddress.address}<br>
                  ${data.shippingAddress.city}<br>
                  Phone: ${data.shippingAddress.phone}
                </p>
              </div>
              
              <p>Please process this order promptly.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    return this.sendEmail({
      to: 'admin@bttshoes.com', // Admin email
      subject,
      html,
    });
  }
}

export const emailService = new EmailService();
export type { 
  SendEmailResponse, 
  OrderConfirmationData, 
  WelcomeEmailData, 
  PasswordResetData 
};

