import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Order {
    order_id: number;
    created_at: string;
    user_name: string;
    user_email: string;
    paypal_order_id: string;
}

const AdminDashboard: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('/api/orders', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }

                const data = await response.json();
                console.log(data);
                setOrders(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div className='p-6'>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 self-justify-center flex flex-col">
            <h1 className="text-2xl mb-4">Admin Dashboard</h1>
            <table className="min-w-full bg-white text-black p-2">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">User Name</th>
                        <th className="py-2 px-4 border-b">User Email</th>
                        <th className="py-2 px-4 border-b">PayPal Order ID</th>
                        <th className="py-2 px-4 border-b">Details</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
