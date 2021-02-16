import img from '@/assets/equipment/silver/pearlEarrings.webp';
import imgBp from '@/assets/equipment/silver/pearlEarringsBp.webp';
import { patternBracelet } from '@/helpers/equipment/copper/patternBracelet';

const pearlEarringsBp = {
  id: 'eq-bp-pearlEarrings',
  name: 'Pearl Earrings Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const pearlEarrings = {
  id: 'eq-pearlEarrings',
  name: 'Pearl Earrings',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: pearlEarringsBp,
      qtn: 5,
    }, {
      item: patternBracelet,
      qtn: 1,
    },
  ],
};

export { pearlEarrings, pearlEarringsBp };
