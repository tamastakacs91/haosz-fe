<template>
  <v-tab-item>
    <v-card flat>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{
          greeting
        }}</v-list-item-title>
        <div>{{ invitation }}</div>
        <div>{{ listing }}</div>
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
              <v-icon size="50">{{ program.icon }}</v-icon>
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
