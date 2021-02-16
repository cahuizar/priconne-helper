import img from '@/assets/equipment/silver/witchHeadband.webp';
import imgBp from '@/assets/equipment/silver/witchHeadbandFrag.webp';

const witchHeadbandFrag = {
  id: 'eq-frag-witchHeadband',
  name: 'Witch Headband Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const witchHeadband = {
  id: 'eq-witchHeadband',
  name: 'Witch Headband',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: witchHeadbandFrag,
      qtn: 3,
    },
  ],
};

export { witchHeadband, witchHeadbandFrag };
