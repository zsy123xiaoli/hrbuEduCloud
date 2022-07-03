<template>
  <div class="AssessDetails">
    <!-- <el-page-header @back="goBack" content="<< 返回测评列表"></el-page-header> -->
    <div class="header">
      <p @click="goBack"><< 返回测评列表</p>
    </div>
    <div class="center">
      <p>测评详情</p>
    </div>
    <div class="center1">
      <h3>Web前端基础知识测评</h3>
      <ul class="text">
        <li>开始时间:2018-12-20 17:47</li>
        <li>结束时间:2018-12-23 17:47</li>
        <li>答题时长:45分钟</li>
        <li>总分:100.0分</li>
        <li>题目:共10题</li>
      </ul>
      <el-table
        :header-cell-style="{ background: '#9ac3e3', color: '#262C32' }"
        :data="tableData"
        border
        style="width: 842px"
        :cell-style="{ background: '#f3f5f7', color: '#262C32' }"
      >
        <el-table-column prop="date" label="题型" width="280">
        </el-table-column>
        <el-table-column prop="name" label="题目数" width="280">
        </el-table-column>
        <el-table-column prop="address" label="分值" width="280">
        </el-table-column>
      </el-table>
      <div class="explain">
        <h2>测评说明</h2>
        <p>测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明测评说明</p>
      </div>
      <div class="discipline">
        <h2>测评纪律</h2>
        <p>1.禁止切出：答题时浏览器全屏，禁止退出全屏模式，禁止切换到其他窗口；如违反此纪律，系统将强制收卷；（限制切出：答题时浏览器全屏，限制退出全屏模式和切换到其他窗口的次数，达到限制次数时，系统将强制收卷；）</p>
        <p>2.禁止黏贴：答题时禁止黏贴功能；（限制黏贴：答题时限制黏贴的次数，达到限制次数时，系统将强制收卷；）</p>
      </div>
      <router-link to="/AnswerChoice"><el-button type="primary">进入答题</el-button></router-link>
    </div>
    <div class="bottom">
      <P>中科安高（北京）科技有限公司技术支持</P>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssessDetails",
  data() {
    return {
      tableData: [
        {
          date: "单选题",
          name: "10",
          address: "30",
        },
        {
          date: "多选题",
          name: "5",
          address: "20",
        },
        {
          date: "简答题",
          name: "5",
          address: "10",
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.push("/StuMenus/EvaluationList");
      console.log("go back");
    },
  },
};
</script>

<style lang="less" scoped >
.AssessDetails {
  cursor: pointer;
  .header {
    p {
      color: #42a2eb;
    }
  }

  .center {
    font-size: 28px;
    text-align: center;
    line-height: 66px;
  }
  .center1 {
    width: 100%;
    height: 697px;
    background-color: rgba(255, 255, 255, 1);
    h3 {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 70px;
    }
    ul {
      display: flex;

      li {
        margin-left: 120px;
        line-height: 50px;
      }
    }
    .el-table {
      margin-left: 300px;
    }
    /deep/.el-table td.el-table__cell,
    .el-table th.el-table__cell.is-leaf {
      border-bottom: 1px solid #0d0d0e;
    }
    /deep/.el-table--border .el-table__cell,
    .el-table__body-wrapper
      .el-table--border.is-scrolling-left
      ~ .el-table__fixed {
      border-right: 1px solid #151516;
    }
    /deep/.el-table--border {
      border: 1px solid black;
    }
    .explain {
      margin: 60px 0 0 126px;
      h2 {
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
      }
      p{
        width:1154px;
        margin-top:10px;
      }
    }
    .discipline{
      margin: 20px 0 0 126px;
      h2 {
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
      }
      p{
        width:1154px;
        margin-top:10px;
      }
    }
    .el-button{
      margin:20px 0 0 640px;
    }
  }
  .bottom {
    width: 100%;
    height: 30px;
    background-color: rgba(53, 55, 58, 1);
    display: flex;
    margin-top: 100px;
    p {
      color: #fff;
      font-size: 13px;
      margin: 5px 0 0 30px;
    }
  }
}
</style>