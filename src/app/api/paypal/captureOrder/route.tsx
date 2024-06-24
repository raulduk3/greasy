import client from '@/lib/utils/paypal';
import paypal from '@paypal/checkout-server-sdk';
import { generateAccessToken } from '@/lib/utils/paypal';

import { PAYPAL_BASE_URL } from '@/lib/utils/papyalConstants';

async function handleResponse(response: any) {
    try {
        const jsonResponse = await response.json();
        return {
            jsonResponse,
            httpStatusCode: response.status,
        };
    } catch (err) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
}

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID: number) => {
    const accessToken = await generateAccessToken();
    const url = `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only).
            // Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
    });

    return handleResponse(response);
};

export async function POST(req: Request) {
    try {
        const { orderID } = await req.json();
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        Response.json(jsonResponse, { status: httpStatusCode});
    } catch (error) {
        console.error("Failed to create order:", error);
        Response.json({ error: "Failed to capture order." }, { status: 500 });
    }
};