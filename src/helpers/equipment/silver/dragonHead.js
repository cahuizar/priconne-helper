import img from '@/assets/equipment/silver/dragonHead.webp';
import imgBp from '@/assets/equipment/silver/dragonHeadBp.webp';
import { highMetalPlate } from '@/helpers/equipment/copper/highMetalPlate';
import { legionHelm } from '@/helpers/equipment/copper/legionHelm';

const dragonHeadBp = {
  id: 'eq-bp-dragonHead',
  name: 'Dragon Head Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const dragonHead = {
  id: 'eq-dragonHead',
  name: 'Dragon Head',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: dragonHeadBp,
      qtn: 5,
    }, {
      item: highMetalPlate,
      qtn: 1,
    }, {
      item: legionHelm,
      qtn: 1,
    },
  ],
};

export { dragonHead, dragonHeadBp };
