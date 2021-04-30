import img from '@/assets/equipments/silver/scarletDiamond.webp';
import imgBp from '@/assets/equipments/silver/scarletDiamondFrag.webp';

const scarletDiamondFrag = {
  id: 'eq-frag-scarletDiamond',
  name: 'Scarlet Diamond Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const scarletDiamond = {
  id: 'eq-scarletDiamond',
  name: 'Scarlet Diamond',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: scarletDiamondFrag,
      qtn: 5,
    },
  ],
};

export { scarletDiamond, scarletDiamondFrag };
