import img from '@/assets/equipments/gold/gaiaBardiche.webp';
import imgBp from '@/assets/equipments/gold/gaiaBardicheFrag.webp';

const gaiaBardicheFrag = {
  id: 'eq-frag-gaiaBardiche',
  name: 'Gaia Bardiche Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const gaiaBardiche = {
  id: 'eq-gaiaBardiche',
  name: 'Gaia Bardiche',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: gaiaBardicheFrag,
      qtn: 25,
    },
  ],
};

export { gaiaBardiche, gaiaBardicheFrag };
