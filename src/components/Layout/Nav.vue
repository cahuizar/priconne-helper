<template>
  <div>
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
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
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <p-avatar/>
      </v-btn>
    </v-app-bar>
    <p-navigation-drawer :drawer='drawer' :group='group'/>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar/Avatar.vue';
import NavigationDrawer from '@/components/Layout/NavigationDrawer.vue';
import logo from '@/assets/logo.jpg';

export default {
  name: 'Nav',
  components: {
    PAvatar: Avatar,
    PNavigationDrawer: NavigationDrawer,
  },
  data: () => ({
    logo,
    drawer: false,
    group: null,
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
