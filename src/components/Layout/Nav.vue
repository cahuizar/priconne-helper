<template>
  <div>
    <v-app-bar
      absolute
      color="primary"
      app
      dark
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Priconne Helper logo"
            class="shrink mr-2"
            contain
            :src="logo"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>
      <v-toolbar-title class="d-none d-sm-block">Priconne Helper</v-toolbar-title>
      <v-spacer></v-spacer>
      <p-nav-icons/>
      <v-btn icon class="mr-1">
        <p-avatar/>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text"
        >
          <v-list-item v-for='link in links' :key='link.text' :to="link.to">
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar/Avatar.vue';
import logo from '@/assets/logo.jpg';
import NavIcons from '@/components/NavIcons/NavIcons.vue';

export default {
  name: 'Nav',
  components: {
    PAvatar: Avatar,
    PNavIcons: NavIcons,
  },
  data: () => ({
    logo,
    drawer: false,
    group: null,
    links: [
      {
        to: '/',
        text: 'Home',
      }, {
        to: '/characters',
        text: 'Characters',
      }, {
        to: '/equipment',
        text: 'Equipment',
      }, {
        to: '/clan-battle',
        text: 'Clan Battle',
      }, {
        to: '/supporters',
        text: 'Supporters',
      }, {
        to: '/credits',
        text: 'Credits',
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0;
}
</style>
