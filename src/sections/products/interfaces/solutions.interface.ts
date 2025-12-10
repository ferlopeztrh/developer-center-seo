import { StaticImageData } from "next/image";

export interface Solution {
  id: string;
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  imageStatic: StaticImageData;
  imageGif: StaticImageData;
}
