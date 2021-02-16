import img from '@/assets/equipment/gold/chaosBlade.webp';
import imgBp from '@/assets/equipment/gold/chaosBladeFrag.webp';

const chaosBladeFrag = {
  id: 'eq-frag-chaosBlade',
  name: 'Chaos Blade Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const chaosBlade = {
  id: 'eq-chaosBlade',
  name: 'Chaos Blade',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: chaosBladeFrag,
      qtn: 25,
    },
  ],
};

export { chaosBlade, chaosBladeFrag };
