<template>
  <div>
    <v-container fluid>
      <v-row class="d-flex justify-center mt-7">
        <div class="text-h4 text-md-h3 mb-7 text-center">
          {{ getTitle() }}
        </div>
      </v-row>
      <audio-player></audio-player>
      <div id="disqus_thread" class="mb-5"></div>
    </v-container>
    <more-info></more-info>
  </div>
</template>

<script>
import { titleGenerator } from '@/mixins/titleGenerator';
import { getPageUrl, setIdentifier, setPageTitle } from '@/utils/disqsConfig';

//s.src = 'https://haoszkonferencia.disqus.com/embed.js';

var disqus_config = function () {
  this.page.url = getPageUrl();
  this.page.identifier = setIdentifier();
  this.page.title = setPageTitle();
};

(function () {
  var d = document,
    s = d.createElement('script');
  s.src = 'https://trial-website.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

export default {
  mixins: [titleGenerator],
  created() {
    document.title = setPageTitle();
  },
  methods: {
    getTitle() {
      return setPageTitle();
    },
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded');
    } else {
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  },
};
</script>
