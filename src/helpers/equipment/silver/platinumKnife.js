import img from '@/assets/equipments/silver/platinumKnife.webp';
import imgBp from '@/assets/equipments/silver/platinumKnifeFrag.webp';

const platinumKnifeFrag = {
  id: 'eq-frag-platinumKnife',
  name: 'Platinum Knife Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const platinumKnife = {
  id: 'eq-platinumKnife',
  name: 'Platinum Knife',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: platinumKnifeFrag,
      qtn: 3,
    },
  ],
};

export { platinumKnife, platinumKnifeFrag };
