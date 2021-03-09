import img from '@/assets/characters/regular/nozomi.webp';
import ironBlade from '@/helpers/equipment/common/ironBlade';
import treeShield from '@/helpers/equipment/common/treeShield';
import leatherOveralls from '@/helpers/equipment/common/leatherOveralls';
import motivationalBracelet from '@/helpers/equipment/common/motivationalBracelet';
import protectivePendant from '@/helpers/equipment/common/protectivePendant';
import auroraSword from '@/helpers/equipment/copper/auroraSword';
import { cuteCaskets } from '@/helpers/equipment/copper/cuteCaskets';
import clothesOfWisdom from '@/helpers/equipment/copper/clothesOfWisdom';
import { legionHelm } from '@/helpers/equipment/copper/legionHelm';
import { sparklingSword } from '@/helpers/equipment/silver/sparklingSword';
import { towerShield } from '@/helpers/equipment/copper/towerShield';
import { lightPlate } from '@/helpers/equipment/copper/lightPlate';
import trident from '@/helpers/equipment/copper/trident';
import jewelOfLove from '@/helpers/equipment/copper/jewelOfLove';
import { ryuumonSword } from '@/helpers/equipment/silver/ryuumonSword';
import { shinobiShoes } from '@/helpers/equipment/silver/shinobiShoes';
import { gorgeousArmor } from '@/helpers/equipment/silver/gorgeousArmor';
import flameSpear from '@/helpers/equipment/copper/flameSpear';
import victoryFriendshipBracelet from '@/helpers/equipment/copper/victoryFriendshipBracelet';
import { featherBlade } from '@/helpers/equipment/silver/featherBlade';
import { garnetShield } from '@/helpers/equipment/silver/garnetShield';
import { battlingDress } from '@/helpers/equipment/silver/battlingDress';
import { opalEarrings } from '@/helpers/equipment/silver/opalEarrings';
import { emeraldEarrings } from '@/helpers/equipment/silver/emeraldEarrings';
import { angelBlade } from '@/helpers/equipment/gold/angelBlade';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import { heavyMetalArmor } from '@/helpers/equipment/silver/heavyMetalArmor';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';
import { octogramPendant } from '@/helpers/equipment/silver/octogramPendant';
import { solarSword } from '@/helpers/equipment/gold/solarSword';
import { empressShield } from '@/helpers/equipment/gold/empressShield';
import { angelArmor } from '@/helpers/equipment/gold/angelArmor';
import { iceClaymore } from '@/helpers/equipment/gold/iceClaymore';
import { angelBoots } from '@/helpers/equipment/gold/angelBoots';
import { featherWaltz } from '@/helpers/equipment/gold/featherWaltz';
import { bangleOfSubstitution } from '@/helpers/equipment/gold/bangleOfSubstitution';
import { chaosBlade } from '@/helpers/equipment/gold/chaosBlade';
import { violetArmor } from '@/helpers/equipment/gold/violetArmor';
import { mythrilPlate } from '@/helpers/equipment/gold/mythrilPlate';
import { moonBracelet } from '@/helpers/equipment/gold/moonBracelet';

const nozomi = {
  id: 'char-nozomi',
  name: 'Nozomi',
  imgPath: img,
  ranks: [
    {
      name: 'Rank 1',
      category: 'common',
      item: [
        ironBlade, treeShield, leatherOveralls, treeShield, motivationalBracelet,
        protectivePendant,
      ],
    }, {
      name: 'Rank 2',
      category: 'copper',
      item: [
        auroraSword, cuteCaskets, clothesOfWisdom, legionHelm, motivationalBracelet,
        protectivePendant,
      ],
    }, {
      name: 'Rank 3',
      category: 'copper',
      item: [sparklingSword, towerShield, lightPlate, towerShield, trident, jewelOfLove],
    }, {
      name: 'Rank 4',
      category: 'silver',
      item: [
        ryuumonSword, shinobiShoes, gorgeousArmor, shinobiShoes, flameSpear,
        victoryFriendshipBracelet,
      ],
    }, {
      name: 'Rank 5',
      category: 'silver',
      item: [
        featherBlade, garnetShield, battlingDress, garnetShield, opalEarrings, emeraldEarrings,
      ],
    }, {
      name: 'Rank 6',
      category: 'silver',
      item: [
        angelBlade, lionKingsProtectiveCharm, heavyMetalArmor, garnetShield, lionEaglesFeather,
        octogramPendant,
      ],
    }, {
      name: 'Rank 7',
      category: 'gold',
      item: [
        solarSword, empressShield, angelArmor, lionKingsProtectiveCharm,
        lionKingsProtectiveCharm, octogramPendant,
      ],
    }, {
      name: 'Rank 8',
      category: 'gold',
      item: [
        iceClaymore, solarSword, angelBoots, featherWaltz, bangleOfSubstitution,
        lionKingsProtectiveCharm,
      ],
    }, {
      name: 'Rank 9',
      category: 'gold',
      item: [
        chaosBlade, iceClaymore, violetArmor, mythrilPlate, moonBracelet, bangleOfSubstitution,
      ],
    },
  ],
};

export default nozomi;
