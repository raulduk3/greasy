import { generateAccessToken } from "@/lib/utils/paypal";
import { PAYPAL_BASE_URL } from "@/lib/utils/papyalConstants";
import { redirect } from "next/dist/server/api-utils";

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
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (data: any) => {
    const accessToken = await generateAccessToken();
    const url = `${PAYPAL_BASE_URL}/v2/checkout/orders`;

    const payload = {
        intent: "CAPTURE",
        redirect_urls: {
            return_url: "https://greasyvocab.com",
            cancel_url: "https://greasyvocab.com",
        },
        purchase_units: [
            {
                reference_id: "F4KCMFURNZJYY",
                amount: {
                    currency_code: "USD",
                    value: data.cost,
                },
            }
        ],
        application_context: {
            brand_name: "GREasy Vocab",
            shipping_preference: "NO_SHIPPING",
            user_action: "PAY_NOW",
        }
    };

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only).
            // Documentation: https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
        method: "POST",
        body: JSON.stringify(payload),
    });

    return handleResponse(response);
};

export async function POST(req: Request) {
    try {
        // use the cart information passed from the front-end to calculate the order amount detals
        const data = await req.json();
        const { jsonResponse, httpStatusCode } = await createOrder(data);
        return Response.json(jsonResponse, { status: httpStatusCode });
    } catch (error) {
        console.error("Failed to create order:", error);
        return Response.json({ error: "Failed to create order." }, { status: 500 });
    }
};