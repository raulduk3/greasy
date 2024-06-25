'use client';

import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { DynamicFormProps } from './DynamicForm';

// Renders errors or successful transactions on the screen.
function Message({ content }: { content: string | null }) {
    return content ? <p className="text-red-500">{content}</p> : null;
}

interface PayFormProps extends DynamicFormProps {
    cost: string;
    name: string;
}

const PayForm = ({ onSubmit, cost, name }: PayFormProps): React.ReactElement => {
    const [message, setMessage] = useState<string | null>(null);

    console.log(PAYPAL_CLIENT_ID);

    async function newOrder() {
        try {
            const response = await fetch("/api/paypal/createOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart: [
                        {
                            id: name,
                            quantity: "1",
                        },
                    ],
                    cost: cost,
                }),
            });

            const orderData = await response.json();

            if (orderData.id) {
                return orderData.id;
            } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            setMessage(`Could not initiate PayPal Checkout...${error}`);
        }
    }

    async function onApprove(data: any, actions: any) {
        try {
            const response = await fetch(
                `/api/paypal/captureOrder`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        orderID: data.orderID,
                    }),
                }
            );

            const orderData = await response.json();
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you message

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
            } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                    `${errorDetail.description} (${orderData.debug_id})`
                );
            } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const order = await actions.order.capture();
                onSubmit({ paid: true, ...order });
                setMessage(
                    `Transaction ${order.status}: ${order.id}. See console for all available details`
                );
                console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2)
                );
            }
        } catch (error) {
            console.error(error);
            setMessage(
                `Sorry, your transaction could not be processed...${error}`
            );
        }
    }

    return (
        <form className="flex flex-col items-center rounded justify-center p-8 bg-white text-gray-900 shadow-md max-w-full">
            <div className="w-full mb-10">
                <h2 className="text-2xl mb-1">Ready to generate cards</h2>
                <p className="text-lg">Please use PayPal to complete your purchase</p>
            </div>
            <div className="w-full mb-10">
                <div className="border-t border-b py-2">
                    <div className="flex justify-between py-1">
                        <span className="font-semibold">Item:</span>
                        <span className='text-right'>{name}</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="font-semibold">Price:</span>
                        <span>${cost}</span>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Message content={message} />
                <PayPalScriptProvider
                    options={{
                        clientId: "Af9Y7lGXuJAuJbnad2wCA348ncAFjAKnq0CSs30APlpWEl6JHWiYugTR2jxm1fq3eltw2yb9TfU57aOl",
                        disableFunding: 'credit,card',
                        currency: 'USD',
                        intent: 'capture'
                    }}
                >
                    <PayPalButtons
                        style={{
                            color: 'gold',
                            shape: 'rect',
                            label: 'pay',
                            height: 50
                        }}
                        createOrder={newOrder}
                        onApprove={onApprove}
                    />
                </PayPalScriptProvider>
            </div>
        </form>
    );
}

export default PayForm;