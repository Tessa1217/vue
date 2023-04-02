<template>
  <header-nav />
  <div class="body-container">
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/base/HeaderNav.vue";
export default {
  name: "App",
  data() {
    return {
      title: "",
    };
  },
  components: {
    HeaderNav,
  },
};
</script>

<style>
.body-container {
  padding: 30px;
}
.link-active {
  color: white;
  text-decoration: underline;
}
svg {
  margin-right: 3px;
}
.navbar {
  background-color: #3c6255;
}
.navbar-nav {
  padding-left: 10px;
}
.nav-item {
  margin-right: 15px;
}
.nav-item a {
  text-decoration: none;
  color: #eeee;
  font-size: 1.5rem;
}
.nav-item a:hover {
  font-weight: bold;
}
.main-title {
  padding: 10px 0px 10px 10px;
  background-color: #94b49f;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 15px;
}
.table a {
  color: black;
  text-decoration: none;
}
.table a:hover {
  text-decoration: underline;
  font-weight: bold;
  color: black;
}
.table .thead-green {
  background-color: #61876e;
  color: white;
  border: none;
}
.content-wrapper {
  border: 2px solid #94b49f;
  padding: 30px;
}
.board-write {
  border: 2px solid #61876e;
  border-radius: 10px;
  padding: 20px;
}
.board-write label {
  font-weight: bold;
  color: #3c6255;
  margin-bottom: 2px;
}
.board-write .form-group {
  margin-bottom: 10px;
}
.board-title {
  padding: 10px 5px;
  border-top: 3px solid #61876e;
  border-bottom: 3px solid #61876e;
}
.board-info {
  text-align: right;
  padding: 5px;
}
.board-info span {
  margin-right: 10px;
}
.content {
  min-height: 400px;
  word-break: break-all;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #61876e;
  margin: 15px 0px;
}
.button-box {
  padding: 10px;
  text-align: center;
}
.button-box .btn {
  margin: 5px;
}
</style>
