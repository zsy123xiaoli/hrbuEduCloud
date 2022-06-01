<template>
  <div class="newtestinfo">
    <ul>
      <li>
        <span>测评名称</span
        ><el-input
          type="text"
          placeholder="请输入名称，最多支持30个汉字"
          v-model="text"
          maxlength="30"
          @focus="showDictory"
          @blur="hideDictory"
        >
        </el-input>
        <i v-show="show">测评名称不可重复，最多支持30个汉字 </i>
        <div class="opinion">
          <b v-show="shows1" class="el-icon-success"></b>
          <b v-show="shows2" class="el-icon-error"></b>
        </div>
      </li>
      <li>
        <span>测评分类</span
        ><el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </li>
      <li>
        <span>测评简介</span
        ><el-input
          type="textarea"
          placeholder="填写测评的特征信息，最多支持100个汉字"
          v-model="textarea"
          maxlength="100"
        >
        </el-input>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "NewTestInfo",

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
      value:"",
      text: "",
      textarea: "",
      show: false,
      shows1: false,
      shows2: false,
    };
  },

  mounted() {},

  methods: {
    showDictory() {
      this.show = !this.show;
      //   this.show1 = !this.shows1;
      //   this.show2 = !this.shows2;
    },
    hideDictory() {
      this.show = !this.show;
      if (this.text) {
        this.shows1 = true;
        this.shows2 = false;
      } else {
        this.shows2 = true;
        this.shows1 = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.newtestinfo {
  ul {
    margin-top: 22px;
    display: flex;
    flex-direction: column;

    li {
      position: relative;
      margin: 18px 0 17px 40px;
      display: flex;
      span {
        font-size: 14px;
        color: #7a7f85;
        line-height: 35px;
        margin-right: 16px;
      }
      .el-input {
        width: 433px;
        /deep/.el-input__inner {
          height: 34px;
          background: #f3f5f7;
          color: rgb(153 153 153);
          font-size: 14px;
        }

        /deep/.el-input__inner:focus {
          border: none;
        }
      }
      i {
        position: absolute;
        font-style: normal;
        color: #999999;
        font-size: 12px;
        left: 80px;
        top: 40px;
      }
      .opinion {
        position: absolute;
        top: 9px;
        left: 470px;
        font-size: 16px;
        background: #f3f5f7;
        b {
          position: absolute;
          font-style: normal;
        }
        .el-icon-success {
          color: #00cc00;
        }
        .el-icon-error {
          color: #ff0000;
        }
      }
      .el-select {
        width: 200px;
        margin-right: 10px;
        /deep/ .el-input__inner {
          height: 35px;
          background: #f3f5f7;
          font-size: 14px;
          color: #262c32;
        }
        /deep/.el-input__inner:focus {
          border: 2px solid #262c32;
        }
      }
      /deep/ .el-textarea {
        width: 600px;
        margin-bottom: 50px;
      }
      /deep/ .el-textarea__inner {
        padding: 2px;
        width: 600px;
        height: 170px;
        background: #f3f5f7;
      }
      /deep/.el-textarea__inner:focus {
        border: 2px solid #262c32;
      }
    }
  }
}
</style>