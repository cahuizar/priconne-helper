import img from '@/assets/equipments/gold/butterflyKatana.webp';
import imgBp from '@/assets/equipments/gold/butterflyKatanaFrag.webp';

const butterflyKatanaFrag = {
  id: 'eq-frag-butterflyKatana',
  name: 'Butterfly Katana Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const butterflyKatana = {
  id: 'eq-butterflyKatana',
  name: 'Butterfly Katana',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: butterflyKatanaFrag,
      qtn: 10,
    },
  ],
};

export { butterflyKatana, butterflyKatanaFrag };
