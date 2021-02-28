import img from '@/assets/equipment/gold/solarSword.webp';
import imgBp from '@/assets/equipment/gold/solarSwordFrag.webp';

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
