<template>
  <div class="login-container">
    <form class="login-form">
      <h2 class="text-center my-4">Login</h2>
      <div class="form-group">
        <label for="id">아이디</label>
        <input
          id="id"
          type="text"
          class="form-control"
          placeholder="아이디를 입력하세요"
          v-model="user.id"
        />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="비밀번호를 입력하세요"
          v-model="user.password"
        />
      </div>
      <div class="form-group text-center p-3">
        <button type="button" class="btn btn-success mx-2" @click="actionLogin">
          로그인
        </button>
        <button type="button" class="btn btn-secondary">회원가입</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    actionLogin: function () {
      alert(this.user.id);
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 200px;
  height: 100vh;
}

.login-form {
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  background-color: gray;
  padding: 30px;
  border-radius: 10px;
}
.form-group {
  margin-bottom: 10px;
}
</style>
