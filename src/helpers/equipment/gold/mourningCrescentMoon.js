import img from '@/assets/equipments/gold/mourningCrescentMoon.webp';
import imgBp from '@/assets/equipments/gold/mourningCrescentMoonFrag.webp';

const mourningCrescentMoonFrag = {
  id: 'eq-frag-mourningCrescentMoon',
  name: 'Mourning Crescent Moon Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const mourningCrescentMoon = {
  id: 'eq-mourningCrescentMoon',
  name: 'Mourning Crescent Moon',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: mourningCrescentMoonFrag,
      qtn: 15,
    },
  ],
};

export { mourningCrescentMoon, mourningCrescentMoonFrag };
