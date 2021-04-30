import img from '@/assets/equipments/silver/moonlightSword.webp';
import imgBp from '@/assets/equipments/silver/moonlightSwordBp.webp';
import { platinumKnife } from '@/helpers/equipment/silver/platinumKnife';

const moonlightSwordBp = {
  id: 'eq-bp-moonlightSword',
  name: 'Moonlight Sword Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const moonlightSword = {
  id: 'eq-moonlightSword',
  name: 'Moonlight Sword',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: moonlightSwordBp,
      qtn: 5,
    }, {
      item: platinumKnife,
      qtn: 1,
    },
  ],
};

export { moonlightSword, moonlightSwordBp };
