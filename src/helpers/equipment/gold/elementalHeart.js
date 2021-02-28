import img from '@/assets/equipment/gold/elementalHeart.webp';
import imgBp from '@/assets/equipment/gold/elementalHeartFrag.webp';

const elementalHeartFrag = {
  id: 'eq-frag-elementalHeart',
  name: 'Elemental Heart Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const elementalHeart = {
  id: 'eq-elementalHeart',
  name: 'Elemental Heart',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: elementalHeartFrag,
      qtn: 15,
    },
  ],
};

export { elementalHeart, elementalHeartFrag };
