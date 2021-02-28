import img from '@/assets/equipment/silver/garnetShield.webp';
import imgBp from '@/assets/equipment/silver/garnetShieldFrag.webp';

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
