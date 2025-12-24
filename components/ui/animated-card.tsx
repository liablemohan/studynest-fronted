'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: 'gold' | 'navy' | 'beige' | 'none';
    enableTilt?: boolean;
    enableGlow?: boolean;
    enableShine?: boolean;
}

export function AnimatedCard({
    children,
    className,
    glowColor = 'gold',
    enableTilt = true,
    enableGlow = true,
    enableShine = true,
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

        const rotateXValue = (mouseY / (rect.height / 2)) * -8;
        const rotateYValue = (mouseX / (rect.width / 2)) * 8;

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
        gold: 'hover:shadow-glow-gold',
        navy: 'hover:shadow-glow-navy',
        beige: 'hover:shadow-glow-beige',
        none: '',
    };

    const glowColors = {
        gold: 'rgba(212, 160, 18, 0.1)',
        navy: 'rgba(31, 43, 71, 0.15)',
        beige: 'rgba(212, 196, 168, 0.1)',
        none: 'transparent',
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                'relative rounded-2xl glass-card overflow-hidden',
                'transition-shadow duration-500',
                enableGlow && glowStyles[glowColor],
                enableShine && 'card-shine',
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
            {/* Gradient overlay on hover */}
            {enableGlow && (
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${glowColors[glowColor]} 0%, transparent 70%)`,
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                />
            )}

            <div style={{ transform: 'translateZ(0)' }}>
                {children}
            </div>
        </motion.div>
    );
}

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
                'relative rounded-2xl glass-card overflow-hidden card-shine',
                'transition-all duration-500 hover:shadow-card-hover hover:scale-[1.02]',
                className
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}
