<template>
  <v-app>
    <p-nav />
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import logo from '@/assets/logo.jpg';
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Layout/Nav.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PNav: Nav,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
