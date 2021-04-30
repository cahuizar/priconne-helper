import img from '@/assets/equipments/gold/crusaderPlate.webp';
import imgBp from '@/assets/equipments/gold/crusaderPlateBp.webp';
import { invisibleDress } from '@/helpers/equipment/gold/invisibleDress';

const crusaderPlateBp = {
  id: 'eq-bp-crusaderPlate',
  name: 'Crusader Plate Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const crusaderPlate = {
  id: 'eq-crusaderPlate',
  name: 'Crusader Plate',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: crusaderPlateBp,
      qtn: 15,
    }, {
      item: invisibleDress,
      qtn: 1,
    },
  ],
};

export { crusaderPlate, crusaderPlateBp };
