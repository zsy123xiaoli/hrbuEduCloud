<template>
  <div class="newtestreleasetesting">
    <h2>试卷信息</h2>
    <div class="testinfo">
      <span>名称：Web前端基础知识测评</span>
      <span>总分：100</span>
      <span>试题数量：20</span>
      <span>创建人：胡文飞</span>
      <el-button>编辑试卷</el-button>
    </div>
    <h2>选择班级</h2>
    <div class="selectgrade">
      <div class="select">
        <span>所在年级：</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>所属专业：</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="grade">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="大数据1601班"></el-checkbox>
          <el-checkbox label="大数据1602班"></el-checkbox>
          <el-checkbox label="大数据1603班"></el-checkbox>
          <el-checkbox label="大数据1604班"></el-checkbox>
          <el-checkbox label="大数据1605班"></el-checkbox>
          <el-checkbox label="大数据1606班"></el-checkbox>
          <el-checkbox label="大数据1607班"></el-checkbox>
          <el-checkbox label="大数据1608班"></el-checkbox>
          <el-checkbox label="大数据1609班"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <h2>设置时间</h2>
    <div class="settime">
      <div class="time">
        <span>测试时间：</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="到"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="testtime">
        <span>答题时长：</span>
        <el-radio v-model="radio" label="1"
          ><el-input placeholder="" v-model="input" clearable> </el-input>
          分钟</el-radio
        >
        <el-radio v-model="radio" label="2">不限时长</el-radio>
      </div>
    </div>
    <h2>设置分数</h2>
    <div class="setscore">
      <span class="span35">试卷总分：100</span>
      <span>及格分：</span>
      <el-input placeholder="" v-model="input" clearable> </el-input>
    </div>
    <div class="setmore">
      <el-button @click="setmore()">{{ setmores }}</el-button>
    </div>
    <div class="preventcheating" v-show="isShow">
      <h2>防作弊机制</h2>
      <div class="selectset">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="禁止切出做题界面"></el-checkbox
          ><i class="el-icon-warning-outline"></i>
          <el-checkbox label="禁止粘贴题目"></el-checkbox
          ><i class="el-icon-warning-outline"></i>
        </el-checkbox-group>
      </div>
    </div>
    <div class="setscore" v-show="isShow">
      <h2>成绩设置</h2>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="显示答案和解析"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTestReleaseTesting",

  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
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
      value: "",
      value1: "",
      value2: "",
      checkList: [],
      radio: "",
      input: "",
      isShow: false,
      setmores: "更多设置",
    };
  },

  mounted() {},

  methods: {
    // 控制防作弊和成绩的显示与隐藏
    setmore() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.setmores = "收起";
      } else {
        this.setmores = "更多设置";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.newtestreleasetesting {
  padding: 0 40px 40px;
  h2 {
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    text-align: left;
    color: #262c32;
    margin: 16px 0;
    border-left: 4px solid #2b96e5;
    padding-left: 5px;
  }
  span {
    margin-right: 60px;
    font-size: 14px;
    color: #262c32;
  }
  .el-input {
    width: 65px;
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
  .testinfo {
    .el-button {
      border-color: #5a6066;
      width: 96px;
      height: 34px;
      margin-left: 40px;
    }
  }
  .selectgrade {
    padding: 0 10px;
    span {
      margin-right: 0;
    }
    .select {
      .el-select {
        width: 170px;
        height: 35px;
        margin-right: 30px;
      }
      ::v-deep {
        .el-input__inner {
          &::placeholder {
            color: #262c32;
          }
        }
        .el-input__icon {
          color: #262c32;
        }
      }

      /deep/ .el-input__inner {
        background-color: #f3f5f7;
        height: 35px;
        font-size: 14px;
        color: #262c32;
        border: 1px solid #101010;
      }
      /deep/ .el-input__inner:focus {
        border: 2px solid #101010;
      }
    }
    .grade {
      margin: 30px 0;
      .el-checkbox {
        margin: 5px 80px 5px 0;
      }
    }
  }
  .settime {
    padding: 0 10px;
    span {
      margin-right: 0;
    }
    .time {
      margin: 10px 0;
    }
    .testtime {
      margin: 20px 0;
    }
  }
  .setscore {
    padding: 0 10px 40px;

    .span35 {
      margin-right: 35px;
    }
    span {
      margin-right: 0;
    }
  }
  .selectset {
    display: flex;
    flex-direction: column;
    width: 200px;
    .el-checkbox {
      margin: 0 10px 40px 0;
      font-size: 14px;
      color: #262c32;
    }
    i {
      font-size: 16px;
      color: red;
    }
  }
}
</style>