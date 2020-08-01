export const validationCheck = {
  data() {
    return {
      errors: false,
      errorMessage: '',
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
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
          return pattern.test(value) || 'Érvénytelen jelszó';
        },
        passwordAgainDoctor: (value) =>
          value === this.doctor.password || 'A jelszó nem egyezik',
        passwordAgainExhibitor: (value) =>
          value === this.exhibitor.password || 'A jelszó nem egyezik',
      },
    };
  },
  methods: {
    checkFieldValidity(data) {
      const fieldsToSkip = [
        'registrationCost',
        'isMainSponsore',
        'isThirtyMin',
        'isFiveMin',
        'isExhibitionPlace',
        'ticketCounts',
        'totalPrice',
      ];

      Object.keys(data).forEach((field) => {
        if (
          !fieldsToSkip.includes(field) &&
          this.$refs[field].validate(true) === false
        )
          this.errors = true;
      });
    },
    checkDoctorRegistration() {
      if (this.doctor.registrationCost === 0) {
        this.errors = true;
        this.errorMessage = 'Kötelező adat';
      }
    },
    validate(data, userType) {
      this.errors = false;
      this.checkFieldValidity(data);
      if (userType === 'doctor') {
        this.checkDoctorRegistration();
      }
      if (this.errors === true) return;
      this.$emit('validated', { userType });
    },
  },
};
