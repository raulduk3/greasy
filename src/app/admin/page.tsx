'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import OrderTable from '@/components/misc/OrdersTable';
import WordTable from '@/components/misc/WordsTable';

export const dynamic = 'force-dynamic';

const AdminDashboard: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            }

            try {
                const response = await fetch('/api/validateToken', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token }),
                });

                if (!response.ok) {
                    router.push('/login');
                } else {
                    const data = await response.json();
                    if (!data.valid) {
                        router.push('/login');
                    } else {
                        setLoading(false);
                    }
                }
            } catch (error) {
                setError('Failed to validate token');
                router.push('/login');
            }
        };

        validateToken();
    }, [router]);

    if (loading) return <div className='p-6'>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 overflow-hidden max-w-10/12 self-justify-center flex flex-col">
            <h1 className="text-2xl mb-4">Admin Dashboard</h1>
            <OrderTable />
            <WordTable />
        </div>
    );
};

export default AdminDashboard;