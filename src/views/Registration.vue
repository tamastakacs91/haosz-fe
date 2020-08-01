<template>
  <v-container fluid class="pb-0">
    <mobile-header></mobile-header>
    <doctor
      v-if="$route.params.type === 'doktor'"
      :doctor="doctor"
      :showPassword="passwordShown"
      :showPasswordAgain="passwordAgainShown"
      :date="dateToday"
      @input="updateRegistrationData"
      @togglePassword="togglePasswordShown"
      @togglePasswordAgain="togglePasswordAgainShown"
      @validated="signUpDoctor"
      @selected="selectDoctorCost"
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
      @validated="signUpSponsore"
      @selected="setSponsorCosts"
      :fees="exhibitorFees"
    >
      <template v-slot:terms>
        <terms></terms>
      </template>
      <template v-slot:more-info>
        <more-info></more-info>
      </template>
    </exhibitor>

    <v-snackbar
      right
      color="error"
      rounded="pill"
      timeout="2000"
      min-width="5"
      max-width="20"
      v-model="signupFailPresent"
    >
      <div>
        <v-icon>mdi-exclamation</v-icon>Valami hiba történt
      </div>
    </v-snackbar>
    <v-snackbar
      right
      color="success"
      rounded="pill"
      timeout="2000"
      min-width="5"
      max-width="20"
      v-model="signupSuccessPresent"
    >
      <div>Sikeres regisztráció</div>
    </v-snackbar>
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
      'exhibitorFees',
      'signupSuccessPresent',
      'signupFailPresent',
    ]),
    dateToday() {
      const splitDate = new Date().toISOString().split('-');
      const date = splitDate[2].split('T');
      return splitDate[0] + splitDate[1] + date[0];
    },
  },
  methods: {
    ...mapActions('registration', [
      'togglePasswordShown',
      'togglePasswordAgainShown',
      'updateRegistrationData',
      'updateDoctorRegistrationCost',
      'updateSponsorRegistrationCosts',
      'signUpDoctor',
      'signUpSponsore',
    ]),
    selectDoctorCost(value) {
      this.updateDoctorRegistrationCost(value);
    },
    setSponsorCosts({ value, field }) {
      this.updateSponsorRegistrationCosts({ value, field });
    },
  },
};
</script>
