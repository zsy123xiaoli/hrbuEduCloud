<template>
  <div class="RepositoryMenus">
    <h2>·资源库</h2>
    <ul>
      <li>课件库</li>
      <li>试题库</li>

      <!-- <router-link to="/AdmMenus/Teamanage" tag="li">教师管理*</router-link>
      <router-link to="/AdmMenus/Clamanage" tag="li">班级管理*</router-link> -->
    </ul>
  </div>
</template>

<script>

export default {
name:"RepositoryMenus",
}



</script>

<style lang="less" scoped>
.RepositoryMenus {
  height: 100vh;
  h2 {
    width: 190px;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
    color: #262c32;
    padding-left: 10px;
    background-color: #fff;
  }
  ul {
    border-top: 2px solid #e8e9eb;
    background-color: #fff;
    width: 200px;
    li {
      color: #262c32;
      line-height: 50px;
      padding-left: 20px;
      cursor: pointer;
    }
  }
}
</style>