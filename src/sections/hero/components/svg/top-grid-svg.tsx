"use client";

import { motion } from "motion/react";

export const TopGridSVG = () => {
  const paths = [
    {
      id: "top-grid-a",
      d: "M16.828-1.407S-11.486 110.807 38.473 179.81c85.524 118.129 174.515 41.931 241.211 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-101.546 101.969-99.112 216.798",
      delay: 0,
    },
    {
      id: "top-grid-b",
      d: "M47.987-1.407S15.08 105.595 67.105 177.302c89.229 122.962 177.028 41.931 243.738 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-99.033 104.476-96.585 219.323",
      delay: 0.12,
    },
    {
      id: "top-grid-c",
      d: "M55.765-1.407S21.71 104.296 74.262 176.67c90.142 124.171 177.663 41.932 244.36 113.801 51.957 55.981 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.454 1.072 98.254-98.398 105.107-95.95 219.936",
      delay: 0.24,
    },
    {
      id: "top-grid-d",
      d: "M24.619-1.407s-29.465 110.915 21.01 180.584c86.451 119.338 175.137 41.932 241.847 113.801 51.957 55.98 47.22 102.222 91.451 148.121 72.082 74.791 302.509.487 303.489 89.453 1.071 98.255-100.912 102.583-98.477 217.43",
      delay: 0.36,
    },
    {
      id: "top-grid-e",
      d: "M32.414-1.407S1.796 108.192 52.789 178.546c87.376 120.546 175.771 41.931 242.468 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-100.29 103.214-97.842 218.061",
      delay: 0.48,
    },
    {
      id: "top-grid-f",
      d: "M40.191-1.407s-31.754 108.3 19.754 179.34c88.302 121.754 176.406 41.931 243.103 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-99.655 103.845-97.22 218.692",
      delay: 0.6,
    },
  ];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 832 750"
      className="w-full h-auto"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <defs>
        <linearGradient
          id="top-grid-a"
          x1="341.734"
          x2="341.734"
          y1="-1.407"
          y2="747.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ce0058" stopOpacity="0" />
          <stop offset="0.531" stopColor="#ce0058" />
          <stop offset="1" stopColor="#ce0058" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-grid-b"
          x1="371.757"
          x2="371.757"
          y1="-1.407"
          y2="748"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ce0058" stopOpacity="0" />
          <stop offset="0.531" stopColor="#ce0058" />
          <stop offset="1" stopColor="#ce0058" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-grid-c"
          x1="379.242"
          x2="379.242"
          y1="-1.407"
          y2="747.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ce0058" stopOpacity="0" />
          <stop offset="0.531" stopColor="#ce0058" />
          <stop offset="1" stopColor="#ce0058" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-grid-d"
          x1="349.247"
          x2="349.247"
          y1="-1.407"
          y2="747.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ce0058" stopOpacity="0" />
          <stop offset="0.531" stopColor="#ce0058" />
          <stop offset="1" stopColor="#ce0058" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-grid-e"
          x1="356.752"
          x2="356.752"
          y1="-1.407"
          y2="747.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ce0058" stopOpacity="0" />
          <stop offset="0.531" stopColor="#ce0058" />
          <stop offset="1" stopColor="#ce0058" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-grid-f"
          x1="364.253"
          x2="364.253"
          y1="-1.407"
          y2="748"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ce0058" stopOpacity="0" />
          <stop offset="0.531" stopColor="#ce0058" />
          <stop offset="1" stopColor="#ce0058" stopOpacity="0" />
        </linearGradient>
      </defs>

      {paths.map((path) => (
        <motion.path
          key={path.id}
          stroke={`url(#${path.id})`}
          strokeMiterlimit="10"
          d={path.d}
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            pathLength: {
              duration: 2.5,
              delay: 0.8 + path.delay,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 1,
              delay: 0.6 + path.delay,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          style={{
            strokeLinecap: "round",
          }}
        />
      ))}
    </motion.svg>
  );
};
