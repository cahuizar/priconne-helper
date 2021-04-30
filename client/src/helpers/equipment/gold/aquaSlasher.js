import img from '@/assets/equipments/gold/aquaSlasher.webp';
import imgBp from '@/assets/equipments/gold/aquaSlasherFrag.webp';

const aquaSlasherFrag = {
  id: 'eq-frag-aquaSlasher',
  name: 'Aqua Slasher Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const aquaSlasher = {
  id: 'eq-aquaSlasher',
  name: 'Aqua Slasher',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: aquaSlasherFrag,
      qtn: 25,
    },
  ],
};

export { aquaSlasher, aquaSlasherFrag };
