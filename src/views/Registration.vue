<template>
  <v-container fluid class="pb-0">
    <mobile-header></mobile-header>
    <doctor
      v-if="$route.params.type === 'doktor'"
      :doctor="doctor"
      :showPassword="passwordShown"
      :showPasswordAgain="passwordAgainShown"
      @input="updateRegistrationData"
      @togglePassword="togglePasswordShown"
      @togglePasswordAgain="togglePasswordAgainShown"
      @validated="sendRegistrationData"
    >
      <template v-slot:terms>
        <terms></terms>
      </template>
      <template v-slot:more-info>
        <more-info></more-info>
      </template>
    </doctor>
    <exhibitor
      v-else
      :exhibitor="exhibitor"
      :showPassword="passwordShown"
      :showPasswordAgain="passwordAgainShown"
      @input="updateRegistrationData"
      @togglePassword="togglePasswordShown"
      @togglePasswordAgain="togglePasswordAgainShown"
      @validated="sendRegistrationData"
    >
      <template v-slot:terms>
        <terms></terms>
      </template>
      <template v-slot:more-info>
        <more-info></more-info>
      </template>
    </exhibitor>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('registration', [
      'doctor',
      'exhibitor',
      'passwordShown',
      'passwordAgainShown',
    ]),
  },
  methods: {
    ...mapActions('registration', [
      'togglePasswordShown',
      'togglePasswordAgainShown',
      'updateRegistrationData',
      'sendRegistrationData',
    ]),
    submitDoctorData() {
      console.log(this.doctor);
    },
    submitExhibitorData() {
      console.log(this.exhibitor);
    },
  },
};
</script>
