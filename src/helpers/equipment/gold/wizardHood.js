import img from '@/assets/equipments/gold/wizardHood.webp';
import imgBp from '@/assets/equipments/gold/wizardHoodBp.webp';
import { laurelsSorrow } from '@/helpers/equipment/silver/laurelsSorrow';

const wizardHoodBp = {
  id: 'eq-bp-wizardHood',
  name: 'Wizard Hood Blueprint',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const wizardHood = {
  id: 'eq-wizardHood',
  name: 'Wizard Hood',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: wizardHoodBp,
      qtn: 10,
    }, {
      item: laurelsSorrow,
      qtn: 1,
    },
  ],
};

export { wizardHood, wizardHoodBp };
