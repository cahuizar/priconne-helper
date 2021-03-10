import img from '@/assets/equipments/silver/witchHat.webp';
import imgBp from '@/assets/equipments/silver/witchHatFrag.webp';

const witchHatFrag = {
  id: 'eq-frag-witchHat',
  name: 'Witch Hat Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const witchHat = {
  id: 'eq-witchHat',
  name: 'Witch Hat',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: witchHatFrag,
      qtn: 5,
    },
  ],
};

export { witchHat, witchHatFrag };
