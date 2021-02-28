import img from '@/assets/equipment/gold/wizardBoots.webp';
import imgBp from '@/assets/equipment/gold/wizardBootsFrag.webp';

const wizardBootsFrag = {
  id: 'eq-frag-wizardBoots',
  name: 'Wizard Boots Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const wizardBoots = {
  id: 'eq-wizardBoots',
  name: 'Wizard Boots',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: wizardBootsFrag,
      qtn: 10,
    },
  ],
};

export { wizardBoots, wizardBootsFrag };
