<template>
  <div class="reportpage">
    <h2>测评报告</h2>
    <div class="center">
      <div class="center1">
        <p>Web前端基础知识测评</p>
        <ul class="text">
        <li>开始时间:2018-12-20 17:47</li>
        <li>结束时间:2018-12-23 17:47</li>
        <li>答题时长:45分钟</li>
        <li>总分:100.0分</li>
        <li>题目:共10题</li>
      </ul>
      </div>

      
    </div>
    <div class="bottom">
      <P>中科安高（北京）科技有限公司技术支持</P>
    </div>
  </div>
</template>

<script>
export default {
name:"ReportPage"
}
</script>

<style lang="less" scoped>
.reportpage{
    h2{
font-size: 28px;
font-weight: 400;
text-align: center;
line-height: 100px;
    }
    .center{
        width:1200px;
        height:500px;
        background-color: rgba(255, 255, 255, 1);
        margin-left:180px;
        .center1{
          p{
            text-align: center;
            font-size: 18px;
            line-height: 60px;
            font-weight: 400;
        }
        ul {
      display: flex;

      li {
        margin-left: 80px;
        line-height: 50px;
      }
        }
        
      
    }
    }
    .bottom{
  width: 100%;
    height: 30px;
    background-color: rgba(53, 55, 58, 1);
    display: flex;
    margin-top:100px;
    p{
      color:#fff;
      font-size: 13px;
      margin:5px 0 0 30px ;
    }
    
    
}
}
</style>