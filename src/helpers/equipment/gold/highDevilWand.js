import img from '@/assets/equipments/gold/highDevilWand.webp';
import imgBp from '@/assets/equipments/gold/highDevilWandBp.webp';
import { furyRod } from '@/helpers/equipment/gold/furyRod';
import { mourningCrescentMoon } from '@/helpers/equipment/gold/mourningCrescentMoon';

const highDevilWandBp = {
  id: 'eq-bp-highDevilWand',
  name: 'High Devil Wand Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const highDevilWand = {
  id: 'eq-highDevilWand',
  name: 'High Devil Wand',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: highDevilWandBp,
      qtn: 15,
    }, {
      item: furyRod,
      qtn: 1,
    }, {
      item: mourningCrescentMoon,
      qtn: 1,
    },
  ],
};

export { highDevilWand, highDevilWandBp };
