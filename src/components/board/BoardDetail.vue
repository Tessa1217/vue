/** 게시글 상세보기 */
<template>
  <h1 class="main-title">게시글 상세조회</h1>
  <div class="board-view-wrapper content-wrapper">
    <div class="board-view container">
      <div class="row">
        <h3 class="board-title">{{ board.title }}</h3>
      </div>
      <div class="row">
        <div class="board-info">
          <span class="writer">작성자: {{ board.writer }}</span>
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
          v-if="isWriter"
          class="btn btn-success"
          type="button"
          @click="
            this.$router.push({ name: 'BoardUpdate', params: { id: this.id } })
          "
        >
          수정
        </button>
        <button
          v-if="isWriter"
          class="btn btn-danger"
          type="button"
          @click="deleteBoard"
        >
          삭제
        </button>
      </div>
    </div>
  </div>
  <div class="comment-view-wrapper content-wrapper">
    <div class="comment-write-container">
      <comment-write />
    </div>
    <div class="comment-list-container content-wrapper">
      <comment-list />
    </div>
  </div>
</template>

<script>
import BoardService from "@/services/board/BoardService";
import CommentWrite from "@/components/comment/CommentWrite.vue";
import CommentList from "@/components/comment/CommentList.vue";
import { mapGetters } from "vuex";
export default {
  beforeMount() {
    // 게시글 상세조회
    BoardService.get(this.id).then((response) => {
      this.board = response.data;
    });
  },
  components: {
    CommentWrite: CommentWrite,
    CommentList: CommentList,
  },
  data() {
    return {
      board: {},
      id: this.$route.params.id,
    };
  },
  computed: {
    /** 작성자 아이디 조회 */
    ...mapGetters({ writer: "UserStore/getUserName" }),
    isWriter: function () {
      // 현재 로그인 유저가 작성자인지 여부 확인
      return this.writer === this.board.userName;
    },
  },
  methods: {
    /** 줄바꿈 치환 */
    replaceBreakLine: function (content) {
      if (content) {
        return content.replaceAll("\n", "<br/>");
      }
    },
    /** 게시글 삭제 */
    deleteBoard: function () {
      BoardService.delete(this.id).then((response) => {
        if (response.data === "success") {
          this.$router.push({ name: "BoardList" });
        }
      });
    },
    /** 날짜 포맷 변환 */
    formatDate: function (date) {
      if (date) {
        return date.substring(0, 10);
      }
    },
  },
};
</script>

<style>
.comment-write-container,
.comment-list-container {
  margin-top: 20px;
}
</style>
