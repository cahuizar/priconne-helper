<template>
  <h1>Home</h1>
</template>

<script>
// @ is an alias to /src
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
