<template>
  <div class="ClaInfo">
    <Slidemenus></Slidemenus>
    <div class="content">
      <div class="header">
        <span>班级信息</span>
        
        <el-button plain>结课</el-button>
        <el-button plain>激活</el-button>
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
                <span>所属院校</span><span>{{ $route.query.ID }}</span>
              </li>
              <li>
                <span>所属专业</span><span>{{ $route.query.SEX }}</span>
              </li>

              <li>
                <span>班级名称</span><span>{{ $route.query.MAIL }}</span>
              </li>
             
            </ul>
          </div>
        </div>
          <div class="bottom">
            <span class="i"></span><span class="title">状态信息</span>
             <ul>
              <li>
                <span>状态</span><span>{{ $route.query.FORBIDDEN }}</span>
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
import dayjs from "dayjs";

export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {

   

    console.log(this.data.TIMESTAMP)
    
    console.log(this.data);
  
    this.data=this.$route.query
  },
  methods: {
    StudentEdit() {
      this.$router.push({
        name: "TeaEdit",
        query: { ...this.data },
     
      });
    },
  },
  components: { Slidemenus },
};
</script>

<style lang="less" scoped>
.ClaInfo {
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