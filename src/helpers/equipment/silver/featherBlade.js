import img from '@/assets/equipment/silver/featherBlade.webp';
import imgBp from '@/assets/equipment/silver/featherBladeFrag.webp';

const featherBladeFrag = {
  id: 'eq-frag-featherBlade',
  name: 'Feather Blade Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const featherBlade = {
  id: 'eq-featherBlade',
  name: 'Feather Blade',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: featherBladeFrag,
      qtn: 5,
    },
  ],
};

export { featherBlade, featherBladeFrag };
