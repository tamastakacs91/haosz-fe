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
    <v-container fluid class="pa-0">
      <v-tabs-items v-model="tab">
        <tab-item
          :greeting="data.greeting.doctor"
          :invitation="data.invitation.doctor"
          :listing="data.listing"
          :programs="data.programs.doctor"
          :p1="data.summary.doctor.p1"
          :p2="data.summary.doctor.p2"
          :p3="data.summary.doctor.p3"
          :p4="data.summary.doctor.p4"
          :p3_4="data.summary.doctor.p3_4"
          :outP1="data.outro.doctor.p1"
          :outP2="data.outro.doctor.p2"
          :outP3="data.outro.doctor.p3"
          :text="data.signature.doctorText"
          :name="data.signature.name"
        ></tab-item>
        <tab-item
          :greeting="data.greeting.exhibitor"
          :invitation="data.invitation.exhibitor"
          :listing="data.listing"
          :programs="data.programs.exhibitor"
          :p1="data.summary.exhibitor.p1"
          :p2="data.summary.exhibitor.p2"
          :p3="data.summary.exhibitor.p3"
          :p4="data.summary.exhibitor.p4"
          :p3_4="data.summary.exhibitor.p3_4"
          :outP1="data.outro.exhibitor.p1"
          :outP2="data.outro.exhibitor.p2"
          :outP3="data.outro.exhibitor.p3"
          :text="data.signature.exhibitorText"
          :name="data.signature.name"
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
