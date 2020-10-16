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
          id="presentation-select"
          dense
          outlined
          hide-details
          :items="videoList"
          :value="currentVideo"
          @change="changeVideo"
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mt-n3">
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
          :src="`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&enablejsapi=1&disablekb=1&iv_load_policy=3&vq=hd1080`"
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
      currentVideo: 'Nemzetközi kitekintés - Háziorvoslás Skóciában',
      videosForThursday: [
        'Nemzetközi kitekintés - Háziorvoslás Skóciában',
        'Nemzetközi kitekintés - Háziorvoslás Svédországban',
        'Nemzetközi kitekintés - Háziorvoslás Svájcban',
        'A pneumococcus betegségről - A megelőzés fontossága',
        'A kullancsencephalitis Magyarországon, 2020',
        'Praxisközösség - Hogyan illeszthető a jövő alapellátásába',
        'Gerincbántalmak - Milyen diagnózisokra kell gondoljunk és milyen új lehetőségeket ad a regeneratív medicina?',
      ],
      videosForBothDays: [
        'Nemzetközi kitekintés - Háziorvoslás Skóciában',
        'Nemzetközi kitekintés - Háziorvoslás Svédországban',
        'Nemzetközi kitekintés - Háziorvoslás Svájcban',
        'A pneumococcus betegségről - A megelőzés fontossága',
        'A kullancsencephalitis Magyarországon, 2020',
        'Praxisközösség - Hogyan illeszthető a jövő alapellátásába',
        'Gerincbántalmak - Milyen diagnózisokra kell gondoljunk és milyen új lehetőségeket ad a regeneratív medicina?',
        'Mit tanul, mit kap a háziorvos a Bálint csoportban?',
        'Rendelőn kívüli betegellátás korszerű eszközökkel',
        'Erodium sokkal több, mint egy online előjegyzési rendszer',
        'Minőségbiztosított POCT a háziorvosi gyakorlatban',
        'Kinek kell vércukor ellenőrzést végeznie',
        'A diabétesz ellátást és gondozást segítő innovatív vércukormérő eszközökkel',
        'Az érfali merevség vizsgálatának fontossága a háziorvosi praxisban',
      ],
      videos: [
        {
          name: 'Nemzetközi kitekintés - Háziorvoslás Skóciában',
          id: '7vEAZK70Lb4',
        },
        {
          name: 'Nemzetközi kitekintés - Háziorvoslás Svédországban',
          id: 'ZnCNxJ5o3Cw',
        },
        {
          name: 'Nemzetközi kitekintés - Háziorvoslás Svájcban',
          id: 'LDzTDqoTSNE',
        },
        {
          name: 'A pneumococcus betegségről - A megelőzés fontossága',
          id: '_WXd3nDfJo4',
        },
        {
          name: 'A kullancsencephalitis Magyarországon, 2020',
          id: '4vBZvxwMPz8',
        },
        {
          name: 'Praxisközösség - Hogyan illeszthető a jövő alapellátásába',
          id: '0bmsP5AVfH0',
        },
        {
          name:
            'Gerincbántalmak - Milyen diagnózisokra kell gondoljunk és milyen új lehetőségeket ad a regeneratív medicina?',
          id: 'gGXAsN4qI8U',
        },
        {
          name: 'Mit tanul, mit kap a háziorvos a Bálint csoportban?',
          id: 'xoAWJn643mo',
        },
        {
          name: 'Rendelőn kívüli betegellátás korszerű eszközökkel',
          id: 'LxToadXLGB8',
        },
        {
          name: 'Erodium sokkal több, mint egy online előjegyzési rendszer',
          id: 'zDAdLud07SE',
        },
        {
          name: 'Minőségbiztosított POCT a háziorvosi gyakorlatban',
          id: '7bDtdKCf9cI',
        },
        {
          name: 'Kinek kell vércukor ellenőrzést végeznie',
          id: 'AryoXRUDMSs',
        },
        {
          name:
            'A diabétesz ellátást és gondozást segítő innovatív vércukormérő eszközökkel',
          id: 'bKWpB_PQLjE',
        },
        {
          name:
            'Az érfali merevség vizsgálatának fontossága a háziorvosi praxisban',
          id: 'hdYgTnRDSGo',
        },
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
