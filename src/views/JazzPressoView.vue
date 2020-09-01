<template>
  <div>
    <mobile-header class="hidden-md-and-up"></mobile-header>
    <v-row class="d-flex justify-center mt-7 mb-7">
      <div class="text-h4 text-md-h3">Jazzpresszó</div>
    </v-row>
    <v-container class="mt-n8">
      <v-row class="mt-n2 mb-3"></v-row>
      <jazzpresso-topics :data="data.jazzPresso"></jazzpresso-topics>
    </v-container>
  </div>
</template>

<script>
import data from '../../public/programs.json';

export default {
  name: 'JazzPresso',
  data() {
    return {
      data,
    };
  },
};
</script>