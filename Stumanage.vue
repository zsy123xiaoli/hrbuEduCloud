<template>
  <div class="header">
    <div class="slidemenus">
      <h2>·系统管理</h2>
      <ul>
        <li>用户管理</li>
        <li>职位管理</li>
        <li>角色管理</li>
        <li>菜单管理</li>
        <li>数据字典</li>
        <li>学校管理</li>
        <li>专业管理</li>
        <li>在线用户管理</li>
      </ul>
    </div>
    <div class="usermanage">
      <p>学生管理</p>
      <el-row>
        <el-button type="primary" size="medium">新增学生*</el-button>
      <el-button size="medium" @click="rePassword" :disabled="!multipleSelection.length">重置密码</el-button>

        <el-button
          size="medium"
          @click="disable(0)"
          :disabled="!multipleSelection.length"
          >结课</el-button
        >
        <el-button
          size="medium"
          @click="disable(1)"
          :disabled="!multipleSelection.length"
          >激活</el-button
        >
      </el-row>
      <div class="content">
        <el-row>
          <span class="ml20">所属专业</span>
          <el-select v-model="Major.value" style="width:150px" placeholder="请选择">
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
            v-model="State.value"
            clearable
            size="medium"
            placeholder="请选择"
          >
            <el-option
              v-for="item in State"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="39"></el-table-column>
          <el-table-column prop="id" label="序号" width="50"></el-table-column>
          <el-table-column
            prop="gender"
            label="学籍号"
            width="130"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="学生姓名"
            width="100"
          ></el-table-column>
          <el-table-column prop="sex" label="性别" width="50"></el-table-column>
          <el-table-column
            prop="class"
            label="班级"
            width="150"
          ></el-table-column>
          <el-table-column prop="" label="专业" width="100"></el-table-column>
          <el-table-column
            prop="school"
            label="学校"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="mall"
            label="邮箱"
            width="150"
          ></el-table-column>
          <el-table-column prop="" label="状态" width="50"></el-table-column>
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
export default {
  components: {},
  data() {
    return {
      State: [
        {
          value: 2,
          label: "全部",
        },
        {
          value: 1,
          label: "有效",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
     Major: [],
      value: 2,
      value1: "",
      input: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
      itemTotal: 0,
      pageSize: 3,
      pageNum: 1,
    };
  },
  mounted() {
    // 默认调用获取用户信息接口
    // this.getuserInfo();
  },
  methods: {
    // getuserInfo(data){
      // console.log("data",data);

      // const obj = {
      //   params:{
      //     pageNum: this.pageNum,
      //     pageSize: this.pageSize
      //   }
      // }
      // if(data){
      //   obj.params = {...obj.params,...data};
      // }

    //   axios
    //   .get("/api/user/userinfo",obj)
    //   .then((response) => {
    //     console.log(response);
    //     this.tableData = response.data.data.results;
    //     this.itemTotal=response.data.data.total;
    //     console.log(response)

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    rePassword() {
      console.log(this.multipleSelection);
      const userId = [];
      this.multipleSelection.forEach((item) => {
        userId.push(item.id);
      });
      console.log(userId);
      axios
        .post("/api/user/repassword", {
          userIds: userId,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    disable(state) {
      const userId = [];
      this.multipleSelection.forEach((item) => {
        console.log(item);
        // 如果用户禁用则不向后台发送对应用户数据
        if (item.state === "有效" && !state) {
          userId.push(item.id);
        } else if (item.state === "禁用" && state) {
          userId.push(item.id);
        }
      });
      axios
        .post("/api/user/bpUser", {
          userIds: userId,
          state,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search() {
      const data = {};
      //学生状态参数
      if (this.State.value) {
        data.value = this.State.value;
      }
      //学生专业参数
      if (this.Major.value) {
        data.value = this.Major.value;
      }
      //模糊搜索参数
      if (this.input) {
        data.input = this.input;
      }
      // this.getuserInfo(data);
      console.log(data);
      console.log(data.value);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  background-color: #f3f5f7;
  .slidemenus {
    height: 100vh;
    h2 {
      width: 190px;
      line-height: 50px;
      font-weight: 700;
      font-size: 18px;
      color: #262c32;
      padding-left: 10px;
      background-color: #fff;
    }
    ul {
      border-top: 2px solid #e8e9eb;
      background-color: #fff;
      width: 200px;
      li {
        color: #262c32;
        line-height: 50px;
        padding-left: 20px;
      }
    }
  }
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