import img from '@/assets/equipment/copper/springColorRobe.webp';
import imgBp from '@/assets/equipment/copper/springColorRobeBp.webp';
import journeyRobe from '@/helpers/equipment/common/journeyRobe';

const springColorRobeBp = {
  id: 'eq-bp-springColorRobe',
  name: 'springColorRobe Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
};

const springColorRobe = {
  id: 'eq-springColorRobe',
  name: 'springColorRobe',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: springColorRobeBp,
      qtn: 1,
    }, {
      item: journeyRobe,
      qtn: 1,
    },
  ],
};

export default springColorRobe;
