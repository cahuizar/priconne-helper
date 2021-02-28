import img from '@/assets/equipment/gold/hawkGodsSword.webp';
import imgBp from '@/assets/equipment/gold/hawkGodsSwordFrag.webp';

const hawkGodsSwordFrag = {
  id: 'eq-frag-hawkGodsSword',
  name: 'Hawk God\'s Sword Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const hawkGodsSword = {
  id: 'eq-hawkGodsSword',
  name: 'Hawk God\'s Sword',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: hawkGodsSwordFrag,
      qtn: 20,
    },
  ],
};

export { hawkGodsSword, hawkGodsSwordFrag };
