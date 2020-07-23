export const validationCheck = {
  data() {
    return {
      erros: false,
      rules: {
        required: (value) => !!value || 'Kötelező adat',
        mobile: (value) => {
          const pattern = /^[+](36)(20|30|31|50|70)([0-9]{7})$/;
          return pattern.test(value) || 'Érvénytelen formátum';
        },
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Érvénytelen email formátum';
        },
        password: (value) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return pattern.test(value) || 'Érvénytelen jelszó';
        },
        passwordAgainDoctor: (value) =>
          value === this.doctor.password.password || 'A jelszó nem egyezik',
        passwordAgainExhibitor: (value) =>
          value === this.exhibitor.password.password || 'A jelszó nem egyezik',
      },
    };
  },
  methods: {
    checkFieldValidity(data) {
      Object.keys(data).forEach((field) => {
        if (this.$refs[field].validate(true) === false) this.errors = true;
      });
    },
    validate(fieldSet1, fieldSet2, userType) {
      this.errors = false;
      this.checkFieldValidity(fieldSet1);
      this.checkFieldValidity(fieldSet2);
      if (this.errors === true) return console.log('Hibás kitöltés!');
      this.$emit('validated', { userType });
    },
  },
};
