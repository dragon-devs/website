'use client';

import React, {HTMLAttributes, ReactNode, useEffect, useRef, useState} from 'react';
import {useFinePointer} from '@/lib/use-fine-pointer';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();

  // A magnet needs a pointer to chase. On a touchscreen the handler can never
  // produce a meaningful offset, but a tap still emits a synthetic mousemove —
  // and with a dozen magnets on a page (every MagnetButton nests two) that is a
  // dozen getBoundingClientRect calls and re-renders on every tap.
  const enabled = finePointer && !disabled;

  useEffect(() => {
    if (!enabled) {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, enabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;
  const atRest = position.x === 0 && position.y === 0;

  return (
    <div
      ref={magnetRef}
      className={`${wrapperClassName}`}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          // Both of these are deliberately dropped at rest. A permanent
          // translate3d + will-change promoted a compositor layer for every
          // magnet on the page, whether or not it would ever move.
          transform: atRest ? undefined : `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: isActive ? 'transform' : undefined
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
