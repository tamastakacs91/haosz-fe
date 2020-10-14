<template>
  <div>
    <mobile-header></mobile-header>
    <v-container fluid class="main-container exhibitor-container">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12">
            <div class="text-h5 text-md-h3 text-center">
              Bemutatóterem
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mt-5">
          <exhibitor-player
            :lg="6"
            :exhibitor="'erodium'"
            :shown="erodium"
            :title="'Erodium - Orvosi Betegirányító Rendszer'"
            :picSrc="'/exhibitors/Erodium.png'"
            :alt="'Erodium'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/gsMIRPnqO6I?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="300"
            @click="playVideo"
          ></exhibitor-player>
          <exhibitor-player
            :lg="6"
            :exhibitor="'ge'"
            :shown="ge"
            :title="'GE - Vscan'"
            :picSrc="'/exhibitors/GE.png'"
            :alt="'GE'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/dFYdiVBUPEM?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="300"
            :width="190"
            @click="playVideo"
          ></exhibitor-player>
        </v-row>
        <v-row align="center" justify="center">
          <exhibitor-player
            :lg="6"
            :exhibitor="'aidian'"
            :shown="aidian"
            :title="'Aidian - CRP'"
            :picSrc="'/exhibitors/Aidian.png'"
            :alt="'Aidian'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/CrFzR7Rg8Tk?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="200"
            :width="360"
            @click="playVideo"
          ></exhibitor-player>
          <exhibitor-player
            :lg="6"
            :exhibitor="'genext'"
            :shown="genext"
            :title="'Genext Hungary Kft. - MicroINR'"
            :picSrc="'/exhibitors/Genext.jpg'"
            :alt="'Genext'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/CkevE2_Uu9I?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="200"
            :width="300"
            @click="playVideo"
          ></exhibitor-player>
        </v-row>
        <v-row>
          <exhibitor-player
            :lg="6"
            :exhibitor="'richter'"
            :shown="richter"
            :title="'Richter - Aksolin'"
            :picSrc="'/exhibitors/Richter.png'"
            :alt="'Richter'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/eMuqjtkJhjQ?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="200"
            :width="340"
            @click="playVideo"
          ></exhibitor-player>
          <exhibitor-player
            :lg="6"
            :exhibitor="'arterial'"
            :shown="arterial"
            :title="'Arterial Care'"
            :picSrc="'/exhibitors/Arterial-Care.png'"
            :alt="'Arterial Care'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/xleNH2ZzI7c?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="200"
            :width="340"
            @click="playVideo"
          ></exhibitor-player>
        </v-row>
        <v-row>
          <exhibitor-player
            :lg="6"
            :exhibitor="'medicalPoint'"
            :shown="medicalPoint"
            :title="'Medical Point'"
            :picSrc="'/exhibitors/Medical-point.jpg'"
            :alt="'Medical Point'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/urRY27qOTH8?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="350"
            :width="340"
            @click="playVideo"
          ></exhibitor-player>
          <exhibitor-player
            :lg="6"
            :exhibitor="'medio'"
            :shown="medio"
            :title="'Medio Páciens Közvetítés'"
            :picSrc="'/exhibitors/Medio.png'"
            :alt="'Medio'"
            :vidSrc="'https://www.youtube-nocookie.com/embed/XHKfD1Dsiq0?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080'"
            :height="350"
            :width="390"
            @click="playVideo"
          ></exhibitor-player>
        </v-row>
      </v-container>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ExhibitorRoom',
  data() {
    return {
      erodium: false,
      ge: false,
      aidian: false,
      genext: false,
      richter: false,
      arterial: false,
      medicalPoint: false,
      medio: false,
    };
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
  },
  methods: {
    playVideo(exhibitor) {
      let element = document.getElementById(exhibitor);
      switch (exhibitor) {
        case 'erodium':
          this.erodium = true;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = false;
          break;
        case 'ge':
          this.erodium = false;
          this.ge = true;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = false;
          break;
        case 'aidian':
          this.erodium = false;
          this.ge = false;
          this.aidian = true;
          this.genext = false;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = false;
          break;
        case 'genext':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = true;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = false;
          break;
        case 'richter':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = true;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = false;
          break;
        case 'arterial':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          this.arterial = true;
          this.medicalPoint = false;
          this.medio = false;
          break;
        case 'medicalPoint':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = true;
          this.medio = false;
          break;
        case 'medio':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = true;
          break;
        default:
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          this.arterial = false;
          this.medicalPoint = false;
          this.medio = false;
          break;
      }
    },
  },
  created() {
    const token = window.sessionStorage.getItem('token');
    if (!token || !this.isLoggedIn) {
      return this.$router.push('/site/bejelentkezes');
    }
  },
};
</script>
