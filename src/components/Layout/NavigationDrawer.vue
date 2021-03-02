<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    bottom
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
        <v-list-item>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>My Equipment</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>My Characters</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>All Data</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
