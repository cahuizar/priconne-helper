import img from '@/assets/equipments/gold/grandMagiciansRobe.webp';
import imgBp from '@/assets/equipments/gold/grandMagiciansRobeFrag.webp';

const grandMagiciansRobeFrag = {
  id: 'eq-frag-grandMagiciansRobe',
  name: 'Grand Magician\'s Robe Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const grandMagiciansRobe = {
  id: 'eq-grandMagiciansRobe',
  name: 'Grand Magician\'s Robe',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: grandMagiciansRobeFrag,
      qtn: 10,
    },
  ],
};

export { grandMagiciansRobe, grandMagiciansRobeFrag };
