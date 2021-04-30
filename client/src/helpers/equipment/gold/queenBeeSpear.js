import img from '@/assets/equipments/gold/queenBeeSpear.webp';
import imgBp from '@/assets/equipments/gold/queenBeeSpearFrag.webp';

const queenBeeSpearFrag = {
  id: 'eq-frag-queenBeeSpear',
  name: 'Queen Bee Spear Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const queenBeeSpear = {
  id: 'eq-queenBeeSpear',
  name: 'Queen Bee Spear',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: queenBeeSpearFrag,
      qtn: 15,
    },
  ],
};

export { queenBeeSpear, queenBeeSpearFrag };
