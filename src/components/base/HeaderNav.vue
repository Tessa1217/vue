<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand">VJProject</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><font-awesome-icon icon="fa-solid fa-bars"
        /></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'MainHome' }"
              ><font-awesome-icon icon="fa-solid fa-house" /> HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'BoardList' }">게시판</router-link>
          </li>
        </ul>
        <ul class="navbar-nav flew-row flew-wrap ms-md-auto">
          <li v-if="!loginState" class="nav-item">
            <router-link :to="{ name: 'LoginComponent' }"
              ><font-awesome-icon icon="fa-solid fa-user" /> Login</router-link
            >
          </li>
          <li v-else-if="loginState" class="nav-item">
            <a href="javascript:void(0);" @click="logOut">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HeaderNav",
  computed: {
    ...mapGetters({ loginState: "UserStore/isLoggedIn" }),
  },
  methods: {
    ...mapActions({ removeToken: "UserStore/removeToken" }),
    logOut: function () {
      this.removeToken();
      this.$router.push({ name: "LoginComponent" });
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}
.nav-item a {
  font-size: 1.2rem;
  color: white;
}
.nav-item a:hover {
  font-weight: bold;
}
svg.fa-bars {
  color: white;
  width: 100%;
  height: 100%;
}
</style>
