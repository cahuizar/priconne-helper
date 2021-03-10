import img from '@/assets/equipments/gold/greatSageGem.webp';
import imgBp from '@/assets/equipments/gold/greatSageGemFrag.webp';

const greatSageGemFrag = {
  id: 'eq-frag-greatSageGem',
  name: 'Great Sage Gem Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const greatSageGem = {
  id: 'eq-greatSageGem',
  name: 'Great Sage Gem',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: greatSageGemFrag,
      qtn: 25,
    },
  ],
};

export { greatSageGem, greatSageGemFrag };
