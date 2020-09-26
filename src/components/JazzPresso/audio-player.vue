<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center scroll hidden-sm-and-down" cols="4">
        {{ currentSong }}
      </v-col>
      <v-col class="text-center hidden-md-and-up">
        <p>
          {{ currentSong.split('-')[0] }}
        </p>
        <p class="mt-n3 mb-n2">
          {{ currentSong.split('-')[1] }}
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-icon @click="setPreviousSong()" class="mr-2 hidden-sm-and-down"
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
          :src="`/playlist/${currentSong}`"
          type="audio/ogg"
        />
        <source
          class="audio-source"
          :src="`/playlist/${currentSong}`"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <v-icon @click="setNextSong()" class="ml-2 hidden-sm-and-down"
        >mdi-skip-forward</v-icon
      >
    </v-row>
    <v-row class="hidden-md-and-up">
      <v-col class="text-center">
        <v-icon @click="setPreviousSong()" class="mr-2"
          >mdi-skip-backward</v-icon
        >
      </v-col>
      <v-col class="text-center">
        <v-icon @click="setNextSong()" class="ml-2">mdi-skip-forward</v-icon>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-card class="mx-auto" max-height="200" shaped>
        <v-list rounded max-height="150" class="overflow-y-auto">
          <v-subheader>LEJÁTSZÁSI LISTA</v-subheader>

          <v-list-item
            v-for="(song, i) in playlist"
            :key="i"
            @click="setSong(song)"
          >
            <v-list-item-content class="hidden-sm-and-down">
              <v-list-item-title>{{ song }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content class="hidden-md-and-up">
              <v-list-item-title>{{ song.split('-')[0] }}</v-list-item-title>
              <v-list-item-subtitle>{{
                song.split('-')[1]
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentSong: '1. Michel Legrand - I Will Wait for You(VNQ).mp3',
      playlist: [
        '1. Michel Legrand - I Will Wait for You(VNQ).mp3',
        '2. Joe Farrell - Outback(Kvartonus).mp3',
        '3. Abbey Lincoln -  - Throw it away(VNQ).mp3',
        '4. Vörös László_Antré(Red Stone Quartet).mp3',
        '5. Abbey Lincoln - Being me(VNQ).mp3',
        '6. Michel Legrand - Sea and Sky(VNQ).mp3',
        '7. Vörös László - Questions (Strausz Eszter, Vörös László).mp3',
        '8. Michel Legrand - Watch What Happens(VNQ).mp3',
        '9. Vörös László - Samba(Red Stones Quartet).mp3',
        '10. Michel Legrand - The Summer Knows(VNQ).mp3',
        '11. Michel Legrand - The Windmills of Your Mind(VNQ).mp3',
        '12. Michel Legrand - Ask Yourself Why(VNQ).mp3',
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
        this.currentSong = '12. Michel Legrand - Ask Yourself Why(VNQ).mp3';
      } else {
        this.currentSong = this.playlist[this.currentSongIndex - 1];
      }
      this.playNewSong();
    },
    setNextSong() {
      if (this.currentSongIndex === 11) {
        this.currentSong = '1. Michel Legrand - I Will Wait for You(VNQ).mp3';
      } else {
        this.currentSong = this.playlist[this.currentSongIndex + 1];
      }
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
