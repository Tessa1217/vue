<template>
  <div>
    <page-title-component :title="pagetitle" />
    <div class="sign-up-container">
      <div class="col-8">
        <div class="form-group row">
          <label class="col-2 col-form-label" for="name">아이디</label>
          <div class="col-10">
            <input
              class="form-control"
              type="text"
              id="name"
              title="아이디"
              placeholder="아이디를 입력해주세요."
              v-model="user.name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-2 col-form-label" for="password">비밀번호</label>
          <div class="col-10">
            <input
              class="form-control"
              type="password"
              id="password"
              title="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              v-model="user.password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-2 col-form-label" for="nickname">닉네임</label>
          <div class="col-10">
            <input
              class="form-control"
              type="text"
              id="nickname"
              title="닉네임"
              placeholder="닉네임을 입력해주세요."
              v-model="user.nickname"
            />
          </div>
        </div>
        <div class="form-group text-center">
          <button type="button" class="btn btn-success mx-2" @click="signUp">
            회원가입
          </button>
          <button type="button" class="btn btn-secondary" @click="loginPage">
            로그인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitleComponent from "./PageTitleComponent.vue";
export default {
  name: "SignUpComponent",
  components: { PageTitleComponent },
  data() {
    return {
      pagetitle: "회원가입",
      user: {
        name: "",
        password: "",
        nickname: "",
      },
    };
  },
  watch: {
    // id: function (val) {
    //   const idRegex = /^[a-zA-Z0-9]{8,20}$/;
    //   if (idRegex.test(val)) {
    //   }
    // },
    // password: function (val) {
    //   console.log(val);
    // },
    // name: function (val) {
    //   console.log(val);
    // },
  },
  methods: {
    signUp: function () {
      const url = "/users/signUp.do";
      this.axios({
        method: "post",
        url: url,
        data: this.user,
      })
        .then((response) => {
          if (response.data === "success") {
            alert("회원가입이 완료되었습니다.");
            this.loginPage();
          } else if (response.data === "failed") {
            alert("중복된 아이디가 있습니다.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loginPage: function () {
      this.$router.push({
        name: "LoginComponent",
      });
    },
  },
};
</script>

<style scoped>
.sign-up-container {
  padding: 50px 20px;
  border: 2px solid #94b49f;
  display: flex;
  justify-content: center;
}
.form-group {
  margin-bottom: 20px;
  align-content: center;
  justify-content: center;
}
.form-group:last-child {
  margin-bottom: 0px;
}
.form-group label {
  font-weight: bold;
  text-align: center;
}
</style>
