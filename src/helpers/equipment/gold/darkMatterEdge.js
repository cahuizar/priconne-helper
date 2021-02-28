import img from '@/assets/equipment/gold/darkMatterEdge.webp';
import imgBp from '@/assets/equipment/gold/darkMatterEdgeFrag.webp';

const darkMatterEdgeFrag = {
  id: 'eq-frag-darkMatterEdge',
  name: 'Dark Matter Edge Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const darkMatterEdge = {
  id: 'eq-darkMatterEdge',
  name: 'Dark Matter Edge',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: darkMatterEdgeFrag,
      qtn: 20,
    },
  ],
};

export { darkMatterEdge, darkMatterEdgeFrag };
