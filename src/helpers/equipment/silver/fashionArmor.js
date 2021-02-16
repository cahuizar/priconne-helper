import img from '@/assets/equipment/silver/fashionArmor.webp';
import imgBp from '@/assets/equipment/silver/fashionArmorBp.webp';
import { lightPlate } from '@/helpers/equipment/copper/lightPlate';

const fashionArmorBp = {
  id: 'eq-bp-fashionArmor',
  name: 'Fashion Armor Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const fashionArmor = {
  id: 'eq-fashionArmor',
  name: 'Fashion Armor',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: fashionArmorBp,
      qtn: 5,
    }, {
      item: lightPlate,
      qtn: 1,
    },
  ],
};

export { fashionArmor, fashionArmorBp };
