import img from '@/assets/equipment/gold/hermitClothes.webp';
import imgBp from '@/assets/equipment/gold/hermitClothesBp.webp';
import { vampireDagger } from '@/helpers/equipment/silver/vampireDagger';
import { opalEarrings } from '@/helpers/equipment/silver/opalEarrings';

const hermitClothesBp = {
  id: 'eq-bp-hermitClothes',
  name: 'Hermit Clothes Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const hermitClothes = {
  id: 'eq-hermitClothes',
  name: 'Hermit Clothes',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: hermitClothesBp,
      qtn: 15,
    }, {
      item: vampireDagger,
      qtn: 1,
    }, {
      item: opalEarrings,
      qtn: 1,
    },
  ],
};

export { hermitClothes, hermitClothesBp };
