import img from '@/assets/equipment/gold/unicornKnife.webp';
import imgBp from '@/assets/equipment/gold/unicornKnifeBp.webp';
import { princessDagger } from '@/helpers/equipment/gold/princessDagger';

const unicornKnifeBp = {
  id: 'eq-bp-unicornKnife',
  name: 'Unicorn Knife Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const unicornKnife = {
  id: 'eq-unicornKnife',
  name: 'Unicorn Knife',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: unicornKnifeBp,
      qtn: 15,
    }, {
      item: princessDagger,
      qtn: 1,
    },
  ],
};

export { unicornKnife, unicornKnifeBp };
