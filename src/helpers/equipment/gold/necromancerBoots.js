import img from '@/assets/equipment/gold/necromancerBoots.webp';
import imgBp from '@/assets/equipment/gold/necromancerBootsBp.webp';
import { wizardBoots } from '@/helpers/equipment/gold/wizardBoots';
import { devilsHorn } from '@/helpers/equipment/silver/devilsHorn';

const necromancerBootsBp = {
  id: 'eq-bp-necromancerBoots',
  name: 'Necromancer Boots Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const necromancerBoots = {
  id: 'eq-necromancerBoots',
  name: 'Necromancer Boots',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: necromancerBootsBp,
      qtn: 15,
    }, {
      item: wizardBoots,
      qtn: 1,
    }, {
      item: devilsHorn,
      qtn: 1,
    },
  ],
};

export { necromancerBoots, necromancerBootsBp };
