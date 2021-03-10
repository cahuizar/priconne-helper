<template>
  <v-footer
    color="primary"
    padless
  >
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <p-nav-icons classes="my-3 mx-2"/>
      <v-col
        class="primary lighten-1 py-4 text-center white--text"
        cols="12"
      >
        Last updated: March 09, 2021
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import NavIcons from '@/components/NavIcons/NavIcons.vue';

export default {
  name: 'Footer',
  components: {
    PNavIcons: NavIcons,
  },
};
</script>

<style scoped>

</style>
