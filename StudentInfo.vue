<template slot-scope="scope">
  <div class="student">
    <span class="i"></span><span class="title">基本信息</span>
    <el-row>
      <span> 所属院校*</span>
      <el-select v-model="Schoolval" style="width: 358px" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <span> 所属专业*</span>
      <el-select v-model="Majorval" style="width: 358px" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-row>

    <el-row>
      <span> 所属班级</span>
      <el-input
            placeholder="请输入内容"

            v-model="Classinput"
            size="medium"
        
            clearable
        style="width: 358px"

          >
          </el-input>
    </el-row>
    <el-row>
      <span> 学籍号</span>
      <el-input
        v-model="Roolinput"
        placeholder="请输入内容"
        style="width: 358px"
      ></el-input>
    </el-row>

    <el-row>
      <span> 姓名</span>
      <el-input
        v-model="Nameinput"
        placeholder="请输入内容"
        style="width: 358px"
      ></el-input>
    </el-row>
    <el-row>
      <span> 性别</span>
      <el-select v-model="Genderval" style="width: 358px" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-row>

    <el-row>
      <span> 邮箱</span>
      <el-input
        v-model="Emallinput"
        placeholder="请输入内容"
        style="width: 358px"
      ></el-input>
    </el-row>
    <div class="button">

        <el-button type="primary" @click="save">主要按钮</el-button>
        <el-button>默认按钮</el-button>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      Schoolval: "",
      Majorval: "",
      Classinput: "",
      Roolinput: "",
      Nameinput: "",
      Genderval: "",
      Emallinput: '1111',
      input:""
    }
  },
  methods:{
      save(){
          console.log("班级",this.Classinput,this.Emallinput,this.Roolinput,this.Nameinput)
      }
  }
};
</script>

<style lang="less" scoped>
// * {
//   padding: 0;
//   margin: 0;
// }
.student {
  // margin-left: 20px;
  width: 998px;

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
  .button{
      width:90px;
      margin: 0 110px;;
      display: flex;
      .el-button{
    //   justify-content: space-between;

      }
  }
}
</style>