import img from '@/assets/equipment/gold/firelordsRing.webp';
import imgBp from '@/assets/equipment/gold/firelordsRingFrag.webp';

const firelordsRingFrag = {
  id: 'eq-frag-firelordsRing',
  name: 'Firelord\'s Ring Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const firelordsRing = {
  id: 'eq-firelordsRing',
  name: 'Firelord\'s Ring',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: firelordsRingFrag,
      qtn: 25,
    },
  ],
};

export { firelordsRing, firelordsRingFrag };
