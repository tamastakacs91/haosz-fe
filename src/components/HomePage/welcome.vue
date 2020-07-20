<template>
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
    <v-tabs-items v-model="tab" class="mr-5 ml-5">
      <tab-item
        :greeting="welcome.greeting.doctor"
        :invitation="welcome.invitation.doctor"
        :listing="welcome.listing"
        :programs="welcome.programs.doctor"
      ></tab-item>
      <tab-item
        :greeting="welcome.greeting.exhibitor"
        :invitation="welcome.invitation.exhibitor"
        :listing="welcome.listing"
        :programs="welcome.programs.exhibitor"
      ></tab-item>
    </v-tabs-items>
  </v-row>
</template>

<script>
import welcome from '../../../public/welcome.json';
export default {
  data() {
    return {
      tab: null,
      welcome,
    };
  },
};
</script>
