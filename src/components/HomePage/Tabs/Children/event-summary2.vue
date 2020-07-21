<template>
  <v-container>
    <v-row class="hidden-sm-and-down mb-n4">
      <v-col cols="12" md="6" class="pa-5">
        <p>{{ p3 }}</p>
      </v-col>
      <v-col cols="12" md="6" class="pa-5">{{ p4 }}</v-col>
    </v-row>
    <v-row class="hidden-md-and-up mt-4 mb-n4">
      <v-col class="pa-5 text-center">
        <p>{{ p3_4 }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['p3', 'p4', 'p3_4'],
};
</script>
