import img from '@/assets/equipment/gold/scarletDragon.webp';
import imgBp from '@/assets/equipment/gold/scarletDragonBp.webp';
import { absoluteSpear } from '@/helpers/equipment/silver/absoluteSpear';
import { opalEarrings } from '@/helpers/equipment/silver/opalEarrings';

const scarletDragonBp = {
  id: 'eq-bp-scarletDragon',
  name: 'Scarlet Dragon Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const scarletDragon = {
  id: 'eq-scarletDragon',
  name: 'Scarlet Dragon',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: scarletDragonBp,
      qtn: 10,
    }, {
      item: absoluteSpear,
      qtn: 1,
    }, {
      item: opalEarrings,
      qtn: 1,
    },
  ],
};

export { scarletDragon, scarletDragonBp };
