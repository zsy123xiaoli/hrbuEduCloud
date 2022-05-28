<template slot-scope="scope">
  <div class="studentinfo">
    <div class="student">
      <Slidemenus></Slidemenus>
      <div class="StudentInfo">
        <span class="i"></span><span class="title">基本信息</span>
        <el-row>
          <span> 所属院校*</span>
          <el-select
            v-model="NAME"
            style="width: 358px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in school"
              :key="item.value"
      
              :value="item.NAME"
            >
            </el-option>
          </el-select>
        </el-row>
        <el-row>
          <span> 所属专业*</span>
          <el-select
        
          @click.native="getDepartment"
            v-model="DEPARTMENT"
            style="width: 358px"
            :popper-append-to-body="false"
            placeholder="请选择"
          >
            <el-option
              v-for="item in major"
              :key="item.value"
              :label="item.label"
              :value="item.DEPARTMENT"
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
          <el-select
            :popper-append-to-body="false"

            v-model="genderval"
            style="width: 358px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in gender"
              :key="item.value"
              :label="item.label"
              :value="item.genderval"
            >
            </el-option>
          </el-select>
        </el-row>

        <el-row>
          <span> 邮箱</span>
          <el-input
          @change="val"
            v-model="Emallinput"
            placeholder="请输入内容"
            style="width: 358px"
          ></el-input>
        </el-row>
        <div class="button">
          <el-button type="primary" @click="save">保存</el-button>
          <el-button>取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slidemenus from "../components/Eduslidemenus.vue";
import axios from "axios";

export default {
  data() {
    return {
      //院校信息
      school: [],
      NAME:"",
      //专业信息
      major:[],
      DEPARTMENT: "",
      //性别信息
      gender:[
        {genderval:'男'},
        {genderval:'女'}
      ],
      genderval:"",
      Classinput: "",
      Roolinput: "",
      Nameinput: "",
      Emallinput: "1111",
      input: "",
    };
  },
  mounted(){
      //加载时默认渲染院校
      axios
      .get("http://127.0.0.1:3000/api/system/user/getSchool",{
            headers: {
            'Authorization': localStorage.token,
        }
        })
      .then((response) => {
        console.log(response);
        console.log(response.data.message )
        this.school=response.data.message 
        console.log(this.school)
 

      })
      .catch((error) => {
        console.log(error);
      });
    
  },
  methods: {
    save() {
      const data={};
      if(this.NAME){
        data.school=this.NAME
      }else{alert("学校为空")}
      if(this.DEPARTMENT){
        data.department=this.DEPARTMENT
      }else{alert("专业为空")}
      if(this.genderval){
         data.sex = this.genderval === '男' ? 1:2;
      }else{alert("性别为空")}
      if(this.Classinput){
        data.class=this.Classinput
      }else{alert("班级为空")}
      if(this.Roolinput){
        data.id=this.Roolinput
      }else{alert("学籍号为空")}
      if(this.Nameinput){
        data.name=this.Nameinput
      }else{alert("学生姓名为空")}
      if(this.Emallinput){
        const reg=/^\w+[@]\w{2,5}([.]\w{2,3}){1,3}$/
        console.log(reg.test(this.Emallinput))
        if(reg.test(this.Emallinput)){
          data.mail=this.Emallinput
        }else{
          alert("您输入的邮箱不符合格式请重新输入") 
          return
          }
      }
      console.log(data)
      axios.post('http://127.0.0.1:3000/api/user/addStudent', data
      ,{
            headers: {
            'Authorization': localStorage.token,
        }
        })
        .then( (response)=> {
            console.log(response);
            if(response.data.status===1){
              alert("添加成功")
              return
            }
           


        })
        .catch(function (error) {
            console.log(error);
        });
    },
    val(){
      console.log(this.schoolval,this.majorval,this.Classinput)
      // console.log(this.majorval)

    },
    getDepartment(){
       let school=""
   school=this.NAME
      console.log(school)
       axios
      .get("http://127.0.0.1:3000/api/system/user/getSchoolDepartment",{params:{
        school
      }},{
            headers: {
            'Authorization': localStorage.token,
        }
        })
      .then((response) => {
        console.log(response);
        console.log(response.data.message )
        this.major=response.data.message 
        // console.log(this.major)
 

      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  components: { Slidemenus },
};
</script>

<style lang="less" scoped>
// * {
//   padding: 0;
//   margin: 0;
// }
.studentinfo {
  background-color: #f3f5f7;

  .student {
    display: flex;
    // margin-left: 20px;
    width: 1250px;
    .StudentInfo {
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
      .button {
        width: 90px;
        margin: 0 110px;
        display: flex;
      }
    }
  }
}
</style>