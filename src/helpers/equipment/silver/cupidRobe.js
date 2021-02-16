import img from '@/assets/equipment/silver/cupidRobe.webp';
import imgBp from '@/assets/equipment/silver/cupidRobeBp.webp';
import { nordicRobe } from '@/helpers/equipment/copper/nordicRobe';

const cupidRobeBp = {
  id: 'eq-bp-cupidRobe',
  name: 'Cupid Robe Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const cupidRobe = {
  id: 'eq-cupidRobe',
  name: 'Cupid Robe',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: cupidRobeBp,
      qtn: 5,
    }, {
      item: nordicRobe,
      qtn: 1,
    },
  ],
};

export { cupidRobe, cupidRobeBp };
