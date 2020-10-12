<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <v-btn
          rounded
          color="green"
          x-large
          width="300"
          class="white--text mb-10 mt-3"
          @click="$emit('openLivestorm')"
        >
          <v-icon color="red" size="30" class="mr-1"
            >mdi-record-circle-outline</v-icon
          >
          Élő előadás</v-btn
        >
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="11" class="col-md-6 mb-5">
        <v-select
          outlined
          hide-details
          :items="videoList"
          :value="currentVideo"
          @change="changeVideo"
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <iframe
          class="presentation-frame"
          frameborder="0"
          allowfullscreen
          :src="`https://www.youtube.com/embed/${videoId}`"
          encrypted-media
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
};
</script>
