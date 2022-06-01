<template>
  <div class="newtestselectpapers">
    <div class="search">
      <span>试卷类别</span>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>试卷分类</span>
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
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="maintable">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 940"
        @selection-change="handleSelectionChange"
        :border="true"
        @cell-click="precourse()"
      >
        <el-table-column
          type="selection"
          width="40"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="试卷名称"
          width="299"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="试卷类别"
          width="100"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="试卷分类"
          width="80"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="总分"
          width="80"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="题目数量"
          width="80"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="创建人"
          width="100"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="发布时间"
          width="160"
          header-align="center"
          show-overflow-tooltip
          align="center"
        >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginaion">
      <Paginaion ref="Paginaion"></Paginaion>
    </div>
  </div>
</template>

<script>
import Paginaion from "./Paginaion";

export default {
  name: "NewTestSelectPapers",
  components: { Paginaion },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
      value: "",
      input: "",
    };
  },

  mounted() {},

  methods: {
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
    }, // 跳转到预览页面
    precourse() {
      this.$router.push("../PreviewCourse");
    },
  },
};
</script>

<style lang="less" scoped>
.newtestselectpapers {
  .search {
    padding: 30px 0;
    span {
      margin: 0 10px 0 34px;
      font-size: 14px;
      color: #262c32;
    }
    .el-select {
      width: 120px;
      height: 34px;
    }
    /deep/ .el-input__inner {
      background-color: #f3f5f7;
      height: 34px;
      font-size: 14px;
      color: #262c32;
      border: 1px solid #101010;
    }
    /deep/ .el-input__inner:focus {
      border: 2px solid #101010;
    }
    .el-input {
      width: 250px;
      height: 34px;
      /deep/.el-input__inner {
        background-color: #f3f5f7;
        height: 34px;
        padding: 1px 0;
        border: 1px solid #d7d8d9;
      }
      /deep/.el-input__inner:focus {
        border-color: #d7d8d9;
      }
    }
    .el-button {
      width: 75px;
      height: 34px;
      margin-left: 20px;
    }
  }
  .maintable {
    //   margin-top: 20px;
    padding: 0 20px 40px;
    .el-table {
      width: 940px;
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
      /deep/.el-tooltip {
        min-width: 0;
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
  .paginaion {
    background-color: #fff;
    height: 100px;
  }
}
</style>