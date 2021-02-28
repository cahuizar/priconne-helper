import img from '@/assets/equipments/silver/witchPalaceBoots.webp';
import imgBp from '@/assets/equipments/silver/witchPalaceBootsBp.webp';
import { patternBracelet } from '@/helpers/equipment/copper/patternBracelet';
import { huntingBoots } from '@/helpers/equipment/copper/huntingBoots';

const witchPalaceBootsBp = {
  id: 'eq-bp-witchPalaceBoots',
  name: 'Witch Palace Boots Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const witchPalaceBoots = {
  id: 'eq-witchPalaceBoots',
  name: 'Witch Palace Boots',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: witchPalaceBootsBp,
      qtn: 5,
    }, {
      item: patternBracelet,
      qtn: 1,
    }, {
      item: huntingBoots,
      qtn: 1,
    },
  ],
};

export { witchPalaceBoots, witchPalaceBootsBp };
