import img from '@/assets/equipment/gold/catGodPendant.webp';
import imgBp from '@/assets/equipment/gold/catGodPendantFrag.webp';

const catGodPendantFrag = {
  id: 'eq-frag-catGodPendant',
  name: 'Cat God Pendant Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const catGodPendant = {
  id: 'eq-catGodPendant',
  name: 'Cat God Pendant',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: catGodPendantFrag,
      qtn: 25,
    },
  ],
};

export { catGodPendant, catGodPendantFrag };
