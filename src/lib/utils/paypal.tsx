import checkoutNodeJssdk from '@paypal/checkout-server-sdk'
const { PAYPAL_CLIENT_ID = '', PAYPAL_CLIENT_SECRET = '', PORT = 8888 } = process.env;

export const PAYPAL_BASE_URL = `https://api-m.paypal.com/v1`;

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
        const response = await fetch(`${PAYPAL_BASE_URL}/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        console.log(response);

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};

const configureEnvironment = function () {
    // return process.env.NODE_ENV === 'production'
    return true
        ? new checkoutNodeJssdk.core.LiveEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET)
        : new checkoutNodeJssdk.core.SandboxEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET);
}

const client = function () {
    return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default client