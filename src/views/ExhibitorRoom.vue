<template>
  <div>
    <mobile-header></mobile-header>
    <v-container>
      <v-row class="d-flex justify-center mt-5">
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
          :vidSrc="'https://www.youtube.com/embed/AzJPhQdTRQQ?autoplay=1'"
          :height="400"
          @click="playVideo"
        ></exhibitor-player>
        <exhibitor-player
          :lg="6"
          :exhibitor="'ge'"
          :shown="ge"
          :title="'GE - Vscan'"
          :picSrc="'/exhibitors/GE.png'"
          :alt="'GE'"
          :vidSrc="'https://www.youtube.com/embed/AzJPhQdTRQQ?autoplay=1'"
          :height="400"
          @click="playVideo"
        ></exhibitor-player>
      </v-row>
      <v-row align="center" justify="center">
        <exhibitor-player
          :lg="4"
          :exhibitor="'aidian'"
          :shown="aidian"
          :title="'Aidian - CRP'"
          :picSrc="'/exhibitors/Aidian.png'"
          :alt="'Aidian'"
          :vidSrc="'https://www.youtube.com/embed/AzJPhQdTRQQ?autoplay=1'"
          :height="200"
          @click="playVideo"
        ></exhibitor-player>
        <exhibitor-player
          :lg="4"
          :exhibitor="'genext'"
          :shown="genext"
          :title="'Genext - MicroINR'"
          :picSrc="'/exhibitors/Genext.jpg'"
          :alt="'Genext'"
          :vidSrc="'https://www.youtube.com/embed/AzJPhQdTRQQ?autoplay=1'"
          :height="200"
          @click="playVideo"
        ></exhibitor-player>
        <exhibitor-player
          :lg="4"
          :exhibitor="'richter'"
          :shown="richter"
          :title="'Richter - Aksolin'"
          :picSrc="'/exhibitors/Richter.png'"
          :alt="'Richter'"
          :vidSrc="'https://www.youtube.com/embed/AzJPhQdTRQQ?autoplay=1'"
          :height="200"
          @click="playVideo"
        ></exhibitor-player>
      </v-row>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
export default {
  name: 'ExhibitorRoom',
  data() {
    return {
      erodium: false,
      ge: false,
      aidian: false,
      genext: false,
      richter: false,
    };
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
          break;
        case 'ge':
          this.erodium = false;
          this.ge = true;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          break;
        case 'aidian':
          this.erodium = false;
          this.ge = false;
          this.aidian = true;
          this.genext = false;
          this.richter = false;
          break;
        case 'genext':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = true;
          this.richter = false;
          break;
        case 'richter':
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = true;
          break;
        default:
          this.erodium = false;
          this.ge = false;
          this.aidian = false;
          this.genext = false;
          this.richter = false;
          break;
      }
    },
  },
};
</script>
