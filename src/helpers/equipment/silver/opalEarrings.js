import img from '@/assets/equipment/silver/opalEarrings.webp';
import imgBp from '@/assets/equipment/silver/opalEarringsFrag.webp';

const opalEarringsFrag = {
  id: 'eq-frag-opalEarrings',
  name: 'Opal Earrings Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const opalEarrings = {
  id: 'eq-opalEarrings',
  name: 'Opal Earrings',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: opalEarringsFrag,
      qtn: 3,
    },
  ],
};

export { opalEarrings, opalEarringsFrag };
