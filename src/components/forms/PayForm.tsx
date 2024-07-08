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
    const [customAmount, setCustomAmount] = useState<string>(cost);

    async function newOrder() {
        try {
            console.log('customAmount', customAmount);
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
                    cost: customAmount,
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
            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
            } else if (errorDetail) {
                throw new Error(
                    `${errorDetail.description} (${orderData.debug_id})`
                );
            } else {
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
                <p className="text-lg">Please use PayPal to complete your purchase. Donate as much as you want!</p>
            </div>
            <div className="w-full mb-10">
                <div className="border-t border-b py-2">
                    <div className="flex justify-between py-1">
                        <span className="font-semibold">Item:</span>
                        <span className='text-right'>{name}</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between py-1">
                        <span className="font-semibold">Price:</span>
                        <input 
                            type="text" 
                            value={customAmount} 
                            onChange={(e) => setCustomAmount(e.target.value)} 
                            className="text-right max-w border p-1"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Message content={message} />
                <PayPalScriptProvider
                    options={{
                        clientId: "Af9Y7lGXuJAuJbnad2wCA348ncAFjAKnq0CSs30APlpWEl6JHWiYugTR2jxm1fq3eltw2yb9TfU57aOl",
                        currency: 'USD',
                        disableFunding: 'card,credit',
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