const namespaced = true;

const state = () => ({
  isLoggedIn: false,
  email: '',
  password: '',
  signInSuccessPresent: false,
  signOutSuccessPresent: false,
  signInFailPresent: false,
  signInFailMessage: '',
  passwordShown: false,
  signInLoading: false,
  userRole: null,
  pwSuccessPresent: false,
  pwLoading: false,
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
  TOGGLE_SIGNOUT_SUCCESS_PRESENT(state, to) {
    state.signOutSuccessPresent = to;
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
  SET_USER_ROLE(state, to) {
    state.userRole = to;
  },
  TOGGLE_PW_SUCCESS_PRESENT(state, to) {
    state.pwSuccessPresent = to;
  },
  TOGGLE_PW_LOADING(state, to) {
    state.pwLoading = to;
  },
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  email: (state) => state.email,
  password: (state) => state.password,
  passwordShown: (state) => state.passwordShown,
  signInSuccessPresent: (state) => state.signInSuccessPresent,
  signOutSuccessPresent: (state) => state.signOutSuccessPresent,
  signInFailPresent: (state) => state.signInFailPresent,
  signInFailMessage: (state) => state.signInFailMessage,
  signInLoading: (state) => state.signInLoading,
  userRole: (state) => state.userRole,
  pwSuccessPresent: (state) => state.pwSuccessPresent,
  pwLoading: (state) => state.pwLoading,
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

  toggleSignInSuccessPresent(context, to) {
    context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', to);
  },

  toggleSignOutSuccessPresent(context, to) {
    context.commit('TOGGLE_SIGNOUT_SUCCESS_PRESENT', to);
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
    if (redirect) this.$router.push(redirect).catch((error) => {});
  },

  setEmail(context, { email }) {
    if (email) {
      window.sessionStorage.setItem('email', email);
    } else {
      window.sessionStorage.removeItem('email');
    }
  },

  async signIn(context) {
    context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', false);
    context.commit('TOGGLE_SIGNIN_LOADING', true);
    try {
      const response = await this.$api.signUpService.signIn({
        email: context.getters['email'],
        password: context.getters['password'],
      });

      const token = response.data.accessToken;
      context.dispatch('set', { token });

      context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNIN_SUCCESS_PRESENT', false),
        4000
      );

      context.dispatch('updateEmail', '');
      context.dispatch('updatePassword', '');

      const profile = await this.$api.signUpService.getUserProfile();
      context.commit('SET_USER_ROLE', profile.data.role);
      context.dispatch('setEmail', { email: profile.data.email });

      if (context.getters['userRole'] === 'ADMIN') {
        this.$router.push('/site/admin');
      } else {
        this.$router.push('/');
      }
    } catch (error) {
      context.dispatch('set', { token: null, redirect: '/site/bejelentkezes' });
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
    context.dispatch('set', { token: null, redirect: '/' });
    context.dispatch('setEmail', { email: null });
    context.commit('SET_USER_ROLE', null);
    context.dispatch('updateEmail', '');
    context.dispatch('updatePassword', '');
    context.commit('TOGGLE_SIGNOUT_SUCCESS_PRESENT', true);
    setTimeout(
      () => context.commit('TOGGLE_SIGNOUT_SUCCESS_PRESENT', false),
      4000
    );
  },

  async setNewPassword(context, { email, password }) {
    context.commit('TOGGLE_PW_SUCCESS_PRESENT', false);
    context.commit('TOGGLE_PW_LOADING', true);
    try {
      await this.$api.signUpService.resetPassword({
        email,
        password,
      });
      context.commit('TOGGLE_PW_SUCCESS_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_PW_SUCCESS_PRESENT', false),
        4000
      );
      this.$router.push('/site/bejelentkezes');
    } catch (error) {
      context.commit('SET_SIGNIN_FAIL_MESSAGE', 'Hibás email cím, vagy jelszó');
      context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', true);
      setTimeout(
        () => context.commit('TOGGLE_SIGNIN_FAIL_PRESENT', false),
        4000
      );
    } finally {
      context.commit('TOGGLE_PW_LOADING', false);
    }
  },

  togglePwSuccessPresent(context, to) {
    context.commit('TOGGLE_PW_SUCCESS_PRESENT', to);
  },
};

export default () => ({
  namespaced,
  state,
  getters,
  mutations,
  actions,
});
