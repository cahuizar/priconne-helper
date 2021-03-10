import img from '@/assets/equipments/gold/featherWaltz.webp';
import imgBp from '@/assets/equipments/gold/featherWaltzBp.webp';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import { legionHelm } from '@/helpers/equipment/copper/legionHelm';

const featherWaltzBp = {
  id: 'eq-bp-featherWaltz',
  name: 'Feather Waltz Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const featherWaltz = {
  id: 'eq-featherWaltz',
  name: 'Feather Waltz',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: featherWaltzBp,
      qtn: 10,
    }, {
      item: lionKingsProtectiveCharm,
      qtn: 1,
    }, {
      item: legionHelm,
      qtn: 1,
    },
  ],
};

export { featherWaltz, featherWaltzBp };
