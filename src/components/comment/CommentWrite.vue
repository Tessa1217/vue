<template>
  <div>
    <textarea
      class="form-control"
      rows="5"
      v-model="comment.content"
    ></textarea>
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

<style></style>
