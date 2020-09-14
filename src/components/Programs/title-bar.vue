<template>
  <v-row justify="center">
    <div class="program-bar d-flex justify-center align-center">
      <div class="text-h5 text-md-h4 white-text pa-2">{{ title }}</div>
    </div>
    <div class="text-center">
      <v-icon color="primary" size="110" class="mt-n12">{{
        mdiMenuDown
      }}</v-icon>
    </div>
  </v-row>
</template>

<script>
import { mdiMenuDown } from '@mdi/js';

export default {
  props: ['title'],
  data() {
    return {
      mdiMenuDown,
    };
  },
};
</script>
