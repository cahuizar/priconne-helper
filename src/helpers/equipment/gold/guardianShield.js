import img from '@/assets/equipment/gold/guardianShield.webp';
import imgBp from '@/assets/equipment/gold/guardianShieldBp.webp';
import { empressShield } from '@/helpers/equipment/gold/empressShield';

const guardianShieldBp = {
  id: 'eq-bp-guardianShield',
  name: 'Guardian Shield Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const guardianShield = {
  id: 'eq-guardianShield',
  name: 'Guardian Shield',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: guardianShieldBp,
      qtn: 15,
    }, {
      item: empressShield,
      qtn: 1,
    },
  ],
};

export { guardianShield, guardianShieldBp };
