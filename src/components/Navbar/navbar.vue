<template>
  <v-app-bar color="white" app dense height="90">
    <v-container>
      <navbar-desktop
        :isLoggedIn="isLoggedIn"
        :userRole="userRole"
        @click="signOut"
      ></navbar-desktop>
      <navbar-mobile
        :isLoggedIn="isLoggedIn"
        :userRole="userRole"
        @click="signOut"
      ></navbar-mobile>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('signIn', ['isLoggedIn', 'userRole']),
  },
  methods: {
    ...mapActions('signIn', ['signOut']),
  },
};
</script>
