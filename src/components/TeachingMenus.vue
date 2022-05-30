<template>
  <div class="teachingmenus">
    <h2>·教学管理</h2>
    <ul>
      <li>课程发布</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TeachingMenus",
};
</script>

<style lang="less" scoped>
.teachingmenus {
  height: (100vh-60px);
  box-shadow: #ebecee 3px 3px 3px;
  background-color: #fff;
  h2 {
    width: 190px;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
    color: #262c32;
    padding-left: 10px;
  }
  ul {
    width: 200px;
    border-top: 2px solid #e7e8ea;
    li {
      color: #262c32;
      line-height: 50px;
      padding-left: 20px;
    }
  }
}
</style>