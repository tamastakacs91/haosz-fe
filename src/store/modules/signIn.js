const namespaced = true;

const state = () => ({
  isLoggedIn: false,
  email: '',
  password: '',
  signInSuccessPresent: false,
  signInFailPresent: false,
  signInFailMessage: '',
});

const mutations = {
  UPDATE_EMAIL(state, value) {
    state.email = value;
  },
  UPDATE_PASSWORD(state, value) {
    state.password = value;
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
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  email: (state) => state.email,
  password: (state) => state.password,
  signInSuccessPresent: (state) => state.signInSuccessPresent,
  signInFailPresent: (state) => state.signInFailPresent,
  signInFailMessage: (state) => state.signInFailMessage,
};

const actions = {
  updateEmail(context, value) {
    context.commit('UPDATE_EMAIL', value);
  },

  updatePassword(context, value) {
    context.commit('UPDATE_PASSWORD', value);
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
    } catch (error) {
      context.dispatch('set', { token: null, redirect: '/bejelentkezes' });
      context.commit('SET_SIGNIN_FAIL_MESSAGE', 'Hibás email cím, vagy jelszó');
      context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', false),
        4000
      );
    }
  },

  signOut(context) {
    context.dispatch('set', { token: null, redirect: '/bejelentkezes' });
    context.dispatch('UPDATE_EMAIL', '');
    context.dispatch('UPDATE_PASSWORD', '');
  },
};

export default () => ({
  namespaced,
  state,
  getters,
  mutations,
  actions,
});
