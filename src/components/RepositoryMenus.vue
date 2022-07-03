<template>
  <div class="RepositoryMenus">
    <h2>·资源库</h2>
    <ul>
     

      <router-link to="/AdmMenus/CoursewareLibrary" tag="li">课件库</router-link>
      <router-link to="/AdmMenus/ItemLibrary" tag="li">试题库</router-link> 
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