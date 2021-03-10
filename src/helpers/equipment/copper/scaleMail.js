import img from '@/assets/equipments/copper/scaleMail.webp';
import imgBp from '@/assets/equipments/copper/scaleMailBp.webp';
import leatherOveralls from '@/helpers/equipment/common/leatherOveralls';

const scaleMailBp = {
  id: 'eq-bp-scaleMail',
  name: 'Scale Mail Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const scaleMail = {
  id: 'eq-scaleMail',
  name: 'Scale Mail',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: scaleMailBp,
      qtn: 1,
    }, {
      item: leatherOveralls,
      qtn: 1,
    },
  ],
};

export { scaleMail, scaleMailBp };
