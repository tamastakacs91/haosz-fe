<template>
  <v-container class="mb-10 mt-10 pb-10">
    <v-row align="center" justify="center">
      <v-col cols="11" class="col-md-6">
        <v-card>
          <v-select
            outlined
            hide-details
            :items="playlist"
            :value="currentSong"
            @change="changeSong"
          ></v-select>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-icon
        @click="setPreviousSong()"
        class="mr-2 hidden-sm-and-down"
        color="black"
        >mdi-skip-backward</v-icon
      >
      <audio
        id="audio-player"
        controls
        controlsList="nodownload"
        @ended="setNextSong()"
      >
        <source
          class="audio-source"
          :src="`/playlist/${currentSong}.mp3`"
          type="audio/ogg"
        />
        <source
          class="audio-source"
          :src="`/playlist/${currentSong}.mp3`"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <v-icon
        @click="setNextSong()"
        class="ml-2 hidden-sm-and-down"
        color="black"
        >mdi-skip-forward</v-icon
      >
    </v-row>
    <v-row class="hidden-md-and-up">
      <v-col class="text-center">
        <v-icon @click="setPreviousSong()" class="mr-2" color="black"
          >mdi-skip-backward</v-icon
        >
      </v-col>
      <v-col class="text-center">
        <v-icon @click="setNextSong()" class="ml-2" color="black"
          >mdi-skip-forward</v-icon
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentSong: '1. Michel Legrand - I Will Wait for You(VNQ)',
      playlist: [
        '1. Michel Legrand - I Will Wait for You(VNQ)',
        '2. Joe Farrell - Outback(Kvartonus)',
        '3. Abbey Lincoln -  - Throw it away(VNQ)',
        '4. Vörös László_Antré(Red Stone Quartet)',
        '5. Abbey Lincoln - Being me(VNQ)',
        '6. Michel Legrand - Sea and Sky(VNQ)',
        '7. Vörös László - Questions (Strausz Eszter, Vörös László)',
        '8. Michel Legrand - Watch What Happens(VNQ)',
        '9. Vörös László - Samba(Red Stones Quartet)',
        '10. Michel Legrand - The Summer Knows(VNQ)',
        '11. Michel Legrand - The Windmills of Your Mind(VNQ)',
        '12. Michel Legrand - Ask Yourself Why(VNQ)',
      ],
    };
  },
  computed: {
    currentSongIndex() {
      return this.playlist.indexOf(this.currentSong);
    },
  },
  methods: {
    setSong(song) {
      this.currentSong = song;
      this.playNewSong();
    },
    setPreviousSong() {
      if (this.currentSongIndex === 0) {
        this.currentSong = '12. Michel Legrand - Ask Yourself Why(VNQ)';
      } else {
        this.currentSong = this.playlist[this.currentSongIndex - 1];
      }
      this.playNewSong();
    },
    setNextSong() {
      if (this.currentSongIndex === 11) {
        this.currentSong = '1. Michel Legrand - I Will Wait for You(VNQ)';
      } else {
        this.currentSong = this.playlist[this.currentSongIndex + 1];
      }
      this.playNewSong();
    },
    changeSong(value) {
      this.currentSong = value;
      this.playNewSong();
    },
    playNewSong() {
      let player = document.querySelector('#audio-player');
      player.load();
      player.play();
    },
  },
};
</script>
