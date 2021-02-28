import img from '@/assets/equipment/gold/paladinGreave.webp';
import imgBp from '@/assets/equipment/gold/paladinGreaveBp.webp';
import { shinobiShoes } from '@/helpers/equipment/silver/shinobiShoes';
import { opalEarrings } from '@/helpers/equipment/silver/opalEarrings';
import { emeraldEarrings } from '@/helpers/equipment/silver/emeraldEarrings';

const paladinGreaveBp = {
  id: 'eq-bp-paladinGreave',
  name: 'Paladin Greave Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const paladinGreave = {
  id: 'eq-paladinGreave',
  name: 'Paladin Greave',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: paladinGreaveBp,
      qtn: 10,
    }, {
      item: shinobiShoes,
      qtn: 1,
    }, {
      item: opalEarrings,
      qtn: 1,
    }, {
      item: emeraldEarrings,
      qtn: 1,
    },
  ],
};

export { paladinGreave, paladinGreaveBp };
