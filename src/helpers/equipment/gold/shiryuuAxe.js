import img from '@/assets/equipment/gold/shiryuuAxe.webp';
import imgBp from '@/assets/equipment/gold/shiryuuAxeFrag.webp';

const shiryuuAxeFrag = {
  id: 'eq-frag-shiryuuAxe',
  name: 'Shiryuu Axe Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const shiryuuAxe = {
  id: 'eq-shiryuuAxe',
  name: 'Shiryuu Axe',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: shiryuuAxeFrag,
      qtn: 10,
    },
  ],
};

export { shiryuuAxe, shiryuuAxeFrag };
