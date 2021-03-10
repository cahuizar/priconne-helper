import img from '@/assets/equipments/gold/moonBracelet.webp';
import imgBp from '@/assets/equipments/gold/moonBraceletFrag.webp';

const moonBraceletFrag = {
  id: 'eq-frag-moonBracelet',
  name: 'Moon Bracelet Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const moonBracelet = {
  id: 'eq-moonBracelet',
  name: 'Moon Bracelet',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: moonBraceletFrag,
      qtn: 20,
    },
  ],
};

export { moonBracelet, moonBraceletFrag };
