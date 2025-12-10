"use client";

import { motion } from "motion/react";

export const TopGridMobileSVG = () => {
  const paths = [
    {
      id: "top-mobile-a",
      d: "M10.018 23.78S8.715 68.387 35.446 88.29c45.76 34.072 75.153-4.014 108.985 15.077 26.356 14.87 28.651 32.477 50.927 44.487 36.3 19.568 123.667-33.622 132.208-.873 9.428 36.168-32.167 49.007-20.665 91.144",
      delay: 0,
    },
    {
      id: "top-mobile-b",
      d: "M22.75 20.298s-3.656 43.196 24.166 63.867c47.715 35.443 76.18-4.295 110.018 14.795 26.355 14.869 28.651 32.477 50.926 44.487 36.301 19.568 123.667-33.622 132.208-.874 9.429 36.169-30.91 49.652-19.401 91.795",
      delay: 0.1,
    },
    {
      id: "top-mobile-c",
      d: "M25.93 19.43s-4.245 42.844 23.853 63.702c48.2 35.787 76.441-4.366 110.273 14.725 26.355 14.87 28.651 32.478 50.926 44.487 36.3 19.569 123.667-33.622 132.208-.873 9.429 36.169-30.593 49.814-19.085 91.95",
      delay: 0.2,
    },
    {
      id: "top-mobile-d",
      d: "M13.202 22.91s-1.891 44.256 25.11 64.347c46.25 34.415 75.408-4.083 109.246 15.006 26.356 14.87 28.651 32.478 50.926 44.487 36.301 19.569 123.667-33.622 132.208-.873 9.429 36.168-31.851 49.162-20.347 91.307",
      delay: 0.3,
    },
    {
      id: "top-mobile-e",
      d: "M16.387 22.038s-2.483 43.9 24.793 64.185c46.738 34.758 75.667-4.153 109.5 14.938 26.355 14.869 28.65 32.477 50.926 44.487 36.3 19.568 123.667-33.622 132.208-.874 9.428 36.169-31.54 49.326-20.03 91.469",
      delay: 0.4,
    },
    {
      id: "top-mobile-f",
      d: "M19.567 21.17S16.5 64.715 44.049 85.197c47.227 35.1 75.927-4.225 109.76 14.866 26.355 14.869 28.651 32.477 50.926 44.487 36.3 19.568 123.667-33.622 132.208-.874 9.429 36.169-31.222 49.489-19.718 91.633",
      delay: 0.5,
    },
  ];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 392 255"
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
          id="top-mobile-a"
          x1="142.793"
          x2="217.976"
          y1="-12.525"
          y2="262.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B1E5" stopOpacity="0" />
          <stop offset="0.531" stopColor="#C8B1E5" />
          <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-mobile-b"
          x1="155.061"
          x2="230.246"
          y1="-15.879"
          y2="259.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B1E5" stopOpacity="0" />
          <stop offset="0.531" stopColor="#C8B1E5" />
          <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-mobile-c"
          x1="158.121"
          x2="233.303"
          y1="-16.716"
          y2="258.249"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B1E5" stopOpacity="0" />
          <stop offset="0.531" stopColor="#C8B1E5" />
          <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-mobile-d"
          x1="145.864"
          x2="221.047"
          y1="-13.364"
          y2="261.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B1E5" stopOpacity="0" />
          <stop offset="0.531" stopColor="#C8B1E5" />
          <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-mobile-e"
          x1="148.93"
          x2="224.113"
          y1="-14.203"
          y2="260.762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B1E5" stopOpacity="0" />
          <stop offset="0.531" stopColor="#C8B1E5" />
          <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="top-mobile-f"
          x1="151.997"
          x2="227.181"
          y1="-15.041"
          y2="259.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8B1E5" stopOpacity="0" />
          <stop offset="0.531" stopColor="#C8B1E5" />
          <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
        </linearGradient>
      </defs>

      {paths.map((path) => (
        <motion.path
          key={path.id}
          stroke={`url(#${path.id})`}
          strokeMiterlimit="10"
          strokeWidth="0.5"
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
