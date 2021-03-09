import img from '@/assets/equipments/silver/heavyMetalArmor.webp';
import imgBp from '@/assets/equipments/silver/heavyMetalArmorFrag.webp';

const heavyMetalArmorFrag = {
  id: 'eq-frag-heavyMetalArmor',
  name: 'Heavy Metal Armor Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const heavyMetalArmor = {
  id: 'eq-heavyMetalArmor',
  name: 'Heavy Metal Armor',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: heavyMetalArmorFrag,
      qtn: 5,
    },
  ],
};

export { heavyMetalArmor, heavyMetalArmorFrag };
