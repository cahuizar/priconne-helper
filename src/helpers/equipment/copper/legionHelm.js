import img from '@/assets/equipment/copper/legionHelm.webp';
import imgBp from '@/assets/equipment/copper/legionHelmBp.webp';
import scaleMail from '@/helpers/equipment/copper/scaleMail';

const legionHelmBp = {
  id: 'eq-bp-legionHelm',
  name: 'Legion Helm Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const legionHelm = {
  id: 'eq-legionHelm',
  name: 'Legion Helm',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: legionHelmBp,
      qtn: 1,
    }, {
      item: scaleMail,
      qtn: 1,
    },
  ],
};

export { legionHelm, legionHelmBp };
