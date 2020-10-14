<template>
  <div>
    <mobile-header></mobile-header>
    <v-container>
      <v-row class="d-flex justify-center mt-3">
        <v-col cols="12">
          <div class="text-h5 text-md-h3 text-center">
            Előadóterem
          </div>
        </v-col>
      </v-row>
      <presentation-player
        :date="dateToday"
        @openLivestorm="openLivestorm"
      ></presentation-player>

      <v-row align="center" justify="center">
        <v-col
          v-for="(logo, index) in logos"
          :key="index"
          cols="12"
          md="6"
          lg="2"
        >
          <div class="d-flex justify-center mt-5">
            <v-img
              class="shrink"
              contain
              :alt="logo"
              :src="`/logos/${logo}`"
              transition="scale-transition"
              max-height="110"
              max-width="200"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PresentationRoom',
  data() {
    return {
      logos: [
        '1Erodium.png',
        '2Roche.png',
        '3Pfizer.png',
        '4-77elektronika.jpg',
        '5Netdoktor.jpg',
        '6Richter.jpg',
        '7Arterial-care.png',
        '8medio.png',
        '9-Aidian_logo.png',
        '10MED-EN_LOGO.png',
        'Genext.png',
        'medical-point.png',
        // 'logo_transparent_background.png',
        // 'logo_white_background.jpg',
        // 'white_logo_color_background.jpg',
        // 'white_logo_transparent_background.png',
      ],
    };
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
    dateToday() {
      const splitDate = new Date().toISOString().split('-');
      const date = splitDate[2].split('T');
      return splitDate[0] + splitDate[1] + date[0];
    },
  },
  methods: {
    openLivestorm() {
      window.open('https://livestorm.co/', '_blank');
    },
  },
  // created() {
  //   const token = window.sessionStorage.getItem('token');

  //   if (!token || !this.isLoggedIn) {
  //     return this.$router.push('/site/bejelentkezes');
  //   }
  // },
};
</script>
