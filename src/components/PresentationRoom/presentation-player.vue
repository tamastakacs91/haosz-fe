<template>
  <v-container>
    <!-- <v-row align="center" justify="center">
      <v-col class="text-center">
        <v-btn
          rounded
          color="green"
          x-large
          width="300"
          class="white--text mb-10 mt-3"
          @click="$emit('openLivestorm')"
        >
          <v-row align="center" justify="center">
            <v-col cols="1">
              <div class="d-flex justify-end">
                <v-icon
                  color="red"
                  size="30"
                  id="presentation-icon"
                  class="mr-n4"
                  >mdi-record-circle-outline</v-icon
                >
              </div>
            </v-col>
            <v-col cols="6">
              <div class="d-flex justify-start">
                Élő előadás
              </div>
            </v-col>
          </v-row>
        </v-btn>
      </v-col>
    </v-row> -->
    <v-row align="center" justify="center">
      <v-col cols="11" class="col-md-6">
        <v-select
          outlined
          hide-details
          :items="videoList"
          :value="currentVideo"
          @change="changeVideo"
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-3 mt-n3">
      <v-col class="text-center"
        >Válassza ki a listából a lejátszani kívánt videót, majd kattintson a
        videó képére a lejátszás elindításához.</v-col
      >
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <iframe
          class="presentation-frame"
          frameborder="0"
          allowfullscreen
          :src="`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&enablejsapi=1&disablekb=1&autoplay=1&iv_load_policy=3&vq=hd1080`"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['date'],
  data() {
    return {
      currentVideo: 'Snowboard',
      videosForThursday: ['Snowboard', 'Ski', 'Pennyboard', 'Surf'],
      videosForBothDays: [
        'Snowboard',
        'Ski',
        'Pennyboard',
        'Surf',
        'Wakeboard',
        'Cycling',
      ],
      videos: [
        { name: 'Snowboard', id: 'AzJPhQdTRQQ' },
        { name: 'Ski', id: 'YXWJe71IxMA' },
        { name: 'Pennyboard', id: 'J0cK2IUvLXE' },
        { name: 'Surf', id: 'nkhpGC10OVw' },
      ],
    };
  },
  computed: {
    videoId() {
      return this.videos.filter((video) => video.name == this.currentVideo)[0]
        .id;
    },
    videoList() {
      if (this.date < 20201016) return this.videosForThursday;
      if (this.date >= 20201016) return this.videosForBothDays;
    },
  },
  methods: {
    changeVideo(value) {
      this.currentVideo = value;
    },
  },
  // mounted() {
  //   let icon = document.getElementById('presentation-icon');
  //   icon.classList.add('no-show');
  //   setInterval(() => {
  //     icon.classList.toggle('no-show');
  //   }, 1000);
  // },
};
</script>

<style scoped>
.no-show {
  display: none;
}
</style>
