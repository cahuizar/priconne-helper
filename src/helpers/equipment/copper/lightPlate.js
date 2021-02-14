import img from '@/assets/equipment/copper/lightPlate.webp';
import imgBp from '@/assets/equipment/copper/lightPlateBp.webp';
import clothesOfWisdom from '@/helpers/equipment/copper/clothesOfWisdom';

const lightPlateBp = {
  id: 'eq-frag-lightPlate',
  name: 'Light Plate Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
};

const lightPlate = {
  id: 'eq-lightPlate',
  name: 'Light Plate',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: lightPlateBp,
      qtn: 1,
    }, {
      item: clothesOfWisdom,
      qtn: 1,
    },
  ],
};

export default lightPlate;
