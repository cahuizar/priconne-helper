import img from '@/assets/equipment/gold/angelBoots.webp';
import imgBp from '@/assets/equipment/gold/angelBootsBp.webp';
import { octogramPendant } from '@/helpers/equipment/silver/octogramPendant';
import { featherBlade } from '@/helpers/equipment/silver/featherBlade';

const angelBootsBp = {
  id: 'eq-bp-angelBoots',
  name: 'Angel Boots Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const angelBoots = {
  id: 'eq-angelBoots',
  name: 'Angel Boots',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: angelBootsBp,
      qtn: 15,
    }, {
      item: octogramPendant,
      qtn: 1,
    }, {
      item: featherBlade,
      qtn: 1,
    },
  ],
};

export { angelBoots, angelBootsBp };
