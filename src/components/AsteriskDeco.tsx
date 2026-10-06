import React from 'react';

interface AsteriskDecoProps {
  size?: number | string;
  color?: string;
  className?: string;
  animate?: boolean;
}

export const AsteriskDeco: React.FC<AsteriskDecoProps> = ({
  size = 48,
  color = '#c6ff4d',
  className = '',
  animate = false,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center select-none ${animate ? 'transition-transform duration-700 hover:rotate-90' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <g stroke={color} strokeWidth="9" strokeLinecap="round">
          <line x1="50" y1="8" x2="50" y2="92" />
          <line x1="8" y1="50" x2="92" y2="50" />
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="80" y1="20" x2="20" y2="80" />
        </g>
      </svg>
    </div>
  );
};
