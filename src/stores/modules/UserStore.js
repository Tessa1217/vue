import axios from "@/js/http-common";
const userStore = {
  namespaced: true,
  state: {
    token: "",
    loggedIn: false,
    userName: "",
  },
  mutations: {
    setUserToken(state, userInfo) {
      // 로그인 시 vuex에 토큰 값 저장 + 로그인 여부 체크
      state.token = userInfo.token;
      state.loggedIn = true;
      state.userName = userInfo.userName;
    },
    setTokenHeaders(state) {
      // request header에 토큰 값 세팅
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = state.token;
        return config;
      });
    },
    removeUserInfo(state) {
      // 로그아웃 시 토큰 값 초기화 + 로그인 여부 비활성화
      state.token = "";
      state.userName = "";
      state.loggedIn = false;
    },
  },
  actions: {
    setUserInfo: ({ commit }, userInfo) => {
      commit("setUserToken", userInfo);
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
    getUserName: (state) => {
      return state.userName;
    },
  },
};

export default userStore;
