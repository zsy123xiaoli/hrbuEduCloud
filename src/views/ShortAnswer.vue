<template>
  <div class="ShortAnswer">
    <RepositoryMenus></RepositoryMenus>
    <div class="shortanswer">
      <div class="top">
        <span class="i"></span><span class="title">基础信息</span>
        <el-row>
          <el-cascader
            :options="options1"
            placeholder="请选择知识点"
            size="medium"
            clearable
          ></el-cascader>
        </el-row>
        <span class="changeCss">题型</span>

        <router-link to="/AdmMenus/SingleChoice" tag="span">
          <span class="changeCss Single">单选题</span>
        </router-link>
        <router-link to="/AdmMenus/MultipleChoice" tag="span">
          <span class="changeCss">多选题</span>
        </router-link>
        <router-link to="/AdmMenus/Judeg" tag="span">
          <span class="changeCss">判断题</span>
        </router-link>
        <router-link to="/AdmMenus/ShortAnswer" tag="span">
          <span class="changeCss Short">简答题</span>
        </router-link>
        <router-link to="/AdmMenus/GapFilling" tag="span">
          <span class="changeCss">填空题</span>
        </router-link>
        <router-link to="/AdmMenus/CodingQuestion" tag="span">
          <span class="changeCss">编码题</span>
        </router-link>
        <el-row>
          <span class="diff">难度</span>

          <el-select v-model="value" style="width: 144px" placeholder="请选择">
            <el-option
              v-for="item in difficulty"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>
      </div>
      <div class="primary">
        <span class="i"></span><span class="title">题干</span>
        <Tinymce></Tinymce>
      </div>
      <div class="options">
        <span class="i"></span><span class="title">选项与答案</span>
        <Tinymce></Tinymce>
      </div>
      <div class="anwser">
        <span class="i"></span><span class="title">解析</span>
        <Tinymce></Tinymce>
      </div>
      <div class="bottom">
        <el-button type="primary" @click="save">保存&继续录入</el-button>

        <el-button type="primary" @click="save">保存&返回试题库</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryMenus from "../components/RepositoryMenus";
import Tinymce from "../components/Tinymce";

export default {
  data() {
    return {
      

      //输入框中的值
      

      difficulty: [
        { value: "入门" },
        { value: "初级" },
        { value: "中级" },
        { value: "高级" },
      ],
      value: "",
      options1: [
        {
          value: "zhinan",
          label: "IT/互联网",
          children: [
            {
              value: "shejiyuanze",
              label: "前端开发",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeCss(e) {
      e.currentTarget.style.background = "rgb(204 255 255)";
      // document.querySelectorAll(".changeCss").style.background="#fff"
      console.log(e.currentTarget);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          (this.showTinymce = false), done();
        })
        .catch((_) => {});
    },
    openTinymce(num) {
      this.showTinymce = true;
      this.dialogVisible = true;
    },
    ChoiceA() {
      this.checkA = !this.checkA;
    },
    ChoiceB() {
      this.checkB = !this.checkB;
    },

    save() {
      if (this.checkA) {
        console.log(this.choiceA);
      }
    },
    KnowledgePoint() {},
  },
  components: {
    RepositoryMenus,
    Tinymce,
  },
};
</script>

<style lang="less" scoped>
.ShortAnswer {
  display: flex;
  background-color: #f3f5f7;
  .shortanswer {
    // margin-left: 20px;
    width: 998px;
    margin: 0 auto;
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
    .top {
      height: 250px;
      background-color: #fff;
      border-radius: 5px;

      .el-cascader {
        margin: 0 0 20px 50px;
      }
      .changeCss {
        margin: 20px 0 0 45px;
        cursor: pointer;
      }
      .Short {
        background-color: rgb(204 255 255);
        color: rgb(66, 162, 235);
        border-radius: 5px;
        padding: 5px;
      }
      .el-row {
        margin-top: 30px;
      }
      .diff {
        margin: 0 10px 0 45px;
      }
    }
    .primary {
      margin-top: 25px;
      border-radius: 5px;
      background-color: #fff;

      /deep/ .tox-tinymce {
        margin: 0 auto;
      }
    }
    .options {
      margin-top: 25px;
      border-radius: 5px;
      // height: 500px;
      background-color: #fff;
      li {
        margin: 50px 0 0 40px;
        span {
          margin: 0 10px;
        }
        .Choice {
          height: 40px;
          width: 700px;
          margin-right: 20px;
        }
      }
      /deep/ .tox-tinymce {
        margin: 0 auto;
      }
    }
    .anwser {
      margin-top: 25px;
      border-radius: 5px;
      background-color: #fff;

      /deep/ .tox-tinymce {
        margin: 0 auto;
      }
    }
    .bottom {
      margin: 20px auto;
      width: 295px;
    }
  }
}
</style>