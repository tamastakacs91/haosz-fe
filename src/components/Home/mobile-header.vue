<template>
  <div>
    <div class="hidden-md-and-up mt-n10 mb-5" v-if="isLoggedIn">
      <div class="d-flex justify-center">
        <v-img
          alt="HAOSZ logo"
          class="shrink mr-2"
          contain
          src="/haosz-logo.png"
          transition="scale-transition"
          width="60"
        />
      </div>
      <h3 class="text-center mt-4">
        Háziorvosok Online Szervezetének
        <br />III. Országos Konferenciája
      </h3>
      <div class="text-center">2020. október 15-18.</div>
    </div>
    <div class="hidden-md-and-up mt-2 mb-5" v-if="!isLoggedIn">
      <div class="d-flex justify-center">
        <v-img
          alt="HAOSZ logo"
          class="shrink mr-2"
          contain
          src="/haosz-logo.png"
          transition="scale-transition"
          width="60"
        />
      </div>
      <h3 class="text-center mt-4">
        Háziorvosok Online Szervezetének
        <br />III. Országos Konferenciája
      </h3>
      <div class="text-center">2020. október 15-18.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('signIn', ['isLoggedIn']),
  },
};
</script>
