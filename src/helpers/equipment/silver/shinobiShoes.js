import img from '@/assets/equipments/silver/shinobiShoes.webp';
import imgBp from '@/assets/equipments/silver/shinobiShoesFrag.webp';

const shinobiShoesFrag = {
  id: 'eq-frag-shinobiShoes',
  name: 'Shinobi Shoes Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const shinobiShoes = {
  id: 'eq-shinobiShoes',
  name: 'Shinobi Shoes',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: shinobiShoesFrag,
      qtn: 3,
    },
  ],
};

export { shinobiShoes, shinobiShoesFrag };
