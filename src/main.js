import * as Vue from "vue";
import App from "./App.vue";
import router from "./js/router.js";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue3-cookies";
import store from "./stores/store.js";
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
import VueSimpleAlert from "vue3-simple-alert";
library.add(faPenToSquare, faHouse, faBars, faUser);
const app = Vue.createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app
  .use(VueCookies)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .use(VueSimpleAlert);
app.mount("#app");
