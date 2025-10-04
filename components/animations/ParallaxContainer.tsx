'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ParallaxContainer({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const movement = speed * 100;
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [movement, -movement]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-movement, movement]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [movement, -movement]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-movement, movement]);
      default:
        return useTransform(scrollYProgress, [0, 1], [movement, -movement]);
    }
  };

  const transform = getTransform();

  const getStyle = () => {
    if (direction === 'left' || direction === 'right') {
      return { x: transform };
    }
    return { y: transform };
  };

  return (
    <motion.div
      ref={ref}
      style={getStyle()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
