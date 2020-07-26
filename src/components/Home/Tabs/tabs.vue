<template>
  <div>
    <v-row class="d-flex justify-center mt-7">
      <div class="text-h4 text-md-h3 mb-7">Köszöntő</div>

      <v-tabs
        v-model="tab"
        background-color="primary"
        class="elevation-2"
        dark
        centered
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab>Orvosoknak</v-tab>
        <v-tab>Kiállítóknak</v-tab>
      </v-tabs>
    </v-row>
    <v-container fluid class="pa-0">
      <v-tabs-items v-model="tab">
        <slot :tab="tab"></slot>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data() {
    return {
      tab: null,
    };
  },
};
</script>
