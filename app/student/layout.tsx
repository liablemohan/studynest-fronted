'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { useAuthStore } from '@/lib/store/auth-store';

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { isAuthenticated, user } = useAuthStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        } else if (user?.role === 'admin') {
            router.push('/admin');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'student') {
        return null;
    }

    return <DashboardShell role="student">{children}</DashboardShell>;
}
