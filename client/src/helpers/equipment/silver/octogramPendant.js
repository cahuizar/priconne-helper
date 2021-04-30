import img from '@/assets/equipments/silver/octogramPendant.webp';
import imgBp from '@/assets/equipments/silver/octogramPendantBp.webp';
import victoryFriendshipBracelet from '@/helpers/equipment/copper/victoryFriendshipBracelet';

const octogramPendantBp = {
  id: 'eq-bp-octogramPendant',
  name: 'Octogram Pendant Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const octogramPendant = {
  id: 'eq-octogramPendant',
  name: 'Octogram Pendant',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: octogramPendantBp,
      qtn: 5,
    }, {
      item: victoryFriendshipBracelet,
      qtn: 1,
    },
  ],
};

export { octogramPendant, octogramPendantBp };
