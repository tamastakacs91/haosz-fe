<template>
  <v-snackbar
    id="error-snackbar"
    bottom
    color="error"
    rounded="pill"
    timeout="2000"
    min-width="5"
    max-width="20"
    v-model="error"
  >
    <div>
      <v-icon>{{ mdiExclamation }}</v-icon
      >Kötelező adatok hiányoznak!
    </div>
  </v-snackbar>
</template>

<script>
import { mdiExclamation } from '@mdi/js';

export default {
  props: ['errors'],
  data() {
    return {
      mdiExclamation,
    };
  },
  computed: {
    error: {
      get() {
        return this.errors;
      },
      set(value) {
        this.$emit('resetError', value);
      },
    },
  },
};
</script>
