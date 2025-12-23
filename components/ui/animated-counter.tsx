'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export function AnimatedCounter({
    value,
    suffix = '',
    prefix = '',
    duration = 2,
    className,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeOut * value);

            setCount(currentValue);

            if (now < endTime) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isInView, value, duration]);

    return (
        <motion.span
            ref={ref}
            className={cn('tabular-nums', className)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {prefix}{count.toLocaleString()}{suffix}
        </motion.span>
    );
}

// Stats display component
export function StatsCounter({
    stats,
    className,
}: {
    stats: { value: number; label: string; suffix?: string }[];
    className?: string;
}) {
    return (
        <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-6', className)}>
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="text-3xl md:text-4xl font-bold gradient-text-gold">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
}
