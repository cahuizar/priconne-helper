import img from '@/assets/equipment/gold/aquariusBoots.webp';
import imgBp from '@/assets/equipment/gold/aquariusBootsBp.webp';
import { wizardBoots } from '@/helpers/equipment/gold/wizardBoots';
import { bangleOfSubstitution } from '@/helpers/equipment/gold/bangleOfSubstitution';

const aquariusBootsBp = {
  id: 'eq-bp-aquariusBoots',
  name: 'Aquarius Boots Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const aquariusBoots = {
  id: 'eq-aquariusBoots',
  name: 'Aquarius Boots',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: aquariusBootsBp,
      qtn: 15,
    }, {
      item: wizardBoots,
      qtn: 1,
    }, {
      item: bangleOfSubstitution,
      qtn: 1,
    },
  ],
};

export { aquariusBoots, aquariusBootsBp };
