<template>
  <v-row class="secondary-bg">
    <v-col class="text-center">
      <div>További információ:</div>
      <div>CSERNI MED BT. – Dr. Havas Adrien</div>
      <div>2621 Verőce Bereg utca 4.</div>
      <div>+36 20/324-22-55</div>
      <div>
        <v-icon size="20" class="mr-1">{{ mdiEmail }}</v-icon
        >info@haosz.hu
      </div>
      <div>
        <v-icon size="20" class="mr-1">{{ mdiSearchWeb }}</v-icon
        >www.haoszkonferencia.hu
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiEmail, mdiSearchWeb } from '@mdi/js';

export default {
  data() {
    return {
      mdiEmail,
      mdiSearchWeb,
    };
  },
};
</script>
