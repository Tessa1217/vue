<template>
  <h1 class="main-title">게시글 목록조회</h1>
  <div id="container-fluid">
    <table class="table table-hover text-center table-responsive">
      <caption>
        게시판 게시물 목록에 대한 테이블입니다.
      </caption>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 40%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
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
          <td>{{ index + 1 }}</td>
          <td class="text-left">
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
    <div class="button-box">
      <button
        class="btn btn-success"
        type="button"
        @click="$router.push({ name: 'BoardInsert' })"
      >
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />글쓰기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  data() {
    return {
      boardList: [],
    };
  },
  beforeMount() {
    this.axios.post("/board/selectBoardList.do").then((response) => {
      this.boardList = response.data;
    });
  },
  methods: {
    // 추후 부모 컴포넌트로 빼서 공용으로 사용예정
    formatDate: function (date) {
      if (date) {
        return date.substring(0, 10);
      }
    },
  },
};
</script>

<style></style>
