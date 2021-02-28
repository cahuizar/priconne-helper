import img from '@/assets/equipment/gold/dragonsTear.webp';
import imgBp from '@/assets/equipment/gold/dragonsTearFrag.webp';

const dragonsTearFrag = {
  id: 'eq-frag-dragonsTear',
  name: 'Dragon\'s Tear Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const dragonsTear = {
  id: 'eq-dragonsTear',
  name: 'Dragon\'s Tear',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: dragonsTearFrag,
      qtn: 20,
    },
  ],
};

export { dragonsTear, dragonsTearFrag };
