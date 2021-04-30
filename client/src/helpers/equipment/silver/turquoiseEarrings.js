import img from '@/assets/equipments/silver/turquoiseEarrings.webp';
import imgBp from '@/assets/equipments/silver/turquoiseEarringsFrag.webp';

const turquoiseEarringsFrag = {
  id: 'eq-frag-turquoiseEarrings',
  name: 'Turquoise Earrings Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const turquoiseEarrings = {
  id: 'eq-turquoiseEarrings',
  name: 'Turquoise Earrings',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: turquoiseEarringsFrag,
      qtn: 3,
    },
  ],
};

export { turquoiseEarrings, turquoiseEarringsFrag };
