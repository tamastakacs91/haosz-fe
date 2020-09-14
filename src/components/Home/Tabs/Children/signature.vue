<template>
  <v-row>
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <v-icon color="secondary" size="110" class="mt-n12 ml-auto mr-auto">{{
          mdiMenuDown
        }}</v-icon>
      </v-row>
    </v-container>
    <v-container class="pt-0 pb-0">
      <v-row class="mr-3 ml-3 mt-n4 mb-n4">
        <v-col cols="12" class="text-center pa-0">{{ text }}</v-col>
        <v-col cols="12" class="text-center pa-0 pt-5 pb-5">{{ name }}</v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import { mdiMenuDown } from '@mdi/js';

export default {
  name: 'signature',
  props: ['text', 'name'],
  data() {
    return {
      mdiMenuDown,
    };
  },
};
</script>
