const namespaced = true;

const state = () => ({
  doctors: [],
  sponsors: [],
  isLoadingUserData: false,
});

const mutations = {
  SET_DOCTORS(state, doctorList) {
    state.doctors = doctorList;
  },
  SET_SPONSORS(state, sponsorList) {
    state.sponsors = sponsorList;
  },
  TOGGLE_LOADING_USER_DATA(state, to) {
    state.isLoadingUserData = to;
  },
};

const getters = {
  doctors: (state) => state.doctors,
  sponsors: (state) => state.sponsors,
  isLoadingUserData: (stata) => state.isLoadingUserData,
};

const actions = {
  async getUserData(context) {
    context.commit('TOGGLE_LOADING_USER_DATA', true);
    try {
      const doctors = await this.$api.signUpService.getDoctors();
      context.commit('SET_DOCTORS', doctors.data);

      const sponsors = await this.$api.signUpService.getSponsors();
      context.commit('SET_SPONSORS', sponsors.data);
    } catch (error) {
      console.log(error);
    } finally {
      context.commit('TOGGLE_LOADING_USER_DATA', false);
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
