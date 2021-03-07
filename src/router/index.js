import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Supporters from '@/views/Supporters.vue';
import ClanBattle from '@/views/ClanBattle.vue';
import Credits from '@/views/Credits.vue';
import Characters from '@/views/Characters.vue';
import Equipment from '@/views/Equipment.vue';
import DataCharacters from '@/views/Data/Characters.vue';
import DataEquipment from '@/views/Data/Equipment.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/credits',
    name: 'About',
    component: Credits,
  },
  {
    path: '/clan-battle',
    name: 'ClanBattle',
    component: ClanBattle,
  },
  {
    path: '/supporters',
    name: 'Supporters',
    component: Supporters,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: Equipment,
  },
  {
    path: '/data/characters',
    name: 'DataCharacters',
    component: DataCharacters,
  },
  {
    path: '/data/equipment',
    name: 'DataEquipment',
    component: DataEquipment,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
