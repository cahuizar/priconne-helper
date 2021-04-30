<template>
  <div>
    <v-btn
      v-for="icon in icons"
      :key="icon.icon"
      :href="icon.href"
      :to="icon.to"
      color="white"
      icon
      :class="classes"
      active-class="no-active"
    >
      <v-icon>{{icon.icon}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NavIcons',
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: [
        {
          href: 'https://ko-fi.com/gotenks0079',
          icon: 'mdi-heart-outline',
        },
        {
          to: '/supporters',
          icon: 'mdi-handshake-outline',
        },
        {
          href: 'https://github.com/cahuizar/priconne-helper',
          icon: 'mdi-github',
        },
        {
          to: '/credits',
          icon: 'mdi-help-circle-outline',
        },
      ],
    };
  },

};
</script>

<style scoped>
  .v-btn--active.no-active::before {
    opacity: 0;
  }
</style>
