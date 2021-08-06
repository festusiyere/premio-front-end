import { PopupService } from '@/services';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    popups: null,
  },
  getters: {
    getLoadingStatus(state) {
      return state.isLoading;
    },
    getPopups(state) {
      return state.popups;
    },
  },

  mutations: {
    updateLoadingStatus(store, isLoading) {
      store.isLoading = isLoading;
    },

    updateAllPopUs(store, popups) {
      store.popups = popups;
    },
  },

  actions: {
    async getPopups({ commit }) {
      const result = await new PopupService(this._vm).getAllPopups();
      commit('updateAllPopUs', result.data);
    },
  },
};
