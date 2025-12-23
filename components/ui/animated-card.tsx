'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: 'gold' | 'navy' | 'none';
    enableTilt?: boolean;
    enableGlow?: boolean;
}

export function AnimatedCard({
    children,
    className,
    glowColor = 'gold',
    enableTilt = true,
    enableGlow = true,
}: AnimatedCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!enableTilt || !cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (max 15 degrees)
        const rotateXValue = (mouseY / (rect.height / 2)) * -10;
        const rotateYValue = (mouseX / (rect.width / 2)) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const glowStyles = {
        gold: 'shadow-glow-gold hover:shadow-glow-gold-lg',
        navy: 'hover:shadow-card-hover',
        none: '',
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                'relative rounded-xl bg-card border border-border overflow-hidden',
                'transition-shadow duration-300',
                enableGlow && glowStyles[glowColor],
                className
            )}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            animate={{
                rotateX: enableTilt ? rotateX : 0,
                rotateY: enableTilt ? rotateY : 0,
                scale: isHovered ? 1.02 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow overlay */}
            {enableGlow && glowColor === 'gold' && (
                <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(212, 160, 18, 0.1) 0%, transparent 50%)',
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Content */}
            <div style={{ transform: 'translateZ(0)' }}>
                {children}
            </div>
        </motion.div>
    );
}

// Simplified version for non-interactive cards
export function AnimatedCardStatic({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            className={cn(
                'relative rounded-xl bg-card border border-border overflow-hidden',
                'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
}
