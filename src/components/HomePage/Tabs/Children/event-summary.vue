<template>
  <v-row class="secondary-bg">
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <v-icon color="white" size="110" class="mt-n12 ml-auto mr-auto"
          >mdi-menu-down</v-icon
        >
      </v-row>
    </v-container>
    <v-container class="pt-0">
      <v-row class="mr-3 ml-3 text-center mt-n4 mb-n10">
        <p>{{ p1 }}</p>
        <p>{{ p2 }}</p>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <v-icon color="secondary" size="110" class="mb-n16 ml-auto mr-auto"
          >mdi-menu-down</v-icon
        >
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: 'event-summary',
  props: ['p1', 'p2'],
};
</script>
