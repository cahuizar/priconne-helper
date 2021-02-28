import img from '@/assets/equipment/gold/viridianSpiritualDress.webp';
import imgBp from '@/assets/equipment/gold/viridianSpiritualDressBp.webp';
import { saintsRobe } from '@/helpers/equipment/gold/saintsRobe';
import { moonWand } from '@/helpers/equipment/gold/moonWand';

const viridianSpiritualDressBp = {
  id: 'eq-bp-viridianSpiritualDress',
  name: 'Viridian Spiritual Dress Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const viridianSpiritualDress = {
  id: 'eq-viridianSpiritualDress',
  name: 'Viridian Spiritual Dress',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: viridianSpiritualDressBp,
      qtn: 15,
    }, {
      item: saintsRobe,
      qtn: 1,
    }, {
      item: moonWand,
      qtn: 1,
    },
  ],
};

export { viridianSpiritualDress, viridianSpiritualDressBp };
