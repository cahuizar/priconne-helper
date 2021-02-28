import img from '@/assets/equipment/gold/gospelTiara.webp';
import imgBp from '@/assets/equipment/gold/gospelTiaraBp.webp';
import { wizardHood } from '@/helpers/equipment/gold/wizardHood';
import { laurelsSorrow } from '@/helpers/equipment/silver/laurelsSorrow';
import { pearlEarrings } from '@/helpers/equipment/silver/pearlEarrings';

const gospelTiaraBp = {
  id: 'eq-bp-gospelTiara',
  name: 'Gospel Tiara Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const gospelTiara = {
  id: 'eq-gospelTiara',
  name: 'Gospel Tiara',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: gospelTiaraBp,
      qtn: 15,
    }, {
      item: wizardHood,
      qtn: 1,
    }, {
      item: laurelsSorrow,
      qtn: 1,
    }, {
      item: pearlEarrings,
      qtn: 1,
    },
  ],
};

export { gospelTiara, gospelTiaraBp };
