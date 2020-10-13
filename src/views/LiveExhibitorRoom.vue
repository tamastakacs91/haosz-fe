<template>
  <div>
    <mobile-header></mobile-header>
    <v-container class="main-container">
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="12">
          <div class="text-h5 text-md-h3 text-center">
            Élő Kiállítóterem
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mt-10">
        <v-col>
          <v-row align="center" justify="center">
            <v-img
              alt="Erodium"
              class="shrink pointer rounded-lg hidden-sm-and-down"
              contain
              src="/logos/1Erodium.png"
              transition="scale-transition"
              max-width="400"
            />
            <v-img
              alt="Erodium"
              class="shrink pointer rounded-lg hidden-md-and-up"
              contain
              src="/logos/1Erodium.png"
              transition="scale-transition"
              max-width="300"
            />
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="6">
          <v-row align="center" justify="center">
            <v-img
              alt="Erodium"
              class="shrink pointer rounded-lg hidden-sm-and-down"
              contain
              src="/logos/5Netdoktor.jpg"
              transition="scale-transition"
              max-width="400"
            />
            <v-img
              alt="Erodium"
              class="shrink pointer rounded-lg hidden-md-and-up"
              contain
              src="/logos/5Netdoktor.jpg"
              transition="scale-transition"
              max-width="300"
            />
          </v-row>
        </v-col>
        <v-col md="6">
          <v-row align="center" justify="center">
            <v-img
              alt="Erodium"
              class="shrink pointer rounded-lg hidden-sm-and-down"
              contain
              src="/logos/2Roche.png"
              transition="scale-transition"
              max-width="350"
            />
            <v-img
              alt="Erodium"
              class="shrink pointer rounded-lg hidden-md-and-up"
              contain
              src="/logos/2Roche.png"
              transition="scale-transition"
              max-width="300"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ExhibitorRoom',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
  },
  created() {
    const token = window.sessionStorage.getItem('token');

    if (!token || !this.isLoggedIn) {
      return this.$router.push('/site/bejelentkezes');
    }
  },
};
</script>
