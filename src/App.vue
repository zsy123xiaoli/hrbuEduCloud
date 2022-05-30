<template>
  <div id="app">
    <!-- <MyLogin/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import MyLogin from "./views/MyLogin.vue";

export default {
  name: "App",
  components: {
    // MyLogin,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
</style>
