'use client';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({ 
  width = '100%', 
  height = '24px', 
  className = '',
  style = {}
}: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ 
        width, 
        height,
        opacity: 0.7,
        ...style
      }}
    />
  );
} 