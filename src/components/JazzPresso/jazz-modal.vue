<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on, attrs }">
        <div
          class="blue--text text--darken-3 text-decoration-underline"
          v-bind="attrs"
          v-on="on"
        >
          Videós segítség
        </div>
      </template>

      <v-card>
        <video width="800" controls>
          <source src="/HAOSZ-help.mp4" type="video/mp4" />
          <source src="HAOSZ-help.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Bezár
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
