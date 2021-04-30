import img from '@/assets/equipments/silver/lightningAxe.webp';
import imgBp from '@/assets/equipments/silver/lightningAxeBp.webp';
import { lionsBattleAxe } from '@/helpers/equipment/silver/lionsBattleAxe';

const lightningAxeBp = {
  id: 'eq-bp-lightningAxe',
  name: 'Lightning Axe Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const lightningAxe = {
  id: 'eq-lightningAxe',
  name: 'Lightning Axe',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: lightningAxeBp,
      qtn: 5,
    }, {
      item: lionsBattleAxe,
      qtn: 1,
    },
  ],
};

export { lightningAxe, lightningAxeBp };
