import img from '@/assets/equipments/silver/celestialSphereWatcher.webp';
import imgBp from '@/assets/equipments/silver/celestialSphereWatcherBp.webp';
import doctorlessStaff from '@/helpers/equipment/copper/doctorlessStaff';

const celestialSphereWatcherBp = {
  id: 'eq-bp-celestialSphereWatcher',
  name: 'Celestial Sphere Watcher Blueprint',
  imgPath: imgBp,
  rarity: 'silver',
  formula: [],
};

const celestialSphereWatcher = {
  id: 'eq-celestialSphereWatcher',
  name: 'Celestial Sphere Watcher',
  imgPath: img,
  rarity: 'silver',
  formula: [
    {
      item: celestialSphereWatcherBp,
      qtn: 3,
    }, {
      item: doctorlessStaff,
      qtn: 1,
    },
  ],
};

export { celestialSphereWatcher, celestialSphereWatcherBp };
