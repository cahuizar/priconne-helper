import img from '@/assets/equipments/gold/blazingGauntlet.webp';
import imgBp from '@/assets/equipments/gold/blazingGauntletBp.webp';
import { dragonsClaw } from '@/helpers/equipment/silver/dragonsClaw';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';

const blazingGauntletBp = {
  id: 'eq-bp-blazingGauntlet',
  name: 'Blazing Gauntlet Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const blazingGauntlet = {
  id: 'eq-blazingGauntlet',
  name: 'Blazing Gauntlet',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: blazingGauntletBp,
      qtn: 10,
    }, {
      item: dragonsClaw,
      qtn: 1,
    }, {
      item: lionEaglesFeather,
      qtn: 1,
    },
  ],
};

export { blazingGauntlet, blazingGauntletBp };
