import img from '@/assets/equipments/gold/darkTerrorDress.webp';
import imgBp from '@/assets/equipments/gold/darkTerrorDressBp.webp';
import { hermitClothes } from '@/helpers/equipment/gold/hermitClothes';
import { shiryuuAxe } from '@/helpers/equipment/gold/shiryuuAxe';

const darkTerrorDressBp = {
  id: 'eq-bp-darkTerrorDress',
  name: 'Dark Terror Dress Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const darkTerrorDress = {
  id: 'eq-darkTerrorDress',
  name: 'Dark Terror Dress',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: darkTerrorDressBp,
      qtn: 15,
    }, {
      item: hermitClothes,
      qtn: 1,
    }, {
      item: shiryuuAxe,
      qtn: 1,
    },
  ],
};

export { darkTerrorDress, darkTerrorDressBp };
