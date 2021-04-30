import img from '@/assets/equipments/silver/millefeuilleCloth.webp';
import imgBp from '@/assets/equipments/silver/millefeuilleClothBp.webp';
import { shinobiCostume } from '@/helpers/equipment/copper/shinobiCostume';

const millefeuilleClothBp = {
  id: 'eq-bp-millefeuilleCloth',
  name: 'Millefeuille Cloth Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const millefeuilleCloth = {
  id: 'eq-millefeuilleCloth',
  name: 'Millefeuille Cloth',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: millefeuilleClothBp,
      qtn: 5,
    }, {
      item: shinobiCostume,
      qtn: 1,
    },
  ],
};

export { millefeuilleCloth, millefeuilleClothBp };
