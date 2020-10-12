<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      class="reg-snackbar"
      right
      color="success"
      rounded="pill"
      timeout="5000"
      min-width="5"
      max-width="100"
      v-model="signIn"
    >
      <div class="snackbar-text-big">Sikeres bejelentkezés</div>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('signIn', ['signInSuccessPresent']),
    signIn: {
      get() {
        return this.signInSuccessPresent;
      },
      set(value) {
        this.toggleSignInSuccessPresent(value);
      },
    },
  },
  methods: {
    ...mapActions('signIn', ['toggleSignInSuccessPresent']),
  },
};
</script>
<style lang="scss">
@import './style/style.scss';
</style>

<style scoped>
.v-main {
  height: 100% !important;
}
</style>
