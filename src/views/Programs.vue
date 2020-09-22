<template>
  <div>
    <mobile-header class="hidden-md-and-up"></mobile-header>
    <v-row class="d-flex justify-center mt-7 mb-4">
      <div class="text-h4 text-md-h3">Programok</div>
    </v-row>
    <v-row class="d-flex justify-center">
      <div class="text-h7 text-md-h5 font-italic">
        A Konferencia akkreditált
      </div>
    </v-row>
    <v-row class="d-flex justify-center">
      <div class="text-h7 text-md-h5 mb-4 font-italic">
        Részvétel: 18 kreditpont
      </div>
    </v-row>
    <title-bar :title="'Előadóterem'"></title-bar>
    <presentation-room :data="data.presentations"></presentation-room>

    <title-bar :title="'Bemutatóterem'"></title-bar>
    <v-container class="mt-n8">
      <v-row class="mt-n2 mb-3">
        <v-col class="text-md-h6">
          Gyógyszergyártó cégek, orvostechnikai cégek bemutatkozási lehetősége a
          konferencia teljes ideje alatt.
        </v-col>
      </v-row>
    </v-container>

    <title-bar :title="'Élő kiállítóterem'"></title-bar>
    <v-container class="mt-n8">
      <v-row class="mt-n2 mb-3">
        <v-col class="text-md-h6">
          Szombati napon 10.00-17.00 óráig 12 fős kiscsoportos élő (online)
          beszélgetési lehetőség a gyógyszercégek-, orvostechnikai cégek-, egyéb
          kiállítók képviselőivel.
        </v-col>
      </v-row>
    </v-container>

    <title-bar :title="'Jazzpresszó'"></title-bar>
    <v-container class="mt-n8">
      <v-row class="mt-n2 mb-3">
        <v-col class="text-md-h6">
          Kellemes jazz melletti diskurzus az alábbi témákban a konferencia
          teljes ideje alatt:
        </v-col>
      </v-row>
      <jazzpresso-topics :data="data.jazzPresso"></jazzpresso-topics>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import data from '../../public/programs.json';
import { mapGetters } from 'vuex';

export default {
  name: 'Programs',
  data() {
    return {
      data,
    };
  },
};
</script>
