import img from '@/assets/equipment/silver/absoluteSpear.webp';
import imgBp from '@/assets/equipment/silver/absoluteSpearFrag.webp';

const absoluteSpearFrag = {
  id: 'eq-frag-absoluteSpear',
  name: 'Absolute Spear Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const absoluteSpear = {
  id: 'eq-absoluteSpear',
  name: 'Absolute Spear',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: absoluteSpearFrag,
      qtn: 5,
    },
  ],
};

export { absoluteSpear, absoluteSpearFrag };
