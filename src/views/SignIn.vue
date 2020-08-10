<template>
  <div>Bejelentkezés</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('registration', ['signupSuccessPresent']),
  },
};
</script>
