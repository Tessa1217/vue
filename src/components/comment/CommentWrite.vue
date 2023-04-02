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
      <button class="btn btn-success">댓글등록</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentWrite",
  data() {
    return {
      comment: {
        content: "",
      },
    };
  },
};
</script>

<style>
.comment-write-wrapper {
  border: 2px solid #94b49f;
  padding: 30px;
}
</style>
