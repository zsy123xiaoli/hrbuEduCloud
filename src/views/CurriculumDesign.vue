<template>
  <div class="s1">
    <ResearchMenus />

    <div class="curriculumdesign">
      <p>课程设计</p>
      <div class="content">
        <el-row>
          <el-cascader
            :options="options1"
            size="medium"
            clearable
          ></el-cascader>
          <span>类别</span>
          <el-select
            v-model="category"
            size="medium"
            disabled
            placeholder="全部"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>状态</span>
          <el-select v-model="state" size="medium" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>关键词</span>

          <el-input
            placeholder="请输入内容"
            v-model="input"
            size="medium"
            clearable
          >
          </el-input>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-search"
          ></el-button>
          <el-button type="primary" size="medium"
            ><router-link to="newcurriculum" tag="sapn"
              >新增视频课</router-link
            ></el-button
          >
        </el-row>
      </div>
      <div class="course">
        <div class="course1">
          <!-- 后端提供课程图片 -->
          <img src="../assets/course1.png" alt="课程图片" />
          <!-- 后台加载课程信息 -->
          <div class="courseinfo">
            <el-row>
              <!-- 课程名 -->
              <h2>大数据挖掘与分析（理论）</h2>
              <!-- 课程简介 -->
              <p>
                数据挖掘（Data
                mining）又译为资料探勘、数据采矿。它是数据库知识发现（英语：Knowledge-Discovery
                in
                Databases，简称：KDD）中的一个步骤。数据挖掘一般是指从大量的数据中通过算法搜索隐藏于其中信息的过程
                。数据挖掘通常与计算机科学有关，并通过统计、在线分析处理、情报检......
              </p>
              <!-- 课程状态和发布时间 -->
              <div class="course-st">
                <p class="course-state">
                  <!-- 状态 -->
                  <span>已发布</span>
                </p>
                <p class="course-time">
                  <!-- 发布时间 -->
                  <span>发布时间：2019-04-30 17:23:27</span>
                </p>
              </div>
              <!-- 课程数据 -->
              <div class="course-data">
                <ul>
                  <li>章节：10</li>
                  <li>测评：10</li>
                  <li>班级：2</li>
                  <li>学生：80</li>
                </ul>
              </div>
              <div class="courser-manage">
                <el-button type="primary" size="mini" plain>编辑</el-button>
                <el-button type="primary" size="mini" plain>删除</el-button>
                <el-button type="primary" size="mini" plain>发布</el-button>
              </div>
            </el-row>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[3]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ResearchMenus from "../components/ResearchMenus";

export default {
  name: "CurriculumDesign",
  components: { ResearchMenus },
  data() {
    return {
      options1: [
        {
          value: "zhinan",
          label: "IT/互联网",
          children: [
            {
              value: "shejiyuanze",
              label: "前端开发",
              children: [
                {
                  value: "yizhi",
                  label: "HTML",
                  children: [
                    {
                      value: "yizhi",
                      label: "标签",
                    },
                    {
                      value: "yizhi",
                      label: "语法",
                    },
                    {
                      value: "yizhi",
                      label: "语义化",
                    },
                    {
                      value: "yizhi",
                      label: "适配",
                    },
                  ],
                },
                {
                  value: "fankui",
                  label: "CSS",
                },
                {
                  value: "xiaolv",
                  label: "JavaScript",
                },
              ],
            },
            {
              value: "daohang",
              label: "后端开发",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ],
      options2: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "个人",
        },
        {
          value: "选项3",
          label: "管理员",
        },
      ],
      options3: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "草稿",
        },
        {
          value: "选项3",
          label: "已发布",
        },
      ],

      category: "",
      state: "",
      input: "",
      total: 0,
      pageSize: 3,
      pageNum: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="less" scoped>
.s1{ 
display: flex;
justify-content: center;
background-color: #F3F5F7;
  .curriculumdesign {
    margin-left: 20px;
    p {
      line-height: 56px;
      color: #7a7f85;
    }
    .content {
      width: 980px;
      height: 74px;
      background-color: #fff;
      border-radius: 6px;
  
      .el-row {
        span {
          font-size: 14px;
          color: #262c32;
          line-height: 36px;
          margin: 0 10px 0 20px;
        }
        .el-cascader {
          width: 160px;
          margin: 20px 0 0 30px;
        }
        .el-select {
          width: 100px;
        }
        .el-input {
          width: 200px;
        }
        .el-button {
          margin-left: 10px;
        }
        .width30 {
          width: 30px;
        }
      }
    }
    .course {
      width: 980px;
      margin-top: 10px;
      .course1 {
        background-color: #fff;
        display: flex;
        padding: 20px;
        img {
          margin-right: 16px;
        }
        h2 {
          font-weight: 700;
          font-style: normal;
          font-size: 20px;
          line-height: 24px;
          color: #2b96e5;
          cursor: pointer;
        }
        p {
          width: 544px;
          margin-top: 10px;
          font-size: 12px;
          color: #999;
          line-height: 18px;
          cursor: pointer;
        }
        .course-st {
          margin-top: 10px;
          display: flex;
          .course-state {
            width: 44px;
            margin-right: 10px;
            background-color: #000;
            font-size: 12px;
            color: #ffffff;
            text-align: center;
            line-height: 18px;
          }
          .course-time {
            font-size: 12px;
            color: #7a7f85;
            line-height: 18px;
          }
        }
        .course-data {
          margin-top: 10px;
          ul {
            display: flex;
            li {
              font-size: 12px;
              color: #7a7f85;
              margin-right: 20px;
            }
          }
        }
        .courser-manage {
          margin-top: 10px;
          .el-button {
            border: none;
            margin-right: 10px;
          }
        }
      }
    }
    .pagination {
      width: 570px;
      height: 50px;
      background-color: #fff;
      margin: 20px 0 240px;
      float: right;
      .el-pagination {
        margin: 10px 0 0 20px;
      }
    }
}
}
</style>