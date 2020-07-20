<template>
  <v-tab-item>
    <v-card flat>
      <v-list-item-content>
        <v-list-item-title class="headline mb-5 mt-3 text-center">
          {{ greeting }}
        </v-list-item-title>
        <div class="pr-10 pl-10">{{ invitation }}</div>
        <div class="pr-10 pl-10 mt-5 text-center">{{ listing }}</div>
        <div class="d-flex flex-wrap justify-center text-center">
          <v-card
            v-for="(program, index) in programs"
            :key="index"
            max-width="300"
            class="pa-2 ma-3"
            outlined
            shaped
          >
            <div>
              <v-icon size="50" color="primary">{{ program.icon }}</v-icon>
            </div>
            <div style="word-break: normal;" class="headline black-text">
              {{ program.title }}
            </div>
            <v-card-subtitle>{{ program.description }}</v-card-subtitle>
          </v-card>
        </div>
      </v-list-item-content>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  props: ['greeting', 'invitation', 'listing', 'programs'],
};
</script>
