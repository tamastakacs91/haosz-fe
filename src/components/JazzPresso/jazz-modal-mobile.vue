<template>
  <div class="text-center">
    <v-dialog v-model="mobileDialog" width="350">
      <template v-slot:activator="{ on, attrs }">
        <div
          class="blue--text text--darken-3 text-decoration-underline hidden-md-and-up disqus-help-text"
          v-bind="attrs"
          v-on="on"
        >
          Videós segítség
        </div>
      </template>

      <v-card>
        <video width="350" controls autoplay>
          <source src="/HAOSZ-help.mp4" type="video/mp4" />
          <source src="HAOSZ-help.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeModalAndStopVideo">
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
      mobileDialog: false,
    };
  },
  methods: {
    closeModalAndStopVideo() {
      let video = document.querySelector('video');
      video.pause();
      video.currentTime = 0;
      this.mobileDialog = false;
    },
  },
};
</script>
