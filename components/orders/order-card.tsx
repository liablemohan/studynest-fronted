import Link from 'next/link';
import { Order } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OrderStatusBadge } from './order-status-badge';
import { formatPrice, formatDate } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface OrderCardProps {
    order: Order;
    linkPrefix?: string;
}

export function OrderCard({ order, linkPrefix = '/student/orders' }: OrderCardProps) {
    return (
        <Card className="transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h3 className="font-semibold">{order.service_title}</h3>
                            <OrderStatusBadge status={order.status} />
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span>Order ID: {order.id}</span>
                            <span>•</span>
                            <span>{formatDate(order.created_at)}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-lg font-bold">{formatPrice(order.total_amount)}</p>
                        </div>
                        <Link href={`${linkPrefix}/${order.id}`}>
                            <Button variant="ghost" size="icon">
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
