import Vue from 'vue';
import Vuex from 'vuex';

import title from './title';
import global from './global';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    title,
  },
});
