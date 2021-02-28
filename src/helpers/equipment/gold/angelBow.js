import img from '@/assets/equipment/gold/angelBow.webp';
import imgBp from '@/assets/equipment/gold/angelBowFrag.webp';

const angelBowFrag = {
  id: 'eq-frag-angelBow',
  name: 'Angel Bow Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const angelBow = {
  id: 'eq-angelBow',
  name: 'Angel Bow',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: angelBowFrag,
      qtn: 15,
    },
  ],
};

export { angelBow, angelBowFrag };
