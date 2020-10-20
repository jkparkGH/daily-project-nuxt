const state = () => ({
  todaysViewList: []
})
const getters = {
  todaysViewList: state => {
    return state.todaysViewList
  }
}
const mutations = {
  setTodaysViewList (state, viewList) {
    todaysViewList = [ ...viewList ]
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
