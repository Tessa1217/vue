import http from "@/js/http-common";

class BoardService {
  #requestURL = "/board";
  getList(pageNum) {
    return http.get(`${this.#requestURL}/selectBoardList.do`, {
      params: { page: pageNum },
    });
  }
  get(id) {
    return http.get(`${this.#requestURL}/selectBoardDetail.do/${id}`);
  }
  insert(data) {
    return http.post(`${this.#requestURL}/insertBoard.do`, data);
  }
  update(id, data) {
    return http.post(`${this.#requestURL}/updateBoard.do/${id}`, data);
  }
  delete(id) {
    return http.post(`${this.#requestURL}/deleteBoard.do/${id}`);
  }
}

export default new BoardService();
