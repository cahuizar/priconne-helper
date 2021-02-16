import img from '@/assets/equipment/gold/angelBlade.webp';
import imgBp from '@/assets/equipment/gold/angelBladeFrag.webp';

const angelBladeFrag = {
  id: 'eq-frag-angelBlade',
  name: 'Angel Blade Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const angelBlade = {
  id: 'eq-angelBlade',
  name: 'Angel Blade',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: angelBladeFrag,
      qtn: 10,
    },
  ],
};

export { angelBlade, angelBladeFrag };
