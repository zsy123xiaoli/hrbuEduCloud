<template>
  <div class="answerchoice">
    <div class="left">
      <div class="header">
        <h2>Web前端基础知识测评</h2>
        <p><el-button type="info" plain disabled>切出警示框</el-button></p>
        <span
          ><el-button type="info" plain disabled>黏贴警示框</el-button></span
        >
        <ul>
          <li>已答 1题 / 共 11 题</li>
          <li>如果离开全屏答题，系统将强制收卷！</li>
        </ul>
      </div>
      <div class="center">
        <p>单选题（共10道题，合计50分，每题有且只有一个正确答案）</p>
        <span>1. 在下列标签中，哪个标签可以插入换行？（）（5.0分）</span>
        <div class="radio">
          <el-radio v-model="radio" label="1" style="display: block"
            >A.hr</el-radio
          >
          <el-radio v-model="radio" label="2" style="display: block"
            >B.br</el-radio
          >
          <el-radio v-model="radio" label="3" style="display: block"
            >C.p</el-radio
          >
          <el-radio v-model="radio" label="4" style="display: block"
            >D.li</el-radio
          >
        </div>
        <el-button>上一题</el-button>
        <el-button>下一题</el-button>
      </div>
    </div>
    <div class="right">
      <div class="time">
        <p>剩余时间</p>
        <span>00:59:59</span>
      </div>
      <div class="answer">
        <p><img src="../assets/u1211.png" />已答</p>
        <p><img src="../assets/u1224.png" />当前</p>
        <p><img src="../assets/u1218.png" />未答</p>
      </div>
      <div class="title">
        <p>单选题</p>
        <ul >
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <ul class="title1">
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <div class="gap">
          <p>填空题</p>
          <ul>
            <li>1</li>
          <li>2</li>
          <li>3</li>
          </ul>
        </div>
        <div class="short">
          <p>简答题</p>
          <ul>
            <li>1</li>
          <li>2</li>
          <li>3</li>
          </ul>
        </div>
        <div class="button">
          <el-button type="primary" size="medium"><router-link to="/StuMenus/ReportPage" tag="primary">交卷</router-link></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerChoice",
  data() {
    return {
      radio: "",
    };
  },
};
</script>

<style lang="less" scoped>
.answerchoice {
  background-color: #f3f5f7;
  height: 720px;
  display: flex;
  cursor: pointer;
  .left {
    width: 920px;
    height: 600px;
    background-color: white;
    margin: 20px 0 0 200px;
    .header {
      margin-left: 60px;
      h2 {
        font-weight: 400;
        font-size: 24px;
        margin-top: 30px;
      }
      p {
        position: absolute;
        top: 60px;
        left: 750px;
      }
      span {
        position: absolute;
        top: 60px;
        left: 900px;
      }

      ul {
        display: flex;
        border-bottom: 1px solid rgba(153, 153, 153, 1);
        width: 800px;
        line-height: 60px;
        li {
          margin-right: 40px;
        }
      }
    }
    .center {
      margin-left: 60px;
      p {
        line-height: 60px;
      }
      span {
        line-height: 30px;
      }
      .el-radio {
        margin-top: 20px;
      }
      .el-button {
        margin: 100px 0 0 20px;
      }
    }
  }
  .right {
    width: 200px;
    height: 461px;
    // background-color: white;
    margin: 20px 0 0 50px;
    .time {
      width: 200px;
      height: 80px;
      background-color: white;
      border-radius: 6px;
      text-align: center;
      p {
        line-height: 45px;
      }
      span {
        color: red;
        font-family: "Arial Normal", "Arial";
        font-weight: 400;
        font-size: 20px;
      }
    }
    .answer {
      width: 200px;
      height: 40px;
      background-color: white;
      margin-top: 8px;
      border-radius: 6px;
      display: flex;
      
      p {
        margin: 12px 0 0 15px;
      }
    }
    .title {
      width: 200px;
      height: 461px;
      background-color: white;
      margin-top: 8px;
      border-radius: 6px;
      
      p {
        font-weight: 400;
        font-size: 14px;
        padding:15px;
      }
      ul{
        display: flex;
       
        li{
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:#dddddd;
        color:white;
        text-align: center;
        margin-left:10px;
      }
      }
      .title1{
        margin-top:10px;
        
      }
    }
    .gap{
      border-top:1px solid #dddddd;
      margin:15px 0 0 10px;
      width:180px;
      p{
        margin:-4px 0 0 -7px;
      }
    }
    .short{
      border-top:1px solid #dddddd;
      margin:15px 0 0 10px;
      width:180px;
      p{
        margin:-4px 0 0 -7px;
      }
    }
    .button{
      margin:140px 0 0 65px;
    }
  }
}
</style>