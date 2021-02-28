import img from '@/assets/equipments/gold/solarSword.webp';
import imgBp from '@/assets/equipments/gold/solarSwordFrag.webp';

const solarSwordFrag = {
  id: 'eq-frag-solarSword',
  name: 'Solar Sword Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const solarSword = {
  id: 'eq-solarSword',
  name: 'Solar Sword',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: solarSwordFrag,
      qtn: 15,
    },
  ],
};

export { solarSword, solarSwordFrag };
