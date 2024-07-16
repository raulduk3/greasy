'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import OrderTable from '@/components/misc/OrdersTable';
import WordTable from '@/components/misc/WordsTable';
import LoadingSpinner from '../LoadingSpinner';

const AdminDashboard: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const validateToken = () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            }

            fetch('/api/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Token validation failed');
                }
                return response.json();
            })
            .then(data => {
                if (!data.valid) {
                    router.push('/login');
                } else {
                    setLoading(false);
                }
            })
            .catch(() => {
                setError('Failed to validate token');
                router.push('/login');
            });
        };

        validateToken();
    }, [router]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 overflow-hidden w-10/12 self-justify-center flex flex-col">
            <h1 className="text-2xl mb-4">Admin Dashboard</h1>
            <OrderTable />
            <WordTable />
        </div>
    );
};

export default AdminDashboard;