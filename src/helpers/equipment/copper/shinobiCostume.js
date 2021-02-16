import img from '@/assets/equipment/copper/shinobiCostume.webp';
import imgBp from '@/assets/equipment/copper/shinobiCostumeBp.webp';
import folkloreClothes from '@/helpers/equipment/copper/folkloreClothes';

const shinobiCostumeBp = {
  id: 'eq-bp-shinobiCostume',
  name: 'Shinobi Costume Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const shinobiCostume = {
  id: 'eq-shinobiCostume',
  name: 'Shinobi Costume',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: shinobiCostumeBp,
      qtn: 1,
    }, {
      item: folkloreClothes,
      qtn: 1,
    },
  ],
};

export { shinobiCostume, shinobiCostumeBp };
