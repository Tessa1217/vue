import http from "@/js/http-common";

class BoardService {
  #requestURL = "/board";
  /** 게시글 목록 조회 */
  getList(pageNum) {
    return http.get(`${this.#requestURL}/selectBoardList.do`, {
      params: { page: pageNum },
    });
  }
  /** 게시글 상세 조회 */
  get(id) {
    return http.get(`${this.#requestURL}/selectBoardDetail.do/${id}`);
  }
  /** 게시글 등록 */
  insert(data) {
    return http.post(`${this.#requestURL}/insertBoard.do`, data);
  }
  /** 게시글 수정 */
  update(id, data) {
    return http.post(`${this.#requestURL}/updateBoard.do/${id}`, data);
  }
  /** 게시글 삭제 */
  delete(id) {
    return http.post(`${this.#requestURL}/deleteBoard.do/${id}`);
  }
}

export default new BoardService();
