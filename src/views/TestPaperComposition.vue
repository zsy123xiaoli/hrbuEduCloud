<template>
  <div class="s1">
    <div class="setcourse"  v-show="Isshow2">
      <el-button type="primary" @click="com()" class="but"
        >自由组卷</el-button
      >
      <div class="alert" v-show="Isshow">
        <div class="content">
          <div class="header">
            <h1>自由组卷</h1>
          </div>
          <div class="main">
            <div class="search">
              <el-cascader
                :options="options1"
                size="medium"
                clearable
                placeholder="选择分类"
              ></el-cascader>
              <span>题型</span>
              <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span>难度</span>
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
              <el-input placeholder="" v-model="input" clearable> </el-input>
              <el-button
                class="el-button-right"
                type="primary"
                size="mini"
                icon="el-icon-search"
              ></el-button>
            </div>
            <div class="selectedtopic">
              <span class="topic">已选题目：</span>
              <span>单选题 </span><i>10</i> <span>多选题</span><i>5</i>
              <span>判断题</span><i>3</i> <span>填空题</span><i>10</i>
            </div>
            <div class="itembank">
              <div class="eg">
                <p>题型</p>
                <p>知识点</p>
                <div class="itemhead">
                  <p class="itemheader">
                    <span>题干:</span>
                    <span>1.此处显示题干；</span>
                    <span
                      >2.点击题干区域展开显示选项、答案、解析等区域，再次点击时收起选项、答案、详解等区域；</span
                    >
                  </p>
                  <el-button type="primary" plain>选择</el-button>
                </div>
              </div>
              <div class="multiplechoice">
                <p>单选题</p>
                <p class="label">标签</p>
                <div class="item">
                  <div class="text" @click="answer()">
                    <span>在下列标签中，哪个标签可以插入换行？（）</span>
                  </div>
                  <el-button type="primary" plain>选择</el-button>
                  <div class="answer" v-show="Isshow1">
                    <ul>
                      <li>A. {{ A }}</li>
                      <li>B. {{ B }}</li>
                      <li>C. {{ C }}</li>
                      <li>D. {{ D }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <el-button @click="com()">取消</el-button>
            <el-button type="primary" @click="add()">添加</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="changeitem" v-show="Isshow3">
      <div class="head">
        <h1>ddd</h1>
      </div>
      <el-button type="primary" @click="com()" class="but" 
        >继续增加试题</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TestPaperComposition",

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
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      input: "",
      Isshow: false,
      Isshow1: false,
      Isshow2: true,
      Isshow3:false,
      A: "<hr>",
      B: "<br>",
      C: "<p>",
      D: "<li>",
    };
  },

  mounted() {},

  methods: {
    com() {
      this.Isshow = !this.Isshow;
    },
    answer() {
      this.Isshow1 = !this.Isshow1;
    },
    add() {
      this.Isshow2 = false;
      this.Isshow=!this.Isshow;
      this.Isshow3=true;
    },
  },
};
</script>

<style lang="less" scoped>
.setcourse {
  width: 980px;
  height: 312px;
  text-align: center;
  background-color: #fff;
  .but {
    width: 140px;
    margin-top: 100px;
  }
  .alert {
    display: flex;
    z-index: 20;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    .content {
      width: 1016px;
      height: 616px;
      background-color: #fff;
      position: relative;
      margin: auto;
      // padding: 20px;
      .header {
        h1 {
          height: 48px;
          line-height: 48px;
          margin-left: 20px;
          font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
          font-weight: 700;
          font-style: normal;
          font-size: 18px;
          color: #333333;
          text-align: left;
        }
        border-bottom: 1px solid #ebebeb;
      }
      .main {
        .search {
          display: flex;
          margin-top: 10px;
          width: 1016;
          height: 74px;
          line-height: 74px;
          background-color: #fff;
          span {
            margin: 0 10px 0 40px;
            font-size: 14px;
            color: #262c32;
          }
          .el-cascader {
            width: 160px;
            margin: 20px 0 0 20px;
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
        .selectedtopic {
          display: flex;
          width: 980px;
          height: 34px;
          line-height: 34px;
          background-color: #fff;
          span {
            font-size: 14px;
            color: rgb(122, 127, 133);
            margin: 0 5px 0 20px;
          }
          .topic {
            margin: 0 20px;
            font-size: 14px;
            color: rgb(38, 44, 50);
          }
          i {
            display: inline-block;
            width: 20px;
            height: 16px;
            line-height: 16px;
            margin: 8px 5px 0 0;
            font-size: 12px;
            background-color: #42a2eb;
            color: #fff;
            font-style: normal;
          }
        }
        .itembank {
          border-top: 1px solid #ebebeb;
          margin-top: 5px;
          overflow: overlay;
          height: 390px;
          .eg {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            p {
              padding: 10px;
              margin-left: 10px;
              color: #262c32;
              font-size: 12px;
              background-color: #f8f8f8;
              // background-color: aqua;
            }
            .itemhead {
              display: flex;
              width: 1016px;
              margin: 10px 0;
              .itemheader {
                font-size: 16px;
                width: 825px;
                text-align: left;
              }
              span {
                display: block;
                line-height: 20px;
              }
              .el-button {
                width: 58px;
                height: 35px;
                padding: 0;
                border: 0px;
                font-size: 12px;
                color: #2b96e5;
                margin-left: 10px;
              }
              .el-button:hover {
                background-color: #2b96e5;
                color: #fff;
              }
              .el-button:focus {
                background-color: #2b96e5;
                color: #fff;
              }
            }
          }
          .multiplechoice {
            display: flex;
            flex-wrap: wrap;
            border-top: 1px solid #e4e4e4;
            p {
              margin-top: 10px;
              padding: 10px;
              margin-left: 10px;
              background-color: #f8f8f8;
              color: #262c32;
              font-size: 12px;
            }
            .label {
              background-color: #d9ffd9;
              color: #008000;
              border-radius: 3px;
              height: 26px;
              line-height: 26px;
              width: 50px;
              padding: 0;
              border: 1px solid #bcbcbc;
            }
            .item {
              width: 1016px;
              display: flex;
              margin: 10px 0;
              margin-left: 10px;
              flex-wrap: wrap;
              .text {
                padding: 10px;
                font-size: 16px;
                width: 825px;
                text-align: left;
                background-color: #f8f8f8;
                cursor: pointer;
                // background-color: rebeccapurple;
                span {
                  display: block;
                  line-height: 20px;
                }
              }
              .el-button {
                width: 58px;
                height: 35px;
                padding: 0;
                border: 0px;
                font-size: 12px;
                color: #2b96e5;
                margin-left: 10px;
              }
              .el-button:hover {
                background-color: #2b96e5;
                color: #fff;
              }
              .el-button:focus {
                background-color: #2b96e5;
                color: #fff;
              }
              .answer {
                width: 825px;
                text-align: left;
                margin: 10px;
                li {
                  line-height: 36px;
                  font-size: 14px;
                  color: #262c32;
                }
              }
            }
          }
        }
      }
      .footer {
        display: flex;
        justify-content: end;
        height: 40px;
        .el-button {
          width: 68px;
          height: 34px;
          margin: 10px;
          padding: 0;
        }
      }
    }
  }
}
</style>