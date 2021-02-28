import img from '@/assets/equipment/silver/gorgeousArmor.webp';
import imgBp from '@/assets/equipment/silver/gorgeousArmorBp.webp';
import { highMetalPlate } from '@/helpers/equipment/copper/highMetalPlate';

const gorgeousArmorBp = {
  id: 'eq-bp-gorgeousArmor',
  name: 'Gorgeous Armor Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const gorgeousArmor = {
  id: 'eq-gorgeousArmor',
  name: 'Gorgeous Armor',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: gorgeousArmorBp,
      qtn: 5,
    }, {
      item: highMetalPlate,
      qtn: 1,
    },
  ],
};

export { gorgeousArmor, gorgeousArmorBp };
