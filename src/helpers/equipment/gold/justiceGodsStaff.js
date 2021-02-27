import img from '@/assets/equipment/gold/justiceGodsStaff.webp';
import imgBp from '@/assets/equipment/gold/justiceGodsStaffFrag.webp';

const justiceGodsStaffFrag = {
  id: 'eq-frag-justiceGodsStaff',
  name: 'Justice God\'s Staff Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const justiceGodsStaff = {
  id: 'eq-justiceGodsStaff',
  name: 'Justice God\'s Staff',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: justiceGodsStaffFrag,
      qtn: 20,
    },
  ],
};

export { justiceGodsStaff, justiceGodsStaffFrag };
