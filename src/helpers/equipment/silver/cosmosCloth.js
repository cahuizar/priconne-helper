import img from '@/assets/equipment/silver/cosmosCloth.webp';
import imgBp from '@/assets/equipment/silver/cosmosClothBp.webp';
import { millefeuilleCloth } from '@/helpers/equipment/silver/millefeuilleCloth';
import { turquoiseEarrings } from '@/helpers/equipment/silver/turquoiseEarrings';

const cosmosClothBp = {
  id: 'eq-bp-cosmosCloth',
  name: 'Cosmos Cloth Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const cosmosCloth = {
  id: 'eq-cosmosCloth',
  name: 'Cosmos Cloth',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: cosmosClothBp,
      qtn: 5,
    }, {
      item: millefeuilleCloth,
      qtn: 1,
    }, {
      item: turquoiseEarrings,
      qtn: 1,
    },
  ],
};

export { cosmosCloth, cosmosClothBp };
