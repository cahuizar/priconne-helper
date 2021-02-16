import img from '@/assets/equipment/silver/lionKingsProtectiveCharm.webp';
import imgBp from '@/assets/equipment/silver/lionKingsProtectiveCharmBp.webp';
import { emeraldEarrings } from '@/helpers/equipment/silver/emeraldEarrings';

const lionKingsProtectiveCharmBp = {
  id: 'eq-bp-lionKingsProtectiveCharm',
  name: 'Lion King\'s Protective Charm Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const lionKingsProtectiveCharm = {
  id: 'eq-lionKingsProtectiveCharm',
  name: 'Lion King\'s Protective Charm',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: lionKingsProtectiveCharmBp,
      qtn: 3,
    }, {
      item: emeraldEarrings,
      qtn: 1,
    },
  ],
};

export { lionKingsProtectiveCharm, lionKingsProtectiveCharmBp };
