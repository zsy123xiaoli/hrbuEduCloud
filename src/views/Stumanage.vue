<template>
  <div class="header">
    <Slidemenus></Slidemenus>
    <div class="usermanage">
      <p>学生管理</p>
      <el-row>
        <router-link to="/AdmMenus/StudentAdd">
          <el-button type="primary" size="medium" 
            >新增学生*</el-button
          >
        </router-link>
        <el-button
          size="medium"
          @click="open2"
          :disabled="!multipleSelection.length"
          >重置密码</el-button
        >
        <el-button
          size="medium"
          @click="open"
          :disabled="!multipleSelection.length"
          >结课</el-button
        >
        <el-button
          size="medium"
          @click="open1"
          :disabled="!multipleSelection.length"
          >激活</el-button
        >
      </el-row>
      <div class="content">
        <el-row>
          <span class="ml20">所属专业</span>
          <el-select
            v-model="Major.value"
            style="width: 150px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in Major"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span class="ml20">状态</span>
          <el-select
            v-model="State.value1"
            clearable
            size="medium"
            placeholder="请选择"
          >
            <el-option
              v-for="item in State"
              :key="item.value"
              :label="item.label"
              :value="item.value1"
            >
            </el-option>
          </el-select>
          <span class="ml20">关键字</span>
          <el-input
            placeholder="请输入内容"
            v-model="input"
            size="medium"
            clearable
          >
          </el-input>
          <el-button type="primary" size="medium" @click="search"
            >搜索</el-button
          >
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="{'text-align':'center'}"
          @cell-dblclick="LookIndex"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="39"></el-table-column>
          <el-table-column
            type="index"
            label="序号"
            width="50"
          ></el-table-column>
          <el-table-column
            prop="ID"
            label="学籍号"
            width="130"
          ></el-table-column>
          <el-table-column
            prop="NAME"
            label="学生姓名"
            width="100"
          ></el-table-column>
          <el-table-column prop="SEX" label="性别" width="50"></el-table-column>
          <!-- <el-table-column
            prop="class"
            label="班级"
            width="150"
          ></el-table-column> -->
          <el-table-column
            prop="DEPARTMENT"
            label="专业"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="SCHOOL"
            label="学校"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="MAIL"
            label="邮箱"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="FORBIDDEN"
            label="状态"
            width="50"
          ></el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="itemTotal"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import Slidemenus from "../components/Eduslidemenus.vue";
export default {
  components: {
    Slidemenus,
  },
  data() {
    return {
      State: [
        {
          value1: 2,
          label: "全部",
        },
        {
          value1: 1,
          label: "有效",
        },
        {
          value1: 0,
          label: "禁用",
        },
      ],
      Major: [{ value: "软件工程" }, { value: "师范数学" }],
      value: 0,
      value1: "",
      input: "",
      tableData: [],
      multipleSelection: "",
      currentPage4: 4,
      itemTotal: 0,
      pageSize: 3,
      pageNum: 1,
    };
  },
  mounted() {
    // this.State.value1 = 2;

    this.getUserInfo();
  },
  methods: {
    //显示用户信息请求
    getUserInfo() {
      axios
        .post("http://127.0.0.1:3000/api/system/user/login", {
          mail: "1836349958@qq.com",
          password: "000000",
        })
        .then(function (response) {
          localStorage.token = `Bearer ${response.data.token}`;
        })
        .catch(function (error) {
          console.log(error);
        });
      axios
        .post(
          "http://127.0.0.1:3000/api/user/selectStudent",
          {
            num: "1",
          },
          {
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          response.data.message.map((item) => {
            item.FORBIDDEN = item.FORBIDDEN === 0 ? "有效" : "结课";
            item.SEX = item.SEX === 1 ? "男" : "女";
          });
          console.log(response.data.message);
          this.tableData = response.data.message;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  
   
   //双击信息列表路由跳页
    LookIndex(val) {
      this.multipleSelection = val;
      //对时间戳进行处理后在路由传参
      this.multipleSelection.TIMESTAMP = dayjs(new Date(Number(this.multipleSelection.TIMESTAMP))).format("YYYY-MM-DD HH:mm:ss")
      this.$router.push({
        name: "StudentInfo",
        query: { ...this.multipleSelection },
      });
      console.log(this.multipleSelection);
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    open() {
        this.$confirm('确认结课?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.disable()
          this.$message({
            type: 'success',
            message: '结课成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
      open1() {
        this.$confirm('确认激活?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.active()
          this.$message({
            type: 'success',
            message: '激活成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
      open2() {
        this.$confirm('确认重置密码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.rePassword()
          this.$message({
            type: 'success',
            message: '重置成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
    //重置密码请求接口
    rePassword() {
      let students = '';
      this.multipleSelection.forEach((item) => {
     
          students+=item.ID+','+item.MAIL+';'
        
      });
      //切掉最后的；
      students=students.substring(0,students.length-1)
      console.log(students)
      axios
        .post(
          "http://127.0.0.1:3000/api/user/remakeStudentPassword",
            { students:students},
          {
            headers: {      
               Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  
    },

    //结课请求接口
    disable() {
      let students = '';
      this.multipleSelection.forEach((item) => {
        if (item.FORBIDDEN === "有效") {
          students+=item.ID+';'
        }
      console.log(students)
      });
      axios
        .post(
          "http://127.0.0.1:3000/api/user/disableStudent",
            { students:students},
          {
            headers: {      
               Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    this.getUserInfo();
    },

    //激活请求接口
    active() {
      let students = '';
      this.multipleSelection.forEach((item) => {
        if (item.FORBIDDEN === "结课") {
          students+=item.ID+';'
        } 
      });
      console.log(students)
      axios
        .post(
          "http://127.0.0.1:3000/api/user/activateStudent",
            { students:students},
          {
            headers: {
        
               Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    this.getUserInfo();
    },

    //搜索请求接口
    search() {
      const data = {};
      //模糊搜索参数
      if (this.input) {
        data.val = this.input;
        data.num=1
      }
      axios
        .post(
          "http://127.0.0.1:3000/api/user/searchStudent",
          data,
          {
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          response.data.message.map((item) => {
            item.FORBIDDEN = item.FORBIDDEN === 1 ? "有效" : "结课";
            item.SEX = item.SEX === 1 ? "男" : "女";
          });
          console.log(response.data.message);
          this.tableData = response.data.message;
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  background-color: #f3f5f7;
  .usermanage {
    // margin-left: 20px;
    width: 998px;
    margin: 0 auto;
    p {
      color: #7a7f85;
      line-height: 56px;
    }
    .content {
      width: 980px;
      background-color: #fff;
      margin-top: 20px;
      padding: 20px;
      .el-row {
        span {
          font-size: 14px;
          color: #262c32;
          line-height: 36px;
          margin-right: 10px;
        }
        .ml20 {
          margin-left: 20px;
        }
        .el-select {
          width: 95px;
        }
        .el-date-picker {
          width: 300px;
        }
        .el-input {
          width: 187px;
        }
        .el-button {
          margin-left: 20px;
        }
      }
      .el-table {
        margin-top: 20px;
        /deep/.el-table__header-wrapper {
          .el-table__cell {
            background-color: #f3f5f7;
          }
        }
        /deep/ .el-table__cell {
          padding: 6px 0;
          border-left: 1px solid #ebeef5;
          &:last-child {
            border-right: 1px solid #ebeef5;
          }
        }
      }
    }
    .pagination {
      width: 570px;
      height: 50px;
      margin-top: 20px;
      margin-bottom: 240px;
      background-color: #fff;
      float: right;
      .el-pagination {
        margin: 10px 0 0 20px;
      }
    }
  }
}
</style>