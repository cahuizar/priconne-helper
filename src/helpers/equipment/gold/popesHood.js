import img from '@/assets/equipment/gold/popesHood.webp';
import imgBp from '@/assets/equipment/gold/popesHoodBp.webp';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import { witchHat } from '@/helpers/equipment/silver/witchHat';
import { cupidRobe } from '@/helpers/equipment/silver/cupidRobe';

const popesHoodBp = {
  id: 'eq-bp-popesHood',
  name: 'Pope\'s Hood Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const popesHood = {
  id: 'eq-popesHood',
  name: 'Pope\'s Hood',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: popesHoodBp,
      qtn: 15,
    }, {
      item: lionKingsProtectiveCharm,
      qtn: 1,
    }, {
      item: witchHat,
      qtn: 1,
    }, {
      item: cupidRobe,
      qtn: 1,
    },
  ],
};

export { popesHood, popesHoodBp };
