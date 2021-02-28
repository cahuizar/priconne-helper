import img from '@/assets/equipment/silver/thunderGodSword.webp';
import imgBp from '@/assets/equipment/silver/thunderGodSwordBp.webp';
import { ryuumonSword } from '@/helpers/equipment/silver/ryuumonSword';

const thunderGodSwordBp = {
  id: 'eq-bp-thunderGodSword',
  name: 'Thunder God Sword Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const thunderGodSword = {
  id: 'eq-thunderGodSword',
  name: 'Thunder God Sword',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: thunderGodSwordBp,
      qtn: 5,
    }, {
      item: ryuumonSword,
      qtn: 1,
    },
  ],
};

export { thunderGodSword, thunderGodSwordBp };
