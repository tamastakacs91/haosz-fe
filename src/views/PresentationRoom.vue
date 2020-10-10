<template>
  <div>
    <mobile-header></mobile-header>
    <v-container>
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="12">
          <div class="text-h5 text-md-h3 text-center">
            Előadóterem
          </div>
        </v-col>
      </v-row>
      <presentation-player :date="dateToday"></presentation-player>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
export default {
  name: 'PresentationRoom',
  computed: {
    dateToday() {
      const splitDate = new Date().toISOString().split('-');
      const date = splitDate[2].split('T');
      return splitDate[0] + splitDate[1] + date[0];
    },
  },
};
</script>
