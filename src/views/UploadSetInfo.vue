<template>
  <div class="UploadSetInfo">
    <RepositoryMenus></RepositoryMenus>
    <div class="uploadsetinfo">
      <div class="top">
        <div>
          <img src="../assets/hint.png" />
          <span
            >‘课件名称’已保存但尚未发布，还处于草稿状态，设置基本信息并发布后才可以应用在公开课中。</span
          >
        </div>
        <div>
          <router-link to="/AdmMenus/DoExercise">
                <el-button type="primary" plain>保存&下一步</el-button>
            </router-link>
        </div>
      </div>
      <div class="primary">
        <div class="primary-top">
          <ul>
            <router-link to="/AdmMenus/UploadResource" tag="li">
              第一步：上传资源
            </router-link>
            <li>第二步：设置基本信息</li>
            <li>第三步：巩固刷题</li>
          </ul>
        </div>
        <div class="primary-bottom">
          <ul>
            <li>
              <el-row>
                <span>课件名称</span>
                <el-input
                  v-model="Username"
                  placeholder="默认为课件文件名名称，最多30个汉字"
                  style="width: 400px"
                ></el-input>
              </el-row>
            </li>
            <li>
              <span>知识点</span
              ><el-cascader
            :show-all-levels="false"
            :options="options1"
            :props="classifyProps"
            placeholder="请选择知识点"
            size="medium"
            clearable
          ></el-cascader>
            </li>
            <li>
              <span>难度</span>
              <el-select
                v-model="value"
                style="width: 144px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in difficulty"
                  :key="item.value"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryMenus from "../components/RepositoryMenus";
import axios from "axios";

export default {
  data() {
    return {
      options1: [],
      classifyProps: {
        lazy: true,
        lazyLoad: (node, resolve) => {
          console.log(node)
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
      difficulty: [
        { value: "入门" },
        { value: "初级" },
        { value: "中级" },
        { value: "高级" },
      ],
      value: "",
    };
  },
  components: {
    RepositoryMenus,
  },
};
</script>

<style lang="less" scoped>
.UploadSetInfo {
  display: flex;
  background-color: #f3f5f7;
  .uploadsetinfo {
    // margin-left: 20px;
    width: 998px;
    margin: 0 auto;
    .top {
      background-color: #fff;
      height: 90px;
      border-radius: 5px;
      line-height: 90px;
      display: flex;
      img {
        //与文字水平对齐
        vertical-align: middle;
        margin: 0 10px 0 30px;
      }
      span {
        font-size: 14px;
        color: #666666;
        margin-right: 145px;
      }
    }
    .primary {
      margin-top: 15px;
      background-color: #fff;
      height: 800px;
      .primary-top {
        height: 70px;
        line-height: 70px;
        border-bottom: solid 2px rgb(228, 227, 227);
        ul {
          display: flex;
          li {
            text-align: center;
            width: 300px;
            cursor: pointer;
            &:nth-child(2) {
              border-bottom: solid 3px rgba(1, 104, 183, 1);
            }
          }
        }
      }
      .primary-bottom {
        li {
          margin: 35px 0 0 50px;
          span {
            margin-right: 20px;
          }
          //第二个li下的span
          &:nth-child(2) {
            span {
              margin-right: 35px;
            }
          }
          &:nth-child(3) {
            span {
              margin-right: 50px;
            }
          }
        }
      }
    }
  }
}
</style>