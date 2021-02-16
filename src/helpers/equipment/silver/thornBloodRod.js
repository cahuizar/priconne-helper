import img from '@/assets/equipment/silver/thornBloodRod.webp';
import imgBp from '@/assets/equipment/silver/thornBloodRodFrag.webp';

const thornBloodRodFrag = {
  id: 'eq-frag-thornBloodRod',
  name: 'Thorn Blood Rod Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const thornBloodRod = {
  id: 'eq-thornBloodRod',
  name: 'Thorn Blood Rod',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: thornBloodRodFrag,
      qtn: 3,
    },
  ],
};

export { thornBloodRod, thornBloodRodFrag };
