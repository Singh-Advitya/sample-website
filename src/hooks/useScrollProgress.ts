import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * High-performance, low-overhead scroll progress hook with buttery-smooth physics LERP
 * Schedules rAF only during active scroll, sleeps when idle to prevent frame drops
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const isRunningRef = useRef(false);
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) > 0.001) {
        currentRef.current += diff * 0.16;
        setProgress(Math.round(currentRef.current * 1000) / 1000);
        requestAnimationFrame(update);
      } else {
        currentRef.current = targetRef.current;
        setProgress(targetRef.current);
        isRunningRef.current = false;
      }
    };

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      targetRef.current = Math.min(Math.max(window.scrollY / total, 0), 1);

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return progress;
}

/**
 * High-performance element scroll progress with responsive fluid easing
 * Only executes during active scroll and sleeps when idle
 */
export function useElementScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const isRunningRef = useRef(false);
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) > 0.001) {
        currentRef.current += diff * 0.16;
        setProgress(Math.round(currentRef.current * 1000) / 1000);
        requestAnimationFrame(update);
      } else {
        currentRef.current = targetRef.current;
        setProgress(targetRef.current);
        isRunningRef.current = false;
      }
    };

    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight;

      if (totalDist <= 0) {
        targetRef.current = rect.top <= 0 ? 1 : 0;
      } else {
        const scrolled = -rect.top;
        targetRef.current = Math.min(Math.max(scrolled / totalDist, 0), 1);
      }

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  return progress;
}
