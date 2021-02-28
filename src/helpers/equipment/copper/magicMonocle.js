import img from '@/assets/equipment/copper/magicMonocle.webp';
import imgBp from '@/assets/equipment/copper/magicMonocleBp.webp';
import fightingBracelet from '@/helpers/equipment/common/fightingBracelet';

const magicMonocleBp = {
  id: 'eq-bp-magicMonocle',
  name: 'Magic Monocle Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const magicMonocle = {
  id: 'eq-magicMonocle',
  name: 'Magic Monocle',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: magicMonocleBp,
      qtn: 1,
    }, {
      item: fightingBracelet,
      qtn: 1,
    },
  ],
};

export { magicMonocle, magicMonocleBp };
