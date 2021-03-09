import img from '@/assets/equipments/gold/empressShield.webp';
import imgBp from '@/assets/equipments/gold/empressShieldBp.webp';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import sorcerersGlasses from '@/helpers/equipment/silver/sorcerersGlasses';

const empressShieldBp = {
  id: 'eq-bp-empressShield',
  name: 'Empress Shield Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const empressShield = {
  id: 'eq-empressShield',
  name: 'Empress Shield',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: empressShieldBp,
      qtn: 10,
    }, {
      item: lionKingsProtectiveCharm,
      qtn: 1,
    }, {
      item: sorcerersGlasses,
      qtn: 1,
    },
  ],
};

export { empressShield, empressShieldBp };
