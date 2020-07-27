<template>
  <v-snackbar
    bottom
    color="error"
    rounded="pill"
    timeout="2000"
    min-width="5"
    max-width="20"
    v-model="error"
  >
    <div><v-icon>mdi-exclamation</v-icon>Kötelező adatok hiányoznak!</div>
  </v-snackbar>
</template>

<script>
export default {
  props: ['errors'],
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
