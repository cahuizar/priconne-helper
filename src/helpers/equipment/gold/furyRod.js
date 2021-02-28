import img from '@/assets/equipment/gold/furyRod.webp';
import imgBp from '@/assets/equipment/gold/furyRodFrag.webp';

const furyRodFrag = {
  id: 'eq-frag-furyRod',
  name: 'Fury Rod Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const furyRod = {
  id: 'eq-furyRod',
  name: 'Fury Rod',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: furyRodFrag,
      qtn: 10,
    },
  ],
};

export { furyRod, furyRodFrag };
