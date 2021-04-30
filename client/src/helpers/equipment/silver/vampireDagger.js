import img from '@/assets/equipments/silver/vampireDagger.webp';
import imgBp from '@/assets/equipments/silver/vampireDaggerBp.webp';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';

const vampireDaggerBp = {
  id: 'eq-bp-vampireDagger',
  name: 'Vampire Dagger Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const vampireDagger = {
  id: 'eq-vampireDagger',
  name: 'Vampire Dagger',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: vampireDaggerBp,
      qtn: 5,
    }, {
      item: lionEaglesFeather,
      qtn: 1,
    },
  ],
};

export { vampireDagger, vampireDaggerBp };
