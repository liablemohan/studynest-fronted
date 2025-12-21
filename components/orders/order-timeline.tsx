import { Check, Clock, Package, Truck } from 'lucide-react';
import { OrderStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

interface OrderTimelineProps {
    status: OrderStatus;
}

const steps = [
    { id: 'pending', label: 'Order Placed', icon: Clock },
    { id: 'in_progress', label: 'In Progress', icon: Package },
    { id: 'completed', label: 'Completed', icon: Check },
];

export function OrderTimeline({ status }: OrderTimelineProps) {
    const getCurrentStep = () => {
        if (status === 'cancelled') return -1;
        if (status === 'pending') return 0;
        if (status === 'in_progress') return 1;
        if (status === 'completed') return 2;
        return 0;
    };

    const currentStep = getCurrentStep();

    if (status === 'cancelled') {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-800 font-medium">This order has been cancelled</p>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted">
                <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
                {steps.map((step, index) => {
                    const isCompleted = index <= currentStep;
                    const isCurrent = index === currentStep;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-col items-center"
                        >
                            <div
                                className={cn(
                                    'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                                    isCompleted
                                        ? 'bg-primary border-primary text-primary-foreground'
                                        : 'bg-background border-muted text-muted-foreground',
                                    isCurrent && 'ring-4 ring-primary/20'
                                )}
                            >
                                <step.icon className="h-5 w-5" />
                            </div>
                            <span
                                className={cn(
                                    'mt-2 text-sm font-medium',
                                    isCompleted ? 'text-foreground' : 'text-muted-foreground'
                                )}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
