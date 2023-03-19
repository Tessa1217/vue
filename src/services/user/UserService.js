import http from "@/js/http-common";

class UserService {
  #requestURL = "/users";
  login(data) {
    return http.post(`${this.#requestURL}/login.do`, data);
  }
  signUp(data) {
    return http.post(`${this.#requestURL}/signUp.do`, data);
  }
}

export default new UserService();
