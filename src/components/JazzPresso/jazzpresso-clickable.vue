<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="4" lg="3" v-for="(topic, index) in data" :key="index">
      <v-row align="center" justify="center" class="text-center ma-1">
        <v-card width="300" height="130" outlined shaped>
          <v-container fill-height>
            <v-row justify="center" align="center">
              <div class="d-flex flex-column">
                <div
                  class="text-h6 font-weight-bold normal-break pa-1"
                  @click="$router.push(`jazzpresszo/${topic.redirect}`)"
                >{{ topic.name }}</div>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['data'],
};
</script>
