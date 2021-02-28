import img from '@/assets/equipment/gold/dragonicArmor.webp';
import imgBp from '@/assets/equipment/gold/dragonicArmorBp.webp';
import { vermilionPlate } from '@/helpers/equipment/gold/vermilionPlate';
import { scarletDragon } from '@/helpers/equipment/gold/scarletDragon';

const dragonicArmorBp = {
  id: 'eq-bp-dragonicArmor',
  name: 'Dragonic Armor Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const dragonicArmor = {
  id: 'eq-dragonicArmor',
  name: 'Dragonic Armor',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: dragonicArmorBp,
      qtn: 15,
    }, {
      item: vermilionPlate,
      qtn: 1,
    }, {
      item: scarletDragon,
      qtn: 1,
    },
  ],
};

export { dragonicArmor, dragonicArmorBp };
