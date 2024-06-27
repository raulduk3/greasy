'use client';

import React, { useState, useEffect } from 'react';
import AdminDashboard from '@/components/misc/AdminDashboard';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

const AdminPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            router.push('/login');
        }
    }, [router]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <AdminDashboard />
    );
};

export default AdminPage;
