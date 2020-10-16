<template>
  <div>
    <mobile-header></mobile-header>
    <v-container class="main-container mb-5">
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="12">
          <div class="text-h5 text-md-h3 text-center">
            Élő Kiállítóterem
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mt-n3">
        <v-col class="text-center"
          >Kattintson a kiállító logójára az élő kiállítóterembe való
          csatlakozáshoz</v-col
        >
      </v-row>
      <v-row align="center" justify="center" class="mt-10">
        <v-col>
          <v-row align="center" justify="center">
            <div class="d-flex flex-column">
              <v-img
                alt="Erodium"
                class="shrink pointer rounded-lg hidden-sm-and-down"
                contain
                src="/logos/1Erodium.png"
                transition="scale-transition"
                max-width="400"
                @click="
                  openLiveRoom(
                    'https://app.livestorm.co/vet-webinar-hungary/meet/erodium-betegiranyitas'
                  )
                "
              />
              <v-img
                alt="Erodium"
                class="shrink pointer rounded-lg hidden-md-and-up"
                contain
                src="/logos/1Erodium.png"
                transition="scale-transition"
                max-width="300"
                @click="
                  openLiveRoom(
                    'https://app.livestorm.co/vet-webinar-hungary/meet/erodium-betegiranyitas'
                  )
                "
              />
              <div class="text-center mt-4 text-h5">Betegirányítás</div>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="6">
          <v-row align="center" justify="center">
            <div class="d-flex flex-column">
              <v-img
                alt="Erodium"
                class="shrink pointer rounded-lg hidden-sm-and-down mb-n2"
                contain
                src="/logos/5Netdoktor.jpg"
                transition="scale-transition"
                max-width="400"
                @click="
                  openLiveRoom(
                    'https://app.livestorm.co/vet-webinar-hungary/meet/netdoktor-korszeru-haziorvosi-szoftver'
                  )
                "
              />
              <v-img
                alt="Erodium"
                class="shrink pointer rounded-lg hidden-md-and-up"
                contain
                src="/logos/5Netdoktor.jpg"
                transition="scale-transition"
                max-width="300"
                @click="
                  openLiveRoom(
                    'https://app.livestorm.co/vet-webinar-hungary/meet/netdoktor-korszeru-haziorvosi-szoftver'
                  )
                "
              />
              <div class="text-center mt-md-n16 mt-n13 text-h5 on-image">
                Korszerű Háziorvosi Szoftver
              </div>
            </div>
          </v-row>
        </v-col>
        <v-col md="6">
          <v-row align="center" justify="center">
            <div class="mt-15">
              <v-img
                alt="Erodium"
                class="shrink pointer rounded-lg hidden-sm-and-down mt-16"
                contain
                src="/logos/2Roche.png"
                transition="scale-transition"
                max-width="350"
                @click="
                  openLiveRoom(
                    'https://app.livestorm.co/vet-webinar-hungary/meet/roche-diagnosztika-point-of-care-testing'
                  )
                "
              />
              <v-img
                alt="Erodium"
                class="shrink pointer rounded-lg hidden-md-and-up"
                contain
                src="/logos/2Roche.png"
                transition="scale-transition"
                max-width="300"
                @click="
                  openLiveRoom(
                    'https://app.livestorm.co/vet-webinar-hungary/meet/roche-diagnosztika-point-of-care-testing'
                  )
                "
              />
              <div class="text-center mt-3 text-h5">
                Korszerű Háziorvosi Szoftver
              </div>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ExhibitorRoom',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('signIn', ['set']),
    openLiveRoom(link) {
      window.open(link, '_blank');
    },
  },
  created() {
    const token = window.sessionStorage.getItem('token');
    if (!token) return this.$router.push('/site/bejelentkezes');
    this.set({ token });
  },
};
</script>

<style scoped>
.on-image {
  position: relative;
  z-index: 100;
}
</style>
