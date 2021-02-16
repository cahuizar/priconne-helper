import img from '@/assets/equipment/silver/palaceCloth.webp';
import imgBp from '@/assets/equipment/silver/palaceClothFrag.webp';

const palaceClothFrag = {
  id: 'eq-frag-palaceCloth',
  name: 'Palace Cloth Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const palaceCloth = {
  id: 'eq-palaceCloth',
  name: 'Palace Cloth',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: palaceClothFrag,
      qtn: 5,
    },
  ],
};

export { palaceCloth, palaceClothFrag };
