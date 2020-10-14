<template>
  <div>
    <mobile-header></mobile-header>
    <v-container fluid id="topic-container">
      <v-container>
        <v-row class="d-flex justify-center mt-5">
          <v-col cols="12">
            <div class="text-h5 text-md-h3 text-center">
              {{ getTitle() }}
            </div>
          </v-col>
        </v-row>
        <audio-player></audio-player>
        <div class="d-flex justify-end text-caption">
          <div class="d-flex flex-column align-end">
            <div>
              Hozzászóláshoz jelentkezzen be Gmail, vagy Facebook fiókjába.
            </div>
            <jazz-modal></jazz-modal>
            <jazz-modal-mobile></jazz-modal-mobile>
          </div>
        </div>
        <Disqus shortname="haosz-konferencia" :pageConfig="pageConfig" />
      </v-container>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Disqus } from 'vue-disqus';
import { titleGenerator } from '@/mixins/titleGenerator';
import { getPageUrl, setIdentifier, setPageTitle } from '@/utils/disqsConfig';

export default {
  mixins: [titleGenerator],
  components: {
    Disqus,
  },
  data() {
    return {
      pageConfig: {
        language: 'hu',
      },
    };
  },
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
  },
  methods: {
    getTitle() {
      return setPageTitle();
    },
    setBackground() {
      let color;
      switch (this.$route.params.topic) {
        case 'tolunk-nyugatabbra-igy-csinaljak':
          color = '#FFECB3';
          break;
        case 'praxiskozosseg-valoban-a-jovo-egyik-ellatasi-formaja':
          color = '#F0F4C3';
          break;
        case 'innovacio-a-haziorvoslasban':
          color = '#F3E5F5';
          break;
        case 'covid-es-az-alapellatas':
          color = '#FFE0B2';
          break;
        case 'haziorvosi-finanszirozas':
          color = '#C5E1A5';
          break;
        case 'kollegialis-vezetoi-rendszer':
          color = '#E1BEE7';
          break;
        case 'szakmai-alapellatasi-kihivasok-2020':
          color = '#FFECB3';
          break;
        case 'mire-kompetens-a-haziorvos':
          color = '#F0F4C3';
      }
      document.getElementById('topic-container').style.backgroundColor = color;
    },
  },
  mounted() {
    const token = window.sessionStorage.getItem('token');

    if (!token || !this.isLoggedIn) {
      return this.$router.push('/site/bejelentkezes');
    }
    this.setBackground();
  },
  created() {
    document.title = setPageTitle();
  },
};
</script>
