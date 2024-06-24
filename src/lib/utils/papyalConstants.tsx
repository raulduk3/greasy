export const PAYPAL_CLIENT_ID = (process.env.NODE_ENV === 'production' ? process.env.PAYPAL_CLIENT_ID : process.env.SANDBOX_PAYPAL_CLIENT_ID) || '';
export const PAYPAL_CLIENT_SECRET = (process.env.NODE_ENV === 'production' ? process.env.PAYPAL_CLIENT_SECRET : process.env.SANDBOX_PAYPAL_CLIENT_SECRET) || '';
export const PAYPAL_BASE_URL =  process.env.NODE_ENV === 'development' ? `https://api-m.sandbox.paypal.com` : `https://api-m.paypal.com`;
