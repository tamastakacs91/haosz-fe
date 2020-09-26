<template>
  <div>
    <v-container fluid>
      <v-row class="d-flex justify-center mt-7">
        <div class="text-h4 text-md-h3 mb-7 text-center">{{ topic }}</div>
      </v-row>
      <audio-player></audio-player>
      <div id="disqus_thread"></div>
    </v-container>
  </div>
</template>

<script>
import { titleGenerator } from '@/mixins/titleGenerator';
import { getPageUrl, setIdentifier, setPageTitle } from '@/utils/disqsConfig';

var disqus_config = function () {
  this.page.url = getPageUrl();
  this.page.identifier = setIdentifier();
  this.page.title = setPageTitle();
};

(function () {
  var d = document,
    s = d.createElement('script');
  s.src = 'https://thid-trial.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

export default {
  mixins: [titleGenerator],
  created() {
    document.title = setPageTitle();
  },
};
</script>
