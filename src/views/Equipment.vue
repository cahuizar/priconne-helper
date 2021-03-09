<template>
    <v-expansion-panels popout multiple>
      <v-expansion-panel :class="'expansion--'+equipment.name.toLocaleLowerCase()"
                         v-for="equipment in equipments" :key="equipment.name">
        <v-expansion-panel-header>
          <h2 :class="equipment.name.toLocaleLowerCase()">{{ equipment.name }}</h2>
          <template v-slot:actions>
            <v-icon color="white">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p-items :items="equipment.items"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import equipments from '@/helpers/equipment';
import Items from '@/components/Equipment/Items.vue';

export default {
  name: 'Equipment',
  data() {
    return {
      equipments,
    };
  },
  components: {
    PItems: Items,
  },
};
</script>

<style lang="scss" scoped>
  .expansion {
    &--common {
      .v-expansion-panel-header {
        background: #88acf0 !important;
      }
    }
    &--copper {
      .v-expansion-panel-header {
        background: #f7ba9c !important;
      }
    }
    &--silver {
      .v-expansion-panel-header {
        background: #deebf7;
      }
    }
    &--gold {
      .v-expansion-panel-header {
        background: #ffdf73;
      }
    }
    &--purple {
      .v-expansion-panel-header {
        background: #d67dff !important;
      }
    }
    &--red {
      .v-expansion-panel-header {
        background: #f7515a;
      }
    }
  }

  h2 {
    font-size: 2.5em;
    text-shadow: 1px 1px 1px #000000, 1px 1px 3px #000000;
    color: white;
  }
</style>
