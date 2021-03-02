<template>
  <div>
    <v-app-bar
      absolute
      color="white"
      app
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Priconne Helper logo"
          class="shrink mr-2"
          contain
          :src="logo"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-toolbar-title>Priconne Helper</v-toolbar-title>
      <v-spacer></v-spacer>
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
          active-class="deep-purple--text text--accent-4"
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

export default {
  name: 'Nav',
  components: {
    PAvatar: Avatar,
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
        to: '/equipment',
        text: 'My Equipment',
      }, {
        to: '/characters',
        text: 'My Characters',
      }, {
        to: '/data/equipment',
        text: 'All Equipment',
      }, {
        to: '/data/characters',
        text: 'All Characters',
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

</style>
