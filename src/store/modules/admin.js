const namespaced = true;

const state = () => ({
  doctors: [],
  sponsors: [],
});

const mutations = {
  SET_DOCTORS(state, doctorList) {
    state.doctors = doctorList;
  },
  SET_SPONSORS(state, sponsorList) {
    state.sponsors = sponsorList;
  },
};

const getters = {
  doctors: (state) => state.doctors,
  sponsors: (state) => state.sponsors,
};

const actions = {
  async getDoctors(context) {
    try {
      const response = await this.$api.signUpService.getDoctors();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },

  async getSponsors(context) {
    try {
      const response = await this.$api.signUpService.getSponsors();
      console.log(response);
    } catch (error) {
      console.log(error);
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
