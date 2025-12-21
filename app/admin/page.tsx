'use client';

import Link from 'next/link';
import {
    ShoppingBag,
    Clock,
    CheckCircle,
    DollarSign,
    ArrowRight,
    Package,
    Users,
    TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OrderStatusBadge } from '@/components/orders/order-status-badge';
import { useOrdersStore } from '@/lib/store/orders-store';
import { useServicesStore } from '@/lib/store/services-store';
import { formatPrice, formatDate } from '@/lib/utils';

export default function AdminDashboardPage() {
    const { orders } = useOrdersStore();
    const { services } = useServicesStore();

    const totalRevenue = orders
        .filter((o) => o.status === 'completed')
        .reduce((sum, o) => sum + o.total_amount, 0);

    const stats = [
        {
            title: 'Total Orders',
            value: orders.length,
            icon: ShoppingBag,
            color: 'text-blue-600 bg-blue-100',
        },
        {
            title: 'Pending',
            value: orders.filter((o) => o.status === 'pending').length,
            icon: Clock,
            color: 'text-yellow-600 bg-yellow-100',
        },
        {
            title: 'In Progress',
            value: orders.filter((o) => o.status === 'in_progress').length,
            icon: Package,
            color: 'text-purple-600 bg-purple-100',
        },
        {
            title: 'Revenue',
            value: formatPrice(totalRevenue),
            icon: DollarSign,
            color: 'text-green-600 bg-green-100',
        },
    ];

    const recentOrders = orders.slice(0, 5);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                    Overview of your platform activity and orders.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${stat.color}`}>
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
                <Link href="/admin/orders">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="h-5 w-5 text-primary" />
                                <span className="font-medium">Manage Orders</span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/services">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Package className="h-5 w-5 text-primary" />
                                <span className="font-medium">Manage Services</span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/users">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="font-medium">Manage Users</span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Recent Orders */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Orders</CardTitle>
                    <Link href="/admin/orders">
                        <Button variant="outline" size="sm">
                            View All
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-medium">Order ID</th>
                                    <th className="text-left py-3 px-4 font-medium">Service</th>
                                    <th className="text-left py-3 px-4 font-medium">Status</th>
                                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                                    <th className="text-left py-3 px-4 font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50">
                                        <td className="py-4 px-4 font-mono text-sm">{order.id}</td>
                                        <td className="py-4 px-4">{order.service_title}</td>
                                        <td className="py-4 px-4">
                                            <OrderStatusBadge status={order.status} />
                                        </td>
                                        <td className="py-4 px-4 font-medium">{formatPrice(order.total_amount)}</td>
                                        <td className="py-4 px-4 text-muted-foreground">{formatDate(order.created_at)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
