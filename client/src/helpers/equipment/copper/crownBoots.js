import img from '@/assets/equipments/copper/crownBoots.webp';
import imgBp from '@/assets/equipments/copper/crownBootsBp.webp';
import leatherBoots from '@/helpers/equipment/common/leatherBoots';

const crownBootsBp = {
  id: 'eq-bp-crownBoots',
  name: 'Crown Boots Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const crownBoots = {
  id: 'eq-crownBoots',
  name: 'Crown Boots',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: crownBootsBp,
      qtn: 1,
    }, {
      item: leatherBoots,
      qtn: 1,
    },
  ],
};

export { crownBoots, crownBootsBp };
