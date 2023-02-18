<template>
  <nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'MainHome' }"
            ><font-awesome-icon icon="fa-solid fa-house" />HOME</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'BoardList' }">게시판</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
