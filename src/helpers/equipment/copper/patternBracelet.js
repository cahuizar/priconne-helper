import img from '@/assets/equipment/copper/patternBracelet.webp';
import imgBp from '@/assets/equipment/copper/patternBraceletBp.webp';
import jewelOfWisdom from '@/helpers/equipment/copper/jewelOfWisdom';

const patternBraceletBp = {
  id: 'eq-bp-patternBracelet',
  name: 'Pattern Bracelet Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const patternBracelet = {
  id: 'eq-patternBracelet',
  name: 'Pattern Bracelet',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: patternBraceletBp,
      qtn: 1,
    }, {
      item: jewelOfWisdom,
      qtn: 1,
    },
  ],
};

export { patternBracelet, patternBraceletBp };
