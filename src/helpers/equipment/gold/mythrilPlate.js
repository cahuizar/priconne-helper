import img from '@/assets/equipment/gold/mythrilPlate.webp';
import imgBp from '@/assets/equipment/gold/mythrilPlateBp.webp';
import { battlingDress } from '@/helpers/equipment/silver/battlingDress';
import { garnetShield } from '@/helpers/equipment/silver/garnetShield';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';

const mythrilPlateBp = {
  id: 'eq-bp-mythrilPlate',
  name: 'Mythril Plate Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const mythrilPlate = {
  id: 'eq-mythrilPlate',
  name: 'Mythril Plate',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: mythrilPlateBp,
      qtn: 15,
    }, {
      item: battlingDress,
      qtn: 1,
    }, {
      item: garnetShield,
      qtn: 1,
    }, {
      item: lionEaglesFeather,
      qtn: 1,
    },
  ],
};

export { mythrilPlate, mythrilPlateBp };
