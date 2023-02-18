<template>
  <h1 class="main-title">게시글 상세조회</h1>
  <div class="board-view container">
    <div class="row">
      <h3 class="board-title">{{ board.title }}</h3>
    </div>
    <div class="row">
      <div class="board-info">
        <span class="writer">작성자: </span>
        <span class="cnt">조회수: {{ board.viewCnt }}</span>
        <span class="date">등록일: {{ formatDate(board.regDate) }}</span>
      </div>
    </div>
    <div class="row">
      <div class="content" v-html="replaceBreakLine(board.content)"></div>
    </div>
    <div class="button-box">
      <button
        class="btn btn-secondary"
        type="button"
        @click="this.$router.push({ name: 'BoardList' })"
      >
        목록
      </button>
      <button
        class="btn btn-success"
        type="button"
        @click="
          this.$router.push({ name: 'BoardUpdate', params: { id: this.id } })
        "
      >
        수정
      </button>
      <button class="btn btn-danger" type="button" @click="deleteBoard">
        삭제
      </button>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    const url = "/board/selectBoardDetail.do";
    const data = {
      id: this.id,
    };
    this.axios.get(url, { params: data }).then((response) => {
      this.board = response.data;
    });
  },
  data() {
    return {
      board: {},
      id: this.$route.params.id,
    };
  },
  methods: {
    replaceBreakLine: function (content) {
      if (content) {
        return content.replaceAll("\n", "<br/>");
      }
    },
    deleteBoard: function () {
      const url = "/board/deleteBoard.do/" + this.id;
      this.axios({
        method: "post",
        url: url,
      }).then((response) => {
        if (response.data === "success") {
          this.$router.push({ name: "BoardList" });
        }
      });
    },
    formatDate: function (date) {
      if (date) {
        return date.substring(0, 10);
      }
    },
  },
};
</script>

<style></style>
