const namespaced = true;

const state = () => ({
  isLoggedIn: false,
  email: '',
  password: '',
  signInSuccessPresent: false,
  signInFailPresent: false,
  signInFailMessage: '',
  passwordShown: false,
  signInLoading: false,
});

const mutations = {
  UPDATE_EMAIL(state, value) {
    state.email = value;
  },
  UPDATE_PASSWORD(state, value) {
    state.password = value;
  },
  TOGGLE_PASSWORD_SHOWN(state, to) {
    if (to) {
      state.passwordShown = to;
    } else {
      state.passwordShown = !state.passwordShown;
    }
  },
  SET_IS_LOGGED_IN(state, to) {
    state.isLoggedIn = to;
  },
  TOGGLE_SIGNIN_SUCCESS_PRESENT(state, to) {
    state.signInSuccessPresent = to;
  },
  TOGGLE_SIGNIN_FAIL_PRESENT(state, to) {
    state.signInFailPresent = to;
  },
  SET_SIGNIN_FAIL_MESSAGE(state, value) {
    state.signInFailMessage = value;
  },
  TOGGLE_SIGNIN_LOADING(state, to) {
    state.signInLoading = to;
  },
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  email: (state) => state.email,
  password: (state) => state.password,
  passwordShown: (state) => state.passwordShown,
  signInSuccessPresent: (state) => state.signInSuccessPresent,
  signInFailPresent: (state) => state.signInFailPresent,
  signInFailMessage: (state) => state.signInFailMessage,
  signInLoading: (state) => state.signInLoading,
};

const actions = {
  updateEmail(context, value) {
    context.commit('UPDATE_EMAIL', value);
  },

  updatePassword(context, value) {
    context.commit('UPDATE_PASSWORD', value);
  },

  togglePasswordShown(context) {
    context.commit('TOGGLE_PASSWORD_SHOWN');
  },

  toggleSignInFailPresent(context, to) {
    context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', to);
  },

  set(context, { token, redirect }) {
    if (token) {
      context.commit('SET_IS_LOGGED_IN', true);
      window.sessionStorage.setItem('token', token);
      this.$api.signUpService.authorize(token);
    } else {
      context.commit('SET_IS_LOGGED_IN', false);
      window.sessionStorage.removeItem('token');
      this.$api.signUpService.unAuthorize();
    }
    if (redirect) this.$router.push(redirect).catch((err) => {});
  },

  async signIn(context) {
    context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', false);
    context.commit('TOGGLE_SIGNIN_LOADING', true);
    console.log(context.getters['email']);
    console.log(context.getters['password']);
    try {
      const response = await this.$api.signUpService.signIn({
        email: context.getters['email'],
        password: context.getters['password'],
      });
      const token = response.data.token;
      context.dispatch('set', { token, redirect: '/' });
      context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', false),
        4000
      );
      context.dispatch('updateEmail', '');
      context.dispatch('updatePassword', '');
    } catch (error) {
      context.dispatch('set', { token: null, redirect: '/bejelentkezes' });
      context.commit('SET_SIGNIN_FAIL_MESSAGE', 'Hibás email cím, vagy jelszó');
      context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', false),
        4000
      );
    } finally {
      context.commit('TOGGLE_SIGNIN_LOADING', false);
    }
  },

  signOut(context) {
    context.dispatch('set', { token: null, redirect: '/bejelentkezes' });
    context.dispatch('updateEmail', '');
    context.dispatch('updatePassword', '');
  },
};

export default () => ({
  namespaced,
  state,
  getters,
  mutations,
  actions,
});
