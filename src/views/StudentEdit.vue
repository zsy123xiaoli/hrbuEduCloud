<template>
  <div class="studentedit">
    <Slidemenus></Slidemenus>
    <div class="content">
      <div class="header">
        <span>学生信息</span>

        <div class="primary">
          <div class="top">
            <img src="../assets/u4103.png" />
            <p>{{ $route.query.NAME }}</p>
          </div>
          <div class="middle">
            <span class="i"></span><span class="title">基本信息</span>
            <ul>
              <li>
                <span>所属院校*</span>
                <el-select
                  v-model="SCHOOL"
                  style="width: 358px"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in school"
                    :key="item.value"
                    :value="item.SCHOOL"
                  >
                  </el-option>
                </el-select>
              </li>
              <li>
                <span>所属专业*</span>
                <el-select
                  @click.native="getDepartment"
                  v-model="DEPARTMENT"
                  style="width: 358px"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in major"
                    :key="item.value"
                    :label="item.label"
                    :value="item.DEPARTMENT"
                  >
                  </el-option>
                </el-select>
              </li>
              <li>
                <span>所属班级</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="Classinput"
                  size="medium"
                  clearable
                  style="width: 358px"
                >
                </el-input>
              </li>

              <li>
                <span>学籍号</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="Roolinput"
                  size="medium"
                  clearable
                  style="width: 358px"
                >
                </el-input>
              </li>
              <li>
                <span>姓名</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="Nameinput"
                  size="medium"
                  clearable
                  style="width: 358px"
                >
                </el-input>
              </li>

              <li>
                <span>性别</span
                ><el-select
                  v-model="SEX"
                  style="width: 358px"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in gender"
                    :key="item.value"
                    :label="item.label"
                    :value="item.SEX"
                  >
                  </el-option>
                </el-select>
              </li>

              <li>
                <span>邮箱</span>
                <el-input
                  v-model="Emallinput"
                  placeholder="请输入内容"
                  style="width: 358px"
                ></el-input>
              </li>
              <li>
                <span>自我介绍</span>
                <textarea v-model="introduce"></textarea>
              </li>
            </ul>

            <div class="button">
              <el-button type="primary" @click="save">保存</el-button>
              <el-button>取消</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slidemenus from "../components/Eduslidemenus.vue";
import axios from "axios";

export default {
  data() {
    return {
      //院校信息
      school: [],
      SCHOOL: "",
      //专业信息
      major: [],
      DEPARTMENT: "",
      //性别信息
      gender: [{ SEX: "男" }, { SEX: "女" }],
      SEX: "",
      Classinput: "",
      Roolinput: "",
      Nameinput: "",
      Emallinput: "",
      introduce: "",
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.DEPARTMENT = this.$route.query.DEPARTMENT;
    this.SCHOOL = this.$route.query.SCHOOL;
    this.SEX = this.$route.query.SEX;
    this.Roolinput = this.$route.query.ID;
    this.Nameinput = this.$route.query.NAME;
    this.Emallinput = this.$route.query.MAIL;
  },
  methods: {
    getDepartment() {
      let school = "";
      school = this.SCHOOL;
      console.log(school);
      axios
        .get(
          "http://127.0.0.1:3000/api/system/user/getSchoolDepartment",
          {
            params: {
              school,
            },
          },
          {
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          console.log(response.data.message);
          this.major = response.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    save() {
      const data = {};
      if (this.SCHOOL) {
        data.school = this.SCHOOL;
      } else {
        alert("学校为空");
      }
      if (this.DEPARTMENT) {
        data.department = this.DEPARTMENT;
      } else {
        alert("专业为空");
      }
      if (this.SEX) {
        data.sex = this.SEX === "男" ? 1 : 2;
      } else {
        alert("性别为空");
      }
      if (this.Classinput) {
        data.class = this.Classinput;
      } else {
        alert("班级为空");
      }
      if (this.Roolinput) {
        data.id = this.Roolinput;
      } else {
        alert("学籍号为空");
      }
      if (this.Nameinput) {
        data.name = this.Nameinput;
      } else {
        alert("学生姓名为空");
      }
      if (this.Emallinput) {
        const reg = /^\w+[@]\w{2,5}([.]\w{2,3}){1,3}$/;
        console.log(reg.test(this.Emallinput));
        if (reg.test(this.Emallinput)) {
          data.newMail = this.Emallinput;
        } else {
          alert("您输入的邮箱不符合格式请重新输入");
          return;
        }
      }
        if (this.introduce) {
          data.introduce = this.introduce;
        }
      data.mail = this.$route.query.MAIL;
      console.log(data);
      axios
        .post("http://127.0.0.1:3000/api/user/setStudentInfo", data, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === 1) {
            alert("修改成功");
            return;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: { Slidemenus },
};
</script>

<style lang="less" scoped>
.studentedit {
  display: flex;
  background-color: #f3f5f7;
  .content {
    margin: 15px auto;
    .header {
      span {
        color: #7a7f85;

        margin: 20px 515px 0 0;
      }
      .el-butten {
        margin: 20px 10px 0 10px;
      }
    }
    .primary {
      margin-top: 20px;
      border-radius: 5px;
      background: #fff;
      height: 1000px;
      width: 870px;
      // overflow: hidden;
      .top {
        height: 200px;
        width: 870px;

        img {
          display: block;
          margin: 20px auto;
        }
        p {
          text-align: center;
        }
      }
      .middle {
        .i {
          height: 50px;
          width: 5px;
          border-right: solid 5px rgba(43, 150, 229, 1);
          margin: 0 15px 0 30px;
        }
        .title {
          color: #7a7f85;
          line-height: 56px;
          margin-right: 20px;
          font-weight: 700;
          margin-right: 650px;
        }
        li {
          margin: 40px 0 55px 0;

          span {
            &:first-child {
              font-size: 14px;
              color: #7a7f85;
              margin: 30px 20px 0 66px;
            }
            &:nth-child(2) {
              font-size: 14px;

              color: #262c32;
            }
          }
        }
        .button {
          width: 90px;
          margin: 0 auto;
          display: flex;
        }
      }
    }
  }
}
</style>