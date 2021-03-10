import img from '@/assets/equipments/silver/devilsBow.webp';
import imgBp from '@/assets/equipments/silver/devilsBowBp.webp';
import { cupidsBow } from '@/helpers/equipment/silver/cupidsBow';

const devilsBowBp = {
  id: 'eq-bp-devilsBow',
  name: 'Devil\'s Bow Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const devilsBow = {
  id: 'eq-devilsBow',
  name: 'Devil\'s Bow',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: devilsBowBp,
      qtn: 5,
    }, {
      item: cupidsBow,
      qtn: 1,
    },
  ],
};

export { devilsBow, devilsBowBp };
