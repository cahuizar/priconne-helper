<template>
  <div class="items">
    <div class="item" v-for="(item, index) in items" :key="item.id+index">
      <img class="item--img" :src="item.imgPath" :alt="item.name">
      <div class="item--name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Items',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  .item {
    margin: 1em;
    max-width: 75px;
    &--img {
       max-width: inherit;
     }
    &--name {
       text-align: center;
       font-size: .8em;
     }
    }
  }
</style>
