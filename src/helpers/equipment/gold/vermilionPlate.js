import img from '@/assets/equipment/gold/vermilionPlate.webp';
import imgBp from '@/assets/equipment/gold/vermilionPlateBp.webp';
import { heavyMetalArmor } from '@/helpers/equipment/silver/heavyMetalArmor';
import { absoluteSpear } from '@/helpers/equipment/silver/absoluteSpear';

const vermilionPlateBp = {
  id: 'eq-bp-vermilionPlate',
  name: 'Vermilion Plate Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const vermilionPlate = {
  id: 'eq-vermilionPlate',
  name: 'Vermilion Plate',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: vermilionPlateBp,
      qtn: 15,
    }, {
      item: heavyMetalArmor,
      qtn: 1,
    }, {
      item: absoluteSpear,
      qtn: 1,
    },
  ],
};

export { vermilionPlate, vermilionPlateBp };
