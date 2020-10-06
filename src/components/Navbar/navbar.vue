<template>
  <div>
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

    <v-app-bar color="white" app dense height="110" class="hidden-sm-and-down">
      <v-container>
        <navbar-desktop
          :isLoggedIn="isLoggedIn"
          :userRole="userRole"
          @click="signOut"
        ></navbar-desktop>
      </v-container>
      <template v-slot:extension v-if="isLoggedIn">
        <navbar-extension-desktop></navbar-extension-desktop>
      </template>
    </v-app-bar>
  </div>
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
