<template>
  <div class="TeaAdd">
    <div class="Teacher">
      <Slidemenus></Slidemenus>
      <div class="teacher">
        <span class="i"></span><span class="title">基本信息</span>
        <el-row>
          <span> 用户名</span>
          <el-input
            
            v-model="Username"
            placeholder="请设置用户名"
            style="width: 358px"
          ></el-input>
        </el-row>
        <el-row>
          <span> 姓名</span>
          <el-input
            
            v-model="Name"
            placeholder="请设置真实姓名，设置成功后不可更改"
            style="width: 358px"
          ></el-input>
        </el-row>
        <el-row>
          <span> 邮箱</span>
          <el-input
            
            v-model="Emall"
            placeholder="可用于找回密码以及发送初始密码"
            style="width: 358px"
          ></el-input>
        </el-row>
        <el-row>
          <span> 所属院校*</span>
          <el-select v-model="NAME" style="width: 358px" @change="getDepartment" placeholder="请选择">
            <el-option
              v-for="item in school"
              :key="item.value"
              :value="item.NAME"
            >
            </el-option>
          </el-select>
        </el-row>
        <el-row>
          <span> 所属专业*</span>
          
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
        </el-row>
        <!-- <el-row>
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
        </el-row> -->
        <div class="button">
          <el-button type="primary" @click="save">新增</el-button>
          <el-button>取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slidemenus from "../components/Eduslidemenus.vue";
import axios from "axios";

const cityOptions = [];
export default {
  data() {
    return {
      //院校信息
      school: [],
      NAME: "",
      //专业信息
     
      Username: "",
      
      Name: "",
      Emall: "",

      checkAll: false,
      checkedCities: ["软件工程"],
      cities: cityOptions,
      //全选
      isIndeterminate: true,
    };
  },
  mounted() {
   
    //加载时默认渲染院校
    axios
      .get("http://127.0.0.1:3000/api/system/user/getSchool", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        this.school = response.data.message;
        console.log(this.school);
      })
      .catch((error) => {
        console.log(error);
      });
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

    save() {
     
      const data = {};
      if (this.Username) {
        data.id = this.NAME;
      } else {
        alert("用户名为空");
      }
      
      if (this.checkedCities[0]) {
        data.checked = this.checkedCities[0];
      } else {
        alert("为空");
      }
      if (this.Name) {
        data.name = this.Name;
      } else {
        alert("学生姓名为空");
      }
      if (this.Emall) {
        const reg = /^\w+[@]\w{2,5}([.]\w{2,3}){1,3}$/;
        console.log(reg.test(this.Emall));
        if (reg.test(this.Emall)) {
          data.mail = this.Emall;
        } else {
          alert("您输入的邮箱不符合格式请重新输入");
          return;
        }
      }
      console.log(data);
    //   axios
    //     .post("http://127.0.0.1:3000/api/user/addStudent", data, {
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       if (response.data.status === 1) {
    //         alert("添加成功");
    //         return;
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    },

    //选择院校后基于院校渲染专业
    getDepartment() {
      let school = "";
      school = this.NAME;
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
          response.data.message.forEach((item) => {
           
           cityOptions.push(item.DEPARTMENT)
          
        
      });
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
// * {
//   padding: 0;
//   margin: 0;
// }
.TeaAdd {
  background-color: #f3f5f7;

  .Teacher {
    display: flex;
    // margin-left: 20px;
    width: 1250px;
    .teacher {
      margin: 0 auto;
      .i {
        height: 50px;
        width: 5px;
        border-right: solid 5px rgba(43, 150, 229, 1);
        margin: 0 15px 0 0;
      }

      .title {
        color: #7a7f85;
        line-height: 56px;
        margin-right: 20px;
        font-weight: 700;
      }
      span {
        margin-right: 15px;
        width: 72px;
      }
      .el-row {
        display: flex;
        margin-bottom: 40px;
      }
      .button {
        width: 90px;
        margin: 0 110px;
        display: flex;
      }
      .el-checkbox-group{
          width:300px;
          /deep/ .el-checkbox{
              margin-right:70px
          }
      }
    }
  }
}
</style>