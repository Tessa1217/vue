import axios from "axios";
const userStore = {
  namespaced: true,
  state: {
    token: "",
    loggedIn: false,
  },
  mutations: {
    setUserInfo(state, token) {
      // 로그인 시 vuex에 토큰 값 저장 + 로그인 여부 체크
      state.token = token;
      state.loggedIn = true;
    },
    setTokenHeaders(state) {
      // request header에 토큰 값 세팅
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + state.token;
        return config;
      });
    },
    removeUserInfo(state) {
      // 로그아웃 시 토큰 값 초기화 + 로그인 여부 비활성화
      state.token = "";
      state.loggedIn = false;
    },
  },
  actions: {
    setToken: ({ commit }, token) => {
      commit("setUserInfo", token);
    },
    setHeaders: ({ commit }) => {
      commit("setTokenHeaders");
    },
    removeToken: ({ commit }) => {
      commit("removeUserInfo");
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return state.loggedIn;
    },
    getToken: (state) => {
      return state.token;
    },
  },
};

export default userStore;
