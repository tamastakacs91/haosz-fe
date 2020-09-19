<template>
  <div>
    <v-row class="d-flex justify-center mt-7">
      <div class="text-h4 text-md-h3 mb-7" id="topic-name">{{ topic }}</div>
    </v-row>
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
import { titleGenerator } from '@/mixins/titleGenerator';
import { getPageUrl, setIdentifier, setPageTitle } from '@/utils/disqsConfig';

var disqus_config = function () {
  this.page.url = getPageUrl(); // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = setIdentifier(); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  this.page.title = setPageTitle();
};

(function () {
  // DON'T EDIT BELOW THIS LINE
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
