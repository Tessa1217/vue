import http from "@/js/http-common";

class CommentService {
  #requestURL = "/comment";
  /** 댓글 목록 조회 */
  getList(pageNum) {
    return http.get(`${requestURL}/getCommentList.do`, {
      params: { page: pageNum },
    });
  }
  /** 댓글 등록 */
  insert(data) {
    return http.post(`${requestURL}/insertComment.do`, data);
  }
  /** 댓글 수정 */
  update(id, data) {
    return http.post(`${requestURL}/updateComment.do/${id}`, data);
  }
  /** 댓글 삭제 */
  delete(id) {
    return http.post(`${requestURL}/deleteComment.do/${id}`);
  }
}

export default new CommentService();
