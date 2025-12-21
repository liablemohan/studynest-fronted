'use client';

import { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { OrderCard } from '@/components/orders/order-card';
import { useAuthStore } from '@/lib/store/auth-store';
import { useOrdersStore } from '@/lib/store/orders-store';
import { OrderStatus } from '@/lib/types';
import { Package } from 'lucide-react';

const statusTabs = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
];

export default function StudentDashboardPage() {
    const { user } = useAuthStore();
    const { getOrdersByStudentId } = useOrdersStore();
    const [activeTab, setActiveTab] = useState('all');

    const orders = useMemo(() => {
        if (!user) return [];
        return getOrdersByStudentId(user.id);
    }, [user, getOrdersByStudentId]);

    const filteredOrders = useMemo(() => {
        if (activeTab === 'all') return orders;
        return orders.filter((order) => order.status === activeTab);
    }, [orders, activeTab]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Welcome back, {user?.full_name?.split(' ')[0]}!</h1>
                <p className="text-muted-foreground mt-1">
                    Here's an overview of your orders and activity.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatsCard
                    label="Total Orders"
                    value={orders.length}
                />
                <StatsCard
                    label="Pending"
                    value={orders.filter((o) => o.status === 'pending').length}
                />
                <StatsCard
                    label="In Progress"
                    value={orders.filter((o) => o.status === 'in_progress').length}
                />
                <StatsCard
                    label="Completed"
                    value={orders.filter((o) => o.status === 'completed').length}
                />
            </div>

            {/* Orders List */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Your Orders</h2>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                        {statusTabs.map((tab) => (
                            <TabsTrigger key={tab.value} value={tab.value}>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value={activeTab} className="space-y-4">
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <OrderCard key={order.id} order={order} />
                            ))
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>No orders found</p>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

function StatsCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="bg-card border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    );
}
