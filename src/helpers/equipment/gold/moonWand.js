import img from '@/assets/equipments/gold/moonWand.webp';
import imgBp from '@/assets/equipments/gold/moonWandBp.webp';
import { devilsHorn } from '@/helpers/equipment/silver/devilsHorn';

const moonWandBp = {
  id: 'eq-bp-moonWand',
  name: 'Moon Wand Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const moonWand = {
  id: 'eq-moonWand',
  name: 'Moon Wand',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: moonWandBp,
      qtn: 10,
    }, {
      item: devilsHorn,
      qtn: 1,
    },
  ],
};

export { moonWand, moonWandBp };
