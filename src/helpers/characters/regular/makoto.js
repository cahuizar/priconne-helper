import img from '@/assets/characters/regular/makoto.webp';
import ironBlade from '@/helpers/equipment/common/ironBlade';
import leatherOveralls from '@/helpers/equipment/common/leatherOveralls';
import treeShield from '@/helpers/equipment/common/treeShield';
import motivationalBracelet from '@/helpers/equipment/common/motivationalBracelet';
import crescentSword from '@/helpers/equipment/copper/crescentSword';
import gearBlade from '@/helpers/equipment/copper/gearBlade';
import clothesOfWisdom from '@/helpers/equipment/copper/clothesOfWisdom';
import { legionHelm } from '@/helpers/equipment/copper/legionHelm';
import { sparklingSword } from '@/helpers/equipment/silver/sparklingSword';
import { lightPlate } from '@/helpers/equipment/copper/lightPlate';
import { towerShield } from '@/helpers/equipment/copper/towerShield';
import jewelOfCourage from '@/helpers/equipment/copper/jewelOfCourage';
import { moonlightSword } from '@/helpers/equipment/silver/moonlightSword';
import { fashionArmor } from '@/helpers/equipment/silver/fashionArmor';
import { opalEarrings } from '@/helpers/equipment/silver/opalEarrings';
import spikeBangle from '@/helpers/equipment/copper/spikeBangle';
import { thunderGodSword } from '@/helpers/equipment/silver/thunderGodSword';
import { battlingDress } from '@/helpers/equipment/silver/battlingDress';
import { garnetShield } from '@/helpers/equipment/silver/garnetShield';
import { butterflyKatana } from '@/helpers/equipment/gold/butterflyKatana';
import { heavyMetalArmor } from '@/helpers/equipment/silver/heavyMetalArmor';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';
import { brightSword } from '@/helpers/equipment/gold/brightSword';
import { invisibleDress } from '@/helpers/equipment/gold/invisibleDress';
import { lionKingsProtectiveCharm } from '@/helpers/equipment/silver/lionKingsProtectiveCharm';
import { hawkGodsSword } from '@/helpers/equipment/gold/hawkGodsSword';
import { mythrilPlate } from '@/helpers/equipment/gold/mythrilPlate';
import { elementalHeart } from '@/helpers/equipment/gold/elementalHeart';
import { scarletDiamond } from '@/helpers/equipment/silver/scarletDiamond';
import { phoenixSword } from '@/helpers/equipment/gold/phoenixSword';
import { violetArmor } from '@/helpers/equipment/gold/violetArmor';
import { sunAmulet } from '@/helpers/equipment/gold/sunAmulet';

const makoto = {
  id: 'char-makoto',
  name: 'Makoto',
  imgPath: img,
  ranks: [
    {
      name: 'Rank 1',
      category: 'common',
      item: [ironBlade, ironBlade, leatherOveralls, treeShield, ironBlade, motivationalBracelet],
    }, {
      name: 'Rank 2',
      category: 'cooper',
      item: [
        crescentSword, gearBlade, clothesOfWisdom, legionHelm, ironBlade, motivationalBracelet,
      ],
    }, {
      name: 'Rank 3',
      category: 'copper',
      item: [sparklingSword, crescentSword, lightPlate, towerShield, gearBlade, jewelOfCourage],
    }, {
      name: 'Rank 4',
      category: 'silver',
      item: [
        moonlightSword, sparklingSword, fashionArmor, opalEarrings, crescentSword, spikeBangle,
      ],
    }, {
      name: 'Rank 5',
      category: 'silver',
      item: [
        thunderGodSword, moonlightSword, battlingDress, garnetShield, sparklingSword, opalEarrings,
      ],
    }, {
      name: 'Rank 6',
      category: 'silver',
      item: [
        butterflyKatana, thunderGodSword, heavyMetalArmor, garnetShield, moonlightSword,
        lionEaglesFeather,
      ],
    }, {
      name: 'Rank 7',
      category: 'gold',
      item: [
        brightSword, butterflyKatana, invisibleDress, lionKingsProtectiveCharm,
        thunderGodSword, lionEaglesFeather,
      ],
    }, {
      name: 'Rank 8',
      category: 'gold',
      item: [
        hawkGodsSword, brightSword, mythrilPlate, butterflyKatana, elementalHeart, scarletDiamond,
      ],
    }, {
      name: 'Rank 9',
      category: 'gold',
      item: [phoenixSword, hawkGodsSword, violetArmor, brightSword, sunAmulet, elementalHeart],
    },
  ],
};

export default makoto;
