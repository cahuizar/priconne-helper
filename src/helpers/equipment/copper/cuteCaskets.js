import img from '@/assets/equipment/copper/cuteCaskets.webp';
import imgBp from '@/assets/equipment/copper/cuteCasketsBp.webp';
import fashionableBeret from '@/helpers/equipment/common/fashionableBeret';

const cuteCasketsBp = {
  id: 'eq-bp-cuteCaskets',
  name: 'Cute Caskets Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
};

const cuteCaskets = {
  id: 'eq-cuteCaskets',
  name: 'Cute Caskets',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: cuteCasketsBp,
      qtn: 1,
    }, {
      item: fashionableBeret,
      qtn: 1,
    },
  ],
};

export default cuteCaskets;
