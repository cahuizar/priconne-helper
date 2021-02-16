import img from '@/assets/equipment/copper/huntingBoots.webp';
import imgBp from '@/assets/equipment/copper/huntingBootsBp.webp';
import crownBoots from '@/helpers/equipment/copper/crownBoots';

const huntingBootsBp = {
  id: 'eq-bp-huntingBoots',
  name: 'Hunting Boots Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const huntingBoots = {
  id: 'eq-huntingBoots',
  name: 'Hunting Boots',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: huntingBootsBp,
      qtn: 1,
    }, {
      item: crownBoots,
      qtn: 1,
    },
  ],
};

export { huntingBoots, huntingBootsBp };
