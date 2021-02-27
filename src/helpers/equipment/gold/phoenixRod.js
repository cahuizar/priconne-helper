import img from '@/assets/equipment/gold/phoenixRod.webp';
import imgBp from '@/assets/equipment/gold/phoenixRodBp.webp';
import { moonWand } from '@/helpers/equipment/gold/moonWand';
import { laurelsSorrow } from '@/helpers/equipment/silver/laurelsSorrow';
import { scarletDiamond } from '@/helpers/equipment/silver/scarletDiamond';

const phoenixRodBp = {
  id: 'eq-bp-phoenixRod',
  name: 'Phoenix Rod Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const phoenixRod = {
  id: 'eq-phoenixRod',
  name: 'Phoenix Rod',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: phoenixRodBp,
      qtn: 15,
    }, {
      item: moonWand,
      qtn: 1,
    }, {
      item: laurelsSorrow,
      qtn: 1,
    }, {
      item: scarletDiamond,
      qtn: 1,
    },
  ],
};

export { phoenixRod, phoenixRodBp };
