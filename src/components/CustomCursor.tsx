import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isTouch, setIsTouch] = useState(false);
  const currentTextRef = useRef('');

  useEffect(() => {
    // Check touch device or reduced motion
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorRef.current.style.opacity = '1';
      }

      // Check hovered element only if target changes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestInteractive = target.closest('[data-cursor]');
      const val = closestInteractive ? closestInteractive.getAttribute('data-cursor') || '' : '';
      if (val !== currentTextRef.current) {
        currentTextRef.current = val;
        setCursorText(val);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 transform-gpu"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      {cursorText ? (
        <div className="px-2.5 py-1 rounded-full bg-[#c8ff00] text-black text-[10px] font-mono font-bold tracking-wider shadow-lg flex items-center gap-1 scale-100 transition-all">
          <span>{cursorText}</span>
        </div>
      ) : (
        <div className="w-2.5 h-2.5 rounded-full bg-[#c8ff00]/70 ring-4 ring-[#c8ff00]/20" />
      )}
    </div>
  );
};

