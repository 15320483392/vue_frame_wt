const state = {
  token: false,
  user: false
};

const getters = {
  getLoading: state => state.token
};

const mutations = {
  LOADING: (state, data) => {
    state.token = data;
    if (data === false) {
      sessionStorage.clear()
    }
  }
}
export default {state, getters, mutations}
