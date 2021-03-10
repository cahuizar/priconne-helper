import img from '@/assets/characters/regular/maho.webp';
import fragrantWoodWand from '@/helpers/equipment/common/fragrantWoodWand';
import journeyRobe from '@/helpers/equipment/common/journeyRobe';
import fashionableBeret from '@/helpers/equipment/common/fashionableBeret';
import fightingBracelet from '@/helpers/equipment/common/fightingBracelet';
import protectivePendant from '@/helpers/equipment/common/protectivePendant';
import compassionOfTheUnicorn from '@/helpers/equipment/copper/compassionOfTheUnicorn';
import doctorlessStaff from '@/helpers/equipment/copper/doctorlessStaff';
import { springColorRobe } from '@/helpers/equipment/copper/springColorRobe';
import witchBoots from '@/helpers/equipment/copper/witchBoots';
import { celestialSphereWatcher } from '@/helpers/equipment/silver/celestialSphereWatcher';
import { nordicRobe } from '@/helpers/equipment/copper/nordicRobe';
import { nunsHood } from '@/helpers/equipment/copper/nunsHood';
import jewelOfWisdom from '@/helpers/equipment/copper/jewelOfWisdom';
import jewelOfLove from '@/helpers/equipment/copper/jewelOfLove';
import { flowerBudWand } from '@/helpers/equipment/silver/flowerBudWand';
import { witchHeadband } from '@/helpers/equipment/silver/witchHeadband';
import { patternBracelet } from '@/helpers/equipment/copper/patternBracelet';
import victoryFriendshipBracelet from '@/helpers/equipment/copper/victoryFriendshipBracelet';
import { devilsHorn } from '@/helpers/equipment/silver/devilsHorn';
import { cupidRobe } from '@/helpers/equipment/silver/cupidRobe';
import { witchPalaceBoots } from '@/helpers/equipment/silver/witchPalaceBoots';
import { pearlEarrings } from '@/helpers/equipment/silver/pearlEarrings';
import { emeraldEarrings } from '@/helpers/equipment/silver/emeraldEarrings';
import { moonWand } from '@/helpers/equipment/gold/moonWand';
import { philosophersRobe } from '@/helpers/equipment/silver/philosophersRobe';
import { witchHat } from '@/helpers/equipment/silver/witchHat';
import sorcerersGlasses from '@/helpers/equipment/silver/sorcerersGlasses';
import { octogramPendant } from '@/helpers/equipment/silver/octogramPendant';
import { rodOfLife } from '@/helpers/equipment/gold/rodOfLife';
import { wizardBoots } from '@/helpers/equipment/gold/wizardBoots';
import { grandMagiciansRobe } from '@/helpers/equipment/gold/grandMagiciansRobe';
import { laurelsSorrow } from '@/helpers/equipment/silver/laurelsSorrow';
import { phoenixRod } from '@/helpers/equipment/gold/phoenixRod';
import { saintsRobe } from '@/helpers/equipment/gold/saintsRobe';
import { bangleOfSubstitution } from '@/helpers/equipment/gold/bangleOfSubstitution';
import { highAngelRod } from '@/helpers/equipment/gold/highAngelRod';
import { gospelTiara } from '@/helpers/equipment/gold/gospelTiara';
import { popesHood } from '@/helpers/equipment/gold/popesHood';
import { moonBracelet } from '@/helpers/equipment/gold/moonBracelet';
import { mourningCrescentMoon } from '@/helpers/equipment/gold/mourningCrescentMoon';

const maho = {
  id: 'char-maho',
  name: 'Maho',
  imgPath: img,
  ranks: [
    {
      name: 'Rank 1',
      category: 'common',
      item: [
        fragrantWoodWand, fragrantWoodWand, journeyRobe, fashionableBeret, fightingBracelet,
        protectivePendant,
      ],
    }, {
      name: 'Rank 2',
      category: 'cooper',
      item: [
        compassionOfTheUnicorn, doctorlessStaff, springColorRobe, witchBoots,
        fightingBracelet, protectivePendant,
      ],
    }, {
      name: 'Rank 3',
      category: 'copper',
      item: [
        celestialSphereWatcher, compassionOfTheUnicorn, nordicRobe, nunsHood,
        jewelOfWisdom, jewelOfLove,
      ],
    }, {
      name: 'Rank 4',
      category: 'silver',
      item: [
        flowerBudWand, celestialSphereWatcher, witchHeadband, witchHeadband,
        patternBracelet, victoryFriendshipBracelet,
      ],
    }, {
      name: 'Rank 5',
      category: 'silver',
      item: [
        devilsHorn, flowerBudWand, cupidRobe, witchPalaceBoots, pearlEarrings,
        emeraldEarrings,
      ],
    }, {
      name: 'Rank 6',
      category: 'silver',
      item: [moonWand, devilsHorn, philosophersRobe, witchHat, sorcerersGlasses, octogramPendant],
    }, {
      name: 'Rank 7',
      category: 'gold',
      item: [
        rodOfLife, wizardBoots, grandMagiciansRobe, laurelsSorrow, devilsHorn,
        octogramPendant,
      ],
    }, {
      name: 'Rank 8',
      category: 'gold',
      item: [phoenixRod, rodOfLife, saintsRobe, wizardBoots, bangleOfSubstitution, laurelsSorrow],
    }, {
      name: 'Rank 9',
      category: 'gold',
      item: [highAngelRod, phoenixRod, gospelTiara, popesHood, moonBracelet, mourningCrescentMoon],
    },
  ],
};

export default maho;
