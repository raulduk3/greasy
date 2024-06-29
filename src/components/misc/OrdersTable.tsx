'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

interface Order {
    order_id: number;
    created_at: string;
    user_name: string;
    user_email: string;
    paypal_order_id: string;
}

const OrderTable: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sending, setSending] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = fetch('/api/orders', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Token validation failed');
                    }
                    return response.json();
                }).then(data => {
                    setOrders(data);
                })
                .catch(() => {
                    setError('Failed to fetch orders');
                });
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleResendEmail = (orderId: number) => {
        setSending(true);
        setMessage(null);
        const token = localStorage.getItem('token');
        try {
            fetch(`/api/orders/${orderId}/resend`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Failed to resend email');
                }
                return response.json();
            }).then(() => {
                setMessage('Email sent successfully');
            });
        } catch (error: any) {
            setMessage(error.message);
        } finally {
            setSending(false);
        }
    };

    if (loading) return <div className='p-6'>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="w-lg mb-6 max-w-full overflow-scroll">
            <h2 className="text-xl mb-4">Orders</h2>
            {message && <div className="p-4 mb-4 text-green-500">{message}</div>}
            <table className="bg-white w-full text-black p-2">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">User Name</th>
                        <th className="py-2 px-4 border-b">User Email</th>
                        <th className="py-2 px-4 border-b">PayPal Order ID</th>
                        <th className="py-2 px-4 border-b">Details</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.order_id}>
                            <td className="py-2 px-4 border-b">{order.order_id}</td>
                            <td className="py-2 px-4 border-b">{new Date(order.created_at).toLocaleString()}</td>
                            <td className="py-2 px-4 border-b">{order.user_name}</td>
                            <td className="py-2 px-4 border-b">{order.user_email}</td>
                            <td className="py-2 px-4 border-b">{order.paypal_order_id}</td>
                            <td className="py-2 px-4 border-b">
                                <Link href={`/orders/${order.paypal_order_id}`} className="text-blue-500 underline">View Details</Link>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleResendEmail(order.order_id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    disabled={sending}
                                >
                                    {sending ? 'Sending...' : 'Resend Email'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;