import img from '@/assets/equipments/gold/congregationPendant.webp';
import imgBp from '@/assets/equipments/gold/congregationPendantFrag.webp';

const congregationPendantFrag = {
  id: 'eq-frag-congregationPendant',
  name: 'Congregation Pendant Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const congregationPendant = {
  id: 'eq-congregationPendant',
  name: 'Congregation Pendant',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: congregationPendantFrag,
      qtn: 25,
    },
  ],
};

export { congregationPendant, congregationPendantFrag };
