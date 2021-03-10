import img from '@/assets/equipments/gold/bangleOfSubstitution.webp';
import imgBp from '@/assets/equipments/gold/bangleOfSubstitutionFrag.webp';

const bangleOfSubstitutionFrag = {
  id: 'eq-frag-bangleOfSubstitution',
  name: 'Bangle of Substitution Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const bangleOfSubstitution = {
  id: 'eq-bangleOfSubstitution',
  name: 'Bangle of Substitution',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: bangleOfSubstitutionFrag,
      qtn: 15,
    },
  ],
};

export { bangleOfSubstitution, bangleOfSubstitutionFrag };
