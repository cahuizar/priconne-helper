import img from '@/assets/equipment/silver/flowerBudWand.webp';
import imgBp from '@/assets/equipment/silver/flowerBudWandFrag.webp';

const flowerBudWandFrag = {
  id: 'eq-frag-flowerBudWand',
  name: 'Flower Bud Wand Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const flowerBudWand = {
  id: 'eq-flowerBudWand',
  name: 'Flower Bud Wand',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: flowerBudWandFrag,
      qtn: 3,
    },
  ],
};

export { flowerBudWand, flowerBudWandFrag };
