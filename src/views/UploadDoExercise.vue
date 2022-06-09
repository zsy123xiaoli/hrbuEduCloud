<template>
  <div class="DoExercise">
    <RepositoryMenus></RepositoryMenus>
    <div class="doexercise">
      <div class="top">
        <div>
          <img src="../assets/hint.png" />
          <span
            >课件名称”基本内容已编写完成，你可以直接发布，也可以设置一组试题以便学生巩固所学。</span
          >
        </div>
        <div>
          <el-button type="primary" plain>保存&下一步</el-button>
        </div>
      </div>
      <div class="primary">
        <div class="primary-top">
          <ul>
            <router-link to="/AdmMenus/UploadResource" tag="li">
              第一步：上传资源
            </router-link>

            <router-link to="/AdmMenus/UploadSetInfo" tag="li">
              第二步：设置基本信息
            </router-link>
            <li>第三步：巩固刷题</li>
          </ul>
        </div>
        <div class="primary-bottom">
          <router-link to="/AdmMenus/ItemLibrary">
          <el-button type="primary">添加试题</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryMenus from "../components/RepositoryMenus";

export default {
  data() {
    return {};
  },
  components: {
    RepositoryMenus,
  },
};
</script>

<style lang="less" scoped>
.DoExercise {
  display: flex;
  background-color: #f3f5f7;
  .doexercise {
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

            &:nth-child(3) {
              border-bottom: solid 3px rgba(1, 104, 183, 1);
            }
          }
        }
      }
      .primary-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
      }
    }
  }
}
</style>