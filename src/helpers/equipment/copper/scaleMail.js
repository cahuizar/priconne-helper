import img from '@/assets/equipment/copper/scaleMail.webp';
import imgBp from '@/assets/equipment/copper/scaleMailBp.webp';
import leatherOveralls from '@/helpers/equipment/common/leatherOveralls';

const scaleMailBp = {
  id: 'eq-bp-scaleMail',
  name: 'Scale Mail Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
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
