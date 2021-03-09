import img from '@/assets/equipments/silver/lionEaglesFeather.webp';
import imgBp from '@/assets/equipments/silver/lionEaglesFeatherFrag.webp';

const lionEaglesFeatherFrag = {
  id: 'eq-frag-lionEaglesFeather',
  name: 'Lion Eagle\'s Feather Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const lionEaglesFeather = {
  id: 'eq-lionEaglesFeather',
  name: 'Lion Eagle\'s Feather',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: lionEaglesFeatherFrag,
      qtn: 3,
    },
  ],
};

export { lionEaglesFeather, lionEaglesFeatherFrag };
