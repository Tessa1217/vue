<template>
  <div>
    <page-title-component :title="pagetitle" />
  </div>
  <div class="login-container">
    <div class="login-form">
      <div class="form-group">
        <label for="id">아이디</label>
        <input
          id="id"
          type="text"
          class="form-control"
          placeholder="아이디를 입력하세요"
          v-model="user.name"
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
        <button
          type="button"
          class="btn btn-secondary"
          @click="$router.push({ name: 'SignUpComponent' })"
        >
          회원가입
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitleComponent from "./PageTitleComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "LoginComponent",
  data() {
    return {
      pagetitle: "로그인",
      user: {
        name: "",
        password: "",
      },
    };
  },
  components: {
    PageTitleComponent,
  },
  methods: {
    ...mapActions({ setUserToken: "UserStore/setToken" }),
    actionLogin: function () {
      const url = "/users/login.do";
      this.axios({
        method: "post",
        url: url,
        data: this.user,
      }).then((response) => {
        if (response.status === 200) {
          console.log(response.data.token);
          this.setUserToken(response.data.token);
          this.$router.push({ name: "MainHome" });
        }
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 30px;
  border: 2px solid #94b49f;
}

.login-form {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  background: linear-gradient(132deg, #c5e6d0 0%, #94b49f 33%, #3c6255 66%);
  background-size: 400% 400%;
  padding: 30px;
  border-radius: 10px;
  animation: backgroundAnimation 20s ease infinite;
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: white;
}

.form-group input {
  border: none;
}
</style>
