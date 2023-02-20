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
          <td>{{ index + 1 + page * pageSize }}</td>
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
export default {
  name: "BoardList",
  data() {
    return {
      boardList: [],
      totalPage: 0,
      pageSize: 10,
      page: 0,
    };
  },
  beforeMount() {
    this.getBoardList(this.page);
  },
  methods: {
    // 추후 부모 컴포넌트로 빼서 공용으로 사용예정
    formatDate: function (date) {
      if (date) {
        return date.substring(0, 10);
      }
    },
    getBoardList: function (pageNum) {
      this.axios
        .get("/board/selectBoardList.do", { params: { page: pageNum } })
        .then((response) => {
          console.log(response);
          this.boardList = response.data.boardList;
          this.totalPage = response.data.totalPage;
          this.pageSize = response.data.pageSize;
          this.page = response.data.pageNumber;
        });
    },
  },
};
</script>

<style></style>
