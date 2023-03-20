/** 게시글 등록 및 수정 */
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
          @click="insertBoard"
        >
          등록
        </button>
        <button
          v-if="this.id"
          class="btn btn-success"
          type="button"
          @click="updateBoard"
        >
          수정
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import BoardService from "@/services/board/BoardService";
export default {
  name: "BoardWrite",
  created() {
    /** 수정일 경우 게시물 정보 조회 */
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      BoardService.get(this.id).then((response) => {
        this.board = response.data;
      });
    }
  },
  data() {
    return {
      board: {},
      id: 0,
      pageTitle: this.id ? "게시글 수정" : "게시글 등록",
    };
  },
  methods: {
    insertBoard: function () {
      /** 게시글 등록 */
      BoardService.insert(this.board).then((response) => {
        this.$swal({
          icon: "success",
          title: "게시글 등록이 완료되었습니다.",
          showConfirmButton: false,
          timer: 500,
        }).then((result) => {
          if (result.isDismissed) {
            this.moveToDetailPage(response.data);
          }
        });
      });
    },
    updateBoard: function () {
      /** 게시물 수정 */
      BoardService.update(this.id, this.board).then((response) => {
        this.moveToDetailPage(response.data);
      });
    },
    moveToDetailPage(id) {
      /** 상세 페이지로 이동 */
      this.$router.push({
        name: "BoardDetail",
        params: { id: id },
      });
    },
  },
  watch: {},
};
</script>

<style></style>
