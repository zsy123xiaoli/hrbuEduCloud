<template>
  <div class="newcurriculum">
    <div class="breadcrumb">
      <router-link to="CurriculumDesign" tag="span" class="bc1"
        >公开课管理</router-link
      >
      <span>></span>
      <span>新增课程</span>
    </div>
    <div class="hint">
      <div class="hint-img">
        <img src="../assets/hint.png" alt="" />
      </div>
      <span>保存成功后课程处于草稿状态，发布后才可以应用在教学中。</span>
      <el-row>
        <el-button size="medium" disabled>保存&下一步</el-button>
      </el-row>
    </div>
    <div class="header">
      <ul>
        <li @click="show(1)" :class="index === 1 ? 'active' : ''">
          第一步：设置课程信息
        </li>
        <li @click="show(2)" :class="index === 2 ? 'active' : ''">
          第二步：添加课件
        </li>
      </ul>
      <div class="tab_content">
        <keep-alive>
          <component :is="comp" v-show="isShow"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import SetCourse from "./SetCourse";
import AddCourse from "./AddCourse";

export default {
  name: "NewCurriculum",
  components: { SetCourse, AddCourse },
  data() {
    return {
      // 控制切换按钮后按钮改变样式
      index: 1,
      // 控制子组件显示
      comp: "SetCourse",
      // 控制点击按钮后子组件显示，再次点击隐藏
      isShow: true,
    };
  },
  methods: {
    show(value) {
      if (this.index === value) {
        this.index = 0;
        this.isShow = !this.isShow;
      } else {
        this.index = value;
        this.isShow = true;
      }
      if (value === 1) this.comp = "SetCourse";
      if (value === 2) this.comp = "AddCourse";
    },
  },
};
</script>

<style lang="less" scoped>
.newcurriculum {
  margin-left: 20px;
  .breadcrumb {
    height: 56px;
    line-height: 56px;
    span {
      margin-right: 10px;
      font-size: 16px;
      color: #7a7f85;
      text-align: left;
    }
    .bc1 {
      font-size: 16px;
      color: #2b96e5;
      text-align: left;
      cursor: pointer;
    }
  }
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
      margin-left: 380px;
      .el-button {
        font-size: 14px;
        color: #ddd8d9;
        border: 1px solid #d0d0d0;
      }
    }
  }
  .header {
    width: 980px;
    margin-top: 15px;
    background-color: #fff;
    border-radius: 3px;
    ul {
      display: flex;
      border-bottom: 1px solid #dadada;
      //   justify-content: center;
      li {
        height: 21px;
        line-height: 21px;
        padding: 18px 40px;
        font-size: 16px;
        cursor: pointer;
      }
      li:hover {
        border-bottom: 3px solid #0168b7;
        color: rgb(1 104 183);
      }
    }
  }
}
</style>

