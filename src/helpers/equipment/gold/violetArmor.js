import img from '@/assets/equipments/gold/violetArmor.webp';
import imgBp from '@/assets/equipments/gold/violetArmorBp.webp';
import { mythrilPlate } from '@/helpers/equipment/gold/mythrilPlate';

const violetArmorBp = {
  id: 'eq-bp-violetArmor',
  name: 'Violet Armor Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const violetArmor = {
  id: 'eq-violetArmor',
  name: 'Violet Armor',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: violetArmorBp,
      qtn: 15,
    }, {
      item: mythrilPlate,
      qtn: 1,
    },
  ],
};

export { violetArmor, violetArmorBp };
