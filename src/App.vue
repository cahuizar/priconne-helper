<template>
  <v-app>
    <p-nav />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <p-footer />
  </v-app>
</template>

<script>
import logo from '@/assets/logo.jpg';
import Footer from '@/components/Layout/Footer.vue';
import Nav from './components/Layout/Nav.vue';

export default {
  name: 'App',
  components: {
    PNav: Nav,
    PFooter: Footer,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
