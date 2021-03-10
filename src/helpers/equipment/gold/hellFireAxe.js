import img from '@/assets/equipments/gold/hellFireAxe.webp';
import imgBp from '@/assets/equipments/gold/hellFireAxeBp.webp';
import { scarletDiamond } from '@/helpers/equipment/silver/scarletDiamond';

const hellFireAxeBp = {
  id: 'eq-bp-hellFireAxe',
  name: 'Hell-Fire Axe Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const hellFireAxe = {
  id: 'eq-hellFireAxe',
  name: 'Hell-Fire Axe',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: hellFireAxeBp,
      qtn: 15,
    }, {
      item: scarletDiamond,
      qtn: 1,
    },
  ],
};

export { hellFireAxe, hellFireAxeBp };
