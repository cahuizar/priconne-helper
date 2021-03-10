import img from '@/assets/characters/regular/shiori.webp';
import huntersBow from '@/helpers/equipment/common/huntersBow';
import killerPencil from '@/helpers/equipment/common/killerPencil';
import leatherBoots from '@/helpers/equipment/common/leatherBoots';
import motivationalBracelet from '@/helpers/equipment/common/motivationalBracelet';
import crystalBow from '@/helpers/equipment/copper/crystalBow';
import commandKnife from '@/helpers/equipment/copper/commandKnife';
import { folkloreClothes } from '@/helpers/equipment/copper/folkloreClothes';
import { crownBoots } from '@/helpers/equipment/copper/crownBoots';
import { platinumKnife } from '@/helpers/equipment/silver/platinumKnife';
import { huntingBoots } from '@/helpers/equipment/copper/huntingBoots';
import spikeBangle from '@/helpers/equipment/copper/spikeBangle';
import jewelOfCourage from '@/helpers/equipment/copper/jewelOfCourage';
import { cupidsBow } from '@/helpers/equipment/silver/cupidsBow';
import { millefeuilleCloth } from '@/helpers/equipment/silver/millefeuilleCloth';
import { opalEarrings } from '@/helpers/equipment/silver/opalEarrings';
import { devilsBow } from '@/helpers/equipment/silver/devilsBow';
import { palaceCloth } from '@/helpers/equipment/silver/palaceCloth';
import { lionEaglesFeather } from '@/helpers/equipment/silver/lionEaglesFeather';
import { lightningBow } from '@/helpers/equipment/gold/lightningBow';
import { scarletDiamond } from '@/helpers/equipment/silver/scarletDiamond';
import { angelBow } from '@/helpers/equipment/gold/angelBow';
import { moonlightGarment } from '@/helpers/equipment/gold/moonlightGarment';
import { octogramPendant } from '@/helpers/equipment/silver/octogramPendant';
import { artemisBow } from '@/helpers/equipment/gold/artemisBow';
import { hermitClothes } from '@/helpers/equipment/gold/hermitClothes';
import { elementalHeart } from '@/helpers/equipment/gold/elementalHeart';
import { spiritTreeBow } from '@/helpers/equipment/gold/spiritTreeBow';
import { heavenlyRobe } from '@/helpers/equipment/gold/heavenlyRobe';
import { sunAmulet } from '@/helpers/equipment/gold/sunAmulet';

const shiori = {
  id: 'char-shiori',
  name: 'Shiori',
  imgPath: img,
  ranks: [
    {
      name: 'Rank 1',
      category: 'common',
      item: [
        huntersBow, huntersBow, killerPencil, leatherBoots, motivationalBracelet,
        motivationalBracelet,
      ],
    }, {
      name: 'Rank 2',
      category: 'cooper',
      item: [
        crystalBow, commandKnife, folkloreClothes, crownBoots, motivationalBracelet,
        motivationalBracelet,
      ],
    }, {
      name: 'Rank 3',
      category: 'cooper',
      item: [platinumKnife, crystalBow, crystalBow, huntingBoots, jewelOfCourage, jewelOfCourage],
    }, {
      name: 'Rank 4',
      category: 'silver',
      item: [cupidsBow, platinumKnife, millefeuilleCloth, opalEarrings, huntingBoots, spikeBangle],
    }, {
      name: 'Rank 5',
      category: 'silver',
      item: [devilsBow, cupidsBow, palaceCloth, lionEaglesFeather, millefeuilleCloth, opalEarrings],
    }, {
      name: 'Rank 6',
      category: 'silver',
      item: [lightningBow, devilsBow, scarletDiamond, palaceCloth, cupidsBow, lionEaglesFeather],
    }, {
      name: 'Rank 7',
      category: 'gold',
      item: [angelBow, lightningBow, moonlightGarment, scarletDiamond, devilsBow, octogramPendant],
    }, {
      name: 'Rank 8',
      category: 'gold',
      item: [artemisBow, angelBow, hermitClothes, lightningBow, elementalHeart, scarletDiamond],
    }, {
      name: 'Rank 9',
      category: 'gold',
      item: [spiritTreeBow, artemisBow, heavenlyRobe, angelBow, sunAmulet, elementalHeart],
    },
  ],
};

export default shiori;
