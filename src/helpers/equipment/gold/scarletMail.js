import img from '@/assets/equipment/gold/scarletMail.webp';
import imgBp from '@/assets/equipment/gold/scarletMailBp.webp';
import { invisibleDress } from '@/helpers/equipment/gold/invisibleDress';
import { elementalHeart } from '@/helpers/equipment/gold/elementalHeart';

const scarletMailBp = {
  id: 'eq-bp-scarletMail',
  name: 'Scarlet Mail Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const scarletMail = {
  id: 'eq-scarletMail',
  name: 'Scarlet Mail',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: scarletMailBp,
      qtn: 15,
    }, {
      item: invisibleDress,
      qtn: 1,
    }, {
      item: elementalHeart,
      qtn: 1,
    },
  ],
};

export { scarletMail, scarletMailBp };
