import img from '@/assets/equipments/gold/shiryuuAxe.webp';
import imgBp from '@/assets/equipments/gold/shiryuuAxeFrag.webp';

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
