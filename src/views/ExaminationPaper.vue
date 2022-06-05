<template>
  <div class="examinationpaper">
    <div class="test">
      <div class="test-main">
        <h2>Web前端基础知识测评1</h2>
        <div class="testinfo">
          <b>已发布</b>
          <span class="spantime">发布时间:2018-11-01 12:00</span>
          <span>创建人:张三罗</span>
          <i>考试</i>
          <span>总分:100分</span>
          <span>题目:10题</span>
        </div>
        <div class="operate">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExaminationPaper",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.examinationpaper {
  .test {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 980px;
    height: 420px;
    margin-top: 20px;
    .test-main {
      padding: 25px 25px 15px;
      width: 425px;
      height: 160px;
      border-left: 5px solid #2b96e5;
      background-color: #fff;
      h2 {
        font-family: "微软雅黑";
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        color: #2b96e5;
      }
      .testinfo {
        margin-top: 16px;
      }
      b {
        display: inline-block;
        font-family: "微软雅黑";
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #ffffff;
        background-color: #262c32;
        text-align: center;
        width: 44px;
        height: 20px;
        line-height: 20px;
        margin-right: 20px;
      }
      i {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin-right: 40px;
        font-style: normal;
        font-size: 14px;
        color: #999;
      }
      span {
        margin: 0 10px;
        font-size: 12px;
        color: #999999;
      }
      .spantime {
        display: inline-block;
        margin-right: 50px;
        margin-left: 0;
      }
      .operate {
        margin-top: 50px;
        .el-button {
          font-size: 12px;
          color: #2b96e5;
          background-color: #eef6fc;
          border: none;
        }
        .el-button:hover {
          background-color: #2b96e5;
          color: #fff;
        }
      }
    }
  }
}
</style>