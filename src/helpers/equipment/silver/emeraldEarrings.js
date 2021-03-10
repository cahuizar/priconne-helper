import img from '@/assets/equipments/silver/emeraldEarrings.webp';
import imgBp from '@/assets/equipments/silver/emeraldEarringsFrag.webp';

const emeraldEarringsFrag = {
  id: 'eq-frag-emeraldEarrings',
  name: 'Emerald Earrings Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const emeraldEarrings = {
  id: 'eq-emeraldEarrings',
  name: 'Emerald Earrings',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: emeraldEarringsFrag,
      qtn: 3,
    },
  ],
};

export { emeraldEarrings, emeraldEarringsFrag };
