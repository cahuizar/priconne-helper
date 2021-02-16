import img from '@/assets/equipment/silver/lionsBattleAxe.webp';
import imgBp from '@/assets/equipment/silver/lionsBattleAxeBp.webp';
import { blueSphereAxe } from '@/helpers/equipment/silver/blueSphereAxe';
import blueBlood from '@/helpers/equipment/copper/blueBlood';

const lionsBattleAxeBp = {
  id: 'eq-bp-lionsBattleAxe',
  name: 'Lion\'s Battle Axe Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const lionsBattleAxe = {
  id: 'eq-lionsBattleAxe',
  name: 'Lion\'s Battle Axe',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: lionsBattleAxeBp,
      qtn: 5,
    }, {
      item: blueSphereAxe,
      qtn: 1,
    }, {
      item: blueBlood,
      qtn: 1,
    },
  ],
};

export { lionsBattleAxe, lionsBattleAxeBp };
