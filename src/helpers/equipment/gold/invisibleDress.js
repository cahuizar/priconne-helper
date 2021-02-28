import img from '@/assets/equipment/gold/invisibleDress.webp';
import imgBp from '@/assets/equipment/gold/invisibleDressFrag.webp';

const invisibleDressFrag = {
  id: 'eq-frag-invisibleDress',
  name: 'Invisible Dress Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const invisibleDress = {
  id: 'eq-invisibleDress',
  name: 'Invisible Dress',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: invisibleDressFrag,
      qtn: 10,
    },
  ],
};

export { invisibleDress, invisibleDressFrag };
