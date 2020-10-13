const namespaced = true;

const state = () => ({
  doctor: {
    name: '',
    sealNumber: '',
    workPlace: '',
    mobile: '',
    email: '',
    billingName: '',
    billingAddress: '',
    billingTaxNumber: '',
    billingContact: '',
    billingMobile: '',
    billingEmail: '',
    registrationCost: 0,
    password: '',
    passwordAgain: '',
    notes: '',
  },
  exhibitor: {
    companyName: '',
    companyAddress: '',
    companyTaxNumber: '',
    companyContact: '',
    companyMobile: '',
    companyEmail: '',
    isMainSponsore: false,
    isThirtyMin: false,
    isFiveMin: false,
    isExhibitionPlace: false,
    ticketCounts: 0,
    totalPrice: 0,
    password: '',
    passwordAgain: '',
    notes: '',
  },
  fees: {
    isMainSponsore: 500000,
    isThirtyMin: 150000,
    isFiveMin: 50000,
    isExhibitionPlace: 100000,
  },
  passwordShown: false,
  passwordAgainShown: false,
  signupSuccessPresent: false,
  signupSuccess: false,
  signupFailPresent: false,
  signupErrorMessage: '',
});

const mutations = {
  UPDATE_REGISTRATION_DATA(state, { value, field, dataSet }) {
    if (dataSet === 'doctor') {
      state.doctor[field] = value;
    } else {
      state.exhibitor[field] = value;
    }
  },
  UPDATE_DOCTOR_REGISTRATION_COST(state, value) {
    state.doctor.registrationCost = value;
  },
  UPDATE_SPONSOR_REGISTRATION_COSTS(state, { value, field }) {
    let data = value;
    if (field === 'ticketCounts') data = parseInt(value);
    state.exhibitor[field] = data;
  },
  UPDATE_SPONSOR_TOTAL_PRICE(state, value) {
    state.exhibitor.totalPrice = value;
  },
  TOGGLE_PASSWORD_SHOWN(state, to) {
    if (to) {
      state.passwordShown = to;
    } else {
      state.passwordShown = !state.passwordShown;
    }
  },
  TOGGLE_PASSWORD_AGAIN_SHOWN(state, to) {
    if (to) {
      state.passwordAgainShown = to;
    } else {
      state.passwordAgainShown = !state.passwordAgainShown;
    }
  },
  TOGGLE_SIGNUP_SUCCESS_PRESENT(state, to) {
    state.signupSuccessPresent = to;
  },
  TOGGLE_SIGNUP_SUCCESS(state, to) {
    state.signupSuccess = to;
  },
  TOGGLE_SIGNUP_FAIL_PRESENT(state, to) {
    state.signupFailPresent = to;
  },
  RESET_DOCTOR_DATA(state) {
    state.doctor.name = '';
    state.doctor.sealNumber = '';
    state.doctor.workPlace = '';
    state.doctor.mobile = '';
    state.doctor.email = '';
    state.doctor.billingName = '';
    state.doctor.billingAddress = '';
    state.doctor.billingTaxNumber = '';
    state.doctor.billingContact = '';
    state.doctor.billingMobile = '';
    state.doctor.billingEmail = '';
    state.doctor.registrationCost = 0;
    state.doctor.password = '';
    state.doctor.passwordAgain = '';
    state.doctor.notes = '';
  },
  RESET_SPONSOR_DATA(state) {
    state.exhibitor.companyName = '';
    state.exhibitor.companyAddress = '';
    state.exhibitor.companyTaxNumber = '';
    state.exhibitor.companyContact = '';
    state.exhibitor.companyMobile = '';
    state.exhibitor.companyEmail = '';
    state.exhibitor.isMainSponsore = false;
    state.exhibitor.isThirtyMin = false;
    state.exhibitor.isFiveMin = false;
    state.exhibitor.isExhibitionPlace = false;
    state.exhibitor.ticketCounts = 0;
    state.exhibitor.totalPrice = 0;
    state.exhibitor.password = '';
    state.exhibitor.passwordAgain = '';
    state.exhibitor.notes = '';
  },
  SET_ERROR_MESSAGE(state, to) {
    state.signupErrorMessage = to;
  },
};

const getters = {
  doctor: (state) => state.doctor,
  exhibitor: (state) => state.exhibitor,
  passwordShown: (state) => state.passwordShown,
  passwordAgainShown: (state) => state.passwordAgainShown,
  exhibitorFees: (state) => {
    const isPayable = [
      'isMainSponsore',
      'isThirtyMin',
      'isFiveMin',
      'isExhibitionPlace',
      'ticketCounts',
    ];
    let totalCost = 0;
    isPayable.forEach((item) => {
      if (state.exhibitor[item] === true) {
        totalCost += state.fees[item];
      }
      if (item === 'ticketCounts') {
        totalCost += state.exhibitor[item] * 5000;
      }
    });
    return totalCost.toString();
  },
  signupSuccessPresent: (state) => state.signupSuccessPresent,
  signupSuccess: (state) => state.signupSuccess,
  signupFailPresent: (state) => state.signupFailPresent,
  signupErrorMessage: (state) => state.signupErrorMessage,
};

const actions = {
  togglePasswordShown(context) {
    context.commit('TOGGLE_PASSWORD_SHOWN');
  },

  togglePasswordAgainShown(context) {
    context.commit('TOGGLE_PASSWORD_AGAIN_SHOWN');
  },

  updateRegistrationData(context, { value, field, dataSet }) {
    context.commit('UPDATE_REGISTRATION_DATA', { value, field, dataSet });
  },

  updateDoctorRegistrationCost(context, value) {
    context.commit('UPDATE_DOCTOR_REGISTRATION_COST', value);
  },

  updateSponsorRegistrationCosts(context, { value, field }) {
    context.commit('UPDATE_SPONSOR_REGISTRATION_COSTS', { value, field });
  },

  toggleSignUpSuccessPresent(context, to) {
    context.commit('TOGGLE_SIGNUP_SUCCESS_PRESENT', to);
  },

  async signUpDoctor(context) {
    let user = context.getters['doctor'];
    context.commit('TOGGLE_SIGNUP_SUCCESS', false);
    try {
      const result = await this.$api.signUpService.initialSignup({
        email: user.email,
        password: user.password,
        role: 'DOCTOR',
      });
      user.userId = result.data;
      try {
        await this.$api.signUpService.signupDoctor({
          name: user.name,
          sealNumber: user.sealNumber,
          workPlace: user.workPlace,
          mobile: user.mobile,
          billingName: user.billingName,
          billingAddress: user.billingAddress,
          billingTaxNumber: user.billingTaxNumber,
          billingContact: user.billingContact,
          billingMobile: user.billingMobile,
          billingEmail: user.billingEmail,
          registrationCost: user.registrationCost.toString(),
          userId: user.userId.toString(),
          notes: user.notes,
        });
        context.commit('TOGGLE_SIGNUP_SUCCESS', true);
        this.$router.push('/site');
        context.commit('TOGGLE_SIGNUP_SUCCESS_PRESENT', true);
        setTimeout(
          () => context.commit('TOGGLE_SIGNUP_SUCCESS_PRESENT', false),
          5000
        );
        context.commit('RESET_DOCTOR_DATA');
      } catch (error) {
        context.commit(
          'SET_ERROR_MESSAGE',
          'Hiba történt, ellenőrizze a mezőket'
        );
        context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', true);
        setTimeout(
          () => context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', false),
          4000
        );
      }
    } catch (error) {
      context.commit('SET_ERROR_MESSAGE', 'Az email cím már regisztrálva van');
      context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', false),
        4000
      );
    }
  },

  async signUpSponsore(context) {
    context.commit(
      'UPDATE_SPONSOR_TOTAL_PRICE',
      context.getters['exhibitorFees']
    );
    let user = context.getters['exhibitor'];
    context.commit('TOGGLE_SIGNUP_SUCCESS', false);
    try {
      const result = await this.$api.signUpService.initialSignup({
        email: user.companyEmail,
        password: user.password,
        role: 'SPONSORE',
      });
      user.userId = result.data;
      try {
        await this.$api.signUpService.signupSponsore({
          companyName: user.companyName,
          companyAddress: user.companyAddress,
          companyTaxNumber: user.companyTaxNumber,
          companyContact: user.companyContact,
          companyMobile: user.companyMobile,
          companyEmail: user.companyEmail,
          isMainSponsore: user.isMainSponsore.toString(),
          isThirtyMin: user.isThirtyMin.toString(),
          isFiveMin: user.isFiveMin.toString(),
          isExhibitionPlace: user.isExhibitionPlace.toString(),
          ticketCounts: user.ticketCounts.toString(),
          totalPrice: user.totalPrice,
          userId: user.userId.toString(),
          notes: user.notes,
        });
        context.commit('TOGGLE_SIGNUP_SUCCESS', true);
        this.$router.push('/site');
        context.commit('TOGGLE_SIGNUP_SUCCESS_PRESENT', true);
        setTimeout(
          () => context.commit('TOGGLE_SIGNUP_SUCCESS_PRESENT', false),
          5000
        );
        context.commit('RESET_SPONSOR_DATA');
      } catch (error) {
        context.commit(
          'SET_ERROR_MESSAGE',
          'Hiba történt, ellenőrizze a mezőket'
        );
        context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', true);
        setTimeout(
          () => context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', false),
          4000
        );
      }
    } catch (error) {
      context.commit('SET_ERROR_MESSAGE', 'Az email cím már regisztrálva van');
      context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNUP_FAIL_PRESENT', false),
        4000
      );
    }
  },
};

export default () => ({
  namespaced,
  state,
  getters,
  mutations,
  actions,
});
