import img from '@/assets/equipment/silver/ryuumonSword.webp';
import imgBp from '@/assets/equipment/silver/ryuumonSwordFrag.webp';

const ryuumonSwordFrag = {
  id: 'eq-frag-ryuumonSword',
  name: 'Ryuumon Sword Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const ryuumonSword = {
  id: 'eq-ryuumonSword',
  name: 'Ryuumon Sword',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: ryuumonSwordFrag,
      qtn: 3,
    },
  ],
};

export { ryuumonSword, ryuumonSwordFrag };
