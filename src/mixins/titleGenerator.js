import data from '../../public/programs.json';

export const titleGenerator = {
  data() {
    return {
      topics: data.jazzPresso,
    };
  },
  computed: {
    topic() {
      let title;
      switch (this.$route.params.topic) {
        case 'tolunk-nyugatabbra-igy-csinaljak':
          title = this.topics[0];
          break;
        case 'praxiskozosseg-valoban-a-jovo-egyik-ellatasi-formaja':
          title = this.topics[1];
          break;
        case 'innovacio-a-haziorvoslasban':
          title = this.topics[2];
          break;
        case 'covid-es-az-alapellatas':
          title = this.topics[3];
          break;
        case 'haziorvosi-finanszirozas':
          title = this.topics[4];
          break;
        case 'kollegialis-vezetoi-rendszer':
          title = this.topics[5];
          break;
        case 'szakmai-alapellatasi-kihivasok-2020':
          title = this.topics[6];
          break;
        case 'mire-kompetens-a-haziorvos':
          title = this.topics[7];
      }
      return title;
    },
  },
};
