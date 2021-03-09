import img from '@/assets/equipments/gold/sunAmulet.webp';
import imgBp from '@/assets/equipments/gold/sunAmuletFrag.webp';

const sunAmuletFrag = {
  id: 'eq-frag-sunAmulet',
  name: 'Sun Amulet Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const sunAmulet = {
  id: 'eq-sunAmulet',
  name: 'Sun Amulet',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: sunAmuletFrag,
      qtn: 20,
    },
  ],
};

export { sunAmulet, sunAmuletFrag };
