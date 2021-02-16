import img from '@/assets/equipment/silver/sorcerersGlasses.webp';
import { turquoiseEarrings } from '@/helpers/equipment/silver/turquoiseEarrings';
import { patternBracelet } from '@/helpers/equipment/copper/patternBracelet';

const sorcerersGlasses = {
  id: 'eq-sorcerersGlasses',
  name: 'Sorcerer\'s Glasses',
  imgPath: img,
  rarity: 'silver',
  qtn: 1,
  formula: [
    {
      item: turquoiseEarrings,
      qtn: 3,
    }, {
      item: patternBracelet,
      qtn: 1,
    },
  ],
};

export default sorcerersGlasses;
