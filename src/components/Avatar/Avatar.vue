<template>
  <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          x-large
          v-on="on"
        >
          <v-avatar size="36">
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar size=28 class="primary">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn
              depressed
              rounded
              text
              color="error"
            >
              Log Out
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
</template>

<script>
export default {
  name: 'Avatar',
  data: () => ({
    user: {
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
  }),
};
</script>

<style scoped>

</style>
