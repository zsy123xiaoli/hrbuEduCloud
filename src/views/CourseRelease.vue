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
            <el-button type="primary">主要按钮</el-button>
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
    return {};
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
      height: 145px;
      background-color: #fff;
      border-radius: 6px;
      .classification{
          display: flex;
      }
      .promulgator{
          display: flex;
      }
    }
  }
}
</style>