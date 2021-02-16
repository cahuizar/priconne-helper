import img from '@/assets/equipment/silver/sparklingSword.webp';
import imgBp from '@/assets/equipment/silver/sparklingSwordFrag.webp';

const sparklingSwordFrag = {
  id: 'eq-frag-sparklingSword',
  name: ' Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const sparklingSword = {
  id: 'eq-sparklingSword',
  name: '',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: sparklingSwordFrag,
      qtn: 3,
    },
  ],
};

export { sparklingSword, sparklingSwordFrag };
