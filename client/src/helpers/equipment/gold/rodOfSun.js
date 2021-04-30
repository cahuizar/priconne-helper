import img from '@/assets/equipments/gold/rodOfSun.webp';
import imgBp from '@/assets/equipments/gold/rodOfSunFrag.webp';

const rodOfSunFrag = {
  id: 'eq-frag-rodOfSun',
  name: 'Rod of Sun Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const rodOfSun = {
  id: 'eq-rodOfSun',
  name: 'Rod of Sun',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: rodOfSunFrag,
      qtn: 15,
    },
  ],
};

export { rodOfSun, rodOfSunFrag };
