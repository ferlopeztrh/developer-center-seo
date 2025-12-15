import { common, type CommonDictionary } from "./common";
import { menu, type MenuDictionary } from "./menu";
import {
  hero,
  merchants,
  newsletter,
  partners,
  products,
  type HeroDictionary,
  type MerchantsDictionary,
  type NewsletterDictionary,
  type PartnersDictionary,
  type ProductsDictionary,
} from "./sections";

export const es = {
  common,
  menu,
  sections: {
    hero,
    products,
    partners,
    merchants,
    newsletter,
  },
};

export type SectionsDictionary = {
  hero: HeroDictionary;
  products: ProductsDictionary;
  partners: PartnersDictionary;
  merchants: MerchantsDictionary;
  newsletter: NewsletterDictionary;
};

export type Dictionary = {
  common: CommonDictionary;
  menu: MenuDictionary;
  sections: SectionsDictionary;
};
