<template>
  <div class="selectaddclass">
    <div class="header">
      <h1>添加课件</h1>
    </div>
    <div class="main">
      <div class="search">
        <el-row>
          <el-button plain>选择知识点</el-button>
        </el-row>
        <span>来源</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>类型</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>难度</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>关键词</span>
        <el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          class="el-button-right"
        ></el-button>
      </div>
      <div class="coursewaretable">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          :border="true"
          @cell-click="precourse()"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column
            prop="name"
            label="课件名称"
            width="300"
            show-overflow-tooltip
            header-align="center"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="类型"
            width="60"
            header-align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建者"
            width="100"
            show-overflow-tooltip
            header-align="center"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="来源"
            width="100"
            show-overflow-tooltip
            header-align="center"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="难度"
            width="100"
            show-overflow-tooltip
            header-align="center"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态"
            header-align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            label="创建日期"
            width="140"
            header-align="center"
            show-overflow-tooltip
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="pagination">
      <Paginaion ref="Paginaion"></Paginaion>
    </div>
    <div class="footer">
      <div class="btn">
        <el-button plain>取消</el-button>
        <el-button disabled>添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Paginaion from "./Paginaion";


export default {
  name: "SelectAddclass",
  components: { Paginaion,  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
      value: "",
      input: "",
    };
  },

  mounted() {
    this.show();
  },

  methods: {
    // 表格
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页
    show() {
      this.$refs.Paginaion.total = 10;
    },
    // 跳转到预览页面
    precourse() {
      this.$router.push("./PreviewCourse")
    },
  },
};
</script>

<style lang="less" scoped>
.selectaddclass {
  width: 940px;
  margin: 0 auto;
  .header {
    h1 {
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #ebebeb;
      font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      color: #333333;
      text-align: left;
    }
  }
  .main {
    .search {
      display: flex;
      margin-top: 10px;
      .el-row {
        .el-button {
          width: 160px;
          height: 35px;
        }
        .el-button:hover {
          background-color: #0168b7;
          color: #fff;
        }
      }
      span {
        font-size: 14px;
        color: #262c32;
        margin: 8px 8px 0 16px;
      }
      .el-select {
        height: 34px;
        /deep/ .el-input {
          width: 100px;
        }
        /deep/ .el-input__inner {
          background-color: #f3f5f7;
          height: 34px;
          font-size: 14px;
          color: #262c32;
        }
        /deep/ .el-input__inner:focus {
          border: 2px solid #101010;
        }
      }
      .el-input {
        width: 188px;
        height: 34px;
        /deep/.el-input__inner {
          background-color: #f3f5f7;
          height: 34px;
          padding: 1px 0;
        }
        /deep/.el-input__inner:focus {
          border-color: #d7d8d9;
        }
      }
      .el-button-right {
        width: 34px;
        height: 34px;
        text-align: center;
        padding: 0;
        border-color: #dde0e7;
      }
    }
    .el-table {
      margin-top: 10px;
      /deep/.el-table__header-wrapper {
        .el-table__cell {
          font-size: 14px;
          color: #262c32;
          background-color: #f3f5f7;
          font-family: "微软雅黑";
          font-weight: 400;
          font-style: normal;
        }
      }
      /deep/.el-table__cell {
        padding: 6px 0;
        border-left: 1px solid #ebeef5;
        font-family: "微软雅黑";
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        &:last-child {
          border-right: 1px solid #ebeef5;
        }
      }
    }
  }
  .pagination {
    margin-top: 0;
    height: 53px;
  }
  .footer {
    // margin-top: 10px;
    border-top: 1px solid #ebebeb;
    display: flex;
    justify-content: right;
    width: 940px;
    .btn {
      margin-top: 10px;
      .el-button {
        width: 68px;
        height: 34px;
        padding: 0;
        line-height: 32px;
        border-color: #999;
        color: #666;
      }
      /deep/.is-plain:hover {
        border-color: #999;
        color: #666;
      }
    }
  }
}
</style>