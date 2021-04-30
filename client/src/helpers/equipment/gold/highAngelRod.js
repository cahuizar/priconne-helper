import img from '@/assets/equipments/gold/highAngelRod.webp';
import imgBp from '@/assets/equipments/gold/highAngelRodFrag.webp';

const highAngelRodFrag = {
  id: 'eq-frag-highAngelRod',
  name: 'High Angel Rod Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const highAngelRod = {
  id: 'eq-highAngelRod',
  name: 'High Angel Rod',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: highAngelRodFrag,
      qtn: 25,
    },
  ],
};

export { highAngelRod, highAngelRodFrag };
