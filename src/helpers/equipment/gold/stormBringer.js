import img from '@/assets/equipment/gold/stormBringer.webp';
import imgBp from '@/assets/equipment/gold/stormBringerBp.webp';
import { scarletDragon } from '@/helpers/equipment/gold/scarletDragon';

const stormBringerBp = {
  id: 'eq-bp-stormBringer',
  name: 'Storm Bringer Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const stormBringer = {
  id: 'eq-stormBringer',
  name: 'Storm Bringer',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: stormBringerBp,
      qtn: 15,
    }, {
      item: scarletDragon,
      qtn: 1,
    },
  ],
};

export { stormBringer, stormBringerBp };
