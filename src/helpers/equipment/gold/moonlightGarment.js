import img from '@/assets/equipment/gold/moonlightGarment.webp';
import imgBp from '@/assets/equipment/gold/moonlightGarmentFrag.webp';

const moonlightGarmentFrag = {
  id: 'eq-frag-moonlightGarment',
  name: 'Moonlight Garment Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const moonlightGarment = {
  id: 'eq-moonlightGarment',
  name: 'Moonlight Garment',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: moonlightGarmentFrag,
      qtn: 10,
    },
  ],
};

export { moonlightGarment, moonlightGarmentFrag };
