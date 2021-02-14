import img from '@/assets/equipment/copper/highMetalPlate.webp';
import imgBp from '@/assets/equipment/copper/highMetalPlateBp.webp';
import scaleMail from '@/helpers/equipment/copper/scaleMail';

const highMetalPlateBp = {
  id: 'eq-bp-highMetalPlate',
  name: 'High Metal Plate Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
};

const highMetalPlate = {
  id: 'eq-highMetalPlate',
  name: 'High Metal Plate',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: highMetalPlateBp,
      qtn: 1,
    }, {
      item: scaleMail,
      qtn: 1,
    },
  ],
};

export default highMetalPlate;
