import img from '@/assets/equipments/gold/heavenlyRobe.webp';
import imgBp from '@/assets/equipments/gold/heavenlyRobeBp.webp';
import { moonlightGarment } from '@/helpers/equipment/gold/moonlightGarment';

const heavenlyRobeBp = {
  id: 'eq-bp-heavenlyRobe',
  name: 'Heavenly Robe Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const heavenlyRobe = {
  id: 'eq-heavenlyRobe',
  name: 'Heavenly Robe',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: heavenlyRobeBp,
      qtn: 15,
    }, {
      item: moonlightGarment,
      qtn: 1,
    },
  ],
};

export { heavenlyRobe, heavenlyRobeBp };
