const state = () => ({
  todaysViewList: []
});
const getters = {
  todaysViewList: state => {
    return state.todaysViewList;
  }
};
const mutations = {
  setTodaysViewList(state, todaysView) {
    if (!state.todaysViewList.some(data => data.uid === todaysView.uid)) {
      state.todaysViewList.push(todaysView);
    }
  }
};
const actions = {
  ADD_TODAYS_VIEW_LIST({ commit }, todaysView) {
    commit('setTodaysViewList', todaysView);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
