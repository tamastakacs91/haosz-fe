<template>
  <div>
    <v-container fluid>
      <mobile-header></mobile-header>
      <tabs :data="welcome"></tabs>
      <event-summary></event-summary>
    </v-container>
  </div>
</template>

<script>
import welcome from '../../public/welcome.json';

export default {
  name: 'Home',
  data() {
    return {
      welcome,
    };
  },
};
</script>
