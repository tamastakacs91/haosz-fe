<template>
  <v-container>
    <v-row class="mt-2 mb-n1">
      <v-col class="pa-3 text-left">
        <p>{{ p3_4 }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'event-summary2',
  props: ['p3', 'p4', 'p3_4'],
};
</script>
