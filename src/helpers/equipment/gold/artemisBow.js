import img from '@/assets/equipment/gold/artemisBow.webp';
import imgBp from '@/assets/equipment/gold/artemisBowFrag.webp';

const artemisBowFrag = {
  id: 'eq-frag-artemisBow',
  name: 'Artemis Bow Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const artemisBow = {
  id: 'eq-artemisBow',
  name: 'Artemis Bow',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: artemisBowFrag,
      qtn: 20,
    },
  ],
};

export { artemisBow, artemisBowFrag };
