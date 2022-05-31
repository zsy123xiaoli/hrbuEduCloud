<template>
  <div class="s2">
    <TeachingMenus />
    <div class="courserelease">
      <p>课程发布</p>
      <div class="content">
        <div class="classification">
          <p>分类</p>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="promulgator">
          <p>发布者</p>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>类型</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>来源</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>关键词</span>
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
          <el-row>
            <el-button type="primary">查询</el-button>
          </el-row>
        </div>
      </div>

      <Course ref="Course"></Course>
      <Paginaion ref="Paginaion"></Paginaion>
    </div>
  </div>
</template>

<script>
import TeachingMenus from "../components/TeachingMenus";
import Paginaion from "./Paginaion";
import Course from "./Course";
export default {
  name: "CourseRelease",
  components: { TeachingMenus, Paginaion, Course },

  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value: "",
      input: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.s2 {
  display: flex;
  justify-content: center;
  background-color: #f3f5f7;
  .courserelease {
    margin-left: 20px;
    p {
      line-height: 56px;
      color: #7a7f85;
    }
    .content {
      width: 980px;
      // height: 145px;
      background-color: #fff;
      border-radius: 6px;
      display: flex;
      flex-wrap: wrap;
      p {
        width: 60px;
        height: 34px;
        line-height: 34px;
        text-align: right;
        margin: 0 20px;
      }
      .classification {
        display: flex;
        height: 34px;
        margin: 20px 0 13px;

        .el-select {
          width: 196px;
          height: 34px;
          margin-right: 10px;
        }
      }
      .promulgator {
        display: flex;
        height: 34px;
        margin: 13px 0 30px;
        line-height: 34px;
        span {
          font-size: 14px;
          color: #262c32;
          margin: 0 10px 0 20px;
        }
        .el-input {
          width: 200px;
          height: 34px;
          /deep/.el-input__inner {
            background-color: #f3f5f7;
            height: 34px;
            padding: 1px 0;
            border: 1px solid #d7d8d9;
          }
          /deep/.el-input__inner:focus {
            border-color: #d7d8d9;
          }
        }
        .el-row{
          .el-button{
            width: 75px;
            height: 34px;
            margin-left: 20px;
          }
        }
      }
      .el-select {
        width: 100px;
        height: 34px;
      }
      /deep/ .el-input__inner {
        background-color: #f3f5f7;
        height: 34px;
        font-size: 14px;
        color: #262c32;
        border: 1px solid #101010;
      }
      /deep/ .el-input__inner:focus {
        border: 2px solid #101010;
      }
    }
  }
}
</style>