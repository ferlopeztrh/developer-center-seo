// components/ui/animated-progress.tsx
"use client";

import { useEffect, useState } from "react";

interface AnimatedProgressProps {
  id: string;
  percentage?: number;
  delay?: number;
  size?: "sm" | "md";
}

export function AnimatedProgress({
  id,
  percentage = 99,
  delay = 1800,
  size = "md",
}: AnimatedProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsVisible(true);

      const duration = 1000;
      const steps = 60;
      const increment = percentage / steps;
      let current = 0;

      const countInterval = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setCount(percentage);
          clearInterval(countInterval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(countInterval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [percentage, delay]);

  const circumference = 94.25;
  const strokeDasharray = isVisible
    ? `${(percentage / 100) * circumference} ${circumference}`
    : `0 ${circumference}`;

  const sizeClasses = {
    sm: "w-8 h-8 sm:w-10 sm:h-10",
    md: "w-10 h-10 sm:w-12 sm:h-12",
  };

  const textClasses = {
    sm: "text-[9px] sm:text-[10px]",
    md: "text-[10px] sm:text-xs",
  };

  return (
    <div className={`relative ${sizeClasses[size]} shrink-0`}>
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`progress-gradient-${id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#753bbd" />
            <stop offset="100%" stopColor="#ce0058" />
          </linearGradient>
        </defs>

        {/* Círculo de fondo */}
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="#e3d8f2"
          strokeWidth="3"
        />

        {/* Círculo de progreso */}
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke={`url(#progress-gradient-${id})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          style={{
            transition: "stroke-dasharray 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </svg>
      <span
        className={`absolute inset-0 flex items-center justify-center font-gilroy ${textClasses[size]} font-bold text-primary transition-opacity duration-300`}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {count}%
      </span>
    </div>
  );
}
