import img from '@/assets/equipments/gold/lightningBow.webp';
import imgBp from '@/assets/equipments/gold/lightningBowBp.webp';
import { turquoiseEarrings } from '@/helpers/equipment/silver/turquoiseEarrings';
import { devilsBow } from '@/helpers/equipment/silver/devilsBow';

const lightningBowBp = {
  id: 'eq-bp-lightningBow',
  name: 'Lightning Bow Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const lightningBow = {
  id: 'eq-lightningBow',
  name: 'Lightning Bow',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: lightningBowBp,
      qtn: 10,
    }, {
      item: turquoiseEarrings,
      qtn: 1,
    }, {
      item: devilsBow,
      qtn: 1,
    },
  ],
};

export { lightningBow, lightningBowBp };
