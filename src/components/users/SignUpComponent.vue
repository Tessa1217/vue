<template>
  <div>
    <page-title-component :title="pagetitle" />
    <div class="sign-up-container">
      <div class="col-8">
        <div class="form-group row">
          <label class="col-2 col-form-label" for="id">아이디</label>
          <div class="col-10">
            <input
              class="form-control"
              type="text"
              id="id"
              title="아이디"
              placeholder="아이디를 입력해주세요."
              v-model="id"
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
              v-model="password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-2 col-form-label" for="name">이름</label>
          <div class="col-10">
            <input
              class="form-control"
              type="text"
              id="name"
              title="이름"
              placeholder="이름을 입력해주세요."
              v-model="name"
            />
          </div>
        </div>
        <div class="form-group text-center">
          <button class="btn btn-success mx-2" @click="signUp">회원가입</button>
          <button class="btn btn-secondary" @click="loginPage">로그인</button>
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
      id: "",
      password: "",
      name: "",
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
      const data = {
        id: this.id,
        password: this.password,
        name: this.name,
      };
      this.axios({
        method: "post",
        url: url,
        data: data,
      })
        .then((response) => {
          if (response === "success") {
            this.loginPage();
          }
        })
        .catch((error) => {
          alert(error);
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
</style>
