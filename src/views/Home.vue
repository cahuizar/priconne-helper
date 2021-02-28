<template>
  <div className="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="findItems">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { cosmosCloth } from '@/helpers/equipment/silver/cosmosCloth';
import itemsRequiredBuilder from '@/helpers/itemsRequiredBuilder';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
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
