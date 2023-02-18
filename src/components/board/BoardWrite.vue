<template>
  <h1 class="main-title" v-if="!this.id">게시글 등록</h1>
  <h1 class="main-title" v-if="this.id">게시글 수정</h1>
  <div class="board-write container">
    <form id="writeForm">
      <div class="form-group">
        <label for="title">제목</label>
        <input
          type="text"
          class="form-control"
          name="title"
          id="title"
          v-model="this.board.title"
          placeholder="제목을 입력하세요."
        />
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea
          id="content"
          name="content"
          class="form-control"
          rows="12"
          v-model="this.board.content"
          placeholder="내용을 입력하세요."
        ></textarea>
      </div>
      <div class="form-group button-box">
        <button
          class="btn btn-secondary"
          type="button"
          @click="this.$router.push({ name: 'BoardList' })"
        >
          목록
        </button>
        <button
          v-if="!this.id"
          class="btn btn-success"
          type="button"
          @click="save"
        >
          등록
        </button>
        <button
          v-if="this.id"
          class="btn btn-success"
          type="button"
          @click="update"
        >
          수정
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BoardWrite",
  beforeMount() {
    // 수정일 경우 게시물 정보 조회
    if (this.id) {
      const url = "/board/selectBoard.do";
      const data = {
        id: this.id,
      };
      this.axios.get(url, { params: data }).then((response) => {
        this.board = response.data;
      });
    }
  },
  data() {
    return {
      board: {
        title: "",
        content: "",
        viewCnt: 0,
        delYn: "N",
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    save: function () {
      // 게시글 등록
      const url = "/board/insertBoard.do";
      this.requestFnc(url);
    },
    update: function () {
      // 게시물 수정
      const url = "/board/updateBoard.do/" + this.id;
      this.requestFnc(url);
    },
    requestFnc: function (url) {
      // axios post 요청 실행 함수
      this.axios({
        method: "post",
        url: url,
        data: this.board,
      })
        .then((response) => {
          this.$router.push({
            name: "BoardDetail",
            params: { id: response.data },
          });
        })
        .catch((error) => {
          console.log(error);
          alert("오류가 발생했습니다.");
        });
    },
  },
  watch: {},
};
</script>

<style></style>
