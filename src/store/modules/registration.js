const namespaced = true;

const state = () => ({
  doctor: {
    name: '',
    sealNumber: '',
    workPlace: '',
    mobile: '',
    email: '',
    billingName: null,
    billingAddress: null,
    billingTaxNumber: null,
    billingContact: null,
    billingMobile: null,
    billingEmail: null,
    registrationCost: 0,
    password: '',
    passwordAgain: '',
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
  },
  fees: {
    isMainSponsore: 500000,
    isThirtyMin: 150000,
    isFiveMin: 50000,
    isExhibitionPlace: 100000,
  },
  passwordShown: false,
  passwordAgainShown: false,
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

  async signUpDoctor(context) {
    let user = context.getters['doctor'];
    const result = await this.$api.signUpService.initialSignup({
      email: user.email,
      password: user.password,
      role: 'DOCTOR',
    });
    user.userId = result;
    await this.$api.signUpService.signupDoctor({
      name: user.name,
      sealNumber: user.sealNumber,
      workplace: user.workPlace,
      mobile: user.mobile,
      billingName: user.billingName,
      billingAddress: user.billingAddress,
      billingTaxNumber: user.billingTaxNumber,
      billingContact: user.billingContact,
      billingMobile: user.billingMobile,
      billingEmail: user.billingEmail,
      registrationCost: user.registrationCost,
      userId: result,
    });
  },

  async signUpSponsore(context) {
    context.commit(
      'UPDATE_SPONSOR_TOTAL_PRICE',
      context.getters['exhibitorFees']
    );
    let user = context.getters['exhibitor'];
    const result = await this.$api.signUpService.initialSignup({
      email: user.email,
      password: user.password,
      role: 'SPONSORE',
    });
    user.userId = result;
    await this.$api.signUpService.signupSponsore({
      companyName: user.companyName,
      companyAddress: user.companyAddress,
      companyTaxNumber: user.companyTaxNumber,
      companyContact: user.companyContact,
      companyMobile: user.companyMobile,
      companyEmail: user.companyEmail,
      isMainSponsore: user.isMainSponsore,
      isThirtyMin: user.isThirtyMin,
      isFiveMin: user.isFiveMin,
      isExhibitionPlace: user.isExhibitionPlace,
      ticketCounts: user.ticketCounts,
      totalPrice: user.totalPrice,
      userId: result,
    });
  },
};

export default () => ({
  namespaced,
  state,
  getters,
  mutations,
  actions,
});
