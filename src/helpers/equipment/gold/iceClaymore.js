import img from '@/assets/equipment/gold/iceClaymore.webp';
import imgBp from '@/assets/equipment/gold/iceClaymoreFrag.webp';

const iceClaymoreFrag = {
  id: 'eq-frag-iceClaymore',
  name: 'Ice Claymore Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const iceClaymore = {
  id: 'eq-iceClaymore',
  name: 'Ice Claymore',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: iceClaymoreFrag,
      qtn: 20,
    },
  ],
};

export { iceClaymore, iceClaymoreFrag };
