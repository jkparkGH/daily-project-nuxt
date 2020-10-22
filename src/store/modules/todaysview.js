const state = () => ({
  initTodaysViewList: false,
  todaysViewList: []
});
const getters = {
  todaysViewList: state => {
    return state.todaysViewList;
  }
};
const mutations = {
  initTodaysViewList(state, vm) {
    if (!state.initTodaysViewList && vm.$cookies.isKey('beautyHouseTodaysView')) {
      state.initTodaysViewList = true;
      state.todaysViewList = [...vm.$cookies.get('beautyHouseTodaysView')];
    }
  },
  setTodaysViewList(state, todaysView) {
    if (!state.todaysViewList.some(data => data.uid === todaysView.uid)) {
      state.todaysViewList.push({ uid: todaysView.uid, images: todaysView.images });
    }
  },
  setTodaysViewListCookie(state, { vm }) {
    vm.$cookies.set('beautyHouseTodaysView', JSON.stringify(state.todaysViewList), 1);
  }
};
const actions = {
  INIT_TODAYS_VIEW_LIST({ commit }, vm) {
    commit('initTodaysViewList', vm);
  },
  ADD_TODAYS_VIEW_LIST({ commit }, todaysView) {
    commit('setTodaysViewList', todaysView);
  },
  ADD_TODAYS_VIEW_LIST_COOKIE({ commit }, data) {
    commit('setTodaysViewListCookie', data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
