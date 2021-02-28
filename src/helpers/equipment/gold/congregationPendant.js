import img from '@/assets/equipment/gold/congregationPendant.webp';
import imgBp from '@/assets/equipment/gold/congregationPendantFrag.webp';

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
