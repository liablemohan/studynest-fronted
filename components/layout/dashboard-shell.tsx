'use client';

import { ReactNode } from 'react';
import { Sidebar } from './sidebar';

interface DashboardShellProps {
    children: ReactNode;
    role: 'student' | 'admin';
}

export function DashboardShell({ children, role }: DashboardShellProps) {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar role={role} />
            <main className="flex-1 overflow-y-auto">
                <div className="container-custom py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
