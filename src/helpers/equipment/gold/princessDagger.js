import img from '@/assets/equipment/gold/princessDagger.webp';
import imgBp from '@/assets/equipment/gold/princessDaggerFrag.webp';

const princessDaggerFrag = {
  id: 'eq-frag-princessDagger',
  name: 'Princess\' Dagger Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const princessDagger = {
  id: 'eq-princessDagger',
  name: 'Princess\' Dagger',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: princessDaggerFrag,
      qtn: 15,
    },
  ],
};

export { princessDagger, princessDaggerFrag };
