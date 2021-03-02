<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        :href="icon.to"
        color="white"
        icon
        class="my-3 mx-2"
      >
        <v-icon size="26px">{{icon.icon}}</v-icon>
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        Last updated: March 01, 2021
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        {
          to: 'https://buymecoffee.com',
          icon: 'mdi-coffee',
        },
        {
          to: 'https://github.com/cahuizar/priconne-helper',
          icon: 'mdi-github',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
