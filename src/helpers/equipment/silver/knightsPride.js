import img from '@/assets/equipment/silver/knightsPride.webp';
import imgBp from '@/assets/equipment/silver/knightsPrideBp.webp';
import trident from '@/helpers/equipment/copper/trident';

const knightsPrideBp = {
  id: 'eq-bp-knightsPride',
  name: 'Knight\'s Pride Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const knightsPride = {
  id: 'eq-knightsPride',
  name: 'Knight\'s Pride',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: knightsPrideBp,
      qtn: 3,
    }, {
      item: trident,
      qtn: 1,
    },
  ],
};

export { knightsPride, knightsPrideBp };
