import img from '@/assets/equipment/silver/scarletDiamond.webp';
import imgBp from '@/assets/equipment/silver/scarletDiamondFrag.webp';

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
