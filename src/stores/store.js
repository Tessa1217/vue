import { createStore } from "vuex";
import UserStore from "./modules/UserStore.js";

export default createStore({
  modules: {
    UserStore,
  },
});
