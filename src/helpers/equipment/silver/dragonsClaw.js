import img from '@/assets/equipment/silver/dragonsClaw.webp';
import imgBp from '@/assets/equipment/silver/dragonsClawFrag.webp';

const dragonsClawFrag = {
  id: 'eq-frag-dragonsClaw',
  name: 'Dragon\'s Claw Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const dragonsClaw = {
  id: 'eq-dragonsClaw',
  name: 'Dragon\'s Claw',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: dragonsClawFrag,
      qtn: 5,
    },
  ],
};

export { dragonsClaw, dragonsClawFrag };
