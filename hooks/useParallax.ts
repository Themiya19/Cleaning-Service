'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax(
  ref: RefObject<HTMLElement>,
  options: UseParallaxOptions = {}
): MotionValue<number> {
  const { speed = 0.5, direction = 'up' } = options;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const movement = speed * 100;
  
  return useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [movement, -movement] : [-movement, movement]
  );
}

export function useScrollProgress(
  ref: RefObject<HTMLElement>
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return scrollYProgress;
}

export function useScrollRotation(
  ref: RefObject<HTMLElement>,
  rotationRange: [number, number] = [0, 360]
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return useTransform(scrollYProgress, [0, 1], rotationRange);
}
