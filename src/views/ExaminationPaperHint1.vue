<template>
    <div class="hint">
      <div class="hint-img">
        <img src="../assets/hint.png" alt="" />
      </div>
      <span>试卷名称、试卷分类、试卷类型、试卷简介为必填项，正确填写后点击右侧“保存&下一步”进行组卷；</span>
      <el-row>
        <el-button size="medium" disabled>保存&下一步</el-button>
      </el-row>
    </div>
</template>

<script>
export default {
  name: "ExaminationPaperHint1",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
 .hint {
    width: 940px;
    height: 34px;
    line-height: 34px;
    padding: 20px;
    background-color: #fff;
    border-radius: 3px;
    .hint-img {
      display: inline;
      margin: 0 10px 0 3px;
      img {
        position: relative;
        top: 3px;
      }
    }
    span {
      font-size: 14px;
      color: #666666;
      text-align: left;
      line-height: 20px;
    }
    .el-row {
      display: inline-block;
      margin-left: 120px;
      .el-button {
        font-size: 14px;
        color: #999;
        border: 1px solid #d0d0d0;
      }
    }
  }
</style>