/** 게시글 목록 조회 */
<template>
  <h1 class="main-title">게시글 목록 조회</h1>
  <div id="container-fluid">
    <div class="text-end">
      <button
        class="btn btn-success mb-2"
        type="button"
        @click="$router.push({ name: 'BoardInsert' })"
      >
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />글쓰기
      </button>
    </div>
    <table class="table table-hover text-center table-responsive">
      <caption>
        게시판 게시물 목록에 대한 테이블입니다.
      </caption>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 60%" />
        <col style="width: 15%" />
        <col style="width: 15%" />
      </colgroup>
      <thead class="thead-green">
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">조회수</th>
          <th scope="col">등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, index) in boardList" :key="index">
          <td>{{ firstBoardNum - index }}</td>
          <td class="text-start">
            <router-link
              :to="{ name: 'BoardDetail', params: { id: board.id } }"
              >{{ board.title }}</router-link
            >
          </td>
          <td>{{ board.viewCnt }}</td>
          <td>{{ formatDate(board.regDate) }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-for="num in (page, totalPage)" :key="num">
          <a class="page-link" href="#" @click="getBoardList(num - 1)">{{
            num
          }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import BoardService from "@/services/board/BoardService";
export default {
  name: "BoardList",
  data() {
    return {
      boardList: [],
      totalPage: 0,
      pageSize: 10,
      page: 0,
      totalCnt: 0,
    };
  },
  beforeMount() {
    /** 마운트 전에 게시글 목록 조회 */
    this.getBoardList(this.page);
  },
  computed: {
    // 게시판 가장 상위 게시물 번호
    firstBoardNum: function () {
      // 전체 게시물 수 - 페이지 인덱스 * 페이지 사이즈
      return this.totalCnt - this.page * this.pageSize;
    },
  },
  methods: {
    // 추후 부모 컴포넌트로 빼서 공용으로 사용예정
    formatDate: function (date) {
      if (date) {
        return date.substring(0, 10);
      }
    },
    // 게시글 목록 조회
    getBoardList: function (pageNum) {
      BoardService.getList(pageNum).then((response) => {
        const data = response.data;
        this.boardList = data.boardList;
        this.totalPage = data.totalPage;
        this.pageSize = data.pageSize;
        this.page = data.pageNumber;
        this.totalCnt = data.totalCnt;
      });
    },
  },
};
</script>

<style></style>
