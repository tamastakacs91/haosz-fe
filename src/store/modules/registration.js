const namespaced = true;

const state = () => ({
  doctor: {
    data: {
      name: '',
      sealNumber: '',
      workPlace: '',
      mobile: '',
      email: '',
    },
    billing: {
      name: null,
      address: null,
      taxNumber: null,
      contact: null,
      mobile: null,
      email: null,
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
  passwordShown: false,
  passwordAgainShown: false,
});

const mutations = {
  UPDATE_REGISTRATION_DATA(state, { value, nest, field, dataSet }) {
    if (dataSet === 'doctor') {
      state.doctor[nest][field] = value;
    } else {
      state.exhibitor[nest][field] = value;
    }
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
};

const actions = {
  togglePasswordShown(context) {
    context.commit('TOGGLE_PASSWORD_SHOWN');
  },
  togglePasswordAgainShown(context) {
    context.commit('TOGGLE_PASSWORD_AGAIN_SHOWN');
  },
  updateRegistrationData(context, { value, nest, field, dataSet }) {
    context.commit('UPDATE_REGISTRATION_DATA', { value, nest, field, dataSet });
  },
  sendRegistrationData(context, { userType }) {
    let user;
    if (userType === 'doctor') {
      user = context.getters['doctor'];
    } else {
      user = context.getters['exhibitor'];
    }
    console.log(user);
  },
};

export default () => ({
  namespaced,
  state,
  getters,
  mutations,
  actions,
});
