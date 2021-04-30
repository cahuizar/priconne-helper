import img from '@/assets/characters/regular/yukari.webp';
import ironBlade from '@/helpers/equipment/common/ironBlade';
import leatherOveralls from '@/helpers/equipment/common/leatherOveralls';
import treeShield from '@/helpers/equipment/common/treeShield';
import protectivePendant from '@/helpers/equipment/common/protectivePendant';
import auroraSword from '@/helpers/equipment/copper/auroraSword';
import gearBlade from '@/helpers/equipment/copper/gearBlade';
import clothesOfWisdom from '@/helpers/equipment/copper/clothesOfWisdom';
import { sparklingSword } from '@/helpers/equipment/silver/sparklingSword';
import { lightPlate } from '@/helpers/equipment/copper/lightPlate';
import { towerShield } from '@/helpers/equipment/copper/towerShield';
import jewelOfLove from '@/helpers/equipment/copper/jewelOfLove';
import { ryuumonSword } from '@/helpers/equipment/silver/ryuumonSword';
import { fashionArmor } from '@/helpers/equipment/silver/fashionArmor';
import victoryFriendshipBracelet from '@/helpers/equipment/copper/victoryFriendshipBracelet';
import { featherBlade } from '@/helpers/equipment/silver/featherBlade';
import { battlingDress } from '@/helpers/equipment/silver/battlingDress';
import { garnetShield } from '@/helpers/equipment/silver/garnetShield';
import { emeraldEarrings } from '@/helpers/equipment/silver/emeraldEarrings';
import { angelBlade } from '@/helpers/equipment/gold/angelBlade';
import { cosmosCloth } from '@/helpers/equipment/silver/cosmosCloth';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';
import { octogramPendant } from '@/helpers/equipment/silver/octogramPendant';
import { solarSword } from '@/helpers/equipment/gold/solarSword';
import { empressShield } from '@/helpers/equipment/gold/empressShield';
import { invisibleDress } from '@/helpers/equipment/gold/invisibleDress';
import { scarletDiamond } from '@/helpers/equipment/silver/scarletDiamond';
import { iceClaymore } from '@/helpers/equipment/gold/iceClaymore';
import { angelBoots } from '@/helpers/equipment/gold/angelBoots';
import { bangleOfSubstitution } from '@/helpers/equipment/gold/bangleOfSubstitution';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import { chaosBlade } from '@/helpers/equipment/gold/chaosBlade';
import { crusaderPlate } from '@/helpers/equipment/gold/crusaderPlate';
import { mythrilPlate } from '@/helpers/equipment/gold/mythrilPlate';
import { moonBracelet } from '@/helpers/equipment/gold/moonBracelet';

const yukari = {
  id: 'char-yukari',
  name: 'Yukari',
  imgPath: img,
  ranks: [
    {
      name: 'Rank 1',
      category: 'common',
      item: [
        ironBlade, ironBlade, leatherOveralls, treeShield, protectivePendant, protectivePendant,
      ],
    }, {
      name: 'Rank 2',
      category: 'copper',
      item: [
        auroraSword, gearBlade, clothesOfWisdom, clothesOfWisdom, protectivePendant,
        protectivePendant,
      ],
    }, {
      name: 'Rank 3',
      category: 'copper',
      item: [
        sparklingSword, auroraSword, lightPlate, towerShield, jewelOfLove, jewelOfLove,
      ],
    }, {
      name: 'Rank 4',
      category: 'silver',
      item: [
        ryuumonSword, sparklingSword, fashionArmor, sparklingSword, victoryFriendshipBracelet,
        victoryFriendshipBracelet,
      ],
    }, {
      name: 'Rank 5',
      category: 'silver',
      item: [
        featherBlade, ryuumonSword, battlingDress, garnetShield, emeraldEarrings, emeraldEarrings,
      ],
    }, {
      name: 'Rank 6',
      category: 'silver',
      item: [
        angelBlade, featherBlade, cosmosCloth, lionEaglesFeather, octogramPendant, octogramPendant,
      ],
    }, {
      name: 'Rank 7',
      category: 'gold',
      item: [
        solarSword, empressShield, invisibleDress, scarletDiamond, featherBlade, octogramPendant,
      ],
    }, {
      name: 'Rank 8',
      category: 'gold',
      item: [
        iceClaymore, solarSword, angelBoots, empressShield, bangleOfSubstitution,
        lionKingsProtectiveCharm,
      ],
    }, {
      name: 'Rank 9',
      category: 'gold',
      item: [
        chaosBlade, iceClaymore, crusaderPlate, mythrilPlate, moonBracelet, bangleOfSubstitution,
      ],
    },
  ],
};

export default yukari;
