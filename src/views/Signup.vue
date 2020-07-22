<template>
  <v-container fluid class="pb-0">
    <mobile-header></mobile-header>
    <doctor
      v-if="$route.params.type === 'doktor'"
      :doctor="doctor"
      @input="setDoctorData"
      @validated="submitDoctorData"
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
      @input="setExhibitorData"
      @validated="submitExhibitorData"
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
export default {
  data() {
    return {
      doctor: {
        data: {
          name: '',
          sealNumber: '',
          workPlace: '',
          mobile: '',
          email: '',
        },
        billing: {
          name: '',
          address: '',
          taxNumber: '',
          contact: '',
          mobile: '',
          email: '',
        },
        password: {
          password: '',
          passwordAgain: '',
        },
      },
      exhibitor: {
        data: {
          name: '',
          address: '',
          taxNumber: '',
          contact: '',
          mobile: '',
          email: '',
        },
        password: {
          password: '',
          passwordAgain: '',
        },
      },
      // rules: {
      //   required: (value) => !!value || 'Kötelező adat',
      //   mobile: (value) => {
      //     const pattern = /^[+](36)(20|30|31|50|70)([0-9]{7})$/;
      //     return pattern.test(value) || 'Érvénytelen formátum';
      //   },
      //   email: (value) => {
      //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //     return pattern.test(value) || 'Érvénytelen email formátum';
      //   },
      //   password: (value) => {
      //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      //     return pattern.test(value) || 'Érvénytelen jelszó';
      //   },
      //   passwordAgain: (value) =>
      //     value === this.doctor.password.password || 'A jelszó nem egyezik',
      // },
    };
  },
  methods: {
    setDoctorData(value, nest, field) {
      this.doctor[nest][field] = value;
    },
    setExhibitorData(value, nest, field) {
      this.exhibitor[nest][field] = value;
    },
    submitDoctorData() {
      console.log(this.doctor);
    },
    submitExhibitorData() {
      console.log(this.exhibitor);
    },
  },
};
</script>
