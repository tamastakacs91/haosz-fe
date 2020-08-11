<template>
  <div>
    <v-container fluid>
      <mobile-header></mobile-header>
      <tabs>
        <tab-item
          :greeting="data.greeting.doctor"
          :invitation="data.invitation.doctor"
          :listing="data.listing"
          :programs="data.programs.doctor"
          :type="'doctor'"
        >
          <event-summary
            :p1="data.summary.doctor.p1"
            :p2="data.summary.doctor.p2"
          ></event-summary>
          <event-summary2
            :p3="data.summary.doctor.p3"
            :p4="data.summary.doctor.p4"
            :p3_4="data.summary.doctor.p3_4"
          ></event-summary2>
          <outro
            :outP1="data.outro.doctor.p1"
            :outP2="data.outro.doctor.p2"
            :outP3="data.outro.doctor.p3"
          ></outro>
          <signature
            :text="data.signature.doctorText"
            :name="data.signature.name"
          ></signature>
        </tab-item>
        <tab-item
          :greeting="data.greeting.exhibitor"
          :invitation="data.invitation.exhibitor"
          :listing="data.listing"
          :programs="data.programs.exhibitor"
          :type="'exhibitor'"
        >
          <event-summary
            :p1="data.summary.exhibitor.p1"
            :p2="data.summary.exhibitor.p2"
          ></event-summary>
          <event-summary2
            :p3="data.summary.exhibitor.p3"
            :p4="data.summary.exhibitor.p4"
            :p3_4="data.summary.exhibitor.p3_4"
          ></event-summary2>
          <outro
            :outP1="data.outro.exhibitor.p1"
            :outP2="data.outro.exhibitor.p2"
            :outP3="data.outro.exhibitor.p3"
          ></outro>
          <signature
            :text="data.signature.exhibitorText"
            :name="data.signature.name"
          ></signature>
        </tab-item>
      </tabs>
      <v-snackbar
        class="reg-snackbar"
        right
        color="success"
        rounded="pill"
        timeout="2000"
        min-width="5"
        max-width="20"
        v-model="signupSuccessPresent"
      >
        <div class="snackbar-text">Sikeres regisztráció</div>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import data from '../../public/homePage.json';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      data,
    };
  },
  computed: {
    ...mapGetters('registration', ['signupSuccessPresent']),
  },
};
</script>
