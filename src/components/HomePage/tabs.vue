<template>
  <div>
    <v-row class="d-flex justify-center mt-10">
      <div class="text-h4 text-md-h3">Köszöntő</div>

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
    <v-container>
      <v-tabs-items v-model="tab">
        <tab-item
          :greeting="data.greeting.doctor"
          :invitation="data.invitation.doctor"
          :listing="data.listing"
          :programs="data.programs.doctor"
        ></tab-item>
        <tab-item
          :greeting="data.greeting.exhibitor"
          :invitation="data.invitation.exhibitor"
          :listing="data.listing"
          :programs="data.programs.exhibitor"
        ></tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      tab: null,
    };
  },
};
</script>
