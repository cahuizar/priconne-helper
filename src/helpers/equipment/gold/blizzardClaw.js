import img from '@/assets/equipment/gold/blizzardClaw.webp';
import imgBp from '@/assets/equipment/gold/blizzardClawBp.webp';
import { blazingGauntlet } from '@/helpers/equipment/gold/blazingGauntlet';
import { turquoiseEarrings } from '@/helpers/equipment/silver/turquoiseEarrings';

const blizzardClawBp = {
  id: 'eq-bp-blizzardClaw',
  name: 'Blizzard Claw Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const blizzardClaw = {
  id: 'eq-blizzardClaw',
  name: 'Blizzard Claw',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: blizzardClawBp,
      qtn: 15,
    }, {
      item: blazingGauntlet,
      qtn: 1,
    }, {
      item: turquoiseEarrings,
      qtn: 1,
    },
  ],
};

export { blizzardClaw, blizzardClawBp };
