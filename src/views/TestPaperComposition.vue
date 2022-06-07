<template>
  <div class="setcourse">
    <el-button type="primary" @click="com()">自由组卷</el-button>
  </div>
</template>

<script>
export default {
  name: "TestPaperComposition",

  data() {
    return {};
  },

  mounted() {},

  methods: {
      com(){
          
      }
  },
};
</script>

<style lang="less" scoped>
.setcourse {
  width: 980px;
  height: 312px;
      line-height: 312px;
    text-align: center;
    .el-button{
        width: 140px;
    }
}
</style>