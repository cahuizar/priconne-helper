import img from '@/assets/equipment/silver/battlingDress.webp';
import imgBp from '@/assets/equipment/silver/battlingDressBp.webp';
import { lightPlate } from '@/helpers/equipment/copper/lightPlate';
import { highMetalPlate } from '@/helpers/equipment/copper/highMetalPlate';

const battlingDressBp = {
  id: 'eq-bp-battlingDress',
  name: 'Battling Dress Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const battlingDress = {
  id: 'eq-battlingDress',
  name: 'Battling Dress',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: battlingDressBp,
      qtn: 5,
    }, {
      item: lightPlate,
      qtn: 1,
    }, {
      item: highMetalPlate,
      qtn: 1,
    },
  ],
};

export { battlingDress, battlingDressBp };
