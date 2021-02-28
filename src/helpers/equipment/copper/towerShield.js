import img from '@/assets/equipment/copper/towerShield.webp';
import imgBp from '@/assets/equipment/copper/towerShieldBp.webp';
import treeShield from '@/helpers/equipment/common/treeShield';

const towerShieldBp = {
  id: 'eq-bp-towerShield',
  name: 'Tower Shield Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const towerShield = {
  id: 'eq-towerShield',
  name: 'Tower Shield',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: towerShieldBp,
      qtn: 1,
    }, {
      item: treeShield,
      qtn: 1,
    },
  ],
};

export { towerShield, towerShieldBp };
