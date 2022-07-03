<template>
  <div class="s1">
    <TestResults />
    <div class="examinationpapermanagement">
      <p>试卷管理</p>
      <div class="search">
        <el-cascader
          :options="options1"
          size="medium"
          clearable
          placeholder="选择分类"
        ></el-cascader>
        <span>试卷形式</span>
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
        <el-input placeholder="请输入试卷名称" v-model="input" clearable>
        </el-input>
        <el-button
          class="el-button-right"
          type="primary"
          size="mini"
          icon="el-icon-search"
        ></el-button>
        <el-button type="primary" size="medium"
          ><router-link to="newexaminationpaper" tag="i">新建试卷</router-link></el-button
        >
      </div>
      <div class="test">
        <ExaminationPaper />
      </div>
      <div class="paginaion">
        <Paginaion ref="Paginaion"></Paginaion>
      </div>
    </div>
  </div>
</template>

<script>
import TestResults from "../components/TestResults";
import Paginaion from "./Paginaion";
import ExaminationPaper from "./ExaminationPaper";

export default {
  name: "ExaminationPaperManagement",
  components: { TestResults, Paginaion, ExaminationPaper },
  data() {
    return {
      options1: [
        {
          value: "zhinan",
          label: "IT/互联网",
          children: [
            {
              value: "shejiyuanze",
              label: "前端开发",
              children: [
                {
                  value: "yizhi",
                  label: "HTML",
                  children: [
                    {
                      value: "yizhi",
                      label: "标签",
                    },
                    {
                      value: "yizhi",
                      label: "语法",
                    },
                    {
                      value: "yizhi",
                      label: "语义化",
                    },
                    {
                      value: "yizhi",
                      label: "适配",
                    },
                  ],
                },
                {
                  value: "fankui",
                  label: "CSS",
                },
                {
                  value: "xiaolv",
                  label: "JavaScript",
                },
              ],
            },
            {
              value: "daohang",
              label: "后端开发",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ],
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
.s1 {
  display: flex;
  justify-content: center;
  background-color: #f3f5f7;
  .examinationpapermanagement {
    margin-left: 20px;
    p {
      line-height: 56px;
      color: #7a7f85;
    }
    .search {
      width: 980px;
      height: 74px;
      line-height: 74px;
      background-color: #fff;
      display: flex;
      span {
        margin: 0 10px 0 40px;
        font-size: 14px;
        color: #262c32;
      }
      i {
        font-style: normal;

        padding: 10px 20px;
        display: block;
      }
      .el-cascader {
        width: 160px;
        margin: 20px 0 0 10px;
         /deep/.el-input__inner {
           background-color: #fff;
         }
         ::v-deep {
          .el-input__inner {
            &::placeholder {
              color: #262c32;
            }
          }
          .el-input__icon {
            color: #262c32;
          }
        }
      }
      .el-select {
        width: 120px;
        height: 35px;
        ::v-deep {
          .el-input__inner {
            &::placeholder {
              color: #262c32;
            }
          }
          .el-input__icon {
            color: #262c32;
          }
        }
      }
      .el-input {
        width: 250px;
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
      .el-button {
        width: 96px;
        height: 34px;
        padding: 0;
        margin-top: 20px;
        margin-left: 40px;
      }
      .el-button-right {
        margin-left: 0;
        width: 34px;
        height: 34px;
        text-align: center;
        padding: 0;
        border-color: #dde0e7;
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

  /deep/ ul > .router-link-active:nth-child(2) {
    border-left: 5px solid #42a2eb;
    font-size: 16px;
    color: #262c32;
  }
  /deep/ ul > .router-link-active:nth-child(2):hover {
    color: #262c32;
    text-decoration: none;
    background-color: #fff;
  }
}
</style>