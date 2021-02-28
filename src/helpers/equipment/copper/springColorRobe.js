import img from '@/assets/equipments/copper/springColorRobe.webp';
import imgBp from '@/assets/equipments/copper/springColorRobeBp.webp';
import journeyRobe from '@/helpers/equipment/common/journeyRobe';

const springColorRobeBp = {
  id: 'eq-bp-springColorRobe',
  name: 'springColorRobe Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
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

export { springColorRobe, springColorRobeBp };
