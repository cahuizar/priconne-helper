import img from '@/assets/equipments/silver/blueSphereAxe.webp';
import imgBp from '@/assets/equipments/silver/blueSphereAxeFrag.webp';

const blueSphereAxeFrag = {
  id: 'eq-frag-blueSphereAxe',
  name: 'Blue Sphere Axe Fragment',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const blueSphereAxe = {
  id: 'eq-blueSphereAxe',
  name: 'Blue Sphere Axe',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: blueSphereAxeFrag,
      qtn: 3,
    },
  ],
};

export { blueSphereAxe, blueSphereAxeFrag };
