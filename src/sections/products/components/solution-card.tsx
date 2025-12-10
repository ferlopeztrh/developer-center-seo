"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { AnimationType } from "@/hooks/use-animate-on-view";
import type { Solution } from "@/sections/products/interfaces";

export const SolutionCard = ({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={solution.ctaHref}
      className="group block will-change-transform"
      data-animate={AnimationType.ScaleIn}
      data-delay={((0.4 * index) / 3).toString()}
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-4/3 mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={solution.imageStatic}
          alt={solution.title}
          fill
          className="object-cover"
        />

        <img
          src={solution.imageGif.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none
            transition-all duration-700 ease-out
            ${isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        />
      </div>

      <h3 className="font-gilroy font-medium text-xl xl:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {solution.title}
      </h3>
      <p className="font-notosans text-sm xl:text-base text-label leading-relaxed">
        {solution.description}
      </p>
    </Link>
  );
};
