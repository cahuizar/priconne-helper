import img from '@/assets/equipment/gold/lightningFist.webp';
import imgBp from '@/assets/equipment/gold/lightningFistFrag.webp';

const lightningFistFrag = {
  id: 'eq-frag-lightningFist',
  name: 'Lightning Fist Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const lightningFist = {
  id: 'eq-lightningFist',
  name: 'Lightning Fist',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: lightningFistFrag,
      qtn: 25,
    },
  ],
};

export { lightningFist, lightningFistFrag };
