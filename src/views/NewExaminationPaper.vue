<template>
  <div class="s1">
    <TestResults />
    <div class="newexaminationpaper">
      <div class="breadcrumb">
        <router-link to="examinationpapermanagement" tag="span" class="bc1"
          >试卷管理</router-link
        >
        <span>></span>
        <span>新建试卷</span>
      </div>
      <div class="hint">
        <keep-alive>
          <component :is="comps" v-show="isShow"></component>
        </keep-alive>
      </div>
      <div class="header">
        <ul>
          <li @click="show(1)" :class="index === 1 ? 'active' : ''">
            第一步：试卷基本信息
          </li>
          <li @click="show(2)" :class="index === 2 ? 'active' : ''">
            第二步：组卷
          </li>
        </ul>
        <div class="tab_content">
          <keep-alive>
            <component :is="comp" v-show="isShow"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestResults from "../components/TestResults";
import ExaminationPaperHint1 from "./ExaminationPaperHint1";
import ExaminationPaperHint2 from "./ExaminationPaperHint2";
import ExaminationPaperInfo from "./ExaminationPaperInfo";
import TestPaperComposition from "./TestPaperComposition";

export default {
  name: "NewExaminationPaper",
  components: {
    TestResults,
    ExaminationPaperHint1,
    ExaminationPaperHint2,
    ExaminationPaperInfo,
    TestPaperComposition,
  },
  data() {
    return {
      // 控制切换按钮后按钮改变样式
      index: 1,
      // 控制子组件显示
      comp: "ExaminationPaperInfo",
      comps: "ExaminationPaperHint1",
      // 控制点击按钮后子组件显示，再次点击隐藏
      isShow: true,
    };
  },

  mounted() {},

  methods: {
    show(value) {
      if (this.index === value) {
        this.index = 0;
        this.isShow == !this.isShow;
        console.log("noc");
      } else {
        this.index = value;
        this.isShow = true;
        // console.log("dd");
      }
      if (value === 1) this.comp = "ExaminationPaperInfo";
      if (value === 1) this.comps = "ExaminationPaperHint1";
      if (value === 1) this.class = "active";
      if (value === 2) this.comp = "TestPaperComposition";
      if (value === 2) this.comps = "ExaminationPaperHint2";
    },
  },
};
</script>

<style lang="less" scoped>
.s1 {
  display: flex;
  justify-content: center;
  background-color: #f3f5f7;
  .newexaminationpaper {
    width: 980px;
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
    .header {
      width: 980px;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 3px;
      ul {
        display: flex;
        border-bottom: 1px solid #dadada;
        height: 60px;
        text-align: center;
        //   justify-content: center;
        li {
          width: 240px;
          padding: 18px 0px;
          font-size: 16px;
          cursor: pointer;
        }
        .active {
          border-bottom: 3px solid #0168b7;
          color: rgb(1 104 183);
        }
      }
    }
  }

  /deep/.testresults > ul > li:nth-child(2) {
    border-left: 5px solid #42a2eb;
    font-size: 16px;
    color: #262c32;
  }
  /deep/ .testresults > ul > li:nth-child(2):hover {
    color: #262c32;
    text-decoration: none;
    background-color: #fff;
  }
}
</style>