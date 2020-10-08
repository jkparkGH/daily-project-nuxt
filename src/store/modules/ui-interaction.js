const state = () => ({
  showLoginModal: false,
  typeLoginModal: "login" // login or signup
});

const getters = {
  showLoginModal: state => {
    return state.showLoginModal;
  },
  typeLoginModal: state => {
    return state.typeLoginModal;
  }
};

const mutations = {
  toggleShowLoginModal(state, boolean) {
    state.showLoginModal = boolean;
  },
  changeStateLoginModal(state, typeString) {
    state.typeLoginModal = typeString;
  }
};

const actions = {
  TOGGLE_LOGIN_MODAL({ commit }, boolean) {
    commit("toggleShowLoginModal", boolean);
  },
  CHANGE_STATE_LOGIN_MODAL({ commit }, typeString) {
    commit("changeStateLoginModal", typeString);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
