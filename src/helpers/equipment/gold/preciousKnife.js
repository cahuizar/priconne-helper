import img from '@/assets/equipments/gold/preciousKnife.webp';
import imgBp from '@/assets/equipments/gold/preciousKnifeFrag.webp';
import { featherBlade } from '@/helpers/equipment/silver/featherBlade';

const preciousKnifeFrag = {
  id: 'eq-frag-preciousKnife',
  name: 'Precious Knife Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const preciousKnife = {
  id: 'eq-preciousKnife',
  name: 'Precious Knife',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: preciousKnifeFrag,
      qtn: 10,
    }, {
      item: featherBlade,
      qtn: 1,
    },
  ],
};

export { preciousKnife, preciousKnifeFrag };
