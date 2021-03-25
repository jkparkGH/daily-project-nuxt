const state = () => ({
  initTodaysViewList: false,
  todaysViewList: [],
});
const getters = {
  todaysViewList: (state) => {
    return state.todaysViewList;
  },
};
const mutations = {
  initTodaysViewList(state, vm) {
    if (
      !state.initTodaysViewList &&
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('beautyHouseTodaysView')
    ) {
      state.initTodaysViewList = true;
      state.todaysViewList = [...JSON.parse(localStorage.getItem('beautyHouseTodaysView'))];
      console.log('## initTodaysViewList.todaysViewList ##', state.todaysViewList);
      console.log('# cookies test #', vm.$cookies.get('beautyHouseTodaysView'));
    }
  },
  setTodaysViewList(state, todaysView) {
    if (!state.todaysViewList.some((data) => data.uid === todaysView.uid)) {
      state.todaysViewList.push({ uid: todaysView.uid, images: todaysView.images });
    }
  },
  setTodaysViewListStorage(state, { vm }) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('beautyHouseTodaysView', JSON.stringify(state.todaysViewList));
    }
    vm.$cookies?.set('beautyHouseTodaysView', JSON.stringify(state.todaysViewList));
  },
};
const actions = {
  INIT_TODAYS_VIEW_LIST({ commit }, vm) {
    commit('initTodaysViewList', vm);
  },
  ADD_TODAYS_VIEW_LIST({ commit }, todaysView) {
    commit('setTodaysViewList', todaysView);
  },
  ADD_TODAYS_VIEW_LIST_STORAGE({ commit }, data) {
    commit('setTodaysViewListStorage', data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
