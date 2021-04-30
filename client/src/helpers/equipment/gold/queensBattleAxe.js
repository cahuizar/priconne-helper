import img from '@/assets/equipments/gold/queensBattleAxe.webp';
import imgBp from '@/assets/equipments/gold/queensBattleAxeFrag.webp';

const queensBattleAxeFrag = {
  id: 'eq-frag-queensBattleAxe',
  name: 'Queen\'s Battle Axe Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const queensBattleAxe = {
  id: 'eq-queensBattleAxe',
  name: 'Queen\'s Battle Axe',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: queensBattleAxeFrag,
      qtn: 20,
    },
  ],
};

export { queensBattleAxe, queensBattleAxeFrag };
