import img from '@/assets/equipment/copper/nordicRobe.webp';
import imgBp from '@/assets/equipment/copper/nordicRobeBp.webp';
import springColorRobe from '@/helpers/equipment/copper/springColorRobe';

const nordicRobeBp = {
  id: 'eq-bp-nordicRobe',
  name: 'Nordic Robe Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
};

const nordicRobe = {
  id: 'eq-nordicRobe',
  name: 'Nordic Robe',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: nordicRobeBp,
      qtn: 1,
    }, {
      item: springColorRobe,
      qtn: 1,
    },
  ],
};

export default nordicRobe;
