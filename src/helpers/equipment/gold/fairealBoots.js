import img from '@/assets/equipment/gold/fairealBoots.webp';
import imgBp from '@/assets/equipment/gold/fairealBootsBp.webp';
import { angelBoots } from '@/helpers/equipment/gold/angelBoots';
import { laurelsSorrow } from '@/helpers/equipment/silver/laurelsSorrow';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';

const fairealBootsBp = {
  id: 'eq-bp-fairealBoots',
  name: 'Faireal Boots Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const fairealBoots = {
  id: 'eq-fairealBoots',
  name: 'Faireal Boots',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: fairealBootsBp,
      qtn: 15,
    }, {
      item: angelBoots,
      qtn: 1,
    }, {
      item: laurelsSorrow,
      qtn: 1,
    }, {
      item: lionKingsProtectiveCharm,
      qtn: 1,
    },
  ],
};

export { fairealBoots, fairealBootsBp };
