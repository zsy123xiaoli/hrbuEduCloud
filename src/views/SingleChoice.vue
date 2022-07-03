<template>
  <div class="SingleChoice">
    <RepositoryMenus></RepositoryMenus>
    <div class="singlechoice">
      <div class="top">
        <span class="i"></span><span class="title">基础信息</span>
        <el-row>
          <el-cascader
            :show-all-levels="false"
            :options="options1"
            :props="classifyProps"
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
          <span class="changeCss">简答题</span>
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
        <ul>
          <li>
            <input @click="ChoiceA" type="checkbox" :checked="checkA" /><span
              >A</span
            ><input v-model="choiceA" class="Choice" />

            <el-button
              @click="openTinymce(1)"
              slot="reference"
              size="mini"
              type="primary"
              plain
              >富媒体编辑</el-button
            >
            <el-dialog
              title="选项A"
              :visible.sync="dialogVisible"
              width="55%"
              :before-close="handleClose"
            >
              <Tinymce v-if="showTinymce"></Tinymce>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </li>
          <li>
            <input @click="ChoiceB" type="checkbox" :checked="checkB" /><span
              >B</span
            ><input v-model="choiceB" class="Choice" />
            <el-button
              @click="openTinymce(1)"
              slot="reference"
              size="mini"
              type="primary"
              plain
              >富媒体编辑</el-button
            >
            <el-dialog
              title="选项A"
              :visible.sync="dialogVisible"
              width="55%"
              :before-close="handleClose"
            >
              <Tinymce v-if="showTinymce"></Tinymce>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </li>
          <li>
            <input @click="ChoiceC" type="checkbox" :checked="checkC" /><span
              >C</span
            ><input v-model="choiceC" class="Choice" />
            <el-button
              @click="openTinymce(1)"
              slot="reference"
              size="mini"
              type="primary"
              plain
              >富媒体编辑</el-button
            >
            <el-dialog
              title="选项A"
              :visible.sync="dialogVisible"
              width="55%"
              :before-close="handleClose"
            >
              <Tinymce v-if="showTinymce"></Tinymce>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </li>
          <li>
            <input @click="ChoiceD" type="checkbox" :checked="checkD" /><span
              >D</span
            ><input v-model="choiceD" class="Choice" />
            <el-button
              @click="openTinymce(1)"
              slot="reference"
              size="mini"
              type="primary"
              plain
              >富媒体编辑</el-button
            >
            <el-dialog
              title="选项A"
              :visible.sync="dialogVisible"
              width="55%"
              :before-close="handleClose"
            >
              <Tinymce v-if="showTinymce"></Tinymce>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </li>
        </ul>
        <p class="tag">*请将正确答勾选出来</p>
      </div>
      <div class="anwser">
        <span class="i"></span><span class="title">答案与解析</span>
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
import axios from "axios";
let id = 0;
export default {
  data() {
    return {
      dialogVisible: false,
      //富文本显示状态
      showTinymce: false,
      //按钮是否被选
      checkA: false,
      checkB: false,
      checkC: false,
      checkD: false,
      //输入框中的值
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",
      difficulty: [
        { value: "入门" },
        { value: "初级" },
        { value: "中级" },
        { value: "高级" },
      ],

      value: "",
      options1: [],
      KNOW_NAME: "",
      classifyProps: {
        lazy: true,
        lazyLoad: (node, resolve) => {
          console.log(node);
          setTimeout(() => {
            if (node.level == 0) {
              axios
                .get(
                  "http://127.0.0.1:3000/api/system/user/getFirstKnow",
                  {
                    params: {
                      val: 1,
                    },
                  },
                  {
                    headers: {
                      Authorization: localStorage.token,
                    },
                  }
                )
                .then((response) => {
                  const Major = response.data.message.map((value, i) => ({
                    value: value.KNOW_NAME,
                    label: value.KNOW_NAME,
                    leaf: node.level >= 1,
                  }));
                  // 通过调⽤resolve将⼦节点数据返回，通知组件数据加载完成
                  resolve(Major);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            if (node.level == 1) {
              axios
                .get(
                  "http://127.0.0.1:3000/api/system/user/getOtherKnow",
                  {
                    params: {
                      val: node.label,
                    },
                  },
                  {
                    headers: {
                      Authorization: localStorage.token,
                    },
                  }
                )
                .then((response) => {
                  const areas = response.data.message.map((value, i) => ({
                    value: value.KNOW_NAME,
                    label: value.KNOW_NAME,
                    leaf: node.level >= 1,
                  }));
                  // 通过调⽤resolve将⼦节点数据返回，通知组件数据加载完成
                  resolve(areas);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }, 200);
        },
      },
    };
  },
  mounted() {
    // this.getFirstKnow();
    // this.getOtherKnow();
  },
  methods: {
    getFirstKnow() {
      axios
        .get(
          "http://127.0.0.1:3000/api/system/user/getFirstKnow",
          {
            params: {
              val: 1,
            },
          },
          {
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);

          this.options1 = response.data.message;
          // this.options1.children = response.data.message;
          console.log(response.data.message);
          console.log(this.options1);
        })
        .catch(function (error) {
          console.log(error);
        });
      // axios
      // .get(
      //   "http://127.0.0.1:3000/api/system/user/getOtherKnow",
      //   {
      //     params: {
      //       val: val
      //     },
      //   },
      //   {
      //     headers: {
      //       Authorization: localStorage.token,
      //     },
      //   }
      // )
      // .then((response) => {
      //   console.log(response.data);
      //   console.log(response.data.message);
      //   this.options1.children=response.data.message
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
    getOtherKnow(val) {
      console.log(val);
      axios
        .get(
          "http://127.0.0.1:3000/api/system/user/getOtherKnow",
          {
            params: {
              val: val,
            },
          },
          {
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          console.log(response.data.message);
          this.options1.children = response.data.message;
        })
        .catch(function (error) {
          console.log(error);
        });
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
    ChoiceC() {
      this.checkC = !this.checkC;
    },
    ChoiceD() {
      this.checkD = !this.checkD;
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
.SingleChoice {
  display: flex;
  background-color: #f3f5f7;
  .singlechoice {
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
      .Single {
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
      .tag {
        padding: 20px 0 20px 40px;
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