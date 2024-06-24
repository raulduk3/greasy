'use client';

import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { userVerify } from '@/lib/user/verify';
import { DynamicFormProps } from './DynamicForm';

// Renders errors or successfull transactions on the screen.
function Message({ content }: { content: any }) {
    return <p>{content}</p>;
}

interface PayFormProps extends DynamicFormProps {
    cost: string;
    name: string;
}

const PayForm = ({ onSubmit, cost, name }: PayFormProps): React.ReactElement => {
    const [message, setMessage] = useState<string | null>(null);

    async function createOrder(data: any, actions: any) {
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
            const order = await actions.order.capture();
            onSubmit({ order });
        } catch (error) {
            console.error(error);
            setMessage(`Could not capture the order...${error}`);
        }
    }

    return (
        <>
            <Message content={message} />
            <PayPalScriptProvider
                options={{
                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '',
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
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </>
    );
}

export default PayForm;
