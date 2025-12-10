// bottom-grid-svg.tsx
"use client";

import { Easing, motion } from "motion/react";

export const BottomGridSVG = () => {
  const easeOutExpo = [0.16, 1, 0.3, 1] as Easing;

  return (
    <div className="relative w-full h-auto">
      {/* Contenedor con clip-path animado */}
      <motion.div
        className="w-full h-full"
        initial={{
          clipPath: "inset(50% 0% 50% 0%)", // Empieza colapsado en el centro
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)", // Se expande completamente
        }}
        transition={{
          duration: 6,
          delay: 0.5,
          ease: easeOutExpo,
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 832 750"
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: easeOutExpo,
          }}
        >
          <defs>
            <linearGradient
              id="bottom-grid-a"
              x1="386.736"
              x2="386.736"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-b"
              x1="394.215"
              x2="394.215"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-c"
              x1="401.706"
              x2="401.706"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-d"
              x1="409.19"
              x2="409.19"
              y1="0.593"
              y2="750"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-e"
              x1="416.661"
              x2="416.661"
              y1="0.593"
              y2="750"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-f"
              x1="424.141"
              x2="424.141"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-g"
              x1="431.608"
              x2="431.608"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-h"
              x1="439.085"
              x2="439.085"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-i"
              x1="446.542"
              x2="446.542"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-j"
              x1="454.022"
              x2="454.022"
              y1="0.593"
              y2="750"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-k"
              x1="461.486"
              x2="461.486"
              y1="0.593"
              y2="750"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-l"
              x1="468.94"
              x2="468.94"
              y1="0.593"
              y2="750"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-m"
              x1="476.405"
              x2="476.405"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-n"
              x1="483.855"
              x2="483.855"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bottom-grid-o"
              x1="490.316"
              x2="490.316"
              y1="0.593"
              y2="749.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C8B1E5" stopOpacity="0" />
              <stop offset="0.474" stopColor="#C8B1E5" />
              <stop offset="1" stopColor="#C8B1E5" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            stroke="url(#bottom-grid-a)"
            strokeMiterlimit="10"
            d="M63.558.593S28.35 104.98 81.419 178.04c91.068 125.379 178.285 41.932 244.995 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.453 1.072 98.255-97.762 105.739-95.328 220.568"
          />
          <path
            stroke="url(#bottom-grid-b)"
            strokeMiterlimit="10"
            d="M71.335.593S34.99 103.681 88.562 177.408c91.994 126.587 178.92 41.931 245.63 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-97.141 106.37-94.693 221.199"
          />
          <path
            stroke="url(#bottom-grid-c)"
            strokeMiterlimit="10"
            d="M79.13.593s-37.496 101.79 16.605 176.184c92.92 127.796 179.555 41.931 246.252 113.8 51.957 55.981 47.221 102.223 91.451 148.122 72.082 74.791 302.51.486 303.489 89.453 1.071 98.254-96.506 106.983-94.072 221.83"
          />
          <path
            stroke="url(#bottom-grid-d)"
            strokeMiterlimit="10"
            d="M86.922.593S48.275 101.066 102.89 176.164c93.847 129.004 180.178 41.931 246.887 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-95.883 107.614-93.436 222.461"
          />
          <path
            stroke="url(#bottom-grid-e)"
            strokeMiterlimit="10"
            d="M94.703.593S54.904 99.768 110.05 175.532c94.773 130.213 180.813 41.932 247.509 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-95.249 108.245-92.801 223.092"
          />
          <path
            stroke="url(#bottom-grid-f)"
            strokeMiterlimit="10"
            d="M102.495.593s-40.95 97.876 14.713 174.308c95.685 131.421 181.434 41.931 248.144 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-94.614 108.877-92.179 223.706"
          />
          <path
            stroke="url(#bottom-grid-g)"
            strokeMiterlimit="10"
            d="M110.276.593s-42.087 96.56 14.077 173.677c96.612 132.629 182.07 41.931 248.779 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.453 1.072 98.255-93.992 109.508-91.544 224.337"
          />
          <path
            stroke="url(#bottom-grid-h)"
            strokeMiterlimit="10"
            d="M118.07.593s-43.239 95.26 13.455 173.046c97.538 133.837 182.705 41.931 249.401 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-93.357 110.139-90.909 224.968"
          />
          <path
            stroke="url(#bottom-grid-i)"
            strokeMiterlimit="10"
            d="M125.847.593s-44.39 93.962 12.821 172.414c98.464 135.046 183.326 41.932 250.036 113.801 51.957 55.981 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.454 1.071 98.254-92.722 110.77-90.287 225.599"
          />
          <path
            stroke="url(#bottom-grid-j)"
            strokeMiterlimit="10"
            d="M133.642.593s-45.54 92.646 12.199 171.801c99.39 136.254 183.961 41.932 250.671 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-92.1 111.384-89.652 226.231"
          />
          <path
            stroke="url(#bottom-grid-k)"
            strokeMiterlimit="10"
            d="M141.434.593s-46.678 91.347 11.564 171.17c100.316 137.463 184.596 41.931 251.293 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453C800.302 621.393 707.766 635.153 710.2 750"
          />
          <path
            stroke="url(#bottom-grid-l)"
            strokeMiterlimit="10"
            d="M149.214.593s-47.829 90.049 10.929 170.539c101.229 138.671 185.218 41.931 251.928 113.8 51.957 55.981 47.221 102.223 91.451 148.122 72.082 74.791 302.51.487 303.489 89.453 1.072 98.254-90.843 112.646-88.395 227.493"
          />
          <path
            stroke="url(#bottom-grid-m)"
            strokeMiterlimit="10"
            d="M157.007.593s-48.981 88.732 10.307 169.908c102.155 139.879 185.853 41.931 252.55 113.8 51.957 55.981 47.22 102.222 91.451 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-90.207 113.277-87.76 228.106"
          />
          <path
            stroke="url(#bottom-grid-n)"
            strokeMiterlimit="10"
            d="M164.787.593s-50.132 87.434 9.671 169.276C277.54 310.957 360.934 211.801 427.643 283.67c51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-89.572 113.908-87.138 228.737"
          />
          <path
            stroke="url(#bottom-grid-o)"
            strokeMiterlimit="10"
            d="M171.58.593s-51.283 86.135 9.036 168.645c104.008 142.296 187.11 41.931 253.82 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.453 1.072 98.255-88.951 114.54-86.503 229.369"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
