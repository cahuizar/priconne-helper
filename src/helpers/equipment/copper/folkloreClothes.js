import img from '@/assets/equipment/copper/folkloreClothes.webp';
import imgBp from '@/assets/equipment/copper/folkloreClothesBp.webp';
import protectivePendant from '@/helpers/equipment/common/protectivePendant';

const folkloreClothesBp = {
  id: 'eq-bp-folkloreClothes',
  name: 'Folklore Clothes Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const folkloreClothes = {
  id: 'eq-folkloreClothes',
  name: 'Folklore Clothes',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: folkloreClothesBp,
      qtn: 1,
    }, {
      item: protectivePendant,
      qtn: 1,
    },
  ],
};

export { folkloreClothes, folkloreClothesBp };
