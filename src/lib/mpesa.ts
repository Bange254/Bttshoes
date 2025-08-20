// MPESA Daraja API Integration
// This is a mock implementation with placeholder credentials
// Replace with real credentials when available

interface MPESAConfig {
  consumerKey: string;
  consumerSecret: string;
  shortcode: string;
  passkey: string;
  environment: 'sandbox' | 'production';
}

interface STKPushRequest {
  phoneNumber: string;
  amount: number;
  accountReference: string;
  transactionDesc: string;
  callbackUrl: string;
}

interface STKPushResponse {
  success: boolean;
  checkoutRequestId?: string;
  responseCode?: string;
  responseDescription?: string;
  customerMessage?: string;
  errorMessage?: string;
}

interface PaymentStatus {
  success: boolean;
  transactionId?: string;
  mpesaReceiptNumber?: string;
  amount?: number;
  phoneNumber?: string;
  status: 'pending' | 'success' | 'failed' | 'cancelled';
  errorMessage?: string;
}

class MPESAService {
  private config: MPESAConfig;
  private baseUrl: string;

  constructor() {
    this.config = {
      consumerKey: process.env.MPESA_CONSUMER_KEY || 'placeholder-consumer-key',
      consumerSecret: process.env.MPESA_CONSUMER_SECRET || 'placeholder-consumer-secret',
      shortcode: process.env.MPESA_SHORTCODE || '174379',
      passkey: process.env.MPESA_PASSKEY || 'placeholder-passkey',
      environment: (process.env.MPESA_ENVIRONMENT as 'sandbox' | 'production') || 'sandbox',
    };

    this.baseUrl = this.config.environment === 'sandbox' 
      ? 'https://sandbox.safaricom.co.ke'
      : 'https://api.safaricom.co.ke';
  }

  private async getAccessToken(): Promise<string> {
    // Mock implementation - replace with real API call
    if (this.config.consumerKey === 'placeholder-consumer-key') {
      console.log('🔄 MPESA: Using mock access token (placeholder credentials)');
      return 'mock-access-token-' + Date.now();
    }

    try {
      const auth = Buffer.from(`${this.config.consumerKey}:${this.config.consumerSecret}`).toString('base64');
      
      const response = await fetch(`${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${auth}`,
        },
      });

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('MPESA: Failed to get access token:', error);
      throw new Error('Failed to authenticate with MPESA');
    }
  }

  private generateTimestamp(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day}${hour}${minute}${second}`;
  }

  private generatePassword(): string {
    const timestamp = this.generateTimestamp();
    const password = Buffer.from(`${this.config.shortcode}${this.config.passkey}${timestamp}`).toString('base64');
    return password;
  }

  async initiateSTKPush(request: STKPushRequest): Promise<STKPushResponse> {
    // Mock implementation for placeholder credentials
    if (this.config.consumerKey === 'placeholder-consumer-key') {
      console.log('🔄 MPESA: Initiating mock STK push for:', request);
      
      // Simulate different responses based on phone number for testing
      const lastDigit = request.phoneNumber.slice(-1);
      
      if (lastDigit === '1') {
        return {
          success: false,
          errorMessage: 'Invalid phone number format',
        };
      }
      
      if (lastDigit === '2') {
        return {
          success: false,
          errorMessage: 'Insufficient funds',
        };
      }
      
      // Default success response
      return {
        success: true,
        checkoutRequestId: `mock-checkout-${Date.now()}`,
        responseCode: '0',
        responseDescription: 'Success. Request accepted for processing',
        customerMessage: 'Success. Request accepted for processing',
      };
    }

    try {
      const accessToken = await this.getAccessToken();
      const timestamp = this.generateTimestamp();
      const password = this.generatePassword();

      const payload = {
        BusinessShortCode: this.config.shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: request.amount,
        PartyA: request.phoneNumber,
        PartyB: this.config.shortcode,
        PhoneNumber: request.phoneNumber,
        CallBackURL: request.callbackUrl,
        AccountReference: request.accountReference,
        TransactionDesc: request.transactionDesc,
      };

      const response = await fetch(`${this.baseUrl}/mpesa/stkpush/v1/processrequest`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.ResponseCode === '0') {
        return {
          success: true,
          checkoutRequestId: data.CheckoutRequestID,
          responseCode: data.ResponseCode,
          responseDescription: data.ResponseDescription,
          customerMessage: data.CustomerMessage,
        };
      } else {
        return {
          success: false,
          errorMessage: data.ResponseDescription || 'STK push failed',
        };
      }
    } catch (error) {
      console.error('MPESA: STK push failed:', error);
      return {
        success: false,
        errorMessage: 'Failed to initiate payment',
      };
    }
  }

  async checkPaymentStatus(checkoutRequestId: string): Promise<PaymentStatus> {
    // Mock implementation for placeholder credentials
    if (this.config.consumerKey === 'placeholder-consumer-key') {
      console.log('🔄 MPESA: Checking mock payment status for:', checkoutRequestId);
      
      // Simulate different statuses based on checkout request ID
      const randomStatus = Math.random();
      
      if (randomStatus < 0.1) {
        return {
          success: false,
          status: 'failed',
          errorMessage: 'Payment failed',
        };
      }
      
      if (randomStatus < 0.2) {
        return {
          success: false,
          status: 'cancelled',
          errorMessage: 'Payment cancelled by user',
        };
      }
      
      if (randomStatus < 0.5) {
        return {
          success: false,
          status: 'pending',
        };
      }
      
      // Success response
      return {
        success: true,
        status: 'success',
        transactionId: `mock-txn-${Date.now()}`,
        mpesaReceiptNumber: `MP${Date.now().toString().slice(-8)}`,
        amount: 1000, // Mock amount
        phoneNumber: '254700123456',
      };
    }

    try {
      const accessToken = await this.getAccessToken();
      const timestamp = this.generateTimestamp();
      const password = this.generatePassword();

      const payload = {
        BusinessShortCode: this.config.shortcode,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestId,
      };

      const response = await fetch(`${this.baseUrl}/mpesa/stkpushquery/v1/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.ResponseCode === '0') {
        return {
          success: true,
          status: 'success',
          transactionId: data.MpesaReceiptNumber,
          mpesaReceiptNumber: data.MpesaReceiptNumber,
          amount: data.Amount,
          phoneNumber: data.PhoneNumber,
        };
      } else if (data.ResponseCode === '1032') {
        return {
          success: false,
          status: 'cancelled',
          errorMessage: 'Payment cancelled by user',
        };
      } else if (data.ResponseCode === '1037') {
        return {
          success: false,
          status: 'pending',
        };
      } else {
        return {
          success: false,
          status: 'failed',
          errorMessage: data.ResponseDescription || 'Payment failed',
        };
      }
    } catch (error) {
      console.error('MPESA: Payment status check failed:', error);
      return {
        success: false,
        status: 'failed',
        errorMessage: 'Failed to check payment status',
      };
    }
  }

  formatPhoneNumber(phoneNumber: string): string {
    // Remove any non-digit characters
    let cleaned = phoneNumber.replace(/\D/g, '');
    
    // Handle different formats
    if (cleaned.startsWith('0')) {
      cleaned = '254' + cleaned.slice(1);
    } else if (cleaned.startsWith('+254')) {
      cleaned = cleaned.slice(1);
    } else if (cleaned.startsWith('254')) {
      // Already in correct format
    } else {
      // Assume it's a local number without country code
      cleaned = '254' + cleaned;
    }
    
    return cleaned;
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const formatted = this.formatPhoneNumber(phoneNumber);
    // Kenyan mobile numbers: 254 7XX XXX XXX or 254 1XX XXX XXX
    const kenyaPattern = /^254[17]\d{8}$/;
    return kenyaPattern.test(formatted);
  }
}

export const mpesaService = new MPESAService();
export type { STKPushRequest, STKPushResponse, PaymentStatus };

