import img from '@/assets/equipment/gold/angelArmor.webp';
import imgBp from '@/assets/equipment/gold/angelArmorBp.webp';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import { gorgeousArmor } from '@/helpers/equipment/silver/gorgeousArmor';

const angelArmorBp = {
  id: 'eq-bp-angelArmor',
  name: 'Angel Armor Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const angelArmor = {
  id: 'eq-angelArmor',
  name: 'Angel Armor',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: angelArmorBp,
      qtn: 10,
    }, {
      item: lionKingsProtectiveCharm,
      qtn: 1,
    }, {
      item: gorgeousArmor,
      qtn: 1,
    },
  ],
};

export { angelArmor, angelArmorBp };
