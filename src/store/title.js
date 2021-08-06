export default {
  namespaced: true,
  state: {
    title: '',
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
  },
  mutations: {
    updateTitle(store, title) {
      store.title = title;
    },
  },
};
