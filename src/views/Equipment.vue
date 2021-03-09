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
  @import '~vuetify/src/styles/styles.sass';
  .expansion {
    &--common {
      .v-expansion-panel-header {
        background: var(--v-common-base);
      }
    }
    &--copper {
      .v-expansion-panel-header {
        background: var(--v-copper-base);
      }
    }
    &--silver {
      .v-expansion-panel-header {
        background: var(--v-silver-base);
      }
    }
    &--gold {
      .v-expansion-panel-header {
        background: var(--v-gold-base);
      }
    }
    &--purple {
      .v-expansion-panel-header {
        background: var(--v-purple-base);
      }
    }
    &--red {
      .v-expansion-panel-header {
        background: var(--v-red-base);
      }
    }
  }

  h2 {
    font-size: 2.5em;
    text-shadow: 1px 1px 1px #000000, 1px 1px 3px #000000;
    color: white;
  }
</style>
