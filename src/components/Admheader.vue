<template>
  <div class="Admindex">
    <div class="header">
      <img src="../assets/logo_min.png">
      <h2>大唐ITC云端实验室</h2>
      <ul class="hea-list">
        <li>首页</li>
        <li>系统管理</li>
        <router-link to="/AdmMenus/StuManage" tag="li">教务管理</router-link>
        <li>资源库</li>
        <li>教研管理</li>
        <li>教学管理</li>
        <li>考试测评</li>
      </ul>
      <ul class="hea-footer">
        <li>管理员</li>
        <li>|</li>
        <li>帮助</li>
        <li>|</li>
        <li>退出</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

    name:"Admindex"

}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  align-items: center;
  background-color:rgb(53, 55, 58,1);
  height: 60px;
  img{
    margin-left: 20px;
  }
  h2{
    color: #fff;
    font-size: 18px;
    margin-left:20px;
  }
  .hea-list{
    margin-left:50px;
    display: flex;
    flex-grow: 1;
    li{
      margin: 0 13px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .hea-footer{
    display: flex;
    margin-right: 20px;
    li{
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      margin: 0 4px;
    }
  }
}
</style>