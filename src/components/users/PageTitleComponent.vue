<template>
  <h1 class="main-title">{{ title }}</h1>
</template>

<script>
export default {
  name: "PageTitleComponent",
  props: {
    title: String,
  },
  created() {
    console.log(this.title);
  },
};
</script>

<style></style>
