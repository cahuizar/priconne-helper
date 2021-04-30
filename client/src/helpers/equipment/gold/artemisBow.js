import img from '@/assets/equipments/gold/artemisBow.webp';
import imgBp from '@/assets/equipments/gold/artemisBowFrag.webp';

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
