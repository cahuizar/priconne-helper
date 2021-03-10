import img from '@/assets/equipments/gold/saintsRobe.webp';
import imgBp from '@/assets/equipments/gold/saintsRobeBp.webp';
import { laurelsSorrow } from '@/helpers/equipment/silver/laurelsSorrow';
import { pearlEarrings } from '@/helpers/equipment/silver/pearlEarrings';

const saintsRobeBp = {
  id: 'eq-bp-saintsRobe',
  name: 'Saint\'s Robe Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const saintsRobe = {
  id: 'eq-saintsRobe',
  name: 'Saint\'s Robe',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: saintsRobeBp,
      qtn: 15,
    }, {
      item: laurelsSorrow,
      qtn: 1,
    }, {
      item: pearlEarrings,
      qtn: 1,
    },
  ],
};

export { saintsRobe, saintsRobeBp };
