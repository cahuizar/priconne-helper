import img from '@/assets/equipments/copper/cuteCaskets.webp';
import imgBp from '@/assets/equipments/copper/cuteCasketsBp.webp';
import fashionableBeret from '@/helpers/equipment/common/fashionableBeret';

const cuteCasketsBp = {
  id: 'eq-bp-cuteCaskets',
  name: 'Cute Caskets Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
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

export { cuteCaskets, cuteCasketsBp };
