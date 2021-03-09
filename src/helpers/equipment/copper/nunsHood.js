import img from '@/assets/equipments/copper/nunsHood.webp';
import imgBp from '@/assets/equipments/copper/nunsHoodBp.webp';
import doctorlessStaff from '@/helpers/equipment/copper/doctorlessStaff';

const nunsHoodBp = {
  id: 'eq-bp-nunsHood',
  name: 'Nun\'s Hood Blueprint',
  imgPath: imgBp,
  rarity: 'copper',
  formula: [],
};

const nunsHood = {
  id: 'eq-nunsHood',
  name: 'Nun\'s Hood',
  imgPath: img,
  rarity: 'copper',
  formula: [
    {
      item: nunsHoodBp,
      qtn: 1,
    }, {
      item: doctorlessStaff,
      qtn: 1,
    },
  ],
};

export { nunsHood, nunsHoodBp };
