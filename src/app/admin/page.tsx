'use client';

import React, { useState, useEffect } from 'react';
import AdminDashboard from '@/components/AdminDashboard';
import { useRouter } from 'next/navigation';

const AdminPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Optionally, verify the token with the backend
            setIsAuthenticated(true);
        } else {
            router.push('/login');
        }
    }, [router]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AdminDashboard />
        </div>
    );
};

export default AdminPage;
