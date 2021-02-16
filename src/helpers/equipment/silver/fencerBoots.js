import img from '@/assets/equipment/silver/fencerBoots.webp';
import imgBp from '@/assets/equipment/silver/fencerBootsBp.webp';
import { shinobiShoes } from '@/helpers/equipment/silver/shinobiShoes';

const fencerBootsBp = {
  id: 'eq-bp-fencerBoots',
  name: 'Fencer Boots Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const fencerBoots = {
  id: 'eq-fencerBoots',
  name: 'Fencer Boots',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: fencerBootsBp,
      qtn: 5,
    }, {
      item: shinobiShoes,
      qtn: 1,
    },
  ],
};

export { fencerBoots, fencerBootsBp };
