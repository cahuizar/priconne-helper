import img from '@/assets/equipments/silver/devilsHorn.webp';
import imgBp from '@/assets/equipments/silver/devilsHornFrag.webp';

const devilsHornFrag = {
  id: 'eq-frag-devilsHorn',
  name: 'Devil\'s Horn Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const devilsHorn = {
  id: 'eq-devilsHorn',
  name: 'Devil\'s Horn',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: devilsHornFrag,
      qtn: 5,
    },
  ],
};

export { devilsHorn, devilsHornFrag };
