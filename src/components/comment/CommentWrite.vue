<template>
  <div class="comment-write-wrapper">
    <label for="commentContent">댓글 쓰기</label>
    <textarea
      class="form-control"
      rows="5"
      id="commentContent"
      v-model="comment.content"
    ></textarea>
    <div class="button-box">
      <button class="btn btn-success" @click="insertComment">댓글등록</button>
    </div>
  </div>
</template>

<script>
import CommentService from "@/services/comment/CommentService";
export default {
  name: "CommentWrite",
  props: {
    board: Object,
  },
  data() {
    return {
      comment: {
        content: "",
      },
    };
  },
  methods: {
    insertComment() {
      const data = this.comment;
      data.board = this.board;
      CommentService.insert(data).then((response) => {
        if (response.result === "success") {
          console.log("success");
        }
      });
    },
  },
};
</script>

<style>
.comment-write-wrapper {
  border: 2px solid #94b49f;
  padding: 30px;
}
</style>
