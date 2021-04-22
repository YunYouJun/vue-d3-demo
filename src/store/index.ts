import { createStore, createLogger } from "vuex";
import form from "./modules/form";
const debug = false;

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    form,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
