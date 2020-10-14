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
        autoplay
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
      currentSong: 'Michel Legrand - I Will Wait for You(VNQ)',
      playlist: [
        'Michel Legrand - I Will Wait for You(VNQ)',
        'Joe Farrell - Outback(Kvartonus)',
        'Abbey Lincoln - Throw it away(VNQ)',
        'Vörös László_Antré(Red Stone Quartet)',
        'Abbey Lincoln - Being me(VNQ)',
        'Michel Legrand - Sea and Sky(VNQ)',
        'Vörös László - Questions (Strausz Eszter, Vörös László)',
        'Michel Legrand - Watch What Happens(VNQ)',
        'Vörös László - Samba(Red Stones Quartet)',
        'Michel Legrand - The Summer Knows(VNQ)',
        'Michel Legrand - The Windmills of Your Mind(VNQ)',
        'Michel Legrand - Ask Yourself Why(VNQ)',
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
        this.currentSong = 'Michel Legrand - Ask Yourself Why(VNQ)';
      } else {
        this.currentSong = this.playlist[this.currentSongIndex - 1];
      }
      this.playNewSong();
    },
    setNextSong() {
      if (this.currentSongIndex === 11) {
        this.currentSong = 'Michel Legrand - I Will Wait for You(VNQ)';
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
  created() {
    this.currentSong = this.playlist[Math.floor(Math.random() * 11)];
  },
};
</script>
