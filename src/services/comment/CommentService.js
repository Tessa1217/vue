import http from "@/js/http-common";

class CommentService {
  #requestURL = "/comment";
  getList() {
    return http.get(`${requestURL}/getCommentList.do`);
  }
  insert() {
    return http.post(`${requestURL}/insertComment.do`);
  }
  update() {
    return http.post(`${requestURL}/updateComment.do`);
  }
  delete() {
    return http.post(`${requestURL}/deleteComment.do`);
  }
}

export default new CommentService();
