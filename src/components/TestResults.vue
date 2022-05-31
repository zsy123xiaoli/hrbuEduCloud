<template>
  <div class="testresults">
    <h2>·考试测评</h2>
    <ul>
      <router-link to="/AdmMenus/measurementmanagement" tag="li"
        >考试管理</router-link
      >
      <router-link to="" tag="li">测评管理</router-link>
      <router-link to="" tag="li">成绩与批改</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TestResults",
};
</script>

<style lang="less" scoped>
.testresults {
  // height: (100vh-60px);
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
    // background-color: #fff;
    li {
      color: #262c32;
      line-height: 50px;
      height: 50px;
      padding-left: 20px;
      cursor: pointer;
      border-left: 5px solid #eef6fc;
    }
    li:hover {
      background-color: #eef6fc;
      color: #42a2eb;
      text-decoration: underline;
    }
  }
}
</style>