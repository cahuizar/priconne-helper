import img from '@/assets/equipments/gold/rodOfLife.webp';
import imgBp from '@/assets/equipments/gold/rodOfLifeFrag.webp';

const rodOfLifeFrag = {
  id: 'eq-frag-rodOfLife',
  name: 'Rod of Life Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const rodOfLife = {
  id: 'eq-rodOfLife',
  name: 'Rod of Life',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: rodOfLifeFrag,
      qtn: 15,
    },
  ],
};

export { rodOfLife, rodOfLifeFrag };
