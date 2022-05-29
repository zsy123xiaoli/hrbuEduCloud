<template>
  <div class="slidemenus">
      <h2>·教务管理</h2>
      <ul>
        <li>学生管理*</li>
        <router-link to="/AdmMenus/Teamanage" tag="li">教师管理*</router-link>
        <li>班级管理*</li>
      </ul>
    </div>
</template>

<script>
export default {
name:"EduslideMenus",
}
</script>

<style lang="less" scoped>
.slidemenus {
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
      }
    }
  }
</style>