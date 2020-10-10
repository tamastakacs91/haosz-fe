<template>
  <div>
    <mobile-header></mobile-header>
    <v-container>
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="12">
          <div class="text-h5 text-md-h3 text-center">
            {{ getTitle() }}
          </div>
        </v-col>
      </v-row>
      <audio-player></audio-player>
      <Disqus shortname="haosz-demo" />
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus';
import { titleGenerator } from '@/mixins/titleGenerator';
import { getPageUrl, setIdentifier, setPageTitle } from '@/utils/disqsConfig';

export default {
  mixins: [titleGenerator],
  components: {
    Disqus,
  },
  created() {
    document.title = setPageTitle();
  },
  methods: {
    getTitle() {
      return setPageTitle();
    },
  },
};
</script>
