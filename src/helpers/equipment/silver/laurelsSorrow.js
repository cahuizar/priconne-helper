import img from '@/assets/equipment/silver/laurelsSorrow.webp';
import imgBp from '@/assets/equipment/silver/laurelsSorrowFrag.webp';

const laurelsSorrowFrag = {
  id: 'eq-frag-laurelsSorrow',
  name: 'Laurels Sorrow Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const laurelsSorrow = {
  id: 'eq-laurelsSorrow',
  name: 'Laurels Sorrow',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: laurelsSorrowFrag,
      qtn: 5,
    },
  ],
};

export { laurelsSorrow, laurelsSorrowFrag };
