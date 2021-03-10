<template>
  <div>
    <h1>Home</h1>
    <p>Coming Soon</p>
  </div>
</template>

<script>
import { cosmosCloth } from '@/helpers/equipment/silver/cosmosCloth';
import itemsRequiredBuilder from '@/helpers/itemsRequiredBuilder';

export default {
  name: 'Home',
  data() {
    return {
      items: [cosmosCloth],
    };
  },
  methods: {
    findItems() {
      console.log(itemsRequiredBuilder(this.items));
    },
  },
};
</script>
