import * as Vue from "vue";
import App from "./App.vue";

/** 라우터 */
import router from "./js/router.js";

/** axios library */
import axios from "axios";
import VueAxios from "vue-axios";

/** vuex */
import store from "./stores/store.js";

/** 부트스트랩 & 아이콘(fontawesome) */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faPenToSquare,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPenToSquare, faHouse, faBars, faUser);

/** Simple Alert */
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = Vue.createApp(App);
app
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .use(VueSweetalert2);
app.mount("#app");
