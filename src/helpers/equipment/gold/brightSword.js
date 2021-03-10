import img from '@/assets/equipments/gold/brightSword.webp';
import imgBp from '@/assets/equipments/gold/brightSwordBp.webp';
import { featherBlade } from '@/helpers/equipment/silver/featherBlade';

const brightSwordBp = {
  id: 'eq-bp-brightSword',
  name: 'Bright Sword Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const brightSword = {
  id: 'eq-brightSword',
  name: 'Bright Sword',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: brightSwordBp,
      qtn: 15,
    }, {
      item: featherBlade,
      qtn: 1,
    },
  ],
};

export { brightSword, brightSwordBp };
