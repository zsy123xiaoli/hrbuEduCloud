<template>
  <div class="studentinfo">
    <Slidemenus></Slidemenus>
    <div class="content">
      <div class="header">
        <span>学生信息</span>
        <el-button plain @click="open2">重置密码</el-button>
        <el-button plain  @click="open">结课</el-button>
        
        <el-button plain @click="open1">激活</el-button>
        <div class="primary">
          <div class="top">
            <img src="../assets/u4103.png" />
            <p>{{ $route.query.NAME }}</p>
          </div>
          <div class="middle">
            <span class="i"></span><span class="title">基本信息</span>
            <el-button @click="StudentEdit" type="primary">编辑</el-button>
            <ul>
              <li>
                <span>所属院校</span><span>{{ $route.query.SCHOOL }}</span>
              </li>
              <li>
                <span>所属班级</span><span>{{ $route.query.CLASS }}</span>
              </li>
              <li>
                <span>所属专业</span><span>{{ $route.query.DEPARTMENT }}</span>
              </li>
              <li>
                <span>学籍号</span><span>{{ $route.query.ID }}</span>
              </li>
              <li>
                <span>性别</span><span>{{ $route.query.SEX }}</span>
              </li>

              <li>
                <span>邮箱</span><span>{{ $route.query.MAIL }}</span>
              </li>
            </ul>
          </div>
        </div>
          <div class="bottom">
            <span class="i"></span><span class="title">状态信息</span>
             <ul>
              <li>
                <span>状态</span><span class="state">{{ $route.query.FORBIDDEN }}</span>
              </li>

              <li>
                <span>创建时间</span><span >{{$route.query.TIMESTAMP}}</span>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slidemenus from "../components/Eduslidemenus.vue";
import axios from "axios";

import dayjs from "dayjs";

export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    
    //方便路由传参
    this.data=this.$route.query
    console.log(this.data);
  },
  methods: {
    open() {
        this.$confirm('确认结课?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.disable()
          this.$message({
            type: 'success',
            message: '结课成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
    open1() {
        this.$confirm('确认激活?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.active()
          this.$message({
            type: 'success',
            message: '激活成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
      open2() {
        this.$confirm('确认重置密码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.rePassword()
          this.$message({
            type: 'success',
            message: '重置成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
     disable() {
      let students = this.data.ID;
      console.log(students)
      axios
        .post(
          "http://127.0.0.1:3000/api/user/disableStudent",
            { students:students},
          {
            headers: {      
               Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      document.querySelector(".state").innerHTML="结课"
    },

    //激活请求接口
    active() {
        let students = this.data.ID;

      axios
        .post(
          "http://127.0.0.1:3000/api/user/activateStudent",
            { students:students},
          {
            headers: {
        
               Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
         document.querySelector(".state").innerHTML="激活"

    },
    rePassword() {
      let students =data.ID+','+data.MAIL;
      
      console.log(students)
      axios
        .post(
          "http://127.0.0.1:3000/api/user/remakeStudentPassword",
            { students:students},
          {
            headers: {      
               Authorization: localStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  
    },
    StudentEdit() {
      this.$router.push({
        name: "StudentEdit",
        query: { ...this.data },
     
      });
    },

  },
  
  components: { Slidemenus },
};
</script>

<style lang="less" scoped>
.studentinfo {
  display: flex;
  background-color: #f3f5f7;
  .content {
    margin: 15px auto;
    .header {
      span {
        color: #7a7f85;

        margin: 20px 515px 0 0;
      }
      .el-butten {
        margin: 20px 10px 0 10px;
      }
    }
    .primary {
      margin-top: 20px;
      border-radius: 5px;
      background: #fff;
      height: 880px;
      width: 870px;
      overflow: hidden;
      .top {
        height: 200px;
        width: 870px;

        img {
          display: block;
          margin: 20px auto;
        }
        p {
          text-align: center;
        }
      }
      .middle {
        .i {
          height: 50px;
          width: 5px;
          border-right: solid 5px rgba(43, 150, 229, 1);
          margin: 0 15px 0 30px;
        }
        .title {
          color: #7a7f85;
          line-height: 56px;
          margin-right: 20px;
          font-weight: 700;
          margin-right: 650px;
        }
        li {
          margin: 40px 0 55px 0;

          span {
            &:first-child {
              font-size: 14px;
              color: #7a7f85;
              margin: 40px 20px 0 66px;
            }
            &:nth-child(2) {
              font-size: 14px;

              color: #262c32;
            }
          }
        }
      }
    }
    .bottom{
      margin-top:20px;
      background-color: #fff;
      height: 300px;
      
      .i {
          height: 50px;
          width: 5px;
          border-right: solid 5px rgba(43, 150, 229, 1);
          margin: 0 15px 0 30px;
        }
        .title {
          color: #7a7f85;
          line-height: 56px;
          margin-right: 20px;
          font-weight: 700;
          margin-right: 650px;
        }
         li {
          margin: 40px 0 55px 0;

          span {
            &:first-child {
              font-size: 14px;
              color: #7a7f85;
              margin: 40px 20px 0 66px;
            }
            &:nth-child(2) {
              font-size: 14px;

              color: #262c32;
            }
          }
        }
    }
  }
}
</style>