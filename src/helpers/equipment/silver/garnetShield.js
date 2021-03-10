import img from '@/assets/equipments/silver/garnetShield.webp';
import imgBp from '@/assets/equipments/silver/garnetShieldFrag.webp';

const garnetShieldFrag = {
  id: 'eq-frag-garnetShield',
  name: 'Garnet Shield Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const garnetShield = {
  id: 'eq-garnetShield',
  name: 'Garnet Shield',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: garnetShieldFrag,
      qtn: 5,
    },
  ],
};

export { garnetShield, garnetShieldFrag };
