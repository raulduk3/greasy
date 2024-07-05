import checkoutNodeJssdk from '@paypal/checkout-server-sdk'

export const PAYPAL_CLIENT_ID = (process.env.NODE_ENV === 'production' ? process.env.PAYPAL_CLIENT_ID : process.env.SANDBOX_PAYPAL_CLIENT_ID) || '';
export const PAYPAL_CLIENT_SECRET = (process.env.NODE_ENV === 'production' ? process.env.PAYPAL_CLIENT_SECRET : process.env.SANDBOX_PAYPAL_CLIENT_SECRET) || '';
export const PAYPAL_BASE_URL =  process.env.NODE_ENV === 'development' ? `https://api-m.sandbox.paypal.com` : `https://api-m.paypal.com`;

/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 * @see https://developer.paypal.com/api/rest/authentication/
 */
export const generateAccessToken = async () => {
    try {
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = Buffer.from(
            PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET
        ).toString("base64");
        const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};

const configureEnvironment = function () {
    return process.env.NODE_ENV === 'production'
        ? new checkoutNodeJssdk.core.LiveEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET)
        : new checkoutNodeJssdk.core.SandboxEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET);
}

const client = function () {
    return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default client