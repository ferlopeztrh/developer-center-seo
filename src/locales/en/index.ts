import { common, type CommonDictionary } from "./common";
import { menu, type MenuDictionary } from "./menu";
import { hero, type HeroDictionary } from "./sections/hero";

export const en = {
  common,
  menu,
  sections: {
    hero,
  },
};

export type SectionsDictionary = {
  hero: HeroDictionary;
};

export type Dictionary = {
  common: CommonDictionary;
  menu: MenuDictionary;
  sections: SectionsDictionary;
};
