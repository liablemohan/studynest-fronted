import { Badge } from '@/components/ui/badge';
import { OrderStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

interface OrderStatusBadgeProps {
    status: OrderStatus;
}

const statusConfig: Record<OrderStatus, { label: string; className: string }> = {
    pending: {
        label: 'Pending',
        className: 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100',
    },
    in_progress: {
        label: 'In Progress',
        className: 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100',
    },
    completed: {
        label: 'Completed',
        className: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-100',
    },
    cancelled: {
        label: 'Cancelled',
        className: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-100',
    },
};

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
    const config = statusConfig[status];

    return (
        <Badge variant="outline" className={cn('font-medium', config.className)}>
            {config.label}
        </Badge>
    );
}
