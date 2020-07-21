<template>
  <v-tab-item>
    <v-container>
      <v-card flat>
        <v-list-item-content>
          <v-list-item-title class="mb-5 mt-3 text-center text-h6 text-md-h5">
            {{ greeting }}
          </v-list-item-title>
          <div class="pl-3 pr-1 text-center">{{ invitation }}</div>
          <div class="mt-5 text-center">{{ listing }}</div>
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
              <div class="headline black-text normal-break">
                {{ program.title }}
              </div>
              <v-card-subtitle>{{ program.description }}</v-card-subtitle>
            </v-card>
          </div>
        </v-list-item-content>
      </v-card>
    </v-container>
    <event-summary :p1="p1" :p2="p2"></event-summary>
    <event-summary2 :p3="p3" :p4="p4" :p3_4="p3_4"></event-summary2>
    <outro :outP1="outP1" :outP2="outP2" :outP3="outP3"></outro>
    <signature :text="text" :name="name"></signature>
  </v-tab-item>
</template>

<script>
export default {
  props: [
    'greeting',
    'invitation',
    'listing',
    'programs',
    'p1',
    'p2',
    'p3',
    'p4',
    'p3_4',
    'outP1',
    'outP2',
    'outP3',
    'text',
    'name',
  ],
};
</script>
