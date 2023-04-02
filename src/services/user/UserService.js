import http from "@/js/http-common";

class UserService {
  #requestURL = "/users";
  /** 로그인 */
  login(data) {
    return http.post(`${this.#requestURL}/login.do`, data);
  }
  /** 회원가입 */
  signUp(data) {
    return http.post(`${this.#requestURL}/signUp.do`, data);
  }
}

export default new UserService();
