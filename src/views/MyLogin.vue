<template>
  <div class="login">
    <div class="topic">
      <img src="../assets/u6.png" />
      <h2>大唐大数据实验室</h2>
    </div>
    <div class="Lbox">
      <h2>登录</h2>
      <el-input placeholder="请输入用户名" v-model="mail"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <span>忘记密码</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyLogin",
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  methods: {
    login() {
      let selfThis = this;
      axios
        .post("http://127.0.0.1:3000/api/system/user/login", {
          mail: selfThis.mail,
          password: selfThis.password,
        })
        .then(function (response) {
          localStorage.token = `Bearer ${response.data.token}`;
          if (response.data.status === 1) {
            selfThis.$router.push("/admin");
          } else if (response.data.state === 2) {
            this.$router.push("/student");
          } else if (response.data.state === 0) {
            alert("未查询到该用户");
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: rgba(176, 220, 236, 1);
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .topic {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    h2 {
      align-self: end;
      margin-left: 26px;
      color: #2b96e5;
      font-size: 32px;
      font-weight: 400;
      font-family: "微软雅黑";
    }
  }
  .Lbox {
    height: 340px;
    width: 560px;
    background-color: #fff;
    border-radius: 8px;
    margin: 5vh auto 0;
    box-shadow: 0 0 9px 0 rgb(187, 186, 186);
    overflow: hidden;
    text-align: center;
    h2 {
      font-size: 24px;
      color: #666;
      margin-top: 25px;
      font-weight: 400;
      font-family: "微软雅黑";
    }
    .el-input {
      /deep/ .el-input__inner {
        margin-top: 25px;
        width: 450px;
        background-color: rgb(239, 237, 237);
        height: 55px;
      }
    }
    .el-button {
      width: 450px;
      height: 44px;
      font-size: 18px;
      margin-top: 23px;
    }
    span {
      display: block;
      width: 80px;
      margin: 12px 0 0 50px;
      // margin-left: 50px;
      font-size: 18px;
      color: #666;
    }
  }
}
</style>