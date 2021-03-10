import img from '@/assets/equipments/gold/lionKingGauntlet.webp';
import imgBp from '@/assets/equipments/gold/lionKingGauntletFrag.webp';

const lionKingGauntletFrag = {
  id: 'eq-frag-lionKingGauntlet',
  name: 'Lion King Gauntlet Fragment',
  imgPath: imgBp,
  rarity: 'gold',
  formula: [],
};

const lionKingGauntlet = {
  id: 'eq-lionKingGauntlet',
  name: 'Lion King Gauntlet',
  imgPath: img,
  rarity: 'gold',
  formula: [
    {
      item: lionKingGauntletFrag,
      qtn: 15,
    },
  ],
};

export { lionKingGauntlet, lionKingGauntletFrag };
