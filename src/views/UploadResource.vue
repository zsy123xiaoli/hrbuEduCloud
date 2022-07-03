<template>
  <div class="UploadResource">
    <RepositoryMenus></RepositoryMenus>
    <div class="uploadresource">
      <div class="top">
        <div>
          <img src="../assets/hint.png" />
          <span>请上传课件文件，上传成功后请点击"保存&下一步"</span>
        </div>
        <div>
          <router-link to="/AdmMenus/UploadSetInfo">
            <el-button type="primary" plain>保存&下一步</el-button>
          </router-link>
        </div>
      </div>
      <div class="primary">
        <div class="primary-top">
          <ul>
            <li>第一步：上传资源</li>
            <li>第二步：设置基本信息</li>
            <li>第三步：巩固刷题</li>
          </ul>
        </div>
        <div class="primary-bottom">
          <ul>
            <li>
              <span>课件类型</span>
              <el-select
                v-model="value"
                style="width: 144px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in kind"
                  :key="item.value"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </li>
            <li>
              <span>课件文件</span>
              <el-upload
                class="upload-demo"
                action="http://127.0.0.1:3000/api/acceptFile/Picture"
                name="picture"
                :headers="headerObj"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
          
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </li>
            <li>
              <img src="../assets/hin.png" /><span class="slogan"
                >上传最大数量为1个，支持.mp4格式/上传最大数量为1个，支持.pdf格式</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryMenus from "../components/RepositoryMenus";

export default {
  data() {
    return {
      kind: [{ value: "视频" }, { value: "文档" }],
      value: "",
      headerObj:{Authorization: localStorage.token},
    };
  },
  methods:{
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },

  components: {
    RepositoryMenus,
  },
};
</script>

<style lang="less" scoped>
.UploadResource {
  display: flex;
  background-color: #f3f5f7;
  .uploadresource {
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
        margin-right: 450px;
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
            &:first-child {
              border-bottom: solid 3px rgba(1, 104, 183, 1);
            }
          }
        }
      }
      .primary-bottom {
        li {
          margin: 35px 0 0 50px;
          img {
            //与文字水平对齐
            vertical-align: middle;
          }
          .slogan {
            font-size: 12px;
            color: #999999;
          }
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>