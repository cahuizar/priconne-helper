import img from '@/assets/equipments/silver/cupidsBow.webp';
import imgBp from '@/assets/equipments/silver/cupidsBowFrag.webp';

const cupidsBowFrag = {
  id: 'eq-frag-cupidsBow',
  name: 'Cupid\'s Bow Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const cupidsBow = {
  id: 'eq-cupidsBow',
  name: 'Cupid\'s Bow',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: cupidsBowFrag,
      qtn: 5,
    },
  ],
};

export { cupidsBow, cupidsBowFrag };
