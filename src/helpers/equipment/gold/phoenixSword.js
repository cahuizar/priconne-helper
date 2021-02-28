import img from '@/assets/equipments/gold/phoenixSword.webp';
import imgBp from '@/assets/equipments/gold/phoenixSwordBp.webp';
import { butterflyKatana } from '@/helpers/equipment/gold/butterflyKatana';

const phoenixSwordBp = {
  id: 'eq-bp-phoenixSword',
  name: 'Phoenix Sword Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const phoenixSword = {
  id: 'eq-phoenixSword',
  name: 'Phoenix Sword',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: phoenixSwordBp,
      qtn: 15,
    }, {
      item: butterflyKatana,
      qtn: 1,
    },
  ],
};

export { phoenixSword, phoenixSwordBp };
