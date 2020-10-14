<template>
  <div>
    <v-container fluid class="main-container">
      <mobile-header></mobile-header>
      <v-row class="d-flex justify-center mt-7 mb-4">
        <div class="text-h4 text-md-h3">Jazzpresszó</div>
      </v-row>
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <div class="d-flex justify-center">
              <v-img
                src="/Jazzpresszo.jpg"
                alt="Jazzpresszo"
                class="shrink rounded hidden-sm-and-down"
                contain
                transition="scale-transition"
                max-width="700"
              ></v-img>
              <v-img
                src="/Jazzpresszo.jpg"
                alt="Jazzpresszo"
                class="shrink rounded hidden-md-and-up"
                contain
                transition="scale-transition"
                max-width="300"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center"
          >Kattintson az egyik témára a beszélgetéshez való
          csatlakozáshoz.</v-col
        >
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="(topic, index) in pressoTopics"
          :key="index"
        >
          <v-row
            align="center"
            justify="center"
            class="text-center ma-1"
            @click="redirectToTopic(topic.redirect)"
          >
            <v-card
              width="300"
              height="130"
              outlined
              shaped
              class="presso-pointer"
              :color="topic.color"
            >
              <v-container fill-height>
                <v-row justify="center" align="center">
                  <div class="d-flex flex-column">
                    <div class="text-h6 font-weight-bold normal-break pa-1">
                      {{ topic.name }}
                    </div>
                  </div>
                </v-row>
              </v-container>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { titleGenerator } from '@/mixins/titleGenerator';
import { getPageUrl, setIdentifier, setPageTitle } from '@/utils/disqsConfig';

export default {
  name: 'JazzPressoPage',
  data() {
    return {
      pressoTopics: [
        {
          name: 'Tőlünk nyugatabbra így csinálják... Mit kellene átvennünk?',
          redirect: 'tolunk-nyugatabbra-igy-csinaljak',
          color: '#FFECB3',
        },
        {
          name: 'Praxisközösség valóban a jövő egyik ellátási formája?',
          redirect: 'praxiskozosseg-valoban-a-jovo-egyik-ellatasi-formaja',
          color: '#F0F4C3',
        },
        {
          name:
            'Innováció a háziorvoslásban - Mik a lehetőségeink, korlátaink?',
          redirect: 'innovacio-a-haziorvoslasban',
          color: '#F3E5F5',
        },
        {
          name:
            'COVID és az alapellátás - Hogy vizsgáztunk, miben kell fejlődnünk?',
          redirect: 'covid-es-az-alapellatas',
          color: '#FFE0B2',
        },
        {
          name: 'Háziorvosi finanszírozás, béremelés 2021-2023?',
          redirect: 'haziorvosi-finanszirozas',
          color: '#C5E1A5',
        },
        {
          name: 'Kollegiális vezetői rendszer - mi legyen a célkitűzés?',
          redirect: 'kollegialis-vezetoi-rendszer',
          color: '#E1BEE7',
        },
        {
          name: 'Szakmai alapellátási kihívások 2020',
          redirect: 'szakmai-alapellatasi-kihivasok-2020',
          color: '#FFECB3',
        },
        {
          name: 'Mire kompetens a háziorvos, amit amúgy nem végezhet?',
          redirect: 'mire-kompetens-a-haziorvos',
          color: '#F0F4C3',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
  },
  methods: {
    redirectToTopic(redirect) {
      this.$router.push(`/site/jazzpresszo/${redirect}`);
    },
  },
  created() {
    const token = window.sessionStorage.getItem('token');

    if (!token || !this.isLoggedIn) {
      return this.$router.push('/site/bejelentkezes');
    }
  },
};
</script>
