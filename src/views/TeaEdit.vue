<template>
  <div class="studentedit">
    <Slidemenus></Slidemenus>
    <div class="content">
      <div class="header">
        <span>教师信息</span>
        <el-button plain>修改密码</el-button>
        <el-button plain>结课</el-button>
        <el-button plain>激活</el-button>
        <div class="primary">
          <div class="top">
            <img src="../assets/u4103.png" />
            <p>{{ $route.query.NAME }}</p>
          </div>
          <div class="middle">
            <span class="i"></span><span class="title">基本信息</span>
            <ul>
              <li>
                <span>用户名</span><span>{{ $route.query.SCHOOL }}</span>
              </li>
              <li>
                <span>姓名</span><span>{{ $route.query.SCHOOL }}</span>
              </li>
              <li>
                <span>邮箱</span>
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
                <span>所属院校</span>
                <el-select
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
                
                <span> 所属班级</span>
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            size="medium"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
          <div style="margin: 15px 0"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">
            {{city}}
            </el-checkbox>
          </el-checkbox-group>
              </li>

              <li>
                <span> 所属班级</span>
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            size="medium"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
          <div style="margin: 15px 0"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">
            {{city}}
            </el-checkbox>
          </el-checkbox-group>
              </li>
            </ul>
            <div class="button">
              <el-button type="primary">保存</el-button>
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
const cityOptions = ["上海", "北京", "广州", "深圳", "广州", "深圳"];

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
      checkAll: false,

      checkedCities: ["上海"],
      cities: cityOptions,
      //全选
      isIndeterminate: true,
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
     handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
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
      overflow: hidden;
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
          margin: 40px 0 55px 66px;

          span {
            &:first-child {
              font-size: 14px;
              color: #7a7f85;
              margin-right: 20px;
            }
            &:nth-child(2) {
              font-size: 14px;

              color: #262c32;
            }
          }
        }
        .el-checkbox-group{
          width:300px;
          margin-left: 76px;
          /deep/ .el-checkbox{
              margin-right:70px
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