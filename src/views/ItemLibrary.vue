<template>
  <div class="CoursewareLibrary">
    <RepositoryMenus></RepositoryMenus>
    <div class="coursewarelibrary">
      <p>试题库</p>
      <div class="top">
        <el-row>
          <el-cascader
            :options="options1"
            placeholder="请选择知识点"
            size="medium"
            clearable
          ></el-cascader>
          <span class="ml20">题型</span>
          <el-select
            v-model="State.value"
            style="width: 130px"
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
          <span class="ml20">难度</span>
          <el-select
            v-model="Major.value"
            style="width: 130px"
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
          <span class="ml20">关键字</span>
          <el-input
            placeholder="请输入关键字"
            v-model="input"
            size="medium"
            clearable
          >
          </el-input>
          <el-button type="primary" size="medium" @click="search"
            >搜索</el-button
          >
          <router-link to="/AdmMenus/SingleChoice">

              <el-button type="primary" size="medium">新增试题</el-button>
          </router-link>
        </el-row>
      </div>
      <div class="content">
       
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
import RepositoryMenus from "../components/RepositoryMenus";

export default {
  components: {
    RepositoryMenus,
  },
  data() {
    return {
      State: [
        {
          value1: 2,
          label: "选择",
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
      Major:[
          {value:""},
          ],
      //选择知识点数据
      options1: [],
      Major: [{ value: "软件工程" }, { value: "师范数学" }],
      value1: 2,
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
    this.State.value1 = 2;

    this.getUserInfo();
  },
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
      //获取用户信息接口
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
            item.FORBIDDEN = item.FORBIDDEN === 1 ? "有效" : "结课";
            item.SEX = item.SEX === 1 ? "男" : "女";
          });
          console.log(response.data.message);
          this.tableData = response.data.message;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    
    LookIndex(val) {
      this.multipleSelection = val;
      //对时间戳进行处理后在路由传参
      this.multipleSelection.TIMESTAMP = dayjs(
        new Date(Number(this.multipleSelection.TIMESTAMP))
      ).format("YYYY-MM-DD HH:mm:ss");
      this.$router.push({
        name: "StudentInfo",
        query: { ...this.multip3leSelection },
      });
      console.log(this.multipleSelection);
    },

 
    search() {
      const data = {};
      //模糊搜索参数
      if (this.input) {
        data.val = this.input;
        data.num = 1;
      }
      axios
        .post("http://127.0.0.1:3000/api/user/searchStudent", data, {
          headers: {
            Authorization: localStorage.token,
          },
        })
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
.CoursewareLibrary {
  display: flex;
  background-color: #f3f5f7;
  .coursewarelibrary {
    width: 1200px;
    margin: 0 auto;

    p {
      color: #7a7f85;
      line-height: 56px;
    }
    .top {
      height: 95px;
      background-color: #fff;
      border-radius: 5px;
      line-height: 95px;
      .el-row {
        margin: 0 auto;
        span {
          font-size: 14px;
          color: #262c32;
          line-height: 36px;
          margin-right: 10px;
        }
        .ml20 {
          margin-left: 20px;
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
        .el-cascader {
          margin-left: 74px;
        }
      }
    }
    .content {
      width: 1160px;
      background-color: #fff;
      margin-top: 20px;
      padding: 20px;

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