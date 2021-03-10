import img from '@/assets/equipments/gold/spiritTreeBow.webp';
import imgBp from '@/assets/equipments/gold/spiritTreeBowFrag.webp';

const spiritTreeBowFrag = {
  id: 'eq-frag-spiritTreeBow',
  name: 'Spirit Tree Bow Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const spiritTreeBow = {
  id: 'eq-spiritTreeBow',
  name: 'Spirit Tree Bow',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: spiritTreeBowFrag,
      qtn: 25,
    },
  ],
};

export { spiritTreeBow, spiritTreeBowFrag };
