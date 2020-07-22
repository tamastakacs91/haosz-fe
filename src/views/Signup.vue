<template>
  <v-container fluid class="pb-0">
    <mobile-header></mobile-header>
    <doctor
      v-if="$route.params.type === 'doktor'"
      :validationRules="rules"
      @validatePassword="setDoctorPasswordToValidate"
    >
      <template v-slot:terms>
        <terms></terms>
      </template>
      <template v-slot:more-info>
        <more-info></more-info>
      </template>
    </doctor>
    <exhibitor v-else></exhibitor>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      doctorPassword: '',
      rules: {
        required: (value) => !!value || 'Kötelező adat',
        mobile: (value) => {
          const pattern = /^[+](36)(20|30|31|50|70)([0-9]{7})$/;
          return pattern.test(value) || 'Érvénytelen formátum';
        },
        password: (value) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return pattern.test(value) || 'Érvénytelen jelszó';
        },
        passwordAgain: (value) =>
          value === this.doctorPassword || 'A jelszó nem egyezik',
      },
    };
  },
  methods: {
    setDoctorPasswordToValidate(value) {
      this.doctorPassword = value;
    },
  },
};
</script>
