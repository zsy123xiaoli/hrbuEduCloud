<template>
  <div class="SingleChoice">
      <RepositoryMenus></RepositoryMenus>
    <div class="singlechoice">
      <div class="top">
        <span class="i"></span><span class="title">基础信息</span>
        <el-row>
          <el-button plain @click="KnowledgePoint">选择知识点</el-button>
        </el-row>
      </div>
      <div class="primary">
        <span class="i"></span><span class="title">题干</span>
        <Tinymce ></Tinymce>
    </div>
  </div>
  </div>

</template>

<script>
import RepositoryMenus from "../components/RepositoryMenus";
import Tinymce from "../components/Tinymce";


export default {
  methods:{
    KnowledgePoint(){

    }
  },
components: {
    RepositoryMenus,
    Tinymce
  },
}
</script>

<style lang="less" scoped>
.SingleChoice {
  display: flex;
  background-color: #f3f5f7;
  .singlechoice {
    // margin-left: 20px;
    width: 998px;
    margin: 0 auto;
    .top {
      height: 250px;
      background-color: #fff;
      border-radius: 5px;
      .i {
        height: 50px;
        width: 5px;
        border-right: solid 5px rgba(43, 150, 229, 1);
        margin: 0 15px 0 30px;
      }
      .title {
        color: #262c32;
        font-size: 18px;
        line-height: 56px;
        margin-right: 20px;
        font-weight: 700;
      }
      .el-button{
        margin:0 0 0 50px;
      }
    }
    .primary {
      margin-top: 25px;
      border-radius: 5px;
      background-color: #fff;

      .i {
        height: 50px;
        width: 5px;
        border-right: solid 5px rgba(43, 150, 229, 1);
        margin: 0 15px 0 30px;
      }
      .title {
        color: #262c32;
        font-size: 18px;
        line-height: 56px;
        margin-right: 20px;
        font-weight: 700;
      }
      /deep/ .tox-tinymce{
        margin: 0 auto;
      }
    }
  }
}
</style>