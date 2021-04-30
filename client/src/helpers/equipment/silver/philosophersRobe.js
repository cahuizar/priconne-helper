import img from '@/assets/equipments/silver/philosophersRobe.webp';
import imgBp from '@/assets/equipments/silver/philosophersRobeFrag.webp';

const philosophersRobeFrag = {
  id: 'eq-frag-philosophersRobe',
  name: 'Philosopher\'s Robe Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const philosophersRobe = {
  id: 'eq-philosophersRobe',
  name: 'Philosopher\'s Robe',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: philosophersRobeFrag,
      qtn: 5,
    },
  ],
};

export { philosophersRobe, philosophersRobeFrag };
