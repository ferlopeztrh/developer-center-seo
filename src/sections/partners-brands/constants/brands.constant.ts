import type { StaticImageData } from "next/image";

import applePay from "@/assets/brands/apple-pay.svg";
import cabal from "@/assets/brands/cabal.png";
import clickToPay from "@/assets/brands/click-to-pay.svg";
import garminPay from "@/assets/brands/garmin-pay.svg";
import gpay from "@/assets/brands/gpay.svg";
import mastercard from "@/assets/brands/mastercard.svg";
import panal from "@/assets/brands/panal.jpg";
import pix from "@/assets/brands/pix.svg";
import visa from "@/assets/brands/visa.svg";

export interface Brand {
  id: string;
  name: string;
  logo: StaticImageData;
  maxHeight: number;
  maxHeightMobile: number;
}

export const BRANDS: Brand[] = [
  {
    id: "visa",
    name: "Visa",
    logo: visa,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "mastercard",
    name: "Mastercard",
    logo: mastercard,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "gpay",
    name: "Google Pay",
    logo: gpay,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    logo: applePay,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "click-to-pay",
    name: "Click to Pay",
    logo: clickToPay,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "pix",
    name: "Pix",
    logo: pix,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "garmin-pay",
    name: "Garmin Pay",
    logo: garminPay,
    maxHeight: 60,
    maxHeightMobile: 48,
  },
  {
    id: "cabal",
    name: "Cabal",
    logo: cabal,
    maxHeight: 30,
    maxHeightMobile: 20,
  },
  {
    id: "panal",
    name: "Panal",
    logo: panal,
    maxHeight: 40,
    maxHeightMobile: 40,
  },
];
